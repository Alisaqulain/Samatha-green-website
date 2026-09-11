import Image from "next/image";

const features = [
  {
    title: "Identify Energy Losses",
    description: "Detect excessive power consumption, wastage, and system inefficiencies.",
    icon: "search",
  },
  {
    title: "Improve System Efficiency",
    description: "Optimize electrical systems and equipment for stronger performance.",
    icon: "gauge",
  },
  {
    title: "Optimized Load Management",
    description: "Improve power distribution, operational stability, and energy utilization.",
    icon: "chart",
  },
  {
    title: "Renewable Energy Planning",
    description: "Identify solar integration and sustainable energy opportunities.",
    icon: "sun",
  },
  {
    title: "Detailed Energy Reporting",
    description: "Get actionable insights for smarter planning and decision-making.",
    icon: "report",
  },
  {
    title: "Long-Term Cost Savings",
    description: "Reduce operating expenses through energy-efficient operations.",
    icon: "savings",
  },
] as const;

function FeatureIcon({ type }: { type: (typeof features)[number]["icon"] }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true as const,
  };

  switch (type) {
    case "search":
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.7" />
          <path d="M16 16L20 20" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          <path d="M9 11H13M11 9V13" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    case "gauge":
      return (
        <svg {...common}>
          <path
            d="M5 16A7 7 0 0 1 19 16"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <path d="M12 16L16 10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          <circle cx="12" cy="16" r="1.5" fill="currentColor" />
        </svg>
      );
    case "chart":
      return (
        <svg {...common}>
          <path
            d="M5 19V11M10 19V7M15 19V13M20 19V9"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );
    case "sun":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.7" />
          <path
            d="M12 3.5V6M12 18V20.5M3.5 12H6M18 12H20.5M6.2 6.2L8 8M16 16L17.8 17.8M17.8 6.2L16 8M8 16L6.2 17.8"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );
    case "report":
      return (
        <svg {...common}>
          <rect x="6" y="3.5" width="12" height="17" rx="2" stroke="currentColor" strokeWidth="1.7" />
          <path
            d="M9 9H15M9 12.5H15M9 16H13"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );
    case "savings":
      return (
        <svg {...common}>
          <path
            d="M4 8L9 13L12 10L20 18"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M15 18H20V13" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
}

export default function EnergyAssessmentSection() {
  return (
    <section className="bg-[#eef3f8] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[0.95fr_1.15fr] lg:gap-12 lg:items-start">
        <div>
          <p className="text-xs font-bold tracking-[0.16em] text-brand-green">ENERGY ASSESSMENT</p>
          <h2 className="mt-3 max-w-md font-display text-[clamp(1.55rem,3vw,2.2rem)] font-extrabold leading-tight text-brand-navy">
            Smarter Energy Planning Before System Selection
          </h2>
          <p className="mt-4 max-w-lg text-[0.98rem] leading-8 text-slate-600">
            Our Energy Assessment services provide a detailed analysis of energy consumption,
            system performance, and efficiency gaps to identify cost-saving opportunities.
            Designed for residential, commercial, and industrial facilities, they help optimize
            energy usage and improve operational performance.
          </p>

          <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-2xl bg-slate-200 shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
            <Image
              src="/energy-assessment.jpg"
              alt="Technician reviewing energy assessment data on site"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-white bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(15,23,42,0.1)] sm:p-6 animate-fade-up"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/12 text-brand-green">
                <FeatureIcon type={feature.icon} />
              </span>
              <h3 className="mt-4 text-lg font-extrabold text-brand-navy">{feature.title}</h3>
              <p className="mt-2 leading-7 text-slate-600">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
