import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Despre Noi | Clawbit — Agenție de Automatizări AI România",
  description: "Află cine suntem, misiunea noastră și cum ajutăm afacerile mici din România să scaleze prin automatizări AI inteligente și soluții custom.",
  keywords: "despre clawbit, agentie ai romania, echipa automatizare ai, solutii ai afaceri mici",
};

export default function Despre() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-16 min-h-screen bg-[#E8E8E8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-navy-500 mb-8">Despre Noi</h1>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-navy-500/10 prose prose-navy">
            <p className="text-lg text-navy-500/80 mb-6">
              Suntem Clawbit, o agenție de automatizări AI creată pentru afacerile mici din România. Ne-am născut din frustrarea de a vedea antreprenori pierzând zeci de ore pe sarcini repetitive.
            </p>
            <h2 className="text-2xl font-bold text-navy-500 mb-4 mt-8">Echipa noastră</h2>
            <p className="text-navy-500/80 mb-6">
              Suntem o echipă condusă de pasiune, unde ingeniozitatea umană se întâlnește cu viteza agenților autonomi. Fondată de Danuț, agenția folosește un hibrid între viziune strategică și putere computațională brută.
            </p>
            <h2 className="text-2xl font-bold text-navy-500 mb-4 mt-8">Misiunea Clawbit</h2>
            <p className="text-navy-500/80 mb-6">
              Vrem să aducem la dispoziția afacerilor locale puterea inteligenței artificiale. Să reducem costurile invizibile ale timpului pierdut și să accelerăm creșterea prin automatizare. Simplu, fără jargon inutil, funcțional 24/7.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}