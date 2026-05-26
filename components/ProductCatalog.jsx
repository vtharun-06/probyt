"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const variants = [
  {
    name: "Dark Chocolate",
    tagline: "Intense. Bitter-sweet. Crispy.",
    detail: "Real dark chocolate ganache inside every bite. Bold flavour that doesn't hide behind sugar.",
    protein: "1g / byte",
    img: "/images/Image 4.png",
    badge: "Most Popular",
    badgeBg: "bg-terra text-white",
  },
  {
    name: "Milk Chocolate",
    tagline: "Smooth. Creamy. Addictive.",
    detail: "Lighter, sweeter, just as crispy. Perfect for those who want their protein without the bitterness.",
    protein: "1g / byte",
    img: "/images/Image 5.png",
    badge: "New Flavour",
    badgeBg: "bg-sage text-white",
  },
];

function VariantCard({ v, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 + index * 0.14 }}
      className="group bg-white rounded-3xl border border-border overflow-hidden hover:shadow-2xl hover:shadow-ink/10 hover:border-terra/15 transition-all duration-500"
    >
      {/* Image */}
      <div
        data-cursor="image"
        data-cursor-label={v.name}
        className="relative aspect-[4/3] overflow-hidden"
      >
        <Image
          src={v.img}
          alt={`ProByt ${v.name}`}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/20 to-transparent" />
        <div className="absolute top-4 left-4">
          <span className={`text-xs font-bold px-3 py-1.5 rounded-full shadow-sm ${v.badgeBg}`}>
            {v.badge}
          </span>
        </div>
        <div className="absolute bottom-4 right-4 bg-ink/70 backdrop-blur-sm rounded-xl px-3 py-2">
          <p className="text-white text-xs font-semibold uppercase tracking-wider">{v.protein}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-7">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-display text-2xl font-bold text-ink">{v.name}</h3>
        </div>
        <p className="text-terra text-sm font-semibold mb-3">{v.tagline}</p>
        <p className="text-muted text-sm leading-relaxed">{v.detail}</p>

        <div className="mt-5 pt-5 border-t border-border flex items-center justify-between">
          <span className="text-xs text-muted">Launching 2026</span>
          <a
            href="#waitlist"
            className="text-xs font-semibold text-terra hover:text-terra-light transition-colors"
          >
            Get early access →
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProductCatalog() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });

  return (
    <section className="py-16 sm:py-28 px-6 border-t border-border bg-cream">
      <div className="max-w-6xl mx-auto">

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 sm:mb-14"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-terra mb-4">
              The Range
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-ink leading-[1.05]">
              Two flavours.{" "}
              <span className="text-terra italic">One rule.</span>
            </h2>
          </div>
          <p className="text-muted text-sm max-w-xs leading-relaxed md:text-right shrink-0">
            Every variant. Every piece. Exactly 1g of protein. No exceptions.
          </p>
        </motion.div>

        {/* Variant cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {variants.map((v, i) => (
            <VariantCard key={v.name} v={v} index={i} inView={inView} />
          ))}
        </div>

        {/* Packaging — full bleed card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.38 }}
          className="relative rounded-3xl overflow-hidden bg-ink grid grid-cols-1 lg:grid-cols-2"
        >
          {/* Image side */}
          <div
            data-cursor="image"
            data-cursor-label="Pack"
            className="relative min-h-[360px] order-2 lg:order-1 group overflow-hidden"
          >
            <Image
              src="/images/Image 7.png"
              alt="ProByt resealable packaging — matte black pouch with terra stripe"
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-ink/30 lg:bg-gradient-to-l" />
          </div>

          {/* Text side */}
          <div className="order-1 lg:order-2 flex flex-col justify-center px-6 sm:px-10 py-8 sm:py-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-terra mb-4">
              Packaging
            </p>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4 leading-[1.1]">
              Resealable. Portable. Ready to count.
            </h3>
            <p className="text-white/50 text-sm leading-relaxed mb-8">
              Toss it in your bag, gym kit, or desk drawer.
              Resealable so your bytes stay crispy. Grab bytes, count, go.
            </p>
            <ul className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-y-3 gap-x-4">
              {["No preservatives", "Eggless", "Baked not fried", "High-protein", "Resealable pack", "Real chocolate"].map((tag) => (
                <li key={tag} className="flex items-center gap-2 text-xs text-white/55">
                  <span className="w-1.5 h-1.5 rounded-full bg-terra flex-shrink-0" />
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
