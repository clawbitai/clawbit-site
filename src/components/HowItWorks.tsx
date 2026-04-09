export default function HowItWorks() {
  const steps = [
    {
      icon: "🎯",
      step: "1",
      title: "Ne spui despre afacerea ta",
      description:
        "Completezi un formular simplu în 5 minute. Ne povestești ce faci, ce probleme ai și ce vrei să automatizezi.",
      duration: "5 minute",
    },
    {
      icon: "⚙️",
      step: "2",
      title: "Configurăm totul pentru tine",
      description:
        "Echipa noastră pregătește și testează automatizările personalizate pentru afacerea ta, fără să te deranjeze.",
      duration: "48 ore",
    },
    {
      icon: "🚀",
      step: "3",
      title: "Automatizarea rulează",
      description:
        "Tu aprobi, noi executăm. Sistemul funcționează non-stop, iar tu primești rapoarte clare despre ce s-a făcut.",
      duration: "Non-stop",
    },
  ];

  return (
    <section className="py-20 bg-navy-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-coral-500/15 border border-coral-500/30 rounded-full px-4 py-2 mb-4">
            <span className="text-coral-400 text-sm font-medium">
              ✨ Simplu de la primul pas
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Cum funcționează
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            De la zero la automatizare completă în mai puțin de 48 de ore.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop only) */}
          <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-coral-500/0 via-coral-500/40 to-coral-500/0" />

          {steps.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              {/* Icon circle */}
              <div className="relative mb-6">
                <div className="w-28 h-28 rounded-full bg-coral-500/10 border-2 border-coral-500/30 flex items-center justify-center text-5xl group-hover:bg-coral-500/20 group-hover:border-coral-500/60 transition-all duration-300 group-hover:scale-105">
                  {s.icon}
                </div>
                {/* Step badge */}
                <div className="absolute -top-2 -right-2 w-7 h-7 bg-coral-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">{s.step}</span>
                </div>
              </div>

              {/* Duration chip */}
              <div className="bg-white/5 border border-white/10 rounded-full px-3 py-1 mb-4">
                <span className="text-coral-400 text-xs font-semibold">{s.duration}</span>
              </div>

              <h3 className="text-white font-bold text-xl mb-3">{s.title}</h3>
              <p className="text-white/60 text-base leading-relaxed max-w-xs">{s.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-coral-500 hover:bg-coral-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl shadow-coral-500/30 hover:shadow-coral-500/50 hover:-translate-y-1 transition-all duration-200"
          >
            🎯 Începe în 5 minute
          </a>
        </div>
      </div>
    </section>
  );
}
