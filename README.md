# Clawbit - AI Automation Agency Landing Page

Acesta este proiectul Next.js pentru landing page-ul agenției **Clawbit**.

## Tehnologii
- Next.js 14 (App Router)
- React 18
- Tailwind CSS 3
- TypeScript
- Resend / Nodemailer (pentru formularul de contact)

## Structură
- `src/app` - rutele și layout-ul principal
- `src/components` - componentele UI (Hero, Problems, Services, Pricing, QualificationForm, Footer)
- `src/app/api/contact/route.ts` - endpoint-ul pentru trimiterea emailurilor de la formularul de calificare

## Dezvoltare locală

1. Instalează dependențele:
```bash
npm install
```

2. Configurează variabilele de mediu:
Copiază `.env.local.example` în `.env.local` și adaugă setările pentru email (Resend API key sau setări SMTP).
```bash
cp .env.local.example .env.local
```

3. Pornește serverul de dezvoltare:
```bash
npm run dev
```

Deschide [http://localhost:3000](http://localhost:3000) în browser.

## Deploy pe Vercel

Proiectul este optimizat pentru a fi desplegat pe Vercel.

1. Crează un cont pe [Vercel](https://vercel.com) (dacă nu ai deja unul)
2. Instalează Vercel CLI (opțional) sau folosește interfața web conectând repository-ul de GitHub
3. Setează variabilele de mediu în dashboard-ul Vercel:
   - `RESEND_API_KEY` (dacă folosești Resend)
   - Sau setările SMTP (`SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`)
4. Fă deploy!

Vercel va detecta automat că este un proiect Next.js și va configura comenzile de build corect.
