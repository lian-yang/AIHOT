// GET /api/weekly-stats: the last 7 days' intake, judging and selection totals, per first-tag,
// per source and the radar candidates' conversion. Read-only; the page caches its answer.
import { sql } from "@aihot/backend/db";
import { defineServerModule, type ServerModule } from "@aihot/backend/modules";
import type { WeeklyStats } from "./stats.ts";

const window = sql`now() - interval '7 days'`;

async function stats(): Promise<WeeklyStats> {
  const [totals] = await sql<{ articles: number; analyzed: number; selected: number }[]>`
    WITH latest AS (
      SELECT DISTINCT ON (article_id) article_id, tags, score, selected, created_at
      FROM analyses ORDER BY article_id, id DESC
    )
    SELECT
      (SELECT count(*) FROM articles WHERE created_at > ${window}) AS articles,
      (SELECT count(*) FROM analyses WHERE created_at > ${window}) AS analyzed,
      (SELECT count(*) FROM latest WHERE selected AND created_at > ${window}) AS selected`;

  const byCategory = await sql<{ tag: string; n: number; avg_score: number | null }[]>`
    WITH latest AS (
      SELECT DISTINCT ON (article_id) tags, score, selected, created_at
      FROM analyses ORDER BY article_id, id DESC
    )
    SELECT tags[1] AS tag, count(*) AS n, round(avg(score), 1) AS avg_score
    FROM latest WHERE selected AND created_at > ${window}
    GROUP BY tags[1] ORDER BY n DESC LIMIT 12`;

  const topTags = await sql<{ tag: string; n: number }[]>`
    WITH latest AS (
      SELECT DISTINCT ON (article_id) tags, score, selected, created_at
      FROM analyses ORDER BY article_id, id DESC
    ), picked AS (
      SELECT unnest(tags) AS tag FROM latest WHERE selected AND created_at > ${window}
    )
    SELECT tag, count(*) AS n FROM picked GROUP BY tag ORDER BY n DESC LIMIT 15`;

  const bySource = await sql<{ source: string; selected: number; arts: number }[]>`
    WITH latest AS (
      SELECT DISTINCT ON (article_id) id AS analysis_id, article_id, tags, score, selected, created_at
      FROM analyses ORDER BY article_id, id DESC
    )
    SELECT s.id AS source, count(l.analysis_id) FILTER (WHERE l.selected) AS selected, count(a.id) AS arts
    FROM sources s
    LEFT JOIN articles a ON a.source_id = s.id AND a.created_at > ${window}
    LEFT JOIN latest l ON l.article_id = a.id
    WHERE s.enabled
    GROUP BY s.id
    HAVING count(a.id) > 0 OR s.id = 'external-radar'
    ORDER BY selected DESC, arts DESC LIMIT 15`;

  const [radar] = await sql<{ pushed: number; selected: number }[]>`
    WITH latest AS (
      SELECT DISTINCT ON (article_id) article_id, score, selected, created_at
      FROM analyses ORDER BY article_id, id DESC
    )
    SELECT
      (SELECT count(*) FROM articles WHERE source_id = 'external-radar' AND created_at > ${window}) AS pushed,
      (SELECT count(*) FROM articles a JOIN latest l ON l.article_id = a.id
       WHERE a.source_id = 'external-radar' AND l.selected AND l.created_at > ${window}) AS selected`;

  return {
    since: new Date(Date.now() - 7 * 86_400_000).toISOString(),
    totals: { articles: Number(totals?.articles ?? 0), analyzed: Number(totals?.analyzed ?? 0), selected: Number(totals?.selected ?? 0) },
    byCategory, topTags, bySource,
    radar: { pushed: Number(radar?.pushed ?? 0), selected: Number(radar?.selected ?? 0) },
  };
}

export default defineServerModule({
  name: "weekly-stats",
  http: (app) => {
    app.get("/api/weekly-stats", async (_req, reply) => {
      reply.header("Cache-Control", "no-store");
      return await stats();
    });
  },
} satisfies ServerModule);
