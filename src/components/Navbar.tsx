"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Promo Banner */}
      {bannerVisible && (
        <div className="w-full text-white text-sm py-2 px-4 flex items-center justify-center gap-2 relative" style={{ background: "#f97316" }}>
          <span className="hidden sm:inline">🎉 Primii 5 clienți primesc 30 de zile GRATUIT →</span>
          <span className="sm:hidden">🎉 30 zile GRATUIT →</span>
          <a href="#contact" className="underline font-semibold">Înscrie-te acum</a>
          <button
            onClick={() => setBannerVisible(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white"
            aria-label="Închide"
          >
            ✕
          </button>
        </div>
      )}

      {/* Navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "shadow-md" : ""
        }`}
        style={{ background: "#E8E8E8", borderBottom: "1px solid rgba(26,46,74,0.08)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Clawbit"
                height={34}
                width={114}
                style={{ height: 34, width: "auto" }}
                priority
              />
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {[
                { href: "#servicii", label: "Servicii" },
                { href: "#preturi", label: "Prețuri" },
                { href: "#contact", label: "Audit Gratuit" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium transition-colors"
                  style={{ color: "rgba(26,46,74,0.7)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#1a2e4a")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(26,46,74,0.7)")}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="px-5 py-2 rounded-full text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
                style={{
                  background: "#f97316",
                  boxShadow: "0 4px 12px rgba(249,115,22,0.3)",
                }}
              >
                Începe acum →
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 rounded-lg"
              style={{ color: "#1a2e4a" }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Meniu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t px-4 py-4 space-y-3" style={{ background: "#E8E8E8", borderColor: "rgba(26,46,74,0.08)" }}>
            {[
              { href: "#servicii", label: "Servicii" },
              { href: "#preturi", label: "Prețuri" },
              { href: "#contact", label: "Audit Gratuit" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-sm font-medium py-2"
                style={{ color: "#1a2e4a" }}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block text-center px-5 py-3 rounded-full text-sm font-semibold text-white"
              style={{ background: "#f97316" }}
              onClick={() => setMenuOpen(false)}
            >
              Începe acum →
            </a>
          </div>
        )}
      </nav>
    </>
  );
}
