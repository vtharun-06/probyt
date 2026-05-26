"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    number: "01",
    action: "Pop",
    detail: "Grab a handful of ProByt bytes. Crispy waffle shell. Chocolate inside. Baked, not fried.",
    color: "text-terra",
  },
  {
    number: "02",
    action: "Count",
    detail: "Every single byte = exactly 1g of protein. Always. No calculation needed.",
    color: "text-sage",
  },
  {
    number: "03",
    action: "Hit your goal",
    detail: "Need 5g more? Eat 5 bytes. Done. Protein tracking has never been this simple.",
    color: "text-terra",
  },
];

function StepCard({ s, index, total }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.15 }}
      className="relative flex-1 p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/8 transition-all duration-300 group"
    >
      {/* Connector line */}
      {index < total - 1 && (
        <div className="hidden md:block absolute top-12 left-full w-6 h-px bg-white/15 z-10" />
      )}
      <div className={`font-display text-6xl font-bold mb-5 leading-none opacity-30 group-hover:opacity-60 transition-opacity ${s.color}`}>
        {s.number}
      </div>
      <h3 className={`text-2xl font-bold mb-3 ${s.color}`}>{s.action}</h3>
      <p className="text-sm text-white/50 leading-relaxed">{s.detail}</p>
    </motion.div>
  );
}

export default function ProductConcept() {
  const topRef = useRef(null);
  const topInView = useInView(topRef, { once: true, margin: "-20px" });
  const quoteRef = useRef(null);
  const quoteInView = useInView(quoteRef, { once: true, margin: "-20px" });

  return (
    <section id="product" className="py-28 px-6 bg-ink text-white">
      <div className="max-w-6xl mx-auto">

        {/* Header + cross-section image */}
        <div
          ref={topRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={topInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-terra mb-4">
              Meet ProByt
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6 leading-[1.05]">
              A snack that doubles as a{" "}
              <span className="text-terra italic">measuring tool.</span>
            </h2>
            <p className="text-white/55 text-base leading-relaxed mb-8 max-w-md">
              Poppable waffle bites with real chocolate inside. Baked, not fried.
              Eggless. No preservatives. Exactly 1g of protein in every single piece.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Crispy waffle shell", "Dark chocolate filling", "1g protein", "Baked"].map((t) => (
                <span key={t} className="text-xs text-white/50 border border-white/15 px-3 py-1.5 rounded-full">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={topInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-terra/10 rounded-[40px] blur-2xl" />
            <div
              data-cursor="image"
              data-cursor-label="View"
              className="relative rounded-[32px] overflow-hidden aspect-square shadow-2xl shadow-terra/10 group"
            >
              <Image
                src="/images/Image 2.png"
                alt="ProByt byte cross-section — crispy waffle shell with dark chocolate filling"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-108"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
          {steps.map((s, i) => (
            <StepCard key={s.number} s={s} index={i} total={steps.length} />
          ))}
        </div>

        {/* Big claim with image */}
        <motion.div
          ref={quoteRef}
          initial={{ opacity: 0, y: 40 }}
          animate={quoteInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-white/10 rounded-3xl overflow-hidden"
        >
          <div className="p-10 sm:p-14 flex flex-col justify-center">
            <p className="text-white/35 text-xs mb-5 uppercase tracking-widest font-semibold">
              The only snack that lets you say
            </p>
            <p className="font-display text-3xl sm:text-4xl font-bold leading-snug mb-8">
              &ldquo;I had{" "}
              <span className="text-terra">12 bytes</span> today.
              <br />
              That&apos;s{" "}
              <span className="text-sage">12 grams</span> of protein.&rdquo;
            </p>
            <div className="flex flex-wrap gap-1.5">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="w-5 h-5 rounded-full bg-terra" />
              ))}
            </div>
            <p className="text-white/35 text-xs mt-4">12 bytes · 12g protein · no math</p>
          </div>

          <div
            data-cursor="image"
            data-cursor-label="12g"
            className="relative min-h-[320px] lg:min-h-0 group overflow-hidden"
          >
            <Image
              src="/images/Image 8.png"
              alt="12 ProByt bytes arranged in a circle — 12 bytes equals 12g protein"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/30 to-transparent lg:bg-gradient-to-l" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
