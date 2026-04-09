"use client";

const services = [
  {
    icon: "📱",
    title: "Social Media Automation",
    features: [
      "Postări automate pe Facebook, Instagram, Google Business",
      "Calendar editorial lunar generat AI",
      "Tu aprobi pe Telegram cu un click",
    ],
    comingSoon: false,
  },
  {
    icon: "📧",
    title: "Email Triage & Răspuns",
    features: [
      "Clasificare automată emailuri",
      "Răspuns instant la întrebări standard",
      "Notificare + draft pentru mesaje importante",
    ],
    comingSoon: false,
  },
  {
    icon: "⭐",
    title: "Google Review Manager",
    features: [
      "Monitorizare continuă recenzii",
      "Răspuns automat personalizat (pozitive)",
      "Draft pentru aprobare ta (negative, în 5 min)",
    ],
    comingSoon: false,
  },
  {
    icon: "📊",
    title: "Rapoarte Săptămânale",
    features: [
      "Raport automat luni dimineața",
      "Postări, emailuri, recenzii, rating mediu",
      "Recomandări de îmbunătățire",
    ],
    comingSoon: false,
  },
  {
    icon: "🔔",
    title: "Monitorizare & Alerte",
    features: [
      "Situații urgente → notificare instant pe telefon",
      "Reclamații, oportunități, mesaje critice",
      "Răspuns în maxim 15 minute",
    ],
    comingSoon: false,
  },
  {
    icon: "🤖",
    title: "Ambasador AI",
    features: [
      "Influencer hiperrealist pentru afacerea ta",
      "Prezență video/foto AI pe toate platformele",
      "Conținut personalizat cu fața brandului tău",
    ],
    comingSoon: true,
  },
];

export default function Services() {
  return (
    <section id="servicii" className="py-20 lg:py-32 bg-[#E8E8E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block bg-coral-500/10 text-coral-500 text-sm font-semibold px-4 py-2 rounded-full mb-4 border border-coral-500/20">
            🛠️ Tool-uri active
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A2B4A] mb-4">
            Ce face Clawbit pentru tine
          </h2>
          <p className="text-[#1A2B4A]/60 text-lg max-w-2xl mx-auto">
            Instrumente AI active 24/7 pentru afacerea ta
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`service-card relative bg-white rounded-2xl p-6 border border-[#1A2B4A]/10 shadow-sm animate-on-scroll animate-on-scroll-delay-${Math.min(index + 1, 4)} ${
                service.comingSoon ? "opacity-60" : ""
              }`}
            >
              {/* Coming Soon badge */}
              {service.comingSoon && (
                <div className="absolute top-4 right-4">
                  <span className="bg-coral-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Coming Soon
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className="text-4xl mb-4">{service.icon}</div>

              {/* Title */}
              <h3 className="text-[#1A2B4A] font-bold text-lg mb-4">
                {service.title}
              </h3>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-[#1A2B4A]/70 text-sm"
                  >
                    <svg
                      className="w-4 h-4 text-coral-500 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
