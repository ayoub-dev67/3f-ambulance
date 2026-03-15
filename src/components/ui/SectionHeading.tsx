interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  surtitre?: string;
  centered?: boolean;
}

export default function SectionHeading({ title, subtitle, surtitre, centered = true }: SectionHeadingProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}>
      {surtitre && (
        <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
          {surtitre}
        </span>
      )}
      <h2 className="font-heading text-2xl font-bold text-dark md:text-3xl lg:text-4xl">
        {title}
      </h2>
      <div className={`mt-4 h-1 w-16 rounded-full bg-primary ${centered ? "mx-auto" : ""}`} />
      {subtitle && (
        <p className="mx-auto mt-6 max-w-2xl text-lg text-grey-600 leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
