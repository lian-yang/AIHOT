import { useLoaderData } from "react-router";
import { apiGet, cachedPage, pageHeaders } from "@aihot/web/lib/api.server";
import { pageMeta } from "@aihot/web/lib/seo";
import { ReadingLayout } from "@aihot/web/components/ui/Page";
import type { WeeklyStats } from "./stats.ts";

export { pageHeaders as headers } from "@aihot/web/lib/api.server";

export async function loader({ request }: { request: Request }) {
  return cachedPage(120, await apiGet<WeeklyStats>("/api/weekly-stats", { signal: request.signal }));
}

export function meta() {
  return pageMeta({ title: "每周精选统计", description: "最近 7 天的收录、评审、精选分布和雷达候选转化。", path: "/stats/weekly" });
}

function Num({ n }: { n: number }) {
  return <span className="num text-[26px] font-bold text-ink">{n}</span>;
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="card px-5 py-5">
      <h2 className="text-[14px] font-semibold text-ink-2">{title}</h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}

function Table({ head, rows }: { head: string[]; rows: Array<Array<string | number>> }) {
  return (
    <table className="w-full text-[13px]">
      <thead>
        <tr className="border-b border-line-soft text-left text-ink-4">
          {head.map((h) => (
            <th key={h} className="py-2 pr-4 font-normal">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className="border-b border-line-soft/60 last:border-b-0">
            {row.map((cell, j) => (
              <td key={j} className={`py-2 pr-4 ${j === 0 ? "text-ink" : "text-ink-3"}`}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function WeeklyStatsPage() {
  const data = useLoaderData<typeof loader>();
  const radarRate = data.radar.pushed ? Math.round((data.radar.selected / data.radar.pushed) * 1000) / 10 : null;
  return (
    <ReadingLayout>
      <header className="pb-6">
        <h1 data-page-title="" className="text-[24px] font-semibold leading-[1.3] text-ink">每周精选统计</h1>
        <p className="mt-1.5 text-[13px] text-ink-3">最近 7 天：收录 → 评审 → 精选，以及雷达候选的转化。</p>
      </header>
      <div className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-4">
          <Card title="收录（新入库）"><Num n={data.totals.articles} /></Card>
          <Card title="评审（模型跑过）"><Num n={data.totals.analyzed} /></Card>
          <Card title="精选"><Num n={data.totals.selected} /></Card>
          <Card title="雷达转化">
            <Num n={data.radar.pushed} />
            <p className="mt-1 text-[12px] text-ink-3">候选 {data.radar.pushed} 条 → 精选 {data.radar.selected} 条{radarRate === null ? "" : `（${radarRate}%）`}</p>
          </Card>
        </div>
        <Card title="精选按分类（首个标签）">
          <Table head={["分类", "条数", "平均分"]} rows={data.byCategory.map((c) => [c.tag, c.n, c.avg_score ?? "—"])} />
        </Card>
        <Card title="精选热门标签">
          {data.topTags.length ? (
            <div className="flex flex-wrap gap-2">
              {data.topTags.map((t) => (
                <span key={t.tag} className="rounded-full bg-bg-sunk px-3 py-1 text-[12.5px] text-ink-2">{t.tag} <span className="num text-ink-4">{t.n}</span></span>
              ))}
            </div>
          ) : (
            <p className="text-[13px] text-ink-3">本周还没有精选。</p>
          )}
        </Card>
        <Card title="信源贡献（近 7 天收录 / 精选）">
          <Table head={["信源", "精选", "收录"]} rows={data.bySource.map((s) => [s.source, s.selected, s.arts])} />
        </Card>
      </div>
    </ReadingLayout>
  );
}
