import Image from "next/image";
import Link from "next/link";
import CtaBanner from "@/components/CtaBanner";

const productLinks = [
  { label: "reneμ Home", href: "/products/samatha-home#renemu-home" },
  { label: "reneμ Elite", href: "/products/samatha-elite#renemu-elite" },
  { label: "reneμ Plus", href: "/products/samatha-plus#renemu-plus" },
  { label: "Services & AMC Support", href: "/services" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/#products" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
];

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7v3h3v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}

export default function Footer({ showCta = true }: { showCta?: boolean }) {
  return (
    <div>
      {showCta ? <CtaBanner /> : null}
      <footer id="contact" className="bg-brand-navy text-white">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.3fr_0.8fr_0.9fr_1.2fr] lg:gap-8 lg:px-8 lg:py-16">
          <div>
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/logo.png"
                alt="Samatha Green Energy Solutions"
                width={280}
                height={64}
                className="h-12 w-auto object-contain sm:h-14"
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              Professional solar panel installation, hybrid systems, and long-term support for
              homes, businesses, and industrial projects across Bengaluru and beyond.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-brand-green hover:text-brand-green"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-brand-green hover:text-brand-green"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-base font-bold">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition hover:text-brand-green"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold">Products</h3>
            <ul className="mt-4 space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition hover:text-brand-green"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold">Contact</h3>
            <ul className="mt-4 space-y-3.5 text-sm text-white/75">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-brand-green">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M6.5 4.5H9L10.5 8L8.7 9.2C9.6 11.1 11.1 12.7 13 13.8L14.3 12L18 13.5V16C18 17.1 17.1 18 16 18C9.9 18 5 13.1 5 7C5 5.9 5.9 5 7 5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <a href="tel:8050018267" className="transition hover:text-brand-green">
                  8050018267
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-brand-green">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M4 7L12 13L20 7" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                  </svg>
                </span>
                <a
                  href="mailto:enquiry@samatha.green"
                  className="transition hover:text-brand-green"
                >
                  enquiry@samatha.green
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-brand-green">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M12 21S5 14.8 5 10A7 7 0 0 1 19 10C19 14.8 12 21 12 21Z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </span>
                <span>
                  No #53, Kowdenahalli, Kalkere Main Rd
                  <br />
                  Bengaluru, Karnataka 560016
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-brand-green">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M12 8V12L15 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </span>
                <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10">
          <p className="mx-auto max-w-[1280px] px-4 py-4 text-center text-xs leading-relaxed text-white/65 sm:px-6 lg:px-8 sm:text-sm">
            Copyright © 2024 Samatha Green Energy Solutions Pvt Ltd. All rights reserved. Powered by{" "}
            <span className="text-brand-green">Green Glow Solutions</span>.
          </p>
        </div>
      </footer>
    </div>
  );
}
