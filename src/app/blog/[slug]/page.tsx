import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { blogArticles } from "@/data/blog";
import { SITE_CONFIG } from "@/lib/constants";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export function generateStaticParams() {
  return blogArticles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const article = blogArticles.find((a) => a.slug === params.slug);
  if (!article) return {};
  return {
    title: `${article.title} | Blog 3F Ambulance`,
    description: article.excerpt,
    openGraph: { type: "article", publishedTime: article.date },
  };
}

const CATEGORY_COLORS: Record<string, string> = {
  Remboursement: "bg-green-100 text-green-700",
  "Guide Pratique": "bg-blue-100 text-blue-700",
  Dialyse: "bg-purple-100 text-purple-700",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
}

function renderInlineLinks(text: string): React.ReactNode {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;
  let i = 0;
  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));
    parts.push(<Link key={i++} href={match[2]} className="text-primary font-medium underline hover:text-primary-dark">{match[1]}</Link>);
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts.length === 1 && typeof parts[0] === "string" ? parts[0] : <>{parts}</>;
}

function parseMarkdown(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let listItems: string[] = [];
  let key = 0;

  function flushList() {
    if (listItems.length > 0) {
      elements.push(
        <ul key={key++} className="mb-6 space-y-2 pl-6">
          {listItems.map((item, i) => (
            <li key={i} className="list-disc text-lg text-grey-800 leading-relaxed">{renderInlineLinks(item)}</li>
          ))}
        </ul>
      );
      listItems = [];
    }
  }

  for (const line of lines) {
    const trimmed = line.trim();

    if (trimmed.startsWith("## ")) {
      flushList();
      elements.push(
        <h2 key={key++} className="mt-10 mb-4 font-heading text-2xl font-bold text-dark">{trimmed.slice(3)}</h2>
      );
    } else if (trimmed.startsWith("- ")) {
      listItems.push(trimmed.slice(2));
    } else if (trimmed === "") {
      flushList();
    } else {
      flushList();
      elements.push(
        <p key={key++} className="mb-4 text-lg text-grey-800 leading-relaxed">{renderInlineLinks(trimmed)}</p>
      );
    }
  }
  flushList();
  return elements;
}

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  const article = blogArticles.find((a) => a.slug === params.slug);
  if (!article) notFound();

  const otherArticles = blogArticles.filter((a) => a.slug !== article.slug);

  return (
    <>
      <section className="bg-primary-50 py-16 md:py-20">
        <div className="container-custom max-w-3xl">
          <nav className="mb-4 text-sm text-grey-600">
            <Link href="/" className="hover:text-primary transition-colors">Accueil</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-dark">{article.category}</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <span className={`rounded-full px-3 py-1 text-xs font-medium ${CATEGORY_COLORS[article.category] || "bg-grey-100 text-grey-600"}`}>
              {article.category}
            </span>
            <span className="text-sm text-grey-500">{formatDate(article.date)}</span>
          </div>
          <h1 className="font-heading text-3xl font-bold text-dark leading-tight md:text-4xl">{article.title}</h1>
        </div>
      </section>

      <article className="bg-white section-padding">
        <div className="container-custom max-w-3xl">
          {article.image && (
            <div className="relative mb-8 h-[300px] md:h-[400px] w-full overflow-hidden rounded-2xl">
              <Image src={article.image} alt={article.title} fill className="object-cover" quality={75} priority />
            </div>
          )}
          <RevealOnScroll>
            {parseMarkdown(article.content)}
          </RevealOnScroll>
        </div>
      </article>

      {/* CTA */}
      <section className="bg-primary-50 py-12">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="mb-4 font-heading text-2xl font-bold text-dark">Besoin d&apos;un transport médical ?</h2>
          <p className="mb-6 text-grey-600">Appelez-nous pour organiser votre transport ou poser vos questions.</p>
          <a href={SITE_CONFIG.phoneHref} className="relative inline-flex items-center gap-3 rounded-full bg-accent px-10 py-5 text-xl font-bold text-white shadow-lg transition-all hover:bg-accent-hover hover:scale-105 ring-pulse" aria-label={`Appeler le ${SITE_CONFIG.phoneDisplay}`}>
            <Phone className="h-6 w-6" aria-hidden="true" />{SITE_CONFIG.phoneDisplay}
          </a>
        </div>
      </section>

      {/* Other articles */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-3xl">
          <h2 className="mb-8 font-heading text-2xl font-bold text-dark">Autres articles</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {otherArticles.map((a) => (
              <Link key={a.slug} href={`/blog/${a.slug}`} className="group rounded-2xl border border-grey-100 bg-white p-6 transition-all hover:shadow-lg">
                <span className={`mb-3 inline-block rounded-full px-3 py-1 text-xs font-medium ${CATEGORY_COLORS[a.category] || "bg-grey-100 text-grey-600"}`}>
                  {a.category}
                </span>
                <h3 className="mb-2 font-heading text-lg font-bold text-dark group-hover:text-primary transition-colors leading-tight">{a.title}</h3>
                <p className="text-sm text-grey-600">{a.excerpt.slice(0, 100)}...</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Lire <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* JSON-LD BlogPosting */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: article.title,
        description: article.excerpt,
        datePublished: article.date,
        author: { "@type": "Organization", name: "3F Ambulance" },
        publisher: { "@type": "Organization", name: "3F Ambulance" },
      }) }} />
    </>
  );
}
