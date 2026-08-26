import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { About } from "@/components/site/About";
import { PracticeAreas } from "@/components/site/PracticeAreas";
import { Differentials } from "@/components/site/Differentials";
import { Book } from "@/components/site/Book";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { SiteFooter } from "@/components/site/SiteFooter";
import { FloatingActions } from "@/components/site/FloatingActions";
import { ADDRESS, PHONE_DISPLAY } from "@/components/site/site-data";

const TITLE = "Advogado Criminalista em Campos dos Goytacazes | Glaidemir Resende";
const DESCRIPTION =
  "Escritório de advocacia criminal em Campos dos Goytacazes/RJ. Defesa em flagrantes, Tribunal do Júri, habeas corpus e execução penal. Atendimento 24h pelo WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "advogado criminalista Campos dos Goytacazes, advocacia criminal RJ, habeas corpus Campos dos Goytacazes, advogado tribunal do júri, defesa criminal Campos",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          name: "Glaidemir Resende — Advocacia Criminal",
          description: DESCRIPTION,
          telephone: PHONE_DISPLAY,
          areaServed: "Campos dos Goytacazes, RJ",
          address: {
            "@type": "PostalAddress",
            streetAddress: ADDRESS.street,
            addressLocality: "Campos dos Goytacazes",
            addressRegion: "RJ",
            postalCode: "28035-260",
            addressCountry: "BR",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            reviewCount: "17",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-svh bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <PracticeAreas />
        <Differentials />
        <Book />
        <Testimonials />
        <Contact />
      </main>
      <SiteFooter />
      <FloatingActions />
    </div>
  );
}
