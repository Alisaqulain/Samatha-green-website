import Image from "next/image";
import Link from "next/link";

const provideItems = [
  { label: "On Grid Solar Systems", href: "/solutions/on-grid#on-grid", icon: "grid" },
  { label: "Off Grid Solar Systems", href: "/solutions/off-grid#off-grid", icon: "battery" },
  { label: "Hybrid Solar Systems", href: "/solutions/hybrid#hybrid", icon: "hybrid" },
  { label: "Energy Storage Systems (BESS)", href: "/solutions/ess#ess", icon: "storage" },
  {
    label: "Round the Clock Renewable Energy (RTC)",
    sub: "Solar + Wind + BESS / Lithium-ion Battery",
    href: "/solutions/rtc#rtc",
    icon: "clock",
  },
  { label: "Rooftop Solar Solutions", href: "/services", icon: "roof" },
  { label: "Ground Mounted Solar Systems", href: "/services", icon: "ground" },
  { label: "Solar Carports", href: "/services", icon: "carport" },
] as const;

const whyItems = [
  { label: "Complete EPC Solar Solutions", icon: "epc" },
  { label: "Expert Site Survey & Design", icon: "survey" },
  { label: "Quality Materials & Reliable Installation", icon: "quality" },
  { label: "AMC Service Support", icon: "amc" },
  { label: "Fast Issue Resolution", icon: "fast" },
  { label: "Mobile App Monitoring", icon: "app" },
  { label: "Residential to Industrial Solutions", icon: "scale" },
] as const;

function ProvideIcon({ type }: { type: (typeof provideItems)[number]["icon"] }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true as const,
  };

  switch (type) {
    case "grid":
      return (
        <svg {...common}>
          <path d="M4 4H10V10H4V4ZM14 4H20V10H14V4ZM4 14H10V20H4V14ZM14 14H20V20H14V14Z" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
    case "battery":
      return (
        <svg {...common}>
          <rect x="3" y="7" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.6" />
          <path d="M19 10H21V14H19" stroke="currentColor" strokeWidth="1.6" />
          <path d="M7 10V14M11 10V14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "hybrid":
      return (
        <svg {...common}>
          <path d="M12 3L4 12H10L8 21L20 10H14L12 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        </svg>
      );
    case "storage":
      return (
        <svg {...common}>
          <rect x="5" y="4" width="14" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
          <path d="M9 8H15M9 12H15M9 16H13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
          <path d="M12 8V12L15 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "roof":
      return (
        <svg {...common}>
          <path d="M3 12L12 4L21 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 11V20H18V11" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        </svg>
      );
    case "ground":
      return (
        <svg {...common}>
          <path d="M4 18H20M6 18V10L12 6L18 10V18" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M10 18V13H14V18" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
    case "carport":
      return (
        <svg {...common}>
          <path d="M4 14V10L12 5L20 10V14" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M5 18H9M15 18H19M4 14H20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
  }
}

function WhyIcon({ type }: { type: (typeof whyItems)[number]["icon"] }) {
  const common = {
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true as const,
  };

  switch (type) {
    case "epc":
      return (
        <svg {...common}>
          <path d="M4 19V5H14L20 11V19H4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M14 5V11H20" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
    case "survey":
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.8" />
          <path d="M20 20L16.5 16.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "quality":
      return (
        <svg {...common}>
          <path d="M12 3L19 6.5V11.5C19 16 15.8 19.5 12 20.5C8.2 19.5 5 16 5 11.5V6.5L12 3Z" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
    case "amc":
      return (
        <svg {...common}>
          <path d="M12 7V12L15 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
    case "fast":
      return (
        <svg {...common}>
          <path d="M13 3L5 14H12L11 21L19 10H12L13 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
      );
    case "app":
      return (
        <svg {...common}>
          <rect x="7" y="3" width="10" height="18" rx="2" stroke="currentColor" strokeWidth="1.8" />
          <path d="M10 17H14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "scale":
      return (
        <svg {...common}>
          <path d="M4 19H20M6 19V11H10V19M14 19V7H18V19" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
      );
  }
}

export default function ProcessSection() {
  return (
    <>
      <section id="services" className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-[1100px] text-center">
          <p className="text-xs font-bold tracking-[0.16em] text-brand-green">OUR PROCESS</p>
          <h2 className="mx-auto mt-3 max-w-3xl font-display text-[clamp(1.6rem,3.4vw,2.35rem)] font-extrabold leading-tight text-brand-navy">
            We Ensure Smooth Flow in Our Process with 100% Results
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-slate-500">
            From the first conversation to long-term maintenance, every step is planned to keep
            your solar project clear, efficient, and dependable.
          </p>
        </div>

        <div className="relative mx-auto mt-10 w-full max-w-[980px]">
          <Image
            src="/process-infinity.png"
            alt="Our process: Solar Energy Assessment, System Design, Installation, Monitoring and Support"
            width={1200}
            height={700}
            className="h-auto w-full"
            sizes="(max-width: 1024px) 100vw, 980px"
          />
        </div>
      </section>

      <section className="bg-[#eef3f8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto grid max-w-[1280px] items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)] sm:p-8">
            <p className="text-xs font-bold tracking-[0.14em] text-brand-green">WHAT WE PROVIDE</p>
            <h3 className="mt-3 max-w-md font-display text-[clamp(1.4rem,2.5vw,1.85rem)] font-extrabold leading-tight text-brand-navy">
              Reliable Solar Systems for Every Energy Need
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-500 sm:text-[0.95rem]">
              Choose the right solar setup for your site, power usage, backup requirement, and
              long-term energy goals.
            </p>

            <div className="mt-7 grid flex-1 content-start gap-3 sm:grid-cols-2">
              {provideItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`group flex items-start gap-3 rounded-xl border border-slate-200 bg-white px-3.5 py-3.5 transition hover:-translate-y-1 hover:border-brand-green/50 hover:shadow-[0_12px_28px_rgba(15,23,42,0.08)] ${
                    "sub" in item ? "sm:min-h-[88px]" : ""
                  }`}
                >
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#e8f1fb] text-brand-blue transition group-hover:bg-brand-green group-hover:text-white">
                    <ProvideIcon type={item.icon} />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold leading-snug text-brand-navy">
                      {item.label}
                    </span>
                    {"sub" in item ? (
                      <span className="mt-1 block text-xs leading-relaxed text-slate-500">
                        {item.sub}
                      </span>
                    ) : null}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex h-full flex-col rounded-2xl bg-brand-navy p-6 text-white shadow-[0_10px_30px_rgba(15,23,42,0.18)] sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-green">
              Why Choose Us
            </p>
            <h3 className="mt-3 max-w-md font-display text-[clamp(1.4rem,2.5vw,1.85rem)] font-extrabold leading-tight sm:text-4xl sm:leading-tight">
              Built for dependable solar performance
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70 sm:text-[0.95rem] sm:leading-7">
              Our team handles planning, materials, installation, monitoring, and support so your
              system keeps producing with fewer interruptions.
            </p>

            <ul className="mt-7 flex flex-1 flex-col justify-between divide-y divide-white/10">
              {whyItems.map((item) => (
                <li
                  key={item.label}
                  className="group flex items-center gap-3.5 py-3.5 first:pt-0 last:pb-0"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-brand-green text-white transition group-hover:scale-110 group-hover:bg-white group-hover:text-brand-green">
                    <WhyIcon type={item.icon} />
                  </span>
                  <span className="text-[0.95rem] font-medium text-white transition group-hover:text-brand-green">
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
