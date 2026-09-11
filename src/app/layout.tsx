import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { QuoteModalProvider } from "@/components/QuoteModal";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Samatha Green Energy Solutions",
  description:
    "Customized solar solutions and expert energy consultation for a cleaner, smarter future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className={`${inter.className} flex min-h-full flex-col font-sans`} suppressHydrationWarning>
        <QuoteModalProvider>{children}</QuoteModalProvider>
      </body>
    </html>
  );
}
