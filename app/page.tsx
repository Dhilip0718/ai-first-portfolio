import { BentoGrid } from "@/components/bento-grid";
import { HeroSection } from "@/components/hero-section";
import { SiteHeader } from "@/components/site-header";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" role="main" tabIndex={-1} className="pb-20">
        <HeroSection />
        <BentoGrid />
      </main>
      <footer
        id="contact"
        className="scroll-mt-24 border-t border-border/80 bg-muted/20"
        role="contentinfo"
      >
        <div className="mx-auto max-w-6xl space-y-6 px-4 py-10">
          <div className="text-center">
            <h2 className="text-lg font-semibold text-foreground">Get in touch</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Hoofddorp ·{" "}
              <a
                className="text-sky-400 underline-offset-4 hover:underline"
                href="mailto:dhilipram@gmail.com"
              >
                dhilipram@gmail.com
              </a>
              {" · "}
              <a className="text-sky-400 underline-offset-4 hover:underline" href="tel:+31620095319">
                +31 6 20095319
              </a>
            </p>
          </div>
          <p className="text-center text-xs leading-relaxed text-muted-foreground">
            This interface targets WCAG 2.1 Level AA practices (contrast, keyboard access,
            focus order, and live regions for streaming replies)—aligned with Dutch
            government accessibility guidance for public-sector-grade experiences.
          </p>
        </div>
      </footer>
    </>
  );
}
