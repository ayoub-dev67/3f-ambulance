import Link from "next/link";
import { LucideIcon, ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  number?: string;
}

export default function ServiceCard({ icon: Icon, title, description, href = "/services", number }: ServiceCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-grey-100 border-l-4 border-l-primary bg-white p-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-l-accent md:p-8">
      {number && (
        <span className="absolute top-4 right-4 hidden font-heading text-6xl font-black text-grey-100 select-none md:block" aria-hidden="true">
          {number}
        </span>
      )}
      <div className="relative mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:from-primary group-hover:to-primary-dark group-hover:text-white">
        <Icon className="h-7 w-7" aria-hidden="true" />
      </div>
      <h3 className="relative mb-3 font-heading text-xl font-semibold text-dark">{title}</h3>
      <p className="relative mb-6 text-grey-600 leading-relaxed">{description}</p>
      <Link
        href={href}
        className="relative inline-flex items-center gap-1.5 font-medium text-primary transition-colors hover:text-primary-dark"
      >
        En savoir plus
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </Link>
    </div>
  );
}
