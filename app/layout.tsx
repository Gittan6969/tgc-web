import "./globals.css";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "The Growth Company — Webbyrå som säljer",
  description: "Vi bygger snabba, konverterande webbplatser som ger dig fler möten och mer affärer.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "The Growth Company",
    description: "Webbyrå med fokus på konvertering och prestanda.",
    url: "https://example.com",
    siteName: "The Growth Company",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <body>
        <Header />
        <main className="container py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
