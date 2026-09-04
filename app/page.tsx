import type { Metadata } from "next";
import Script from "next/script";
import Portfolio from "@/components/portfolio/Portfolio";
import { portfolioContent, shared } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Juan Pablo Sanabria | Desarrollador Full Stack",
  description: portfolioContent.es.profile,
  alternates: {
    canonical: "/es/",
    languages: { es: "/es/", en: "/en/" },
  },
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: shared.contact.name,
    jobTitle: "Desarrollador Full Stack",
    email: `mailto:${shared.contact.email}`,
    sameAs: [shared.contact.linkedin],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Medellín",
      addressCountry: "CO",
    },
    knowsAbout: shared.technologies.map((item) => item.name),
  };

  return (
    <>
      <Script
        id="person-schema-es"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Portfolio content={portfolioContent.es} />
    </>
  );
}
