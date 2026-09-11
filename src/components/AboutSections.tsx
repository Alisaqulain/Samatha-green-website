import Image from "next/image";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative min-h-[420px] overflow-hidden bg-brand-navy sm:min-h-[480px]">
      <Image
        src="/about-hero.jpg"
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[#041526]/78" />
      <div className="relative z-10 mx-auto flex min-h-[420px] max-w-[900px] flex-col items-center justify-center px-4 py-20 text-center sm:min-h-[480px] sm:px-6">
        <p className="text-xs font-bold tracking-[0.16em] text-brand-green">
          SOLAR ENERGY SOLUTIONS
        </p>
        <h1 className="mt-4 font-display text-[clamp(1.9rem,4.5vw,3rem)] font-bold leading-tight text-white">
          About Samatha Green Energy Solutions
        </h1>
        <p className="mt-5 max-w-2xl text-[0.98rem] leading-relaxed text-white/85 sm:text-base">
          Your trusted partner in the clean energy transition, delivering tech-enabled renewable
          energy solutions across residential, commercial, industrial, utility, and community
          requirements.
        </p>
      </div>
    </section>
  );
}

export function AboutIntroSection() {
  return (
    <>
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="text-xs font-bold tracking-[0.16em] text-brand-green">
              COMPANY INTRODUCTION
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.55rem,3vw,2.2rem)] font-bold leading-tight text-brand-navy">
              Advanced Renewable Energy Solutions with Digital Intelligence
            </h2>
            <p className="mt-5 text-[0.95rem] leading-relaxed text-slate-500 sm:text-base">
              Welcome to Samatha Green Energy Solutions Pvt Ltd., your trusted partner in the clean
              energy transition. We provide advanced renewable energy solutions with our
              tech-enabled platform to measure, build, and monitor high efficiency Solar PV systems,
              battery energy storage systems (BESS), EV charging infrastructure, wind energy
              integration, microgrid, green hydrogen, and allied technologies for residential,
              commercial, industrial, and utility requirements.
            </p>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-slate-500 sm:text-base">
              We provide our own Samatha platform to aggregate renewable energy systems into a clean
              energy ecosystem for residential, commercial, and industrial requirements. The
              platform supports performance tracking, status monitoring, digital warranty, and
              service requests.
            </p>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100 shadow-[0_16px_40px_rgba(15,23,42,0.1)]">
            <Image
              src="/about-dashboard.jpg"
              alt="Samatha energy monitoring platform dashboard"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#eef3f8] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-[1100px] gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-white bg-white p-7 shadow-[0_10px_28px_rgba(15,23,42,0.05)] sm:p-9">
            <h3 className="font-display text-2xl font-bold text-brand-navy">Our Mission</h3>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-slate-500 sm:text-base">
              Our mission is to deliver tech-enabled, reliable, and eco-friendly green energy
              solutions to residential, commercial, industrial, institutional, and utility customers
              that reduce energy costs and carbon footprint, supporting a cleaner, greener tomorrow
              for us and future generations.
            </p>
          </article>
          <article className="rounded-2xl border border-white bg-white p-7 shadow-[0_10px_28px_rgba(15,23,42,0.05)] sm:p-9">
            <h3 className="font-display text-2xl font-bold text-brand-navy">Our Vision</h3>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-slate-500 sm:text-base">
              Our vision is to accelerate the transition towards a cleaner and net-zero carbon
              future. Our innovative renewable energy platform empowers residential, commercial,
              industrial, utility, and community users with an integrated clean energy ecosystem.
            </p>
          </article>
        </div>

        <div className="mx-auto mt-10 flex max-w-[1100px] justify-center">
          <Link
            href="/#contact"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-brand-green px-7 text-sm font-semibold text-white transition hover:bg-brand-green-dark"
          >
            Talk to Our Experts
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
    </>
  );
}
