"use client";

import { motion } from "framer-motion";
import { Globe2, Search, Rocket } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { getTranslation } from "@/lib/translations";

export default function SsgSsrBenefits() {
  const { language } = useLanguage();

  return (
    <section className="py-20 bg-background border-y border-border/60">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary mb-4">
            <Globe2 className="h-3.5 w-3.5" />
            <span>Built for SEO and speed</span>
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why our{" "}
            <span className="text-primary">
              Next.js + Supabase
            </span>{" "}
            stack ranks and converts better.
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            We use Static Site Generation (SSG) and Server-Side Rendering (SSR) to load content instantly and keep it
            fresh, which search engines and customers both love.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="rounded-xl border border-border/80 bg-muted/40 p-4">
                <p className="text-xs font-semibold text-primary mb-1 uppercase tracking-wide">
                  SSG — Static Site Generation
                </p>
                <p className="text-sm font-medium mb-2">
                  Blazing fast pages, pre-built at deploy time.
                </p>
                <p className="text-xs text-muted-foreground">
                  Your main pages are generated ahead of time and served from the edge, so they feel instant even on
                  slow connections.
                </p>
              </div>
              <div className="rounded-xl border border-border/80 bg-muted/40 p-4">
                <p className="text-xs font-semibold text-primary mb-1 uppercase tracking-wide">
                  SSR — Server-Side Rendering
                </p>
                <p className="text-sm font-medium mb-2">
                  Always-fresh data when it actually matters.
                </p>
                <p className="text-xs text-muted-foreground">
                  Product lists, availability, or dashboards can be rendered on every request, so SEO bots and users
                  always see up‑to‑date content.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Search className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-semibold">
                    Better SEO by design
                  </p>
                  <p className="text-xs text-muted-foreground">
                    HTML is ready on the server, so Google and other search engines can index your content without
                    struggling with client-side JavaScript.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Rocket className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-semibold">
                    Fast for humans, not just for Lighthouse
                  </p>
                  <p className="text-xs text-muted-foreground">
                    We pair smart caching with Supabase so real users get sub‑second responses while your business data
                    stays in sync.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="rounded-2xl border border-border/70 bg-muted/30 p-5 md:p-6 space-y-4 text-sm"
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground mb-1">
                  Real‑world performance snapshot
                </p>
                <p className="text-sm font-medium">
                  Typical Azinag site metrics
                </p>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 text-emerald-400 px-2.5 py-1 text-[11px] font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Core Web Vitals
              </span>
            </div>
            <div className="grid grid-cols-3 gap-3 text-xs">
              <div className="rounded-lg bg-background/70 border border-border/60 p-3">
                <p className="text-[10px] text-muted-foreground mb-1">
                  Largest Contentful Paint
                </p>
                <p className="text-sm font-semibold text-emerald-400">
                  &lt; 1.8s
                </p>
              </div>
              <div className="rounded-lg bg-background/70 border border-border/60 p-3">
                <p className="text-[10px] text-muted-foreground mb-1">
                  First Input Delay
                </p>
                <p className="text-sm font-semibold text-emerald-400">
                  &lt; 40ms
                </p>
              </div>
              <div className="rounded-lg bg-background/70 border border-border/60 p-3">
                <p className="text-[10px] text-muted-foreground mb-1">
                  SEO score
                </p>
                <p className="text-sm font-semibold text-emerald-400">
                  95+ / 100
                </p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              We combine SSG for the pages that never change and SSR for the data that does. That balance is what makes
              your site feel fast and stay high in search results.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


