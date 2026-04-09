import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Soluții SaaS & Dezvoltare Custom AI | Clawbit",
  description: "Descoperă produsele SaaS Clawbit: răspunsuri automate la recenzii Google, triage de email-uri și dezvoltare de agenți AI personalizați via n8n.",
  keywords: "solutii saas, agenti ai custom, integrare crm erp ai, raspuns recenzii google automat, n8n romania",
};

export default function Solutii() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-16 min-h-screen bg-[#E8E8E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-navy-500 mb-8">Soluții SaaS și Dezvoltare Custom</h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-navy-500/10">
              <h2 className="text-2xl font-bold text-coral-500 mb-4">Produse SaaS de automatizare</h2>
              <p className="text-navy-500/80 mb-6">Avem soluții gata pregătite, pe bază de abonament, ideale pentru scalare și implementare imediată.</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-coral-500 font-bold">1.</span>
                  <div>
                    <h3 className="font-semibold text-navy-500">Agent AI de Răspuns Recenzii Google</h3>
                    <p className="text-sm text-navy-500/60">Monitorizează și răspunde automat, respectând tonul brandului tău.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-coral-500 font-bold">2.</span>
                  <div>
                    <h3 className="font-semibold text-navy-500">Sistem de Triage Email-uri</h3>
                    <p className="text-sm text-navy-500/60">Sortează emailurile și creează draft-uri de răspuns folosind n8n și modele LLM.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-navy-500 p-8 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-bold text-white mb-4">Servicii Custom</h2>
              <p className="text-white/80 mb-6">Dezvoltăm agenți AI și fluxuri de automatizare la comandă, perfect adaptate pe nevoile tale unice.</p>
              <ul className="space-y-4 text-white">
                <li className="flex items-start gap-3">
                  <span className="text-coral-400 font-bold">•</span>
                  <div>
                    <h3 className="font-semibold">Integrare CRM & ERP</h3>
                    <p className="text-sm text-white/60">Fluxuri automatizate între sisteme legacy și tool-uri moderne (via n8n).</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-coral-400 font-bold">•</span>
                  <div>
                    <h3 className="font-semibold">Agenți Conversaționali Interni</h3>
                    <p className="text-sm text-white/60">Chatboți asistenți bazați pe documentația companiei tale.</p>
                  </div>
                </li>
              </ul>
              <div className="mt-8">
                <a href="/#contact" className="inline-block bg-coral-500 hover:bg-coral-600 text-white font-bold py-3 px-6 rounded-xl transition-colors">Solicită o ofertă</a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}