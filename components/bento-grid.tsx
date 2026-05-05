"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Award,
  Briefcase,
  Code2,
  GraduationCap,
  Layers,
  Rocket,
} from "lucide-react";

import { PortfolioChat } from "@/components/portfolio-chat";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const reducedMotionProps = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.25 },
};

function Tile({
  className,
  children,
  delay = 0,
  id,
}: {
  className?: string;
  children: ReactNode;
  delay?: number;
  id?: string;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className={cn("h-full scroll-mt-24", className)} id={id}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={cn("h-full scroll-mt-24", className)}
      id={id}
      {...reducedMotionProps}
      transition={{ ...reducedMotionProps.transition, delay }}
    >
      {children}
    </motion.div>
  );
}

export function BentoGrid() {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 pb-16 pt-6 md:grid-cols-12 md:gap-5 md:pt-8">
      <Tile id="about" className="md:col-span-7" delay={0}>
        <Card className="h-full border-border/80 bg-card/80">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <Briefcase className="size-5 text-primary" aria-hidden />
              Profile
            </CardTitle>
            <CardDescription>
              11+ years building high-performance web apps and distributed systems;
              React, TypeScript, GraphQL, Next.js; AI-facing tooling (MCP), Python,
              and full-cycle delivery with DevOps and Kubernetes.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm leading-relaxed text-muted-foreground">
            <p>
              Strong in extensible design systems, CI/CD, and user-centric delivery
              from concept to deployment—currently Frontend Engineer at Backbase,
              Amsterdam, including developer-facing MCP integrations so IDEs and
              assistants can query internal documentation securely.
            </p>
          </CardContent>
        </Card>
      </Tile>

      <Tile className="md:col-span-5" delay={0.05}>
        <Card className="h-full border-border/80 bg-card/80">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <Layers className="size-5 text-primary" aria-hidden />
              Core stack
            </CardTitle>
            <CardDescription>
              Selected technologies aligned with senior full-stack delivery.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {[
              "React",
              "Next.js",
              "Angular",
              "TypeScript",
              "GraphQL",
              "Python",
              "MCP",
              "Node.js",
              "NestJS",
              "Azure",
              "Kubernetes",
              "Docker",
              "PostgreSQL",
            ].map((skill) => (
              <Badge key={skill} variant="secondary" className="font-normal">
                {skill}
              </Badge>
            ))}
          </CardContent>
        </Card>
      </Tile>

      <Tile id="skills" className="lg:col-span-4" delay={0.1}>
        <Card className="h-full border-border/80 bg-card/80">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <Code2 className="size-5 text-primary" aria-hidden />
              Skills snapshot
            </CardTitle>
            <CardDescription>
              Frontend, backend, DevOps, data, and engineering practices.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <div>
              <p className="font-medium text-foreground">Frontend</p>
              <p>
                React, Next.js, Angular, Vue, RxJS, design systems, Figma, mobile-first
                UX.
              </p>
            </div>
            <div>
              <p className="font-medium text-foreground">Backend</p>
              <p>
                Node.js, NestJS, Python, Django, Prisma, REST/OpenAPI, streaming &
                GraphQL APIs.
              </p>
            </div>
            <div>
              <p className="font-medium text-foreground">Platform</p>
              <p>
                Azure DevOps, CI/CD, Kubernetes, Docker, GitHub, messaging (e.g. EMS),
                PostgreSQL, Oracle SQL.
              </p>
            </div>
            <div>
              <p className="font-medium text-foreground">AI &amp; developer tooling</p>
              <p>
                Model Context Protocol (MCP), FastMCP, semantic doc search, OAuth /
                token auth for assistants and IDEs, REST APIs for integrations,
                GitOps-style deploys where applicable.
              </p>
            </div>
          </CardContent>
        </Card>
      </Tile>

      <Tile className="lg:col-span-4" delay={0.12}>
        <Card className="h-full border-border/80 bg-card/80">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <Award className="size-5 text-primary" aria-hidden />
              Certifications
            </CardTitle>
            <CardDescription>Microsoft Azure fundamentals and developer track.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
              <li>AZ-900 — Azure Fundamentals</li>
              <li>AZ-204 — Developing solutions for Microsoft Azure</li>
            </ul>
          </CardContent>
        </Card>
      </Tile>

      <Tile id="clients" className="md:col-span-12 lg:col-span-8" delay={0.14}>
        <Card className="border-border/80 bg-card/80">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <Rocket className="size-5 text-primary" aria-hidden />
              Selected experience
            </CardTitle>
            <CardDescription>
              Recent roles—details map to resume bullets for deeper screening.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6 md:grid-cols-3">
            <section aria-labelledby="role-backbase">
              <h4 id="role-backbase" className="font-semibold text-foreground">
                Frontend Engineer — Backbase
              </h4>
              <p className="text-xs text-muted-foreground">Amsterdam · Nov 2021 – Present</p>
              <ul className="mt-2 list-inside list-disc space-y-2 text-sm text-muted-foreground">
                <li>
                  React/TypeScript products at scale, design system contributions,
                  cross-functional releases, performance and Core Web Vitals focus.
                </li>
                <li>
                  Built and maintained a production{" "}
                  <span className="font-medium text-foreground">MCP server</span>{" "}
                  (Python, FastMCP) so Cursor, agents, and internal tooling answer
                  questions from Backbase documentation via semantic search and chat—
                  with Azure OAuth/PAT auth and Kubernetes/GitOps deployment.
                </li>
              </ul>
            </section>
            <section aria-labelledby="role-tcs-devops">
              <h4 id="role-tcs-devops" className="font-semibold text-foreground">
                Full Stack DevOps Engineer — TCS
              </h4>
              <p className="text-xs text-muted-foreground">Amsterdam · Jan 2021 – Oct 2021</p>
              <p className="mt-2 text-sm text-muted-foreground">
                MAAP portal & Policy Vault, Vue.js app, Django REST APIs, Azure
                Kubernetes deployments.
              </p>
            </section>
            <section aria-labelledby="role-tcs-dev">
              <h4 id="role-tcs-dev" className="font-semibold text-foreground">
                Software Developer — TCS
              </h4>
              <p className="text-xs text-muted-foreground">Amsterdam · Mar 2013 – Dec 2019</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Full-stack delivery, Angular 8 trading UI, API integrations across
                distributed banking systems.
              </p>
            </section>
          </CardContent>
        </Card>
      </Tile>

      <Tile className="md:col-span-12 lg:col-span-4" delay={0.16}>
        <Card className="h-full border-border/80 bg-card/80">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <GraduationCap className="size-5 text-primary" aria-hidden />
              Education & languages
            </CardTitle>
            <CardDescription>Formal education and working languages.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>
              <span className="font-medium text-foreground">Bachelor of Engineering - Mechanical Engineering</span>
              {" · "}
              PSNA CET, Tamil Nadu (2008–2012)
            </p>
            <p>
              <span className="font-medium text-foreground">Languages:</span> English
              (professional); Dutch (A2 working basics).
            </p>
          </CardContent>
        </Card>
      </Tile>

      <Tile id="projects" className="md:col-span-12" delay={0.18}>
        <Card className="border-border/80 bg-card/80">
          <CardHeader>
            <CardTitle className="text-xl">Personal projects</CardTitle>
            <CardDescription>
              Shipping products across marketing sites, ATS tooling, and cloud-kitchen
              experiences.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-3">
            <article>
              <h4 className="font-semibold text-foreground">ATS-assisted resume builder</h4>
              <p className="mt-1 text-sm text-muted-foreground">
                Next.js 15, React, TypeScript, React-PDF, Netlify, AI-assisted parsing,
                PDF export, auth.
              </p>
            </article>
            <article>
              <h4 className="font-semibold text-foreground">D Square Kitchen</h4>
              <p className="mt-1 text-sm text-muted-foreground">
                Angular (standalone, Signals), Tailwind, Lucide, mobile-first marketing,
                WhatsApp pre-order flows.
              </p>
            </article>
            <article>
              <h4 className="font-semibold text-foreground">Easy Escapes Travel Advisor</h4>
              <p className="mt-1 text-sm text-muted-foreground">
                HTML/CSS/JS marketing site for holidays, packages, services, and
                testimonials.
              </p>
            </article>
          </CardContent>
        </Card>
      </Tile>

      <Tile id="chat" className="md:col-span-12" delay={0.2}>
        <PortfolioChat />
      </Tile>
    </div>
  );
}
