import { LucideIcon } from "lucide-react";

interface TrustBadgeProps {
  icon: LucideIcon;
  label: string;
  sublabel?: string;
}

export default function TrustBadge({ icon: Icon, label, sublabel }: TrustBadgeProps) {
  return (
    <div className="flex flex-col items-center gap-3 border-b-2 border-primary/20 pb-4 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <div>
        <span className="block font-heading text-2xl font-bold text-primary md:text-3xl">{label}</span>
        {sublabel && <span className="text-sm text-grey-600">{sublabel}</span>}
      </div>
    </div>
  );
}
