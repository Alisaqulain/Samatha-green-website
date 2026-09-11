import Link from "next/link";
import type { SolutionKey } from "@/components/SystemTypesSection";

function EssDiagram() {
  return (
    <svg viewBox="0 0 220 220" className="mx-auto h-[160px] w-[160px]" aria-hidden="true">
      <circle cx="110" cy="110" r="102" fill="none" stroke="#c5d5e6" strokeWidth="2" />
      <circle cx="158" cy="52" r="11" fill="none" stroke="#f5b301" strokeWidth="2" />
      <g stroke="#f5b301" strokeWidth="2" strokeLinecap="round">
        <path d="M158 36V40M158 64V68M142 52H146M170 52H174" />
      </g>
      <rect x="72" y="70" width="50" height="28" rx="2" fill="none" stroke="#1d4f91" strokeWidth="2" />
      <path d="M78 76H116M78 82H116M78 88H116" stroke="#1d4f91" strokeWidth="1.4" />
      <rect x="48" y="130" width="34" height="22" rx="3" fill="none" stroke="#22c55e" strokeWidth="2" />
      <path d="M56 126V130M74 126V130" stroke="#22c55e" strokeWidth="2" />
      <path d="M72 128L97 98" fill="none" stroke="#94a3b8" strokeWidth="1.8" />
      <path d="M90 140L110 140L110 118" fill="none" stroke="#94a3b8" strokeWidth="1.8" />
      <path
        d="M108 118L150 90L170 106V150H108V118Z"
        fill="none"
        stroke="#0b2a4a"
        strokeWidth="2"
      />
      <rect x="128" y="128" width="16" height="22" fill="none" stroke="#0b2a4a" strokeWidth="2" />
    </svg>
  );
}

function RtcDiagram() {
  return (
    <svg viewBox="0 0 220 220" className="mx-auto h-[160px] w-[160px]" aria-hidden="true">
      <circle cx="110" cy="110" r="102" fill="none" stroke="#c5d5e6" strokeWidth="2" />
      <circle cx="158" cy="48" r="10" fill="none" stroke="#f5b301" strokeWidth="2" />
      <circle cx="58" cy="58" r="16" fill="none" stroke="#1aa66a" strokeWidth="2" />
      <path d="M58 50V58L64 62" fill="none" stroke="#1aa66a" strokeWidth="2" strokeLinecap="round" />
      <g stroke="#1d4f91" strokeWidth="2" strokeLinecap="round">
        <path d="M40 118V158" />
        <path d="M40 118L55 108M40 118L55 128M40 118L25 108" />
      </g>
      <rect x="78" y="78" width="42" height="24" rx="2" fill="none" stroke="#1d4f91" strokeWidth="2" />
      <path d="M84 84H114M84 90H114M84 96H114" stroke="#1d4f91" strokeWidth="1.3" />
      <rect x="48" y="148" width="30" height="18" rx="2" fill="none" stroke="#22c55e" strokeWidth="2" />
      <path d="M78 98L63 148" fill="none" stroke="#94a3b8" strokeWidth="1.6" />
      <path
        d="M108 118L148 92L168 108V152H108V118Z"
        fill="none"
        stroke="#0b2a4a"
        strokeWidth="2"
      />
      <rect x="128" y="130" width="14" height="22" fill="none" stroke="#0b2a4a" strokeWidth="2" />
      <path d="M99 102L118 118" fill="none" stroke="#94a3b8" strokeWidth="1.6" />
    </svg>
  );
}

const advancedCards = [
  {
    id: "ess" as const,
    href: "/solutions/ess#ess",
    title: "ESS (Energy Storage System)",
    description:
      "A smart battery hub that manages the timing and flow of electricity to save money and provide backup protection during blackouts.",
    Diagram: EssDiagram,
  },
  {
    id: "rtc" as const,
    href: "/solutions/rtc#rtc",
    title: "Round the Clock Renewable Energy (RTC) (Solar + wind + BESS/Lithium-ion Battery)",
    description:
      "Our Round the Clock Renewable Energy (RTC) (Solar + wind + BESS/Lithium-ion Battery) systems deliver uninterrupted power through the intelligent integration of solar energy, battery storage, wind, and smart power management. Designed for continuous energy supply, they reduce dependency on conventional grid electricity and fuel sources such as diesel generators.",
    Diagram: RtcDiagram,
  },
];

export default function AdvancedSolutionsSection({
  activeSolution,
}: {
  activeSolution?: SolutionKey;
}) {
  return (
    <>
      <section className="bg-[#eef3f8] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-[1000px] text-center">
          <p className="text-xs font-bold tracking-[0.16em] text-brand-green">ADVANCED SOLUTIONS</p>
          <h2 className="mt-3 font-display text-[clamp(1.4rem,3vw,2.05rem)] font-bold leading-tight text-brand-navy">
            Energy Storage and Round the Clock Renewable Energy (RTC) (Solar + wind +
            BESS/Lithium-ion Battery) Solutions
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-[0.95rem] leading-relaxed text-slate-500">
            For customers who need stronger backup, smarter energy control, and continuous
            renewable power, we design advanced storage and round-the-clock systems.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-[1100px] gap-6 lg:grid-cols-2">
          {advancedCards.map((card) => {
            const active = activeSolution === card.id;
            const Diagram = card.Diagram;
            return (
              <article
                key={card.id}
                id={card.id}
                className={`scroll-mt-28 rounded-2xl border bg-white p-6 text-center shadow-[0_10px_28px_rgba(15,23,42,0.05)] sm:p-8 ${
                  active
                    ? "border-brand-green/50 ring-1 ring-brand-green/20"
                    : "border-slate-200"
                }`}
              >
                <Diagram />
                <h3 className="mt-2 text-xl font-bold leading-snug text-brand-navy">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">{card.description}</p>
                <Link
                  href={card.href}
                  className="mt-5 inline-flex text-sm font-semibold text-brand-green hover:text-brand-green-dark"
                >
                  Learn more →
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
