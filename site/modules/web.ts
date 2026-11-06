// What the site's modules add to the web pages (site/modules/index.ts).
import type { WebModule } from "@aihot/web/modules";
import weeklyStatsWeb from "@aihot/weekly-stats/web";

export const WEB_MODULES: readonly WebModule[] = [weeklyStatsWeb];
