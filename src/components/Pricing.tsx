"use client";

import { useEffect, useRef } from "react";

const plans = [
  {
    name: "Starter",
    price: "149",
    subtitle: "Ideal pentru prezență",
    description: "Menține-ți afacerea relevantă în mediul digital cu efort minim.",
    features: [
      "Social Media: 10 postări/lună (Facebook + Instagram)",
      "Google Reviews: Răspuns automat la recenzii pozitive (4-5★)",
      "Email Triage: Clasificare automată Inbox (Spam vs. Business)",
      "Raport lunar de activitate",
      "Suport pe Telegram",
    ],
    cta: "Începe cu Starter",
    popular: false,
    color: "border-gray-200",
  },
  {
    name: "Growth",
    price: "299",
    subtitle: "Cel mai ales",
    description: "Pentru afaceri care vor o comunicare activă și timp liber câștigat.",
    features: [
      "Social Media: 20 postări/lună (Facebook + Instagram)",
      "Google Reviews: Management complet (pozitive + negative)",
      "AI Copywriter Email: Draft-uri de răspuns pregătite automat",
      "Monitorizare & Alerte 24/7 pe Telegram",
      "Rapoarte săptămânale detaliate",
      "Suport prioritar pe Telegram",
    ],
    cta: "Alege Growth",
    popular: true,
    color: "border-coral-500",
  },
  {
    name: "Pro",
    price: "499",
    subtitle: "Departament AI Complet",
    description: "Dominanță digitală totală și automatizare operațională avansată.",
    features: [
      "Social Media Omnichannel: FB, IG + Google Business Profile",
      "Campanie Proactivă Recenzii: Colectare automată de feedback",
      "Sistem CRM Automatizat: Lead-uri centralizate (Sheets/CRM)",
      "Email Automation: Răspunsuri automate + Integrare Workflow",
      "Call Strategic Lunar: Optimizare performanță AI",
      "Suport VIP 24/7 pe Telegram",
    ],
    cta: "Maxim cu Pro",
    popular: false,
    color: "border-[#1A2B4A]",
  },
];

export default function Pricing() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".animate-on-scroll").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="preturi"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-[#E8E8E8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block bg-coral-500/10 text-coral-500 text-sm font-semibold px-4 py-2 rounded-full mb-4 border border-coral-500/20">
            💰 Investiție, nu cheltuială
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A2B4A] mb-6">
            Pachete clare,{" "}
            <span className="text-coral-500">fără surprize</span>
          </h2>
          <p className="text-[#1A2B4A]/60 text-lg max-w-2xl mx-auto">
            Alege pachetul potrivit pentru afacerea ta. Fără contracte pe termen
            lung — poți upgrade sau downgrade oricând.
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`animate-on-scroll animate-on-scroll-delay-${index + 1} relative rounded-3xl border-2 ${plan.color} ${
                plan.popular
                  ? "bg-[#1A2B4A] text-white shadow-2xl shadow-[#1A2B4A]/30 lg:scale-105 mt-4 lg:mt-0"
                  : "bg-white shadow-lg"
              } p-8 transition-all duration-300 hover:shadow-xl`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-coral-500 text-white text-xs font-bold px-5 py-2 rounded-full shadow-lg whitespace-nowrap">
                  ⭐ Recomandat
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1 mb-1">
                  <span
                    className={`text-4xl sm:text-5xl font-bold ${
                      plan.popular ? "text-white" : "text-[#1A2B4A]"
                    }`}
                  >
                    €{plan.price}
                  </span>
                  <span
                    className={`text-sm ${
                      plan.popular ? "text-white/60" : "text-[#1A2B4A]/40"
                    }`}
                  >
                    /lună
                  </span>
                </div>
                <h3
                  className={`text-xl font-bold mb-1 ${
                    plan.popular ? "text-white" : "text-[#1A2B4A]"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm font-medium mb-3 ${
                    plan.popular ? "text-coral-400" : "text-coral-500"
                  }`}
                >
                  {plan.subtitle}
                </p>
                <p
                  className={`text-sm ${
                    plan.popular ? "text-white/70" : "text-[#1A2B4A]/60"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              {/* Divider */}
              <div
                className={`border-t mb-6 ${
                  plan.popular ? "border-white/20" : "border-gray-100"
                }`}
              />

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.popular ? "bg-coral-500" : "bg-coral-100"
                      }`}
                    >
                      <svg
                        className={`w-3 h-3 ${
                          plan.popular ? "text-white" : "text-coral-600"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span
                      className={`text-sm ${
                        plan.popular ? "text-white/90" : "text-[#1A2B4A]/80"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={`block text-center py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  plan.popular
                    ? "bg-coral-500 text-white hover:bg-coral-400 shadow-lg shadow-coral-500/40"
                    : "bg-[#1A2B4A] text-white hover:bg-[#1A2B4A]/90"
                }`}
              >
                {plan.cta} →
              </a>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div className="text-center mt-12 animate-on-scroll">
          <div className="inline-flex items-center gap-3 bg-white border border-[#1A2B4A]/10 rounded-2xl px-6 py-4 shadow-sm">
            <span className="text-2xl">🛡️</span>
            <div className="text-left">
              <div className="font-semibold text-[#1A2B4A] text-sm">
                Garanție 30 de zile
              </div>
              <div className="text-[#1A2B4A]/50 text-xs">
                Nu ești mulțumit? Îți returnăm banii, fără întrebări.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
