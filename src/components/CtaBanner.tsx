"use client";

import { useQuoteModal } from "@/components/QuoteModal";

export default function CtaBanner() {
  const { openQuote } = useQuoteModal();

  return (
    <section className="w-full bg-gradient-to-r from-[#1aa6a0] via-[#1e8f7a] to-[#1f6b4f]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-6 px-4 py-8 sm:flex-row sm:items-center sm:px-6 sm:py-9 lg:px-8">
        <div className="max-w-xl">
          <h3 className="font-display text-[clamp(1.35rem,2.5vw,1.85rem)] font-bold text-white">
            Ready to Switch to Solar Energy?
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-white/85 sm:text-[0.95rem]">
            Get expert guidance and a customized solar solution for your property.
          </p>
        </div>
        <button
          type="button"
          onClick={() => openQuote()}
          className="inline-flex h-12 shrink-0 items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-brand-navy transition hover:bg-slate-50"
        >
          Request a Free Quote
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M5 12H19M19 12L13 6M19 12L13 18"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
