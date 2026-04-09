"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Hero() {
  const mascotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mascotRef.current;
    if (!el) return;
    setTimeout(() => {
      el.classList.add("opacity-100", "translate-y-0");
      el.classList.remove("opacity-0", "translate-y-8");
    }, 200);
  }, []);

  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
      style={{ background: "#E8E8E8" }}
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #f97316 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Text content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-[#f97316] rounded-full animate-pulse" />
              <span className="text-[#f97316] text-sm font-medium">
                AI Automation pentru România
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a2e4a] leading-tight mb-6">
              Afacerea ta pe{" "}
              <span className="text-[#f97316] relative">
                pilot automat
                <svg
                  className="absolute -bottom-2 left-0 right-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                >
                  <path
                    d="M2 10 C75 2, 225 2, 298 10"
                    stroke="#f97316"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.5"
                  />
                </svg>
              </span>
            </h1>

            <p className="text-[#1a2e4a]/70 text-lg sm:text-xl leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              Automatizăm social media, emailurile și recenziile Google pentru
              afaceri mici din România. Tu te concentrezi pe clienți —{" "}
              <span className="text-[#1a2e4a] font-semibold">
                noi avem grijă de restul.
              </span>
            </p>

            {/* Stats */}
            <div className="flex justify-center lg:justify-start gap-4 sm:gap-8 mb-8">
              {[
                { value: "10h+", label: "economisit/săpt." },
                { value: "3x", label: "mai multe recenzii" },
                { value: "98%", label: "satisfacție clienți" },
              ].map((stat) => (
                <div key={stat.label} className="text-center flex-1 sm:flex-none">
                  <div className="text-2xl font-bold text-[#f97316]">{stat.value}</div>
                  <div className="text-[#1a2e4a]/50 text-xs mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
              <a
                href="#contact"
                className="px-8 py-4 rounded-full font-semibold text-lg text-white text-center transition-all duration-200 hover:-translate-y-1"
                style={{
                  background: "linear-gradient(135deg, #f97316, #ea6c0a)",
                  boxShadow: "0 8px 24px rgba(249,115,22,0.35)",
                }}
              >
                🚀 Începe acum
              </a>
              <a
                href="#servicii"
                className="px-8 py-4 rounded-full font-semibold text-lg text-center border-2 border-[#1a2e4a]/20 text-[#1a2e4a] hover:border-[#1a2e4a]/40 transition-all duration-200 hover:-translate-y-1"
              >
                Descoperă serviciile
              </a>
            </div>

            {/* Trust badge */}
            <p className="text-[#1a2e4a]/40 text-sm text-center lg:text-left">
              🛡️ Garanție 30 de zile · Fără contract · Anulezi oricând
            </p>
          </div>

          {/* Mascot */}
          <div
            ref={mascotRef}
            className="order-1 lg:order-2 flex justify-center opacity-0 translate-y-8 transition-all duration-700 ease-out"
          >
            <div className="relative">
              {/* Pulsating shadow */}
              <div
                className="absolute bottom-4 left-1/2 -translate-x-1/2 w-48 h-8 rounded-full"
                style={{
                  background: "radial-gradient(ellipse, rgba(249,115,22,0.25), transparent 70%)",
                  animation: "pulse-shadow 4s ease-in-out infinite",
                }}
              />

              {/* Mascot image */}
              <div
                className="relative z-0 w-60 h-60 sm:w-72 sm:h-72 md:w-[360px] md:h-[360px]"
                style={{
                  animation: "float 4s ease-in-out infinite",
                  filter: "drop-shadow(0 16px 36px rgba(249,115,22,.22))",
                }}
              >
                <Image
                  src="/mascot.png"
                  alt="Clawbit - AI Automation Agent"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 640px) 240px, (max-width: 768px) 288px, 360px"
                />
              </div>

              {/* Floating badges */}
              <div
                className="hidden sm:flex absolute -right-4 top-8 bg-white rounded-2xl shadow-lg px-3 py-2 items-center gap-2 z-10"
                style={{ animation: "float 4s ease-in-out 0.5s infinite" }}
              >
                <span className="w-2 h-2 rounded-full bg-[#f97316]" />
                <span className="text-[#1a2e4a] font-semibold text-xs">Postare publicată</span>
              </div>

              <div
                className="hidden sm:flex absolute -left-4 top-1/2 bg-white rounded-2xl shadow-lg px-3 py-2 items-center gap-2 z-10"
                style={{ animation: "float 4s ease-in-out 1.3s infinite" }}
              >
                <span className="w-2 h-2 rounded-full bg-[#1a2e4a]" />
                <span className="text-[#1a2e4a] font-semibold text-xs">3 emailuri gestionate</span>
              </div>

              <div
                className="hidden sm:flex absolute -right-2 bottom-16 bg-white rounded-2xl shadow-lg px-3 py-2 items-center gap-2 z-10"
                style={{ animation: "float 4s ease-in-out 0.9s infinite" }}
              >
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-[#1a2e4a] font-semibold text-xs">Review răspuns ✓</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16 animate-bounce">
          <a href="#probleme" className="text-[#1a2e4a]/30 hover:text-[#1a2e4a]/60 transition-colors">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-16px); }
        }
        @keyframes pulse-shadow {
          0%, 100% { opacity: 0.6; transform: translateX(-50%) scaleX(1); }
          50% { opacity: 0.3; transform: translateX(-50%) scaleX(0.85); }
        }
      `}</style>
    </section>
  );
}
