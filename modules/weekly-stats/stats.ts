/** Shapes shared by the weekly-stats module's api answer and its page. */
export interface WeeklyStats {
  since: string;
  totals: { articles: number; analyzed: number; selected: number };
  byCategory: Array<{ tag: string; n: number; avg_score: number | null }>;
  topTags: Array<{ tag: string; n: number }>;
  bySource: Array<{ source: string; selected: number; arts: number }>;
  radar: { pushed: number; selected: number };
}
