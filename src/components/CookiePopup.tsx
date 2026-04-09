"use client";
import { useState, useEffect } from "react";

export default function CookiePopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAccepted = localStorage.getItem("cookies_accepted");
    if (!hasAccepted) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookies_accepted", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-navy-500 border-t border-white/20 p-4 z-50 flex flex-col sm:flex-row justify-between items-center gap-4 text-white text-sm">
      <p>
        Folosim cookie-uri pentru a vă îmbunătăți experiența pe site. Prin continuarea navigării, sunteți de acord cu utilizarea acestora și cu <a href="/termeni" className="underline text-coral-400">Termenii și condițiile</a> noastre.
      </p>
      <button 
        onClick={acceptCookies} 
        className="bg-coral-500 hover:bg-coral-600 text-white font-bold py-2 px-6 rounded-xl transition-colors whitespace-nowrap"
      >
        Am înțeles
      </button>
    </div>
  );
}