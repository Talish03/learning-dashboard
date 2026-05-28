import { ActivityDay } from "@/types";

export function generateActivityData(weeks = 20): ActivityDay[] {
  const days: ActivityDay[] = [];
  const today = new Date();

  for (let i = weeks * 7 - 1; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    // Bias towards recent days having more activity
    const recencyBoost = i < 14 ? 1.5 : 1;
    const rand = 0.8 * recencyBoost;
    let count = 0;
    if (rand > 0.65) count = 1;
    if (rand > 0.85) count = 2;
    if (rand > 1.0) count = 3;
    if (rand > 1.2) count = 4;

    days.push({
      date: date.toISOString().split("T")[0],
      count,
    });
  }

  return days;
}

export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

// Map icon_name string -> Lucide icon name (pass-through, validated in component)
export const VALID_ICONS = [
  "BookOpen",
  "Code2",
  "Cpu",
  "Database",
  "Globe",
  "LayoutDashboard",
  "Lightbulb",
  "Microscope",
  "Palette",
  "Shield",
  "Terminal",
  "Zap",
  "BrainCircuit",
  "FlaskConical",
] as const;

export type ValidIconName = (typeof VALID_ICONS)[number];

export function isValidIcon(name: string): name is ValidIconName {
  return VALID_ICONS.includes(name as ValidIconName);
}
