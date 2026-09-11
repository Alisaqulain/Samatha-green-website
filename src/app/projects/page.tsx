import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProjectsGallery from "@/components/ProjectsGallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects & Gallery | Samatha Green Energy Solutions",
  description:
    "View completed solar energy projects including residential rooftop solar, hybrid solar with battery backup, and commercial solar installations.",
};

export default function ProjectsPage() {
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
          <div className="absolute inset-0 bg-[#041526]/80" />
          <div className="relative z-10 mx-auto flex min-h-[360px] max-w-[1280px] flex-col justify-center px-4 py-16 sm:min-h-[420px] sm:px-6 lg:px-8">
            <p className="text-xs font-bold tracking-[0.16em] text-brand-green">PROJECT GALLERY</p>
            <h1 className="mt-4 font-display text-[clamp(2.2rem,5vw,3.4rem)] font-extrabold leading-tight text-white">
              Projects & Gallery
            </h1>
            <p className="mt-4 max-w-2xl text-[0.98rem] leading-relaxed text-white/85 sm:text-base">
              A look at completed solar panel installation projects across homes, businesses, and
              industrial facilities.
            </p>
          </div>
        </section>
        <ProjectsGallery />
      </main>
      <Footer />
    </div>
  );
}
