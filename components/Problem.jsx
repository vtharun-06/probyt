"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const problems = [
  {
    stat: "80%",
    label: "of Indians are protein deficient",
    detail: "Most people eat less than half the protein their body needs daily. Not because they don't care — they just don't know.",
    icon: "🇮🇳",
    accent: "terra",
  },
  {
    stat: "≠",
    label: "Tracking protein is painful math",
    detail: "Open an app. Log every meal. Calculate grams. Get it wrong anyway. Nobody has time for this.",
    icon: "📊",
    accent: "sage",
  },
  {
    stat: "😐",
    label: "Healthy snacks taste like cardboard",
    detail: "Every protein bar is either a chalk brick or a sugar bomb pretending to be healthy. There's no middle ground.",
    icon: "🍫",
    accent: "terra",
  },
];

function StatCard({ p, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative bg-white rounded-3xl overflow-hidden border border-border hover:border-terra/20 hover:shadow-2xl hover:shadow-terra/8 transition-all duration-500"
    >
      {/* Top accent bar */}
      <div className={`h-1 w-full ${p.accent === "terra" ? "bg-terra" : "bg-sage"}`} />

      <div className="p-8">
        <div className="flex items-start justify-between mb-6">
          <span className="text-3xl">{p.icon}</span>
          <span className={`text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${
            p.accent === "terra"
              ? "text-terra bg-terra/8"
              : "text-sage bg-sage/10"
          }`}>
            Problem
          </span>
        </div>

        <div className={`font-display text-7xl font-bold leading-none mb-4 transition-colors duration-300 ${
          p.accent === "terra"
            ? "text-ink group-hover:text-terra"
            : "text-ink group-hover:text-sage"
        }`}>
          {p.stat}
        </div>

        <h3 className="text-lg font-bold text-ink mb-3 leading-snug">{p.label}</h3>
        <p className="text-sm text-muted leading-relaxed">{p.detail}</p>
      </div>
    </motion.div>
  );
}

export default function Problem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });

  return (
    <section id="problem" className="py-28 px-6 bg-cream border-t border-border">
      <div className="max-w-6xl mx-auto">

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-terra mb-4">
              The Problem
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-ink max-w-lg leading-[1.05]">
              India has a protein problem nobody is solving right.
            </h2>
          </div>
          <p className="text-muted text-sm max-w-xs leading-relaxed md:text-right shrink-0">
            Three separate problems. One product solves all three.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <StatCard key={p.label} p={p} index={i} />
          ))}
        </div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 bg-ink rounded-3xl px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="font-display text-xl font-bold text-white text-center sm:text-left">
            ProByt solves all three. Simultaneously.
          </p>
          <a
            href="#product"
            className="shrink-0 text-sm font-semibold bg-terra text-white px-6 py-3 rounded-full hover:bg-terra-light transition-all hover:shadow-lg hover:shadow-terra/30 active:scale-95"
          >
            See how →
          </a>
        </motion.div>

      </div>
    </section>
  );
}
