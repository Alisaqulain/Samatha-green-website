import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    category: "ENERGY PLANNING",
    title: "How to Choose the Right Renewable Energy System",
    excerpt:
      "A practical look at matching solar, hybrid, BESS, and microgrid options to your site, energy usage, and backup requirements.",
    date: "May 2026",
  },
  {
    category: "BATTERY STORAGE",
    title: "Why BESS Matters for Reliable Clean Power",
    excerpt:
      "Battery Energy Storage Systems improve backup, peak load management, renewable energy utilization, and long-term energy reliability.",
    date: "May 2026",
  },
  {
    category: "SOLAR SOLUTIONS",
    title: "Understanding On-Grid, Off-Grid, and Hybrid Systems",
    excerpt:
      "Compare the three common solar system types and learn which one fits homes, businesses, industries, and remote sites.",
    date: "May 2026",
  },
] as const;

function BookIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 5.5C5 4.7 5.7 4 6.5 4H12V18H6.5C5.7 18 5 17.3 5 16.5V5.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M19 5.5C19 4.7 18.3 4 17.5 4H12V18H17.5C18.3 18 19 17.3 19 16.5V5.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3.5" y="5" width="17" height="15" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 3.5V7M16 3.5V7M3.5 10H20.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function BlogHero() {
  return (
    <section className="relative min-h-[360px] overflow-hidden bg-brand-navy sm:min-h-[420px]">
      <Image
        src="/about-hero.jpg"
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[#041526]/80" />
      <div className="relative z-10 mx-auto flex min-h-[360px] max-w-[1280px] flex-col justify-center px-4 py-16 sm:min-h-[420px] sm:px-6 lg:px-8">
        <p className="text-xs font-bold tracking-[0.16em] text-brand-green">
          SOLAR ENERGY SOLUTIONS
        </p>
        <h1 className="mt-4 font-display text-[clamp(2.2rem,5vw,3.4rem)] font-bold leading-tight text-white">
          Blog
        </h1>
        <p className="mt-4 max-w-xl text-[0.98rem] leading-relaxed text-white/85 sm:text-base">
          Insights and practical guidance for choosing, installing, and maintaining renewable
          energy systems.
        </p>
      </div>
    </section>
  );
}

export default function BlogArticlesSection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-[1100px] text-center">
        <p className="text-xs font-bold tracking-[0.16em] text-brand-green">LATEST ARTICLES</p>
        <h2 className="mt-3 font-display text-[clamp(1.55rem,3.2vw,2.2rem)] font-bold text-brand-navy">
          Renewable Energy Insights
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-slate-500">
          Explore practical guidance on solar, battery storage, hybrid energy systems, and smart
          renewable energy planning.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-[1200px] gap-6 md:grid-cols-2 xl:grid-cols-3">
        {articles.map((article, index) => (
          <article
            key={article.title}
            className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-green/40 hover:shadow-[0_16px_34px_rgba(15,23,42,0.1)] animate-fade-up"
            style={{ animationDelay: `${index * 0.12}s` }}
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green transition group-hover:bg-brand-green group-hover:text-white">
              <BookIcon />
            </span>
            <p className="mt-5 text-sm font-bold uppercase tracking-[0.16em] text-brand-green">
              {article.category}
            </p>
            <h3 className="mt-3 text-2xl font-extrabold leading-tight text-brand-navy">
              {article.title}
            </h3>
            <p className="mt-4 flex-1 leading-7 text-slate-600">{article.excerpt}</p>
            <div className="mt-6 flex items-center gap-2 text-sm font-bold text-slate-500">
              <CalendarIcon />
              <span>{article.date}</span>
            </div>
          </article>
        ))}
      </div>

      <div className="mx-auto mt-12 flex max-w-[1200px] justify-center">
        <Link
          href="/#contact"
          className="inline-flex h-11 items-center gap-2 rounded-full bg-brand-navy px-6 text-sm font-semibold text-white transition hover:bg-[#0f3a63]"
        >
          Talk to an Expert
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M5 12H19M19 12L13 6M19 12L13 18"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
