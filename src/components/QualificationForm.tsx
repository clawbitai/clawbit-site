"use client";

import { useState } from "react";
import Image from "next/image";

type FormData = {
  businessType: string;
  employees: string;
  facebookUrl: string;
  instagramUrl: string;
  googleBusinessUrl: string;
  emailBusiness: string;
  biggestProblem: string;
  budget: string;
  startWhen: string;
  name: string;
  email: string;
  phone: string;
};

const initialData: FormData = {
  businessType: "",
  employees: "",
  facebookUrl: "",
  instagramUrl: "",
  googleBusinessUrl: "",
  emailBusiness: "",
  biggestProblem: "",
  budget: "",
  startWhen: "",
  name: "",
  email: "",
  phone: "",
};

const steps = [
  { label: "Tip afacere", icon: "🏢" },
  { label: "Echipă", icon: "👥" },
  { label: "Online", icon: "🌐" },
  { label: "Problemă", icon: "⚡" },
  { label: "Buget", icon: "💰" },
  { label: "Când", icon: "📅" },
  { label: "Contact", icon: "✉️" },
];

export default function QualificationForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [onlineError, setOnlineError] = useState("");

  const businessTypes = [
    { value: "restaurant", label: "🍽️ Restaurant / Cafenea" },
    { value: "salon", label: "💇 Salon de frumusețe" },
    { value: "medical", label: "🏥 Cabinet medical" },
    { value: "imobiliara", label: "🏠 Agenție imobiliară" },
    { value: "fitness", label: "💪 Fitness / Sport" },
    { value: "altele", label: "📦 Altele" },
  ];

  const employeeOptions = [
    { value: "1-5", label: "1–5 angajați", sub: "Echipă mică, flexibilă" },
    { value: "6-20", label: "6–20 angajați", sub: "Afacere în creștere" },
    { value: "21-50", label: "21–50 angajați", sub: "Companie medie" },
    { value: "50+", label: "50+ angajați", sub: "Enterprise" },
  ];

  const problemOptions = [
    {
      value: "no-time-social",
      label: "Nu am timp pentru social media",
      icon: "⏰",
    },
    {
      value: "reviews-unanswered",
      label: "Recenziile rămân fără răspuns",
      icon: "⭐",
    },
    {
      value: "lost-emails",
      label: "Pierdem emailuri / mesaje",
      icon: "📧",
    },
    {
      value: "no-content-ideas",
      label: "Nu știm ce să postăm",
      icon: "💡",
    },
  ];

  const budgetOptions = [
    { value: "sub-100", label: "Sub 100 EUR/lună" },
    { value: "100-200", label: "100–200 EUR/lună" },
    { value: "200-500", label: "200–500 EUR/lună" },
    { value: "peste-500", label: "Peste 500 EUR/lună" },
  ];

  const startOptions = [
    { value: "imediat", label: "🚀 Imediat", sub: "Vreau să încep acum" },
    { value: "1-luna", label: "📅 În 1 lună", sub: "Mă pregătesc" },
    { value: "3-luni", label: "🗓️ În 3 luni", sub: "Planific pe termen mediu" },
    {
      value: "explorez",
      label: "🔍 Explorez opțiunile",
      sub: "Colectez informații",
    },
  ];

  const hasOnlinePresence = () =>
    !!(
      formData.facebookUrl.trim() ||
      formData.instagramUrl.trim() ||
      formData.googleBusinessUrl.trim() ||
      formData.emailBusiness.trim()
    );

  const canProceed = () => {
    switch (currentStep) {
      case 0:
        return !!formData.businessType;
      case 1:
        return !!formData.employees;
      case 2:
        return hasOnlinePresence();
      case 3:
        return !!formData.biggestProblem;
      case 4:
        return !!formData.budget;
      case 5:
        return !!formData.startWhen;
      case 6:
        return !!formData.name && !!formData.email;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (currentStep === 2 && !hasOnlinePresence()) {
      setOnlineError("Te rugăm să adaugi cel puțin un link pentru audit.");
      return;
    }
    setOnlineError("");
    setCurrentStep((s) => s + 1);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError("");
    try {
      const businessTypeLabel =
        businessTypes.find((b) => b.value === formData.businessType)?.label ??
        formData.businessType;
      const budgetLabel =
        budgetOptions.find((b) => b.value === formData.budget)?.label ??
        formData.budget;

      const payload = {
        access_key: "372bca01-d553-4c70-91b7-da936340e86f",
        subject: `🦞 Audit Clawbit: ${businessTypeLabel} — ${formData.name}`,
        from_name: "Clawbit Site",
        to_email: "eusunt@clawbit.ro",
        replyto: formData.email,
        name: formData.name,
        email: formData.email,
        phone: formData.phone || "—",
        business_type: businessTypeLabel,
        employees: formData.employees,
        facebook_url: formData.facebookUrl || "—",
        instagram_url: formData.instagramUrl || "—",
        google_business_url: formData.googleBusinessUrl || "—",
        email_business: formData.emailBusiness || "—",
        biggest_problem: formData.biggestProblem,
        budget: budgetLabel,
        start_when: formData.startWhen,
      };

      const res = await fetch("https://clawbit-email.oanca-d.workers.dev", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Eroare la trimitere");
      }
      setSubmitted(true);
    } catch (err: unknown) {
      setError(
        err instanceof Error
          ? err.message
          : "A apărut o eroare. Te rugăm să încerci din nou."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section
        id="contact"
        className="py-20 lg:py-32 bg-navy-500 relative overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-coral-500/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-2xl mx-auto px-4 text-center relative z-10">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12">
            <div className="text-6xl mb-6">✅</div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Mulțumim, {formData.name}!
            </h3>
            <p className="text-white/70 text-lg mb-6">
              Am primit datele tale. Vom analiza paginile tale și vei primi{" "}
              <span className="text-coral-400 font-semibold">auditul gratuit pe email</span>{" "}
              în maxim 24 de ore.
            </p>
            <div className="bg-white/10 rounded-2xl p-4 text-left space-y-2">
              <div className="text-white/50 text-xs font-medium uppercase tracking-wide mb-3">
                Rezumat cerere
              </div>
              <div className="text-white text-sm">
                <span className="text-white/60">Afacere:</span>{" "}
                {businessTypes.find((b) => b.value === formData.businessType)?.label}
              </div>
              <div className="text-white text-sm">
                <span className="text-white/60">Buget:</span>{" "}
                {budgetOptions.find((b) => b.value === formData.budget)?.label}
              </div>
              <div className="text-white text-sm">
                <span className="text-white/60">Start:</span>{" "}
                {startOptions.find((s) => s.value === formData.startWhen)?.label}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="py-20 lg:py-32 bg-navy-500 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-coral-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-coral-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 relative">
              <Image
                src="/mascot.jpg"
                alt="Clawbit"
                fill
                className="object-cover rounded-full border-2 border-coral-500"
              />
            </div>
          </div>
          <span className="inline-block bg-coral-500/20 text-coral-400 text-sm font-semibold px-4 py-2 rounded-full mb-4 border border-coral-500/30">
            📋 Calificare gratuită
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Hai să vedem ce potrivim
          </h2>
          <p className="text-white/60 text-lg">
            7 întrebări rapide ca să îți recomandăm soluția perfectă
          </p>
        </div>

        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-3">
            {steps.map((step, index) => (
              <div
                key={step.label}
                className={`flex flex-col items-center gap-1 ${
                  index <= currentStep ? "opacity-100" : "opacity-30"
                } transition-opacity duration-300`}
              >
                <div
                  className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm sm:text-base transition-all duration-300 ${
                    index < currentStep
                      ? "bg-coral-500 text-white"
                      : index === currentStep
                      ? "bg-white text-navy-500 shadow-lg shadow-white/20"
                      : "bg-white/10 text-white/40"
                  }`}
                >
                  {index < currentStep ? (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <span>{step.icon}</span>
                  )}
                </div>
                <span className="hidden sm:block text-xs text-white/50">
                  {step.label}
                </span>
              </div>
            ))}
          </div>
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-coral-500 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>
          <div className="text-white/40 text-xs text-right mt-1">
            Pasul {currentStep + 1} din {steps.length}
          </div>
        </div>

        {/* Form card */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-10">
          {/* Step 1: Business type */}
          {currentStep === 0 && (
            <div>
              <h3 className="text-white font-bold text-xl mb-2">
                Ce tip de afacere conduci?
              </h3>
              <p className="text-white/50 text-sm mb-6">
                Alegem soluțiile potrivite pentru industria ta
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-3">
                {businessTypes.map((type) => (
                  <button
                    key={type.value}
                    onClick={() =>
                      setFormData((p) => ({ ...p, businessType: type.value }))
                    }
                    className={`p-4 rounded-xl border-2 text-sm font-medium transition-all duration-200 text-left ${
                      formData.businessType === type.value
                        ? "border-coral-500 bg-coral-500/20 text-white"
                        : "border-white/10 bg-white/5 text-white/70 hover:border-white/30 hover:bg-white/10"
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Employees */}
          {currentStep === 1 && (
            <div>
              <h3 className="text-white font-bold text-xl mb-2">
                Câți angajați aveți?
              </h3>
              <p className="text-white/50 text-sm mb-6">
                Ne ajută să calibrăm volumul de muncă potrivit
              </p>
              <div className="grid grid-cols-2 gap-3">
                {employeeOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() =>
                      setFormData((p) => ({ ...p, employees: opt.value }))
                    }
                    className={`p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                      formData.employees === opt.value
                        ? "border-coral-500 bg-coral-500/20"
                        : "border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/10"
                    }`}
                  >
                    <div className="text-white font-semibold text-sm">
                      {opt.label}
                    </div>
                    <div className="text-white/50 text-xs mt-0.5">{opt.sub}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Online presence */}
          {currentStep === 2 && (
            <div>
              <h3 className="text-white font-bold text-xl mb-2">
                Unde ești prezent online?
              </h3>
              <p className="text-white/50 text-sm mb-6">
                Adaugă cel puțin un link — îl vom analiza gratuit
              </p>
              <div className="space-y-4">
                <div>
                  <label className="block text-white/70 text-sm font-medium mb-2">
                    🔵 Facebook
                  </label>
                  <input
                    type="url"
                    value={formData.facebookUrl}
                    onChange={(e) => {
                      setFormData((p) => ({ ...p, facebookUrl: e.target.value }));
                      setOnlineError("");
                    }}
                    placeholder="https://facebook.com/..."
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-coral-500 focus:outline-none focus:ring-1 focus:ring-coral-500 transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-white/70 text-sm font-medium mb-2">
                    📷 Instagram
                  </label>
                  <input
                    type="url"
                    value={formData.instagramUrl}
                    onChange={(e) => {
                      setFormData((p) => ({ ...p, instagramUrl: e.target.value }));
                      setOnlineError("");
                    }}
                    placeholder="https://instagram.com/..."
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-coral-500 focus:outline-none focus:ring-1 focus:ring-coral-500 transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-white/70 text-sm font-medium mb-2">
                    🔍 Google Business
                  </label>
                  <input
                    type="text"
                    value={formData.googleBusinessUrl}
                    onChange={(e) => {
                      setFormData((p) => ({ ...p, googleBusinessUrl: e.target.value }));
                      setOnlineError("");
                    }}
                    placeholder="https://maps.google.com/... sau numele afacerii pe Google"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-coral-500 focus:outline-none focus:ring-1 focus:ring-coral-500 transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-white/70 text-sm font-medium mb-2">
                    📧 Email business
                  </label>
                  <input
                    type="email"
                    value={formData.emailBusiness}
                    onChange={(e) => {
                      setFormData((p) => ({ ...p, emailBusiness: e.target.value }));
                      setOnlineError("");
                    }}
                    placeholder="adresa@afacerea.ro"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-coral-500 focus:outline-none focus:ring-1 focus:ring-coral-500 transition-colors text-sm"
                  />
                </div>
                {onlineError && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-3 text-red-400 text-sm">
                    {onlineError}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Step 4: Biggest problem */}
          {currentStep === 3 && (
            <div>
              <h3 className="text-white font-bold text-xl mb-2">
                Care e cea mai mare problemă acum?
              </h3>
              <p className="text-white/50 text-sm mb-6">
                Vom prioritiza soluția pentru această problemă
              </p>
              <div className="space-y-3">
                {problemOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() =>
                      setFormData((p) => ({ ...p, biggestProblem: opt.value }))
                    }
                    className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-200 flex items-center gap-4 ${
                      formData.biggestProblem === opt.value
                        ? "border-coral-500 bg-coral-500/20"
                        : "border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/10"
                    }`}
                  >
                    <span className="text-2xl">{opt.icon}</span>
                    <span className="text-white font-medium text-sm">
                      {opt.label}
                    </span>
                    {formData.biggestProblem === opt.value && (
                      <svg className="w-5 h-5 text-coral-400 ml-auto flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 5: Budget */}
          {currentStep === 4 && (
            <div>
              <h3 className="text-white font-bold text-xl mb-2">
                Buget lunar disponibil?
              </h3>
              <p className="text-white/50 text-sm mb-6">
                Ne ajută să îți recomandăm pachetul potrivit
              </p>
              <div className="grid grid-cols-2 gap-3">
                {budgetOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() =>
                      setFormData((p) => ({ ...p, budget: opt.value }))
                    }
                    className={`p-4 rounded-xl border-2 text-sm font-semibold transition-all duration-200 ${
                      formData.budget === opt.value
                        ? "border-coral-500 bg-coral-500/20 text-white"
                        : "border-white/10 bg-white/5 text-white/70 hover:border-white/30 hover:bg-white/10"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 6: When to start */}
          {currentStep === 5 && (
            <div>
              <h3 className="text-white font-bold text-xl mb-2">
                Când vrei să începi?
              </h3>
              <p className="text-white/50 text-sm mb-6">
                Planificăm totul în funcție de ritmul tău
              </p>
              <div className="grid grid-cols-2 gap-3">
                {startOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() =>
                      setFormData((p) => ({ ...p, startWhen: opt.value }))
                    }
                    className={`p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                      formData.startWhen === opt.value
                        ? "border-coral-500 bg-coral-500/20"
                        : "border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/10"
                    }`}
                  >
                    <div className="text-white font-semibold text-sm">
                      {opt.label}
                    </div>
                    <div className="text-white/50 text-xs mt-0.5">{opt.sub}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 7: Contact details */}
          {currentStep === 6 && (
            <div>
              <h3 className="text-white font-bold text-xl mb-2">
                Ultimul pas — datele tale
              </h3>
              <p className="text-white/50 text-sm mb-6">
                Te contactăm în 24 de ore cu o propunere personalizată
              </p>
              <div className="space-y-4">
                <div>
                  <label className="block text-white/70 text-sm font-medium mb-2">
                    Nume complet *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, name: e.target.value }))
                    }
                    placeholder="ex: Maria Ionescu"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-coral-500 focus:outline-none focus:ring-1 focus:ring-coral-500 transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-white/70 text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, email: e.target.value }))
                    }
                    placeholder="ex: maria@afacere.ro"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-coral-500 focus:outline-none focus:ring-1 focus:ring-coral-500 transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-white/70 text-sm font-medium mb-2">
                    Telefon{" "}
                    <span className="text-white/30 font-normal">(opțional)</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, phone: e.target.value }))
                    }
                    placeholder="ex: 07XX XXX XXX"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-coral-500 focus:outline-none focus:ring-1 focus:ring-coral-500 transition-colors text-sm"
                  />
                </div>

                {error && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-3 text-red-400 text-sm">
                    {error}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            {currentStep > 0 && (
              <button
                onClick={() => setCurrentStep((s) => s - 1)}
                className="w-full sm:w-auto px-6 py-3 border border-white/20 text-white/70 rounded-xl text-sm font-medium hover:bg-white/10 transition-colors order-2 sm:order-1"
              >
                ← Înapoi
              </button>
            )}

            {currentStep < steps.length - 1 ? (
              <button
                onClick={handleNext}
                disabled={currentStep !== 2 && !canProceed()}
                className={`w-full sm:flex-1 py-3 rounded-xl text-sm font-semibold transition-all duration-200 order-1 sm:order-2 ${
                  currentStep === 2 || canProceed()
                    ? "bg-coral-500 text-white hover:bg-coral-400 shadow-lg shadow-coral-500/30"
                    : "bg-white/10 text-white/30 cursor-not-allowed"
                }`}
              >
                Continuă →
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!canProceed() || isSubmitting}
                className={`w-full sm:flex-1 py-3 rounded-xl text-sm font-semibold transition-all duration-200 order-1 sm:order-2 ${
                  canProceed() && !isSubmitting
                    ? "bg-coral-500 text-white hover:bg-coral-400 shadow-lg shadow-coral-500/30"
                    : "bg-white/10 text-white/30 cursor-not-allowed"
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Trimitere...
                  </span>
                ) : (
                  "🚀 Trimite cererea"
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
