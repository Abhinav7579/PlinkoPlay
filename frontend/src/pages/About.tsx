
export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-[url('https://i.ytimg.com/vi/LZAjXeALxLM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCsrVqHp5JWvGZ0KRpuddN7dPWriw')] bg-cover bg-center blur-xl opacity-50"
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 text-emerald-300 px-4 py-1 text-sm border border-emerald-500/30">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Safe • Secure • Fair
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            About <span className="text-emerald-400">PlinkoPlay</span>
          </h1>
          <p className="mt-4 max-w-3xl text-gray-200/90 text-lg">
            PlinkoPlay is a next‑gen Plinko experience focused on security, fairness, and smooth gameplay. We combine modern encryption, transparent odds, and responsible‑play tools so you can enjoy the thrill with confidence.
          </p>
        </div>
      </section>

      {/* Trust & Security Highlights */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6">
        {[
          {
            title: "Bank‑grade Security",
            desc:
              "Your data is protected with TLS/HTTPS in transit and industry‑standard hashing for credentials. We never store plain‑text passwords or OTPs.",
            icon: (
              <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 3l8 4v5c0 5-3.5 9-8 9s-8-4-8-9V7l8-4z" />
                <path d="M9 13l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ),
          },
          {
            title: "Provably Fair Logic",
            desc:
              "Deterministic game outcomes with verifiable seeds and server/client hashes. Check results yourself for transparency.",
            icon: (
              <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 12h16" />
                <path d="M12 4v16" />
                <circle cx="12" cy="12" r="9" />
              </svg>
            ),
          },
          {
            title: "Responsible Play",
            desc:
              "Session limits, cooling‑off, and self‑exclusion options are built‑in. We encourage smart, fun, and responsible gaming.",
            icon: (
              <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22s8-4 8-10V6l-8-4-8 4v6c0 6 8 10 8 10z" />
              </svg>
            ),
          },
        ].map((card) => (
          <div key={card.title} className="rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition shadow-lg">
            <div className="flex items-center gap-3 text-emerald-300">{card.icon}<span className="font-semibold text-white">{card.title}</span></div>
            <p className="mt-3 text-gray-300 text-sm leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </section>

      {/* What is Plinko? */}
      <section className="max-w-6xl mx-auto px-6 py-4 md:py-8">
        <div className="rounded-2xl bg-gradient-to-br from-emerald-500/10 via-white/5 to-transparent border border-white/10 p-6 md:p-10 shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">What is Plinko?</h2>
          <p className="text-gray-200/90 max-w-3xl">
            Plinko is a physics‑inspired game where a ball drops through pegs and lands in multiplier slots. At PlinkoPlay, we fine‑tune drop physics and RNG to ensure excitement without compromising fairness. Multipliers and payout tables are clearly displayed before you play.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto px-6 py-10 grid lg:grid-cols-2 gap-8 items-start">
        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl">
          <img
            src="https://i.ytimg.com/vi/LZAjXeALxLM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCsrVqHp5JWvGZ0KRpuddN7dPWriw"
            alt="Secure systems"
            className="w-full h-64 md:h-80 object-cover"
          />
        </div>
        <ul className="space-y-4">
          {[
            "Multiply your money, win big",
            "Fast deposits & payouts with transparent status updates.",
            "24/7 support — real people, real answers.",
            "Anti‑fraud and bot‑protection safeguards.",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1 inline-flex w-6 h-6 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">✓</span>
              <span className="text-gray-200/90">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Compliance & Fair Play Note */}
      <section className="max-w-6xl mx-auto px-6 pb-14">
        <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
          <h3 className="text-xl font-semibold">Compliance & Fair Play</h3>
          <p className="mt-2 text-gray-300 text-sm leading-relaxed">
            PlinkoPlay supports responsible gaming and access is restricted to players aged 18+. Availability may vary by region. Please ensure participation complies with your local laws. If you feel your play is no longer fun, make use of our limits, cooldowns, or self‑exclusion tools, and reach out to support.
          </p>
        </div>
      </section>

     

      {/* Footer Spacer */}
      <div className="h-6" />
    </div>
  );
}
