"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useQuoteModal } from "@/components/QuoteModal";

const categories = [
  {
    id: "home",
    anchor: "renemu-home",
    tagline: "INDEPENDENT HOMES & SMART LIVING",
    title: "reneμ Home",
    description:
      "Designed for independent homes seeking smarter energy management, reneμ Home combines clean energy solutions with intelligent monitoring for greater savings, convenience, and energy independence.",
    icon: "home",
    image: "/service-residential.jpg",
    solutions: [
      "Rooftop on-grid solar",
      "Hybrid backup options",
      "App-based monitoring",
      "AMC-ready support",
    ],
    features: [
      "Bill reduction focus",
      "Compact residential design",
      "Clean cable routing",
      "Fast commissioning",
    ],
  },
  {
    id: "elite",
    anchor: "renemu-elite",
    tagline: "PREMIUM VILLAS & LUXURY SPACES",
    title: "reneμ Elite",
    description:
      "Crafted for premium villas and luxury spaces, reneμ Elite delivers advanced renewable energy solutions that seamlessly integrate sustainability, aesthetics, and high-performance energy management.",
    icon: "elite",
    image: "/hero-energy.jpg",
    solutions: [
      "Premium hybrid systems",
      "High-efficiency modules",
      "Battery-ready design",
      "Discreet aesthetics",
    ],
    features: [
      "Higher savings potential",
      "Refined installation finish",
      "Priority support options",
      "Smart energy controls",
    ],
  },
  {
    id: "plus",
    anchor: "renemu-plus",
    tagline: "COMMERCIAL & INDUSTRIAL PROJECTS",
    title: "reneμ Plus",
    description:
      "Engineered for commercial, industrial and utility projects, reneμ Plus delivers customized renewable energy solutions tailored to complex requirements — maximizing efficiency, reliability, and long-term business value with clear ROI.",
    icon: "plus",
    image: "/service-commercial.jpg",
    solutions: [
      "Commercial rooftop EPC",
      "Industrial load offset",
      "BESS integration",
      "Performance reporting",
    ],
    features: [
      "Scalable capacity",
      "Demand charge reduction",
      "OPEX-focused design",
      "Long-term AMC plans",
    ],
  },
] as const;

function CategoryIcon({ type }: { type: (typeof categories)[number]["icon"] }) {
  const common = {
    width: 42,
    height: 42,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true as const,
  };

  if (type === "elite") {
    return (
      <svg {...common}>
        <path
          d="M4 17L6.5 8L10 12L12 6L14 12L17.5 8L20 17H4Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path d="M5 19H19" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "plus") {
    return (
      <svg {...common}>
        <path
          d="M4 19H20M6 19V11H10V19M12 19V8H16V19M16 8L19 11V19"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path d="M8 8V6M14 8V5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path
        d="M4 11L12 4L20 11V20H14V14H10V20H4V11Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="mt-0.5 shrink-0 text-brand-green">
      <path
        d="M5 12.5L9.5 17L19 7.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ProductCategoriesSection({
  activeProduct,
}: {
  activeProduct?: "home" | "elite" | "plus";
}) {
  const { openQuote } = useQuoteModal();

  useEffect(() => {
    if (!activeProduct) return;

    const category = categories.find((item) => item.id === activeProduct);
    if (!category) return;

    const scrollToCategory = () => {
      const el = document.getElementById(category.anchor);
      if (!el) return;
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const timer = window.setTimeout(scrollToCategory, 120);
    return () => window.clearTimeout(timer);
  }, [activeProduct]);

  return (
    <section className="bg-[#f4f8fc] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-[920px] text-center">
        <p className="text-xs font-bold tracking-[0.16em] text-brand-green">PRODUCTS</p>
        <h2 className="mt-3 font-display text-[clamp(1.6rem,3.2vw,2.25rem)] font-extrabold leading-tight text-brand-navy">
          Our Products Categories - reneμ
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-slate-500">
          Choose the right service category for your property type, energy usage, monitoring
          needs, and long-term maintenance expectations.
        </p>
      </div>

      <div className="mx-auto mt-10 flex max-w-[1100px] flex-col gap-10">
        {categories.map((category, index) => {
          const isActive = activeProduct === category.id;
          const imageRight = index % 2 === 1;
          return (
            <article
              key={category.id}
              id={category.anchor}
              className={`scroll-mt-28 overflow-hidden rounded-2xl bg-white shadow-[0_12px_34px_rgba(15,23,42,0.08)] ring-1 ${
                isActive ? "ring-brand-green/35" : "ring-slate-200"
              }`}
            >
              <div
                className={`grid items-stretch lg:grid-cols-2 ${
                  imageRight ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative min-h-[260px] lg:min-h-full">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/55 via-brand-navy/10 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-xs font-bold tracking-[0.18em] text-brand-green">
                      {category.tagline}
                    </p>
                    <p className="mt-2 font-display text-2xl font-extrabold text-white">
                      {category.title}
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="text-brand-green">
                    <CategoryIcon type={category.icon} />
                  </div>
                  <p className="mt-5 text-sm font-bold uppercase tracking-[0.18em] text-brand-green">
                    {category.tagline}
                  </p>
                  <h3 className="mt-2 font-display text-3xl font-bold text-brand-navy">
                    {category.title}
                  </h3>
                  <p className="mt-4 leading-7 text-slate-600">{category.description}</p>

                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-[0.16em] text-brand-blue">
                        Solutions Included
                      </h4>
                      <div className="mt-3 space-y-3">
                        {category.solutions.map((item) => (
                          <p key={item} className="flex gap-2 text-sm font-semibold text-slate-700">
                            <CheckIcon />
                            {item}
                          </p>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-[0.16em] text-brand-blue">
                        Features Provided
                      </h4>
                      <div className="mt-3 space-y-3">
                        {category.features.map((item) => (
                          <p key={item} className="flex gap-2 text-sm font-semibold text-slate-700">
                            <CheckIcon />
                            {item}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => openQuote(category.title)}
                    className="mt-7 inline-flex h-11 items-center justify-center rounded-full bg-brand-green px-6 text-sm font-semibold text-white transition hover:bg-brand-green-dark"
                  >
                    Get Service Quote
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
