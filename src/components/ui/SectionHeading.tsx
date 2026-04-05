interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  surtitre?: string;
  centered?: boolean;
}

export default function SectionHeading({ title, subtitle, surtitre, centered = true }: SectionHeadingProps) {
  return (
    <div className={`mb-10 md:mb-14 ${centered ? "text-center" : ""}`}>
      {surtitre && (
        <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-[0.15em] text-primary/70">
          {surtitre}
        </span>
      )}
      <h2 className="font-heading text-2xl font-bold text-dark md:text-3xl lg:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-grey-600 leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
