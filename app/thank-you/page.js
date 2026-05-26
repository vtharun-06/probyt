import Link from "next/link";

export const metadata = {
  title: "You're on the list — ProByt",
  description: "Thanks for joining the ProByt waitlist.",
};

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center px-6 text-center">
      <div className="max-w-md">
        <div className="text-5xl mb-6">🎉</div>
        <h1 className="font-display text-4xl font-bold text-ink mb-4 leading-snug">
          You&apos;re on the list!
        </h1>
        <p className="text-muted text-sm leading-relaxed mb-8">
          We&apos;ll reach out the moment ProByt is ready to launch.
          Early waitlist members get{" "}
          <span className="font-semibold text-ink">founding member pricing</span>{" "}
          and first access.
        </p>

        <div className="bg-white border border-border rounded-2xl p-6 mb-8">
          <p className="text-sm font-semibold text-ink mb-3">
            Help us grow — share ProByt
          </p>
          <p className="text-xs text-muted mb-4 leading-relaxed">
            The more people who join, the faster we launch. Tell a friend who
            cares about their protein intake.
          </p>
          <div className="flex flex-col gap-2">
            <a
              href="https://twitter.com/intent/tweet?text=I+just+joined+the+ProByt+waitlist+%E2%80%94+1+poppable+byte+%3D+1g+protein.+No+math.+No+guessing.+Just+count.+Join+me+at+probyt.in&url=https://probyt.in"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 bg-ink text-white text-sm font-medium rounded-xl hover:bg-ink/80 transition-colors"
            >
              Share on Twitter/X
            </a>
            <a
              href="https://wa.me/?text=I+just+joined+the+ProByt+waitlist+%E2%80%94+1+poppable+byte+%3D+1g+protein.+Join+here%3A+https%3A%2F%2Fprobyt.in"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 bg-sage text-white text-sm font-medium rounded-xl hover:bg-sage-light transition-colors"
            >
              Share on WhatsApp
            </a>
          </div>
        </div>

        <Link
          href="/"
          className="text-sm text-muted hover:text-terra transition-colors"
        >
          ← Back to ProByt
        </Link>
      </div>
    </div>
  );
}
