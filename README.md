# 🤖 Android Club — Official Showcase & Community Portal

Official web application and showcase portal for **Android Club at VIT Bhopal University**. Features a cyber-brutalist tech aesthetic with smooth momentum scrolling, interactive mobile hardware showcase, domain hubs, hackathon archives, and a recruitment challenge portal.

---

## 🌐 Live Deployment & Project Links

> **🚀 Live Deployed Version:** [https://andriod-club-site.netlify.app](https://andriod-club-site.netlify.app)  
> *(If your Netlify site has a custom domain or slug, update this URL accordingly)*  
> 
> **📦 Source Code Repository:** [https://github.com/anmol11379-web/Andriod-Club-Site](https://github.com/anmol11379-web/Andriod-Club-Site)  
> **⚡ Hosting Platform:** Netlify (Continuous Deployment via GitHub)

---

## 💻 Setup & Installation Instructions

Follow these step-by-step instructions to run the project locally on your machine:

### 1. Prerequisites
Ensure you have the following installed on your machine:
- **Node.js**: v18.0.0 or higher ([Download Node.js](https://nodejs.org/))
- **npm**: v9.0.0 or higher (comes bundled with Node.js)
- **Git**: Installed and configured ([Download Git](https://git-scm.com/))

### 2. Clone the Repository
Open your terminal and clone the repository:
```bash
git clone https://github.com/anmol11379-web/Andriod-Club-Site.git
cd Andriod-Club-Site
```

### 3. Install Dependencies
Install all required project dependencies:
```bash
npm install
```

### 4. Run the Development Server
Start the local development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Once started, open your browser and navigate to:
```
http://localhost:3000
```

### 5. Build for Production
To generate a production-ready, minified build in the `dist/` directory:
```bash
npm run build
```

### 6. Preview Production Build Locally
To test the production build locally before deploying:
```bash
npm run preview
```

---

## ⚡ Tech Stack

- **Framework:** [React 18](https://react.dev/) + [Vite 6](https://vitejs.dev/)
- **Styling:** [Tailwind CSS 3](https://tailwindcss.com/) with custom cyber-brutalist dark theme
- **Smooth Scroll:** [Lenis](https://lenis.darkroom.engineering/) (hardware-accelerated touch & desktop scroll momentum)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Micro-Interactions:** [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)
- **Deployment & Routing:** [Netlify](https://www.netlify.com/) (configured via [`netlify.toml`](./netlify.toml) + [`public/_redirects`](./public/_redirects))

---

## 🚀 Key Features

- **System Boot Intro Loader:** Cyber-telemetry boot ramp with seamless dual-shutter curtain opening animation.
- **Hardware Phone Zoom Showcase:** Hardware-accelerated (`requestAnimationFrame` LERP + direct GPU ref transforms) 3D device preview optimized for 120fps on mobile & Android devices.
- **Collaborative Developer Cursors:** Live multi-track domain tags with interactive technical briefs.
- **Domain & Project Hub:** Sourced from official repositories with category filters (Android Native, SDC, AI/ML, Cloud & IoT).
- **Events & Hackathons:** Segmented timeline with live status pills and past competition archives.
- **Core Leadership Grid:** Faculty coordinators, domain leads, and core contributors with direct profiles.
- **Interactive Recruitment Dossier:** Full application form with live input validation and celebration feedback.
- **Direct Lead Messaging:** In-page direct inquiry form with immediate status handling.

---

## 📁 Project Structure

```
├── public/                      # Static assets & branding
│   ├── AboutPage_Assets/        # Faculty & advisory portraits
│   ├── events/                  # Authentic club hackathon & workshop media
│   ├── Homepage_Assets/         # Quotes & 3D models
│   ├── Logo.png                 # Primary Android Club badge
│   ├── favicon.svg              # Crisp vector Android robot head icon
│   ├── favicon.ico              # Multi-resolution ICO (16, 32, 48, 64)
│   ├── apple-touch-icon.png     # iOS / macOS web clip icon
│   └── _redirects               # SPA routing rule for Netlify
├── src/
│   ├── components/              # Global UI elements
│   │   ├── Navbar.jsx           # Glassmorphic header with active section tracking
│   │   ├── SectionHeader.jsx    # Monospace tags & display typography
│   │   ├── PhoneMockup.jsx      # Android OS device UI frame
│   │   ├── CollaborativeCursors.jsx # Interactive multiplayer dev cursors
│   │   ├── WebsiteIntroLoader.jsx   # Boot sequence & shutter animation
│   │   └── Footer.jsx           # Directory, socials & campus coordinates
│   ├── sections/                # Page sections in scroll sequence
│   │   ├── Hero.jsx             # Headline, live telemetry & primary CTAs
│   │   ├── Partners.jsx         # Sponsor & tech ecosystem badges
│   │   ├── MobileZoomShowcase.jsx # Pinned scroll zoom experience
│   │   ├── About.jsx            # Heritage, mission & four pillars
│   │   ├── Steps.jsx            # 4-stage recruitment pipeline
│   │   ├── StatsBanner.jsx      # High-contrast metric indicators
│   │   ├── Domains.jsx          # Technical & management track matrix
│   │   ├── Projects.jsx         # Open-source showcase & GitHub links
│   │   ├── Comparison.jsx       # Why Android Club Wins breakdown
│   │   ├── Events.jsx           # Live hackathons & archived sessions
│   │   ├── Testimonials.jsx     # Quotes from club leads
│   │   ├── Team.jsx             # Category-filtered core team directory
│   │   ├── FAQ.jsx              # Interactive question accordion
│   │   ├── RecruitmentChallenge.jsx # Application dossier
│   │   ├── Contact.jsx          # Campus info & direct lead inquiry
│   │   └── FinalCTA.jsx         # Action prompt before footer
│   ├── data/
│   │   └── clubData.js          # Centralized data store (team, events, projects, info)
│   ├── App.jsx                  # Main application orchestrator + Lenis loop
│   ├── index.css                # Global cyber palette, button ripple & keyframes
│   └── main.jsx                 # React root DOM mount
├── index.html                   # Entry point with favicon suite & fonts
├── netlify.toml                 # Netlify build configuration & redirect rules
├── package.json                 # Dependencies and npm scripts
├── postcss.config.js            # PostCSS configuration for Tailwind
├── tailwind.config.js           # Theme extensions, cyber borders & fonts
└── vite.config.js               # Vite build & dev server configuration
```

---

## 🌐 Netlify Deployment Configuration

This repository includes continuous deployment configuration out of the box:

- **[`netlify.toml`](./netlify.toml):**
  ```toml
  [build]
    command = "npm run build"
    publish = "dist"

  [build.environment]
    NODE_VERSION = "20"

  [[redirects]]
    from = "/*"
    to = "/index.html"
    status = 200
  ```
- **[`public/_redirects`](./public/_redirects):** Guarantees zero 404s on page refresh.

---

## 📝 Managing & Updating Content

All text copy, team members, hackathons, open-source projects, and contact information are managed centrally in:
```
src/data/clubData.js
```

| Export Constant | Purpose |
| :--- | :--- |
| `CLUB_INFO` | Club tagline, founding date, official handles & campus office hours |
| `PROJECTS_DATA` | Open-source apps, stack tags, repo URLs & descriptions |
| `EVENTS_DATA` | Hackathon cards, banners, status (`upcoming`/`past`), and dates |
| `TEAM_MEMBERS` | Core team, domain leads, faculty coordinators & LinkedIn/GitHub |
| `DOMAINS_DATA` | Technical and non-technical domain tracks & descriptions |
| `FAQS` | Frequently asked questions in recruitment accordion |

---

## 📜 Chapter & Licensing

Developed and maintained by **Android Club, VIT Bhopal University**.  
Built for the global developer ecosystem.
