// 每周精选统计：一页看最近 7 天的收录、评审、精选分布和雷达候选的转化。
import { defineModule } from "@aihot/contracts/modules";

export default defineModule({
  name: "weekly-stats",
  pages: [{ path: "stats/weekly", file: "page.tsx" }],
  apiPaths: [/^\/api\/weekly-stats/],
});
