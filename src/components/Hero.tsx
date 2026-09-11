"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";

type TitleLine = {
  text: string;
  color: "white" | "green";
};

type Slide = {
  image: string;
  title: TitleLine[];
  tagline?: ReactNode;
  body?: string;
  features?: string[];
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

const slides: Slide[] = [
  {
    image: "/slide-2.png",
    title: [
      { text: "ONE PARTNER.", color: "white" },
      { text: "ALL ENERGY", color: "green" },
      { text: "SOLUTION.", color: "green" },
    ],
    tagline: (
      <>
        Powering a <span className="text-brand-green">smarter</span> and{" "}
        <span className="text-brand-green">greener</span> tomorrow.
      </>
    ),
    features: ["Solar Solutions", "Energy Storage", "Clean Energy", "Reliable Performance"],
    primaryCta: { label: "Explore Solutions", href: "/#solutions" },
    secondaryCta: { label: "Solar Calculator", href: "/#products" },
  },
  {
    image: "/slide-4.png",
    title: [
      { text: "SMART SOLUTIONS.", color: "white" },
      { text: "STRONGER FUTURE.", color: "green" },
    ],
    body: "From expert installation to lasting performance, we deliver reliable solar and renewable solutions tailored to your energy needs.",
    primaryCta: { label: "View Products", href: "/#products" },
    secondaryCta: { label: "Get Quote", href: "/contact" },
  },
  {
    image: "/slide-3.png",
    title: [
      { text: "CONSULT", color: "green" },
      { text: "WITH US", color: "white" },
    ],
    tagline: (
      <>
        Your Vision. Our Expertise.{" "}
        <span className="text-brand-green">A Sustainable Future.</span>
      </>
    ),
    body: "At Samatha, we help you make the right energy decisions with customized solar solutions tailored to your goals. Let's build a cleaner, smarter, and more efficient future together.",
    features: [
      "Expert Consultation",
      "Customized Solutions",
      "Maximum Efficiency",
      "Sustainable Impact",
    ],
    primaryCta: { label: "Let's Talk", href: "/contact" },
    secondaryCta: { label: "About Us", href: "/about" },
  },
  {
    image: "/slide-5.png",
    title: [
      { text: "SMART DIGITAL", color: "white" },
      { text: "PLATFORM", color: "green" },
    ],
    body: "One platform to monitor, manage and maximize the performance of all your renewable energy assets, tailored to your energy needs.",
    features: [
      "Live Monitoring",
      "Performance Analytics",
      "Digital Warranty",
      "Service Requests",
      "Alerts & Notifications",
    ],
    primaryCta: { label: "Request Demo", href: "/contact" },
    secondaryCta: { label: "Learn More", href: "/about" },
  },
  {
    image: "/slide-1.png",
    title: [
      { text: "INTELLIGENT ENERGY.", color: "white" },
      { text: "SEAMLESS BACKUP.", color: "green" },
    ],
    body: "Reliable on-grid, off-grid, and hybrid solar solutions with intelligent battery backup designed to keep your energy flowing without interruption.",
    features: ["On-Grid", "Off-Grid", "Hybrid Solar", "Battery Backup"],
    primaryCta: { label: "Compare Systems", href: "/solutions/on-grid" },
    secondaryCta: { label: "Talk to Expert", href: "/contact" },
  },
  {
    image: "/slide-6.png",
    title: [
      { text: "COMMERCIAL &", color: "white" },
      { text: "INDUSTRIAL", color: "green" },
      { text: "SOLUTIONS", color: "green" },
    ],
    tagline: (
      <>
        Powering Business.{" "}
        <span className="text-brand-green">Driving Efficiency.</span>
      </>
    ),
    body: "Scalable solar and renewable energy solutions designed to reduce operational costs, improve energy efficiency, and support uninterrupted business operations.",
    primaryCta: { label: "Industrial Solutions", href: "/products/samatha-plus" },
    secondaryCta: { label: "Contact Sales", href: "/contact" },
  },
];

function Arrow({ direction }: { direction: "left" | "right" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {direction === "left" ? (
        <path
          d="M15 6L9 12L15 18"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        <path
          d="M9 6L15 12L9 18"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);
  const slide = slides[index];

  useEffect(() => {
    setActiveFeature(0);
  }, [index]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((i) => (i === slides.length - 1 ? 0 : i + 1));
    }, 2000);
    return () => window.clearInterval(timer);
  }, [index]);

  const prev = () => setIndex((i) => (i === 0 ? slides.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === slides.length - 1 ? 0 : i + 1));

  const featureCols =
    (slide.features?.length ?? 0) >= 5
      ? "sm:grid-cols-3 lg:grid-cols-5"
      : (slide.features?.length ?? 0) === 1
        ? "sm:grid-cols-1 max-w-xs"
        : "sm:grid-cols-2 lg:grid-cols-4";

  return (
    <section className="relative min-h-[calc(100vh-78px)] overflow-hidden bg-brand-navy">
      {slides.map((item, i) => (
        <div
          key={`${item.image}-${i}`}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={item.image}
            alt=""
            fill
            priority={i === 0}
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-[#041526]/70 via-[#041526]/35 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#041526]/40 via-transparent to-[#041526]/15" />

      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/25 text-white backdrop-blur-sm transition hover:bg-black/40 sm:left-5"
      >
        <Arrow direction="left" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/25 text-white backdrop-blur-sm transition hover:bg-black/40 sm:right-5"
      >
        <Arrow direction="right" />
      </button>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-78px)] max-w-[1280px] flex-col justify-center px-4 py-16 pb-20 sm:px-6 lg:px-8 lg:py-20">
        <div key={index} className="max-w-2xl">
          <h1 className="animate-fade-up font-display text-[clamp(2.2rem,5.5vw,4.2rem)] font-extrabold uppercase leading-[0.98] tracking-tight">
            {slide.title.map((line) => (
              <span
                key={line.text}
                className={`mt-1 block first:mt-0 ${
                  line.color === "green" ? "text-brand-green" : "text-white"
                }`}
              >
                {line.text}
              </span>
            ))}
          </h1>

          <div className="animate-fade-up delay-1 mt-5 h-[3px] w-16 rounded-full bg-brand-green" />

          {slide.tagline ? (
            <p className="animate-fade-up delay-1 mt-5 text-lg font-medium text-white sm:text-xl">
              {slide.tagline}
            </p>
          ) : null}

          {slide.body ? (
            <p className="animate-fade-up delay-2 mt-4 max-w-xl text-[0.95rem] leading-relaxed text-white/85 sm:text-base">
              {slide.body}
            </p>
          ) : null}
        </div>

        {slide.features?.length ? (
          <div
            className={`animate-fade-up delay-3 mt-8 grid max-w-4xl grid-cols-2 gap-2 sm:gap-2.5 ${featureCols}`}
          >
            {slide.features.map((feature, i) => {
              const active = i === activeFeature;
              return (
                <button
                  key={feature}
                  type="button"
                  onClick={() => setActiveFeature(i)}
                  className={`min-h-[44px] rounded-lg border px-2 py-2 text-center text-xs font-medium leading-snug text-white backdrop-blur-[2px] transition sm:min-h-[52px] sm:px-2.5 sm:py-2.5 sm:text-[0.8rem] ${
                    active
                      ? "border-white/70 bg-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.15)]"
                      : "border-white/30 bg-black/25 hover:border-white/55 hover:bg-black/35"
                  }`}
                >
                  {feature}
                </button>
              );
            })}
          </div>
        ) : null}

        <div className="animate-fade-up delay-4 mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
          <Link
            href={slide.primaryCta.href}
            className="inline-flex h-11 items-center justify-center rounded-full bg-brand-green px-7 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(45,189,110,0.3)] transition hover:bg-brand-green-dark sm:h-12 sm:px-8"
          >
            {slide.primaryCta.label}
          </Link>
          <Link
            href={slide.secondaryCta.href}
            className="inline-flex h-11 items-center justify-center rounded-full border border-white/80 px-7 text-sm font-semibold text-white transition hover:bg-white/10 sm:h-12 sm:px-8"
          >
            {slide.secondaryCta.label}
          </Link>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 sm:bottom-8">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === index ? "w-8 bg-brand-green" : "w-2.5 bg-white/45 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
