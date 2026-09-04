import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import DocumentLanguage from "@/components/portfolio/DocumentLanguage";
import Portfolio from "@/components/portfolio/Portfolio";
import {
  locales,
  portfolioContent,
  shared,
  type Locale,
} from "@/data/portfolio";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale: candidate } = await params;
  if (!locales.includes(candidate as Locale)) return {};

  const locale = candidate as Locale;
  const isSpanish = locale === "es";
  const title = isSpanish
    ? "Juan Pablo Sanabria | Desarrollador Full Stack"
    : "Juan Pablo Sanabria | Full Stack Developer";
  const description = portfolioContent[locale].profile;

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/`,
      languages: { es: "/es/", en: "/en/" },
    },
    openGraph: {
      title,
      description,
      type: "profile",
      locale: isSpanish ? "es_CO" : "en_US",
      images: [{ url: "/og-card.svg", width: 1200, height: 630 }],
    },
  };
}

export default async function LocalizedPortfolio({ params }: PageProps) {
  const { locale: candidate } = await params;
  if (!locales.includes(candidate as Locale)) notFound();

  const locale = candidate as Locale;
  const content = portfolioContent[locale];
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: shared.contact.name,
    jobTitle:
      locale === "es" ? "Desarrollador Full Stack" : "Full Stack Developer",
    email: `mailto:${shared.contact.email}`,
    telephone: shared.contact.phoneDisplay,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Medellín",
      addressCountry: "CO",
    },
    knowsAbout: shared.technologies,
  };

  return (
    <>
      <DocumentLanguage locale={locale} />
      <Script
        id={`person-schema-${locale}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Portfolio content={content} />
    </>
  );
}
