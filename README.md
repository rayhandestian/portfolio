# Rayhan Destian - Personal Portfolio

A fast, responsive, and minimalist portfolio website built with **Astro**. This project showcases my work in **Full-Stack Development**, **Game Server Infrastructure**, and **IoT**.

![License](https://img.shields.io/github/license/rayhandestian/portfolio?style=flat-square)
![Astro](https://img.shields.io/badge/Astro-5.0-orange?style=flat-square&logo=astro)

## 🚀 About

This portfolio is designed to be lightweight and performance-focused. It serves as a central hub for my professional identity, detailing my experience in:
-   **Web Development**: Building modern web apps with Next.js, Astro, and Tailwind.
-   **Infrastructure**: Managing game servers, Linux nodes, and Docker containers.
-   **Data & AI**: Exploring Machine Learning and Data Science.

## 🛠️ Tech Stack

This website is built with the following technologies:

-   **Framework**: [Astro](https://astro.build) (Static Site Generation for performance)
-   **Styling**: Vanilla CSS (Custom design system with CSS Variables)
-   **Internationalization**: Multi-language support (English & Indonesian)
-   **Icons**: SVG Icons (No external font libraries)
-   **Deployment**: Static Export (Deployable to Vercel, Netlify, Github Pages, etc.)

## 📁 Key Components

The project structure is organized for modularity:

-   `src/pages/index.astro`: The main landing page, assembling all sections.
-   `src/components/Hero.astro`: Introduction and bio.
-   `src/components/Projects.astro`: Dynamic project showcase with filtered tags.
-   `src/components/Skills.astro`: Categorized list of technical skills (Development, Cloud, Data/AI).
-   `src/components/About.astro`: Detailed background and contact links.
-   `src/i18n/`: Internationalization utilities and translations.

## ✨ Featured Projects

The portfolio includes detailed cards for my key projects:

-   **Kaizen Network**: A massive Minecraft server network with complex backend infrastructure (Java, Redis, Next.js).
-   **Cloudshort**: High-performance private URL shortener with sub-50ms redirects (Cloudflare Workers, Hono, React).
-   **UPer.li**: A URL shortener with auth and analytics (Next.js, PostgreSQL).
-   **QuickBites**: Mobile food ordering app (Flutter, Firebase).
-   **Smart Water Tank**: IoT monitoring system (ESP32, Node.js).
-   **Emotion Detection CNN**: Deep learning model for facial emotion recognition (TensorFlow).

## 🧞 Commands

All commands are run from the root of the project:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |

## 📬 Contact Form Setup

The contact form uses a **Cloudflare Worker** backend with **Resend** for email delivery and **Cloudflare Turnstile** for spam protection.

### 1. Environment Variables

Copy `.env.example` to `.env` and fill in your values:

```bash
cp .env.example .env
```

| Variable | Description |
|----------|-------------|
| `PUBLIC_CONTACT_WORKER_URL` | Your deployed Cloudflare Worker URL |
| `PUBLIC_TURNSTILE_SITE_KEY` | Cloudflare Turnstile site key |

### 2. Deploy the Worker

```bash
cd workers/contact-api
npm install

# Set secrets
npx wrangler secret put RESEND_API_KEY
npx wrangler secret put TURNSTILE_SECRET_KEY

# Deploy
npx wrangler deploy
```

### 3. Configure Worker Variables

Edit `workers/contact-api/wrangler.toml` to set:
- `RECIPIENT_EMAIL` - Where to receive contact submissions
- `SENDER_EMAIL` - From address (must be verified in Resend)
- `ALLOWED_ORIGIN` - Your portfolio domain

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
