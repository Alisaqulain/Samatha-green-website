import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductCategoriesSection from "@/components/ProductCategoriesSection";

type ProductKey = "home" | "elite" | "plus";

const productMeta: Record<
  ProductKey,
  { eyebrow: string; title: string; subtitle: string }
> = {
  home: {
    eyebrow: "reneμ Home",
    title: "Solar for Independent Homes",
    subtitle:
      "Clean rooftop energy with intelligent monitoring for everyday savings and energy independence.",
  },
  elite: {
    eyebrow: "reneμ Elite",
    title: "Premium Villa Energy Systems",
    subtitle:
      "High-performance renewable solutions designed for luxury spaces, aesthetics, and reliable backup.",
  },
  plus: {
    eyebrow: "reneμ Plus",
    title: "Commercial & Industrial Solar",
    subtitle:
      "Custom EPC delivery for complex sites focused on efficiency, uptime, and measurable ROI.",
  },
};

export default function ProductPage({ product }: { product: ProductKey }) {
  const meta = productMeta[product];

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        <section className="relative min-h-[360px] overflow-hidden bg-brand-navy sm:min-h-[420px]">
          <Image
            src="/about-hero.jpg"
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#041526]/78" />
          <div className="relative z-10 mx-auto flex min-h-[360px] max-w-[1280px] flex-col justify-center px-4 py-16 sm:min-h-[420px] sm:px-6 lg:px-8">
            <p className="text-xs font-bold tracking-[0.16em] text-brand-green">{meta.eyebrow}</p>
            <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.1rem,5vw,3.3rem)] font-extrabold leading-tight text-white">
              {meta.title}
            </h1>
            <p className="mt-4 max-w-2xl text-[0.98rem] leading-relaxed text-white/85 sm:text-base">
              {meta.subtitle}
            </p>
          </div>
        </section>
        <ProductCategoriesSection activeProduct={product} />
      </main>
      <Footer />
    </div>
  );
}
