"use client";

import { useEffect, useRef } from "react";

const problems = [
  {
    emoji: "📱",
    title: "Social media neglijat",
    description:
      "Ultima postare de acum 3 săptămâni? Clienții pierd încrederea când văd un profil inactiv. Concurența postează zilnic, tu abia ai timp să răspunzi la comentarii.",
    stat: "73% din clienți",
    statDesc: "verifică social media înainte să cumpere",
  },
  {
    emoji: "⭐",
    title: "Recenzii fără răspuns",
    description:
      "O recenzie negativă fără răspuns e mai dăunătoare decât recenzia în sine. Clienții mulțumiți rareori lasă recenzii, cei nemulțumiți — mereu.",
    stat: "88% din clienți",
    statDesc: "citesc răspunsurile la recenzii",
  },
  {
    emoji: "📧",
    title: "Emailuri și mesaje pierdute",
    description:
      "Inbox plin, întrebări fără răspuns, clienți care pleacă la concurență. Fiecare email neanswered e o oportunitate de vânzare ratată.",
    stat: "30% din lead-uri",
    statDesc: "se pierd din cauza răspunsurilor întârziate",
  },
  {
    emoji: "🎯",
    title: "Nu știi ce să postezi",
    description:
      "Creativitatea are limite. Te blochezi în fața ecranului gol, nu știi ce conținut să creezi, iar când în sfârșit ai o idee, n-ai timp s-o execuți.",
    stat: "64% din afaceri",
    statDesc: "nu au o strategie de conținut clară",
  },
];

export default function Problems() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".animate-on-scroll").forEach((el, i) => {
              setTimeout(() => {
                el.classList.add("visible");
              }, i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="probleme"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block bg-red-100 text-red-600 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            😤 Recunoști aceste probleme?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-500 mb-6">
            Afacerea ta pierde timp și bani{" "}
            <span className="text-coral-500">fără să știi</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Proprietarii de afaceri mici se confruntă zilnic cu aceleași
            probleme. Vestea bună? Toate au o soluție automată.
          </p>
        </div>

        {/* Problems grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className={`animate-on-scroll animate-on-scroll-delay-${index + 1} bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-coral-200 group`}
            >
              {/* Icon */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
                {problem.emoji}
              </div>

              {/* Title */}
              <h3 className="text-navy-500 font-bold text-lg mb-3">
                {problem.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {problem.description}
              </p>

              {/* Stat */}
              <div className="bg-coral-50 rounded-xl p-3 border border-coral-100">
                <div className="text-coral-600 font-bold text-lg">
                  {problem.stat}
                </div>
                <div className="text-gray-500 text-xs mt-0.5">
                  {problem.statDesc}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 animate-on-scroll">
          <p className="text-gray-500 mb-4">
            Sună familiar? Nu ești singur — și există o soluție.
          </p>
          <a
            href="#servicii"
            className="inline-flex items-center gap-2 text-coral-500 font-semibold hover:text-coral-600 transition-colors"
          >
            Vezi cum rezolvăm asta
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
