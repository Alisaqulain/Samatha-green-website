const pillars = [
  {
    title: "Innovation",
    text: "Smart, tech-enabled renewable-energy solutions powered by the Samatha clean energy ecosystem.",
    icon: "innovation",
  },
  {
    title: "Sustainability",
    text: "Driving the transition toward a cleaner, greener, and net-zero carbon future.",
    icon: "sustainability",
  },
  {
    title: "Reliability",
    text: "Delivering dependable, high-performance energy systems for long-term energy security.",
    icon: "reliability",
  },
  {
    title: "Savings",
    text: "Reducing energy costs through efficient and optimized renewable energy solutions.",
    icon: "savings",
  },
  {
    title: "Customer Centricity",
    text: "Providing tailored clean energy solutions with seamless digital support and lifecycle service.",
    icon: "customer",
  },
] as const;

const expertiseColumns = [
  {
    title: "Certified Experienced Team",
    icon: "badge",
    items: [
      {
        heading: "Certified Professionals",
        text: "Trained teams aligned with leading partners such as Waaree, Luminous, and Schneider Electric standards.",
      },
      {
        heading: "Deep Industry Knowledge",
        text: "Practical expertise across residential, commercial, industrial, and utility solar projects.",
      },
      {
        heading: "Safety Excellence",
        text: "Strict safety protocols from site survey through commissioning and handover.",
      },
    ],
  },
  {
    title: "Comprehensive Service & Project Management",
    icon: "clipboard",
    items: [
      {
        heading: "End-to-End Project Management",
        text: "Single-window coordination from design and procurement to installation and support.",
      },
      {
        heading: "Advanced System Design",
        text: "Optimized layouts and sizing for performance, roof constraints, and future expansion.",
      },
      {
        heading: "Financial & Policy Guidance",
        text: "Support with costing, savings estimates, and applicable policy or subsidy pathways.",
      },
      {
        heading: "Seamless System Integration",
        text: "Smooth integration with grid, storage, EV charging, and monitoring platforms.",
      },
    ],
  },
  {
    title: "Cutting-Edge Technology & Quality Assurance",
    icon: "quality",
    items: [
      {
        heading: "Tier-1 Technology Solutions",
        text: "Quality modules, inverters, and storage components selected for long-term reliability.",
      },
      {
        heading: "Quality Assurance Excellence",
        text: "Structured checks during installation, testing, and final commissioning.",
      },
      {
        heading: "Smart Performance Monitoring",
        text: "Digital tracking for generation, alerts, and service visibility after go-live.",
      },
      {
        heading: "Warranty & Long-Term Support",
        text: "Clear warranty coverage with responsive AMC and lifecycle service options.",
      },
    ],
  },
] as const;

function PillarIcon({ type }: { type: (typeof pillars)[number]["icon"] }) {
  const common = {
    width: 26,
    height: 26,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true as const,
  };

  switch (type) {
    case "innovation":
      return (
        <svg {...common}>
          <path
            d="M9 18H15M10 21H14M12 3A5 5 0 0 1 17 8C17 10.5 15.5 11.8 14.5 13H9.5C8.5 11.8 7 10.5 7 8A5 5 0 0 1 12 3Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "sustainability":
      return (
        <svg {...common}>
          <path
            d="M5 19C8 12 14 9 19 5C15 10 14 15 12 19C10 16 7 15 5 19Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path d="M12 19C11 14 9 11 6 9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    case "reliability":
      return (
        <svg {...common}>
          <path
            d="M12 3L19 6.5V11.5C19 16 15.8 19.5 12 20.5C8.2 19.5 5 16 5 11.5V6.5L12 3Z"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <path d="M8 13L11 10L13 12L16 9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "savings":
      return (
        <svg {...common}>
          <rect x="4" y="7" width="16" height="11" rx="5.5" stroke="currentColor" strokeWidth="1.7" />
          <circle cx="12" cy="12.5" r="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M7 12.5H8M16 12.5H17" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    case "customer":
      return (
        <svg {...common}>
          <path
            d="M5 15V11A7 7 0 0 1 19 11V15"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <rect x="3.5" y="13" width="4" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.7" />
          <rect x="16.5" y="13" width="4" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.7" />
          <path d="M19 18H15.5A2.5 2.5 0 0 1 13 15.5V14" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      );
  }
}

function ColumnIcon({ type }: { type: (typeof expertiseColumns)[number]["icon"] }) {
  const common = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true as const,
  };

  if (type === "badge") {
    return (
      <svg {...common}>
        <circle cx="12" cy="10" r="6" stroke="currentColor" strokeWidth="1.7" />
        <path d="M9.5 10.2L11.1 11.8L14.7 8.4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.5 15.5L7 20L12 18L17 20L15.5 15.5" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "clipboard") {
    return (
      <svg {...common}>
        <rect x="6" y="4.5" width="12" height="16" rx="2" stroke="currentColor" strokeWidth="1.7" />
        <path d="M9 4.5H15V6.5H9V4.5Z" stroke="currentColor" strokeWidth="1.7" />
        <path d="M9 10H15M9 13.5H15M9 17H13" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path
        d="M12 3L13.8 8.2L19 9L14.7 12.5L16.2 18L12 15.2L7.8 18L9.3 12.5L5 9L10.2 8.2L12 3Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function AboutPillarsSection() {
  return (
    <>
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-[1100px] text-center">
          <p className="text-xs font-bold tracking-[0.16em] text-brand-green">CORE PILLARS</p>
          <h2 className="mt-3 font-display text-[clamp(1.55rem,3vw,2.2rem)] font-bold text-brand-navy">
            The Principles Behind Our Clean Energy Ecosystem
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-slate-500">
            Our work is guided by innovation, sustainability, reliability, savings, and a
            customer-first approach across every project.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-[1280px] gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-[0_8px_22px_rgba(15,23,42,0.04)]"
            >
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
                <PillarIcon type={pillar.icon} />
              </span>
              <h3 className="mt-4 text-base font-bold text-brand-navy">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#eef3f8] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-[1100px] text-center">
          <p className="text-xs font-bold tracking-[0.12em] text-brand-green">
            QUALIFICATIONS, EXPERTISE, COMPLIANCES AND CERTIFICATIONS
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.55rem,3vw,2.2rem)] font-bold text-brand-navy">
            Expertise and Capabilities
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-[0.95rem] leading-relaxed text-slate-500">
            From certified project teams to advanced design, quality assurance, and long-term
            support — Samatha delivers end-to-end renewable energy capability.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-[1280px] gap-5 lg:grid-cols-3">
          {expertiseColumns.map((column) => (
            <article
              key={column.title}
              className="rounded-2xl border border-white bg-[#f8fbfd] p-6 shadow-[0_8px_24px_rgba(15,23,42,0.04)] sm:p-7"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
                <ColumnIcon type={column.icon} />
              </span>
              <h3 className="mt-4 text-lg font-bold leading-snug text-brand-navy">{column.title}</h3>
              <div className="mt-5 space-y-4">
                {column.items.map((item) => (
                  <div key={item.heading}>
                    <h4 className="text-sm font-semibold text-brand-navy">{item.heading}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500">{item.text}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
