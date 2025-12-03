"use client";

import { motion } from 'framer-motion';
import { Smartphone, ShoppingCart, Coffee, Home, MessageCircle, Zap } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { getTranslation } from '@/lib/translations';

export default function Services() {
  const { language } = useLanguage();

  const services = [
    {
      icon: Smartphone,
      title: getTranslation('servicePwaWhatsapp', language),
      description: getTranslation('servicePwaWhatsappDesc', language),
    },
    {
      icon: ShoppingCart,
      title: getTranslation('serviceEcommerce', language),
      description: getTranslation('serviceEcommerceDesc', language),
    },
    {
      icon: Coffee,
      title: getTranslation('serviceCafe', language),
      description: getTranslation('serviceCafeDesc', language),
    },
    {
      icon: Home,
      title: getTranslation('serviceRental', language),
      description: getTranslation('serviceRentalDesc', language),
    },
  ];

  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      {/* subtle background orbs */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-40 -right-32 h-80 w-80 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-gradient-to-tr from-emerald-400/10 via-primary/10 to-transparent blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {getTranslation('servicesTitle', language).split(' ').map((word, index, array) =>
              index === array.length - 1 ? (
                <span key={index} className="text-primary">
                  {word}
                </span>
              ) : (
                <span key={index}>{word} </span>
              ),
            )}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {getTranslation('servicesDescription', language)}
          </p>
        </motion.div>

        {/* Vercel-style animated pipeline — simplified for smoothness */}
        <div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] gap-10 mb-16 items-center">
          {/* Left: copy + bullets */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="space-y-6 will-change-transform"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/60 px-3 py-1 text-xs font-medium text-primary shadow-sm backdrop-blur">
              <Zap className="h-3.5 w-3.5" />
              <span>Next.js • Supabase • WhatsApp</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold">
              We design flows that feel{' '}
              <span className="text-primary">
                instant
              </span>{' '}
              for your customers.
            </h3>
            <p className="text-muted-foreground text-base md:text-lg">
              From the first click to a WhatsApp message, everything is optimized to be fast, clear, and ready to
              convert. We use the same modern stack as top tech companies, without the WordPress bloat.
            </p>
            <ul className="space-y-3 text-sm md:text-base text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[11px] font-semibold">
                  1
                </span>
                <div>
                  <p className="font-medium text-foreground">Ultra-fast Next.js frontends</p>
                  <p className="text-xs md:text-sm">
                    Static + dynamic pages tuned for speed, SEO, and a snappy feel on mobile and desktop.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[11px] font-semibold">
                  2
                </span>
                <div>
                  <p className="font-medium text-foreground">Reliable Supabase backends</p>
                  <p className="text-xs md:text-sm">
                    Real-time database + auth so your data, orders, and dashboards are always in sync.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[11px] font-semibold">
                  3
                </span>
                <div>
                  <p className="font-medium text-foreground">WhatsApp-first conversion</p>
                  <p className="text-xs md:text-sm">
                    Customers jump straight into WhatsApp with pre-filled messages instead of slow checkout forms.
                  </p>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Right: animated "system" like Vercel */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="relative will-change-transform"
          >
            <div className="relative rounded-2xl border border-border/60 bg-gradient-to-b from-background/60 via-background/90 to-background/60 shadow-[0_0_60px_rgba(0,0,0,0.35)] p-5 md:p-6 overflow-hidden">
              {/* subtle grid background */}
              <div className="pointer-events-none absolute inset-0 opacity-[0.12]">
                <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,#ffffff12_1px,transparent_0)] [background-size:16px_16px]" />
              </div>

              {/* Animated pipeline (single entrance animations, no infinite loops) */}
              <div className="relative space-y-4">
                {/* Step 1: User action */}
                <motion.div
                  className="relative flex items-center gap-3 rounded-xl border border-border/80 bg-background/90 px-4 py-3 shadow-sm"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ delay: 0.05, duration: 0.45, ease: 'easeOut' }}
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Smartphone className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-foreground uppercase tracking-wide">Customer</p>
                    <p className="text-sm text-muted-foreground truncate">
                      "Browse menu & order a coffee"
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 text-[11px] text-emerald-400">
                    <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Live</span>
                  </div>
                </motion.div>

                {/* Connector 1 */}
                <motion.div
                  className="relative flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ delay: 0.15, duration: 0.4 }}
                >
                  <div className="h-px w-[76%] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                </motion.div>

                {/* Step 2: Next.js layer */}
                <motion.div
                  className="relative flex items-center justify-between gap-3 rounded-xl border border-border/80 bg-background/95 px-4 py-3 shadow-sm"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ delay: 0.2, duration: 0.45, ease: 'easeOut' }}
                >
                  <div className="flex flex-col gap-1">
                    <span className="inline-flex items-center gap-2 rounded-full bg-black text-white px-2.5 py-1 text-[11px] font-medium">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Next.js App Router
                    </span>
                    <p className="text-xs text-muted-foreground max-w-[220px]">
                      Renders pages in&nbsp;
                      <span className="font-semibold text-foreground">tens of milliseconds</span> with smart caching.
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-1 text-right">
                    <p className="text-[11px] text-muted-foreground">Time to first byte</p>
                    <p className="text-sm font-semibold text-emerald-400">48 ms</p>
                  </div>
                </motion.div>

                {/* Connector 2 */}
                <motion.div
                  className="relative flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                >
                  <div className="h-px w-[76%] bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />
                </motion.div>

                {/* Step 3: Supabase */}
                <motion.div
                  className="relative flex items-center justify-between gap-3 rounded-xl border border-emerald-500/40 bg-emerald-950/50 px-4 py-3 shadow-sm"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ delay: 0.25, duration: 0.45, ease: 'easeOut' }}
                >
                  <div className="flex flex-col gap-1">
                    <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 text-emerald-300 px-2.5 py-1 text-[11px] font-medium">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 animate-pulse" />
                      Supabase
                    </span>
                    <p className="text-xs text-emerald-100/80 max-w-[210px]">
                      Stores orders, inventory, and analytics with real-time updates.
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-1 text-right">
                    <p className="text-[11px] text-emerald-100/70">Queries / min</p>
                    <p className="text-sm font-semibold text-emerald-300">3.4k</p>
                  </div>
                </motion.div>

                {/* Connector 3 */}
                <motion.div
                  className="relative flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ delay: 0.35, duration: 0.4 }}
                >
                  <div className="h-px w-[76%] bg-gradient-to-r from-transparent via-[#25D366]/50 to-transparent" />
                </motion.div>

                {/* Step 4: WhatsApp handoff */}
                <motion.div
                  className="relative flex items-center gap-3 rounded-xl border border-[#25D366]/40 bg-[#111b14] px-4 py-3 shadow-sm"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ delay: 0.4, duration: 0.45, ease: 'easeOut' }}
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-black">
                    <MessageCircle className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-[#e7fff1] uppercase tracking-wide">WhatsApp</p>
                    <p className="text-sm text-[#c5f8da] truncate">
                      New order · 2 cappuccinos · Table 4
                    </p>
                  </div>
                  <div className="hidden sm:flex flex-col items-end gap-0.5 text-right">
                    <p className="text-[11px] text-[#9de9bc]">Reply time</p>
                    <p className="text-xs font-semibold text-[#e7fff1]">&lt; 30 sec</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Simple cards to keep the original services visible */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="bg-background/80 border border-border/70 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group"
            >
              <div className="mb-5 flex items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <service.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}