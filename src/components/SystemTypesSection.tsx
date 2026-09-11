import Link from "next/link";

export type SolutionKey = "on-grid" | "off-grid" | "hybrid" | "ess" | "rtc";

const systemCards = [
  {
    id: "on-grid" as const,
    href: "/solutions/on-grid#on-grid",
    title: "On-Grid System",
    description:
      "The standard choice for the fastest return on investment (ROI) with hassle-free maintenance. This system is connected to the utility grid and helps reduce electricity bills through net metering.",
  },
  {
    id: "off-grid" as const,
    href: "/solutions/off-grid#off-grid",
    title: "Off-Grid System",
    description:
      "Recommended for locations where grid power is unavailable or unreliable. This system uses battery backup and works independently without utility grid support.",
  },
  {
    id: "hybrid" as const,
    href: "/solutions/hybrid#hybrid",
    title: "Hybrid System",
    description:
      "Best for areas with frequent power cuts. It combines battery backup and grid connection while also allowing excess power to be sent back through net metering.",
  },
  {
    id: "ess" as const,
    href: "/solutions/ess#ess",
    title: "ESS System",
    description:
      "Energy Storage Systems store surplus solar power in batteries so you can use clean energy later, improve self-consumption, and support critical loads when needed.",
  },
  {
    id: "rtc" as const,
    href: "/solutions/rtc#rtc",
    title: "RTC System",
    description:
      "Round the Clock Renewable Energy combines solar, wind, and BESS/lithium-ion storage to deliver more consistent clean power across day and night.",
  },
];

const comparisonRows = [
  {
    property: "Connection to Grid",
    onGrid: "Yes",
    offGrid: "No",
    hybrid: "Yes",
  },
  {
    property: "Battery Backup",
    onGrid: "No",
    offGrid: "Yes",
    hybrid: "Yes",
  },
  {
    property: "Night Time",
    onGrid: "Uses Grid",
    offGrid: "Uses Battery",
    hybrid: "Uses both Grid and Battery",
  },
  {
    property: "In Case of Low Energy Generation",
    onGrid: "Supplements through electric grid",
    offGrid: "Unable to charge battery",
    hybrid: "Supplements through electric grid",
  },
  {
    property: "In Case of Surplus Energy",
    onGrid: "Sent back to grid",
    offGrid: "Wasted",
    hybrid: "Sent back to the grid",
  },
  {
    property: "Cost",
    onGrid: "Low",
    offGrid: "High",
    hybrid: "High",
  },
  {
    property: "Works During Power Outages",
    onGrid: "No",
    offGrid: "Yes",
    hybrid: "Yes",
  },
  {
    property: "Unit Adjustment in Electricity Bill",
    onGrid: "Yes",
    offGrid: "No",
    hybrid: "Yes",
  },
];

function SystemDiagram({ type }: { type: SolutionKey }) {
  const label =
    type === "on-grid"
      ? "ON-GRID SYSTEM"
      : type === "off-grid"
        ? "OFF-GRID SYSTEM"
        : type === "hybrid"
          ? "HYBRID SYSTEM"
          : type === "ess"
            ? "ESS SYSTEM"
            : "RTC SYSTEM";

  return (
    <svg viewBox="0 0 220 220" className="mx-auto h-[170px] w-[170px]" aria-hidden="true">
      <circle cx="110" cy="110" r="104" fill="#f3f7fb" stroke="#d7e3ef" strokeWidth="2" />
      <circle cx="110" cy="110" r="92" fill="white" stroke="#e8eef5" strokeWidth="1.5" />

      {/* Sun */}
      {(type === "on-grid" || type === "hybrid" || type === "rtc") && (
        <g>
          <circle cx="158" cy="52" r="12" fill="#f5b301" />
          <g stroke="#f5b301" strokeWidth="2" strokeLinecap="round">
            <path d="M158 34V38M158 66V70M140 52H144M172 52H176M145 39L148 42M168 62L171 65M171 39L168 42M145 65L148 62" />
          </g>
        </g>
      )}

      {/* Wind for RTC */}
      {type === "rtc" && (
        <g stroke="#1d4f91" strokeWidth="2" strokeLinecap="round">
          <path d="M48 88V140" />
          <path d="M48 88L68 78M48 88L68 98M48 88L28 78" />
        </g>
      )}

      {/* House */}
      <path d="M58 118L110 78L162 118V168H58V118Z" fill="#e8f5ee" stroke="#1aa66a" strokeWidth="2.2" />
      <path d="M58 118L110 78L162 118" fill="none" stroke="#1aa66a" strokeWidth="2.2" />
      <rect x="98" y="138" width="24" height="30" fill="#0b2a4a" />

      {/* Solar panels on roof */}
      <g fill="#1d4f91" stroke="#0b2a4a" strokeWidth="0.8">
        <rect x="78" y="92" width="18" height="12" transform="rotate(-38 78 92)" />
        <rect x="96" y="86" width="18" height="12" transform="rotate(-38 96 86)" />
        <rect x="114" y="90" width="18" height="12" transform="rotate(-38 114 90)" />
      </g>

      {/* Inverter box */}
      <rect x="100" y="118" width="20" height="14" rx="2" fill="#64748b" />

      {/* Battery */}
      {(type === "off-grid" || type === "hybrid" || type === "ess" || type === "rtc") && (
        <g>
          <rect x="42" y="148" width="28" height="18" rx="2" fill="#22c55e" stroke="#15803d" strokeWidth="1.2" />
          <rect x="48" y="144" width="6" height="4" fill="#15803d" />
          <rect x="58" y="144" width="6" height="4" fill="#15803d" />
          <path d="M100 125H70V157" fill="none" stroke="#94a3b8" strokeWidth="2" />
        </g>
      )}

      {/* Grid pole */}
      {(type === "on-grid" || type === "hybrid") && (
        <g stroke="#0b2a4a" strokeWidth="2" strokeLinecap="round">
          <path d="M178 168V108" />
          <path d="M168 118H188M170 128H186" />
          <path d="M120 125H178" stroke="#94a3b8" />
          <circle cx="178" cy="108" r="3" fill="#0b2a4a" />
        </g>
      )}

      {/* ESS highlight battery only larger */}
      {type === "ess" && (
        <g>
          <rect x="148" y="136" width="32" height="22" rx="3" fill="#22c55e" stroke="#15803d" strokeWidth="1.2" />
          <path d="M120 125H148V147" fill="none" stroke="#94a3b8" strokeWidth="2" />
        </g>
      )}

      <text
        x="110"
        y="198"
        textAnchor="middle"
        fill="#1aa66a"
        fontSize="9"
        fontWeight="700"
        letterSpacing="0.8"
        fontFamily="var(--font-inter), ui-sans-serif, system-ui, sans-serif"
      >
        {label}
      </text>
    </svg>
  );
}

