import * as LucideIcons from "lucide-react";
import { LucideProps } from "lucide-react";

interface DynamicIconProps extends LucideProps {
  name: string;
  fallback?: keyof typeof LucideIcons;
}

export function DynamicIcon({ name, fallback = "BookOpen", ...props }: DynamicIconProps) {
  // Only pick actual icon components (they start with uppercase)
  const IconComponent = (LucideIcons as Record<string, unknown>)[name];

  if (
    IconComponent &&
    typeof IconComponent === "function"
  ) {
    const Icon = IconComponent as React.ComponentType<LucideProps>;
    return <Icon {...props} />;
  }

  // Fallback
  const FallbackIcon = (LucideIcons as Record<string, unknown>)[fallback] as React.ComponentType<LucideProps>;
  return <FallbackIcon {...props} />;
}
