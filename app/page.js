import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Image from "next/image";
import ProductConcept from "@/components/ProductConcept";
import ProductCatalog from "@/components/ProductCatalog";
import WhyProByt from "@/components/WhyProByt";
import WaitlistForm from "@/components/WaitlistForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />

        {/* Full-width product banner */}
        <div data-cursor="image" data-cursor-label="ProByt" className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden group">
          <Image
            src="/images/Image 1.png"
            alt="ProByt bytes scattered on a surface — crispy waffle bites with chocolate filling"
            fill
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-ink/30 flex items-center px-8 md:px-16">
            <div>
              <p className="text-white/60 text-xs uppercase tracking-widest font-semibold mb-2">ProByt Bytes</p>
              <p className="font-display text-3xl sm:text-4xl font-bold text-white">Crispy outside.</p>
              <p className="font-display text-3xl sm:text-4xl font-bold text-terra italic">Chocolate inside.</p>
            </div>
          </div>
        </div>

        <Problem />
        <ProductConcept />
        <ProductCatalog />
        <WhyProByt />

        {/* Second CTA */}
        <section id="waitlist" className="py-28 px-6 bg-ink relative overflow-hidden">
          {/* Subtle background dots */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: "radial-gradient(circle, #C1440E 1px, transparent 1px)",
            backgroundSize: "32px 32px"
          }} />
          <div className="relative max-w-6xl mx-auto">
            <div className="max-w-2xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-terra/15 text-terra px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-8">
                <span className="w-1.5 h-1.5 bg-terra rounded-full animate-pulse" />
                Early Access · Limited Spots
              </div>
              <h2 className="font-display text-5xl sm:text-6xl font-bold text-white mb-5 leading-[0.95]">
                Be the first to
                <br />
                <span className="text-terra italic">get ProByt.</span>
              </h2>
              <p className="text-white/45 text-base max-w-md mx-auto mb-10 leading-relaxed">
                Early waitlist members get founding member pricing and first access when we launch.
                No spam — just a notification when we&apos;re ready.
              </p>
              <WaitlistForm variant="cta" dark />

              {/* Trust row */}
              <div className="flex flex-wrap justify-center gap-6 mt-10 pt-10 border-t border-white/8">
                {["Eggless", "No preservatives", "Baked not fried", "1g per byte"].map((t) => (
                  <span key={t} className="text-xs text-white/25 font-medium">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
