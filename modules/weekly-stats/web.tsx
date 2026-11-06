import { IconChart } from "@aihot/web/components/icons";
import type { WebModule } from "@aihot/web/modules";

export default {
  name: "weekly-stats",
  sidebar: { section: "工具", items: [{ to: "/stats/weekly", label: "每周统计", icon: IconChart }] },
  tools: [{ to: "/stats/weekly", label: "每周统计", icon: <IconChart size={18} /> }],
} satisfies WebModule;
