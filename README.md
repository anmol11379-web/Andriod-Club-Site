# 🤖 Android Club — Official Showcase & Community Portal

Official web application and showcase portal for **Android Club at VIT Bhopal University**. Features a cyber-brutalist tech aesthetic with smooth momentum scrolling, interactive mobile hardware showcase, domain hubs, hackathon archives, and a recruitment challenge portal.

---

## ⚡ Tech Stack

- **Core:** [React 18](https://react.dev/) + [Vite 6](https://vitejs.dev/)
- **Styling:** [Tailwind CSS 3](https://tailwindcss.com/) with custom dark cyber theme
- **Smooth Scroll:** [Lenis](https://lenis.darkroom.engineering/) (60/120fps hardware acceleration)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Effects:** [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)
- **Deployment:** [Netlify](https://www.netlify.com/) (configured via `netlify.toml` + `_redirects`)

---

## 🚀 Key Features

- **System Boot Intro Loader:** Cyber-telemetry boot ramp with seamless dual-shutter curtain opening animation.
- **Hardware Phone Zoom Showcase:** Physics-damped (`requestAnimationFrame` LERP) scroll-pinned 3D device preview.
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
│   │   ├── Contact.jsx          # Campus location & direct lead inquiry
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

## 💻 Getting Started

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### 1. Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/anmol11379-web/Andriod-Club-Site.git
cd Andriod-Club-Site
npm install
```

### 2. Local Development
Start the local development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Navigate to `http://localhost:3000` in your browser.

### 3. Production Build
Generate optimized static bundles into the `dist/` folder:
```bash
npm run build
```

### 4. Local Production Preview
Preview the production build locally:
```bash
npm run preview
```

---

## 🌐 Deployment Instructions

### Deploy to Netlify (Recommended)
This repository includes a production-ready [`netlify.toml`](./netlify.toml) and [`public/_redirects`](./public/_redirects) for instant deployment:

1. Push your repository to GitHub.
2. Log in to [Netlify](https://www.netlify.com/) and click **"Add new site"** > **"Import an existing project"**.
3. Select your GitHub repository (`Andriod-Club-Site`).
4. Netlify will automatically detect the build settings from `netlify.toml`:
   - **Base directory:** *(leave blank / root)*
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **"Deploy site"**.

---

## 📝 Updating Club Content

All text, team members, hackathons, open-source projects, and contact information are managed centrally in:
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

## 📜 License & Chapter Affiliation

Developed and maintained by **Android Club, VIT Bhopal University**.  
Built for the developer community.
