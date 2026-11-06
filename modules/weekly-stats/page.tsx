import { useLoaderData } from "react-router";
import { apiGet, cachedPage, pageHeaders } from "@aihot/web/lib/api.server";
import { pageMeta } from "@aihot/web/lib/seo";
import type { WeeklyStats } from "./stats.ts";

export { pageHeaders as headers } from "@aihot/web/lib/api.server";

export async function loader({ request }: { request: Request }) {
  return cachedPage(120, await apiGet<WeeklyStats>("/api/weekly-stats", { signal: request.signal }));
}

export function meta() {
  return pageMeta({ title: "每周精选统计", description: "最近 7 天的收录、评审、精选分布和雷达候选转化。", path: "/stats/weekly" });
}

function Kpi({ label, value, note }: { label: string; value: string; note?: React.ReactNode }) {
  return (
    <div className="card px-5 py-4">
      <div className="text-[13px] text-ink-3">{label}</div>
      <div className="num mt-1 text-[28px] font-bold leading-none text-ink">{value}</div>
      {note && <div className="mt-2 text-[12px] leading-[1.6] text-ink-4">{note}</div>}
    </div>
  );
}

function Panel({ title, legend, empty, children }: { title: string; legend?: string; empty?: boolean; children: React.ReactNode }) {
  return (
    <section className="card overflow-hidden">
      <h2 className="flex items-baseline justify-between border-b border-line-soft px-5 py-3.5">
        <span className="text-[14px] font-semibold text-ink-2">{title}</span>
        {legend && <span className="text-[12px] text-ink-4">{legend}</span>}
      </h2>
      {empty ? <p className="px-5 py-4 text-[13px] text-ink-3">本周还没有精选。</p> : <ul className="divide-y divide-line-soft">{children}</ul>}
    </section>
  );
}

function Row({ left, bar, right }: { left: string; bar?: number; right: Array<string | number> }) {
  return (
    <li className="flex items-center gap-3 px-5 py-2.5 text-[13.5px] sm:gap-4">
      <span className={`truncate text-ink ${bar === undefined ? "min-w-0 flex-1" : "w-[8.5em] shrink-0 sm:w-[9em]"}`}>{left}</span>
      {bar !== undefined && (
        <span className="min-w-0 flex-1" aria-hidden="true">
          <span className="block h-1.5 rounded-full bg-bg-sunk">
            <span className="block h-full rounded-full bg-accent/60" style={{ width: `${Math.max(4, bar)}%` }} />
          </span>
        </span>
      )}
      <span className={`flex gap-4 sm:gap-6 ${bar === undefined ? "flex-1 justify-end" : "shrink-0"}`}>
        {right.map((cell, i) => (
          <span key={i} className={`num w-[4.5em] text-right tabular-nums ${i === right.length - 1 ? "text-ink" : "text-ink-3"}`}>{cell}</span>
        ))}
      </span>
    </li>
  );
}

export default function WeeklyStatsPage() {
  const data = useLoaderData<typeof loader>();
  const topCategory = data.byCategory[0]?.n ?? 0;
  const radarRate = data.radar.pushed ? Math.round((data.radar.selected / data.radar.pushed) * 1000) / 10 : null;
  return (
    <div className="pb-6">
      <header className="pb-6">
        <h1 data-page-title="" className="text-[24px] font-semibold leading-[1.3] text-ink">每周精选统计</h1>
        <p className="mt-1.5 text-[13px] text-ink-3">最近 7 天：收录 → 评审 → 精选，以及雷达候选的转化。</p>
      </header>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          <Kpi label="收录（新入库）" value={String(data.totals.articles)} />
          <Kpi label="评审（模型跑过）" value={String(data.totals.analyzed)} />
          <Kpi label="精选" value={String(data.totals.selected)} />
          <Kpi
            label="雷达候选转化"
            value={data.radar.pushed ? `${radarRate}%` : "—"}
            note={<>候选 {data.radar.pushed} 条 → 精选 {data.radar.selected} 条</>}
          />
        </div>
        <Panel title="精选按分类（首个标签）" legend="条数 · 平均分" empty={!data.byCategory.length}>
          {data.byCategory.map((c) => (
            <Row key={c.tag} left={c.tag} bar={topCategory ? Math.round((c.n / topCategory) * 100) : 0} right={[c.n, c.avg_score == null ? "—" : Number(c.avg_score).toFixed(1)]} />
          ))}
        </Panel>
        <Panel title="精选热门标签" empty={!data.topTags.length}>
          <li className="flex flex-wrap gap-2 px-5 py-3.5">
            {data.topTags.map((t) => (
              <span key={t.tag} className="rounded-full bg-bg-sunk px-3 py-1 text-[12.5px] text-ink-2">{t.tag} <span className="num text-ink-4">{t.n}</span></span>
            ))}
          </li>
        </Panel>
        <Panel title="信源贡献（近 7 天）" legend="精选 · 收录" empty={!data.bySource.length}>
          {data.bySource.map((s) => (
            <Row key={s.source} left={s.source} right={[s.selected, s.arts]} />
          ))}
        </Panel>
      </div>
    </div>
  );
}
