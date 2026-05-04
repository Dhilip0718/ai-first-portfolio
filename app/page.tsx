import { BentoGrid } from "@/components/bento-grid";
import { SiteHeader } from "@/components/site-header";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" role="main" tabIndex={-1}>
        <BentoGrid />
      </main>
      <footer className="border-t border-border/80 bg-muted/20" role="contentinfo">
        <div className="mx-auto max-w-6xl px-4 py-8 text-center text-xs leading-relaxed text-muted-foreground">
          <p>
            This interface targets WCAG 2.1 Level AA practices (contrast, keyboard access,
            focus order, and live regions for streaming replies)—aligned with Dutch
            government accessibility guidance for public-sector-grade experiences.
          </p>
        </div>
      </footer>
    </>
  );
}
