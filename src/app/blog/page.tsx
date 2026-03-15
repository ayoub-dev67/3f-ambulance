import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { blogArticles } from "@/data/blog";
import CTABanner from "@/components/ui/CTABanner";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export const metadata = generatePageMetadata({
  title: "Blog — Conseils Transport Médical | 3F Ambulance",
  description: "Conseils et informations sur le transport médical : remboursement, ambulance, VSL, taxi conventionné, dialyse. Blog 3F Ambulance Saint-Louis.",
  path: "/blog",
});

const CATEGORY_COLORS: Record<string, string> = {
  Remboursement: "bg-green-100 text-green-700",
  "Guide Pratique": "bg-blue-100 text-blue-700",
  Dialyse: "bg-purple-100 text-purple-700",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
}

export default function BlogPage() {
  return (
    <>
      <section className="bg-primary-50 py-16 md:py-20">
        <div className="container-custom text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-primary">Blog</span>
          <h1 className="font-heading text-3xl font-bold text-dark md:text-4xl lg:text-5xl">Notre Blog</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-grey-600">Conseils et informations sur le transport médical</p>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="container-custom">
          <RevealOnScroll stagger>
            <div className="grid gap-8 md:grid-cols-3">
              {blogArticles.map((article) => (
                <Link key={article.slug} href={`/blog/${article.slug}`} className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-md">
                  <div className="relative h-48">
                    {article.image ? (
                      <Image src={article.image} alt={article.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" quality={75} />
                    ) : (
                      <div className="flex h-full items-end bg-gradient-to-br from-[#002B5C] to-[#0057B8] p-6" />
                    )}
                    <span className={`absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-medium ${CATEGORY_COLORS[article.category] || "bg-grey-100 text-grey-600"}`}>
                      {article.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h2 className="mb-2 font-heading text-xl font-bold text-dark group-hover:text-primary transition-colors leading-tight">{article.title}</h2>
                    <p className="mb-4 text-sm text-grey-600 leading-relaxed">{article.excerpt.slice(0, 150)}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-grey-500">{formatDate(article.date)}</span>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                        Lire la suite <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <CTABanner title="Une question sur le transport médical ?" subtitle="Appelez-nous, on vous explique tout : remboursement, prescription, mode de transport." />
    </>
  );
}
