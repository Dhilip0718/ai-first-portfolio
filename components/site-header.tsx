import { Badge } from "@/components/ui/badge";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function SiteHeader() {
  return (
    <header
      className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-md supports-[backdrop-filter]:bg-background/75"
      role="banner"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:py-5">
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <Badge
              variant="default"
              className="text-xs font-semibold tracking-wide sm:text-sm"
              aria-label="Nationality and availability: Dutch citizen, immediately available"
            >
              Dutch Citizen | Immediate Availability
            </Badge>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Senior Full Stack Software Engineer
            </p>
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Dhilip
            </h1>
          </div>
        </div>
        <address className="not-italic">
          <ul className="flex flex-col gap-2 text-sm text-muted-foreground sm:items-end sm:text-right">
            <li className="flex items-start gap-2 sm:justify-end">
              <Mail className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
              <a
                className="min-h-11 py-2 text-foreground underline-offset-4 hover:underline focus-visible:rounded-sm"
                href="mailto:dhilipram@gmail.com"
              >
                dhilipram@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-2 sm:justify-end">
              <Phone className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
              <a
                className="min-h-11 py-2 text-foreground underline-offset-4 hover:underline focus-visible:rounded-sm"
                href="tel:+31620095319"
              >
                +31 6 20095319
              </a>
            </li>
            <li className="flex items-start gap-2 sm:justify-end">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
              <span>Hoofddorp</span>
            </li>
            <li className="flex items-start gap-2 sm:justify-end">
              <Linkedin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
              <a
                className="min-h-11 py-2 text-foreground underline-offset-4 hover:underline focus-visible:rounded-sm"
                href="https://www.linkedin.com/in/dhilip-sriram-rk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn profile
              </a>
            </li>
          </ul>
        </address>
      </div>
    </header>
  );
}
