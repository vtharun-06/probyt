"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import WaitlistForm from "./WaitlistForm";

const tags = ["Eggless", "No preservatives", "Baked not fried", "Real chocolate"];

export default function Hero() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    fetch("/api/waitlist/count")
      .then((r) => r.json())
      .then((d) => setCount(d.count))
      .catch(() => {});
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-20 pb-16 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-sage/10 text-sage px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-8"
          >
            <span className="w-1.5 h-1.5 bg-sage rounded-full animate-pulse" />
            Coming Soon · Join the Waitlist
          </motion.div>

          <h1 className="font-display font-bold text-ink leading-[0.92] mb-6">
            <span className="block text-6xl sm:text-7xl md:text-8xl">Protein,</span>
            <span className="block text-6xl sm:text-7xl md:text-8xl text-terra italic">counted.</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted max-w-md leading-relaxed mb-2">
            Every ProByt byte = exactly 1g protein.
            Crispy waffle shell. Chocolate inside.
          </p>
          <p className="text-lg sm:text-xl text-ink font-semibold max-w-md mb-8">
            Eat 12 bytes → get 12g. No math. No apps.
          </p>

          <WaitlistForm variant="hero" />

          {/* Social proof */}
          {count !== null && count > 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-sm text-muted mt-5"
            >
              <span className="font-bold text-ink">{count}</span>{" "}
              {count === 1 ? "person" : "people"} already waiting
            </motion.p>
          )}

          {/* Trust tags */}
          <div className="flex flex-wrap gap-2 mt-6">
            {tags.map((tag) => (
              <span key={tag} className="text-xs text-muted border border-border px-3 py-1.5 rounded-full bg-white">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative"
        >
          {/* Decorative blob behind image */}
          <div className="absolute -inset-6 bg-terra/6 rounded-[40px] -z-10 blur-2xl" />

          <div
            data-cursor="image"
            data-cursor-label="View"
            className="relative rounded-[32px] overflow-hidden aspect-[4/5] w-full max-w-md mx-auto shadow-2xl shadow-ink/10 group"
          >
            <Image
              src="/images/Image 3.png"
              alt="A handful of ProByt bytes — each one exactly 1g of protein"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Bottom gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />

            {/* Floating info */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-widest font-semibold mb-1">Each byte</p>
                  <p className="font-display text-4xl font-bold text-white leading-none">1g</p>
                  <p className="text-white/50 text-sm mt-1">of protein. Exactly.</p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <div key={n} className="flex gap-1">
                      {[1, 2, 3].map((m) => (
                        <div key={m} className="w-2 h-2 rounded-full bg-terra/70" />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Floating badge — top right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, type: "spring" }}
            className="absolute -top-4 -right-4 bg-white border border-border rounded-2xl px-4 py-3 shadow-lg shadow-ink/8"
          >
            <p className="text-xs text-muted font-medium">Protein goal</p>
            <p className="font-display text-xl font-bold text-ink">12 bytes</p>
            <p className="text-xs text-sage font-semibold">= 12g ✓</p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