export default function SystemTypesSection({
  activeSolution,
}: {
  activeSolution?: SolutionKey;
}) {
  const primaryCards = systemCards.filter((card) =>
    ["on-grid", "off-grid", "hybrid"].includes(card.id),
  );

  return (
    <>
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-[1100px] text-center">
          <p className="text-xs font-bold tracking-[0.16em] text-brand-green">SYSTEM TYPES</p>
          <h2 className="mt-3 font-display text-[clamp(1.6rem,3.2vw,2.25rem)] font-bold text-brand-navy">
            Choose the Right Solar System
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-slate-500">
            The first three system types cover standard grid connected, independent, and backup
            ready solar requirements.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-[1200px] gap-6 md:grid-cols-2 xl:grid-cols-3">
          {primaryCards.map((card) => {
            const active = activeSolution === card.id;
            return (
              <article
                key={card.id}
                id={card.id}
                className={`scroll-mt-28 rounded-2xl border bg-white p-6 text-center shadow-[0_10px_28px_rgba(15,23,42,0.05)] transition ${
                  active
                    ? "border-brand-green/50 ring-1 ring-brand-green/20"
                    : "border-slate-200"
                }`}
              >
                <SystemDiagram type={card.id} />
                <h3 className="mt-2 text-xl font-bold text-brand-navy">{card.title}</h3>
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

      <section className="bg-[#eef3f8] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-[1100px] text-center">
          <p className="text-xs font-bold tracking-[0.16em] text-brand-green">COMPARISON</p>
          <h2 className="mt-3 font-display text-[clamp(1.6rem,3.2vw,2.25rem)] font-bold text-brand-navy">
            System Comparison Table
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-[0.95rem] leading-relaxed text-slate-500">
            Compare On Grid, Off Grid, and Hybrid solar systems across grid connection, backup,
            outage support, surplus energy handling, and cost.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-[1200px] overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-[0_10px_28px_rgba(15,23,42,0.05)]">
          <table className="min-w-[760px] w-full border-collapse text-left text-sm">
            <thead>
              <tr className="bg-brand-navy text-white">
                <th className="px-5 py-4 font-semibold">Property</th>
                <th className="px-5 py-4 font-semibold">On-Grid</th>
                <th className="px-5 py-4 font-semibold">Off-Grid</th>
                <th className="px-5 py-4 font-semibold">Hybrid</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, index) => (
                <tr
                  key={row.property}
                  className={index % 2 === 0 ? "bg-white" : "bg-[#f4f8fc]"}
                >
                  <td className="px-5 py-4 font-semibold text-brand-navy">{row.property}</td>
                  <td className="px-5 py-4 text-slate-600">{row.onGrid}</td>
                  <td className="px-5 py-4 text-slate-600">{row.offGrid}</td>
                  <td className="px-5 py-4 text-slate-600">{row.hybrid}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
