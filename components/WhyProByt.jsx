"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const reasons = [
  {
    number: "01",
    title: "Precision no other snack has",
    description: "Protein bars give you 20g at once — all or nothing. ProByt gives you 1g per piece. Eat 3, eat 12, eat 30. You decide the dose, down to a single gram.",
    versus: "vs. protein bars: 20g fixed dose",
    icon: "⚡",
    accent: "terra",
  },
  {
    number: "02",
    title: "Actually tastes good",
    description: "Crispy waffle shell. Real chocolate inside. Baked, not fried. No chalk. No weird aftertaste. No compromises on flavor to hit a protein number.",
    versus: "vs. chalky protein supplements",
    icon: "🍫",
    accent: "sage",
  },
  {
    number: "03",
    title: "No app. No math. No guessing.",
    description: "Every other protein product makes you do homework. ProByt is the first where the serving IS the measurement. Just count the bytes.",
    versus: "vs. logging every meal in an app",
    icon: "🧮",
    accent: "terra",
  },
];

function ReasonRow({ r, index, inView }) {
  const isEven = index % 2 === 0;
  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.14 }}
      className={`flex flex-col md:flex-row gap-8 items-stretch p-8 rounded-3xl border transition-all duration-300 group hover:shadow-xl ${
        r.accent === "terra"
          ? "border-border hover:border-terra/20 bg-white"
          : "border-border hover:border-sage/20 bg-white"
      }`}
    >
      {/* Number + icon */}
      <div className="flex-shrink-0 flex md:flex-col items-center md:items-start gap-4 md:gap-0 md:w-24">
        <span className="text-3xl">{r.icon}</span>
        <span className={`font-display text-5xl font-bold leading-none mt-0 md:mt-3 ${
          r.accent === "terra" ? "text-terra/15 group-hover:text-terra/30" : "text-sage/15 group-hover:text-sage/30"
        } transition-colors`}>
          {r.number}
        </span>
      </div>

      {/* Divider */}
      <div className="hidden md:block w-px bg-border" />

      {/* Content */}
      <div className="flex-1">
        <h3 className="font-display text-2xl font-bold text-ink mb-3 leading-snug">{r.title}</h3>
        <p className="text-muted text-sm leading-relaxed mb-5">{r.description}</p>
        <span className={`inline-block text-xs font-semibold px-3 py-1.5 rounded-full border ${
          r.accent === "terra"
            ? "text-terra bg-terra/6 border-terra/15"
            : "text-sage bg-sage/8 border-sage/15"
        }`}>
          {r.versus}
        </span>
      </div>
    </motion.div>
  );
}

export default function WhyProByt() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });

  return (
    <section id="why" className="py-28 px-6 border-t border-border bg-cream">
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
              Why ProByt
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-ink leading-[1.05]">
              Built different.{" "}
              <span className="text-terra italic">On purpose.</span>
            </h2>
          </div>
          <p className="text-muted text-sm max-w-xs leading-relaxed md:text-right shrink-0">
            Not another protein bar. Not another supplement. Something the market has never seen.
          </p>
        </motion.div>

        {/* Lifestyle image banner */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative rounded-3xl overflow-hidden mb-8 h-72 sm:h-80 group"
          data-cursor="image"
          data-cursor-label="View"
        >
          <Image
            src="/images/Image 6.png"
            alt="Counting ProByt bytes on a plate — protein tracking made simple"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            style={{ objectPosition: "center 65%" }}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/75 via-ink/30 to-transparent" />
          <div className="absolute inset-0 flex items-center px-10">
            <div className="max-w-sm">
              <p className="text-white/50 text-xs uppercase tracking-widest font-semibold mb-3">The vision</p>
              <p className="font-display text-3xl sm:text-4xl font-bold text-white leading-snug">
                Count the bytes.
                <br />
                <span className="text-terra italic">Own your protein.</span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Reason rows */}
        <div className="flex flex-col gap-4">
          {reasons.map((r, i) => (
            <ReasonRow key={r.title} r={r} index={i} inView={inView} />
          ))}
        </div>

      </div>
    </section>
  );
}
