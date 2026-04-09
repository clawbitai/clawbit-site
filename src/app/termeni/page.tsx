import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Termeni și Condiții | Clawbit",
  description: "Termenii și condițiile de utilizare a serviciilor Clawbit.",
  robots: { index: false, follow: true }, // Not important for indexing but links should be followed
};

export default function Termeni() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-16 min-h-screen bg-[#E8E8E8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-navy-500 mb-8">Termeni și Condiții</h1>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-navy-500/10 prose prose-navy">
            <h2 className="text-xl font-bold text-navy-500 mb-4">1. Informații Generale</h2>
            <p className="text-navy-500/80 mb-6">Acest site este operat de Clawbit. Prin accesarea și utilizarea acestui site, acceptați acești termeni și condiții în totalitate.</p>
            
            <h2 className="text-xl font-bold text-navy-500 mb-4">2. Servicii și Abonamente</h2>
            <p className="text-navy-500/80 mb-6">Oferim servicii de automatizare AI prin abonamente lunare, fără contracte pe termen lung. Aveți opțiunea de a anula oricând. Există și opțiunea unei garanții de 30 de zile, conform clauzelor discutate în momentul semnării formelor specifice.</p>
            
            <h2 className="text-xl font-bold text-navy-500 mb-4">3. Politica de Confidențialitate și Cookie-uri</h2>
            <p className="text-navy-500/80 mb-6">Utilizăm cookie-uri pentru a asigura funcționalitatea optimă a platformei noastre. Datele preluate (inclusiv din formularele noastre) sunt confidențiale și folosite strict în scopul de a oferi serviciile contractate, respectând reglementările GDPR în vigoare.</p>
            
            <h2 className="text-xl font-bold text-navy-500 mb-4">4. Proprietate Intelectuală</h2>
            <p className="text-navy-500/80 mb-6">Întregul conținut al acestui site este deținut de Clawbit. Copierea sau reproducerea sa fără acordul nostru scris este interzisă.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}