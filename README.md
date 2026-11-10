# 🤖 Android Club — Official Showcase & Community Portal

Welcome to the official web application and showcase portal for **Android Club at VIT Bhopal University**. This platform serves as the central hub for the club's technical domains, flagship hackathons, open-source engineering projects, leadership directory, and student recruitment.

---

## 🌐 Live Application & Links

- **🚀 Live Production Website:** [https://andriod-club-site.netlify.app](https://andriod-club-site.netlify.app)
- **📦 Source Code Repository:** [https://github.com/anmol11379-web/Andriod-Club-Site](https://github.com/anmol11379-web/Andriod-Club-Site)
- **⚡ Deployment Platform:** Netlify (Continuous Deployment via GitHub)

---

## 💻 Setup & Local Development

To clone, run, and explore this project on your local machine, follow these instructions:

### 1. Prerequisites
- **Node.js**: v18.0.0 or higher ([Download Node.js](https://nodejs.org/))
- **npm**: v9.0.0 or higher
- **Git**: Installed on your system ([Download Git](https://git-scm.com/))

### 2. Clone the Repository
```bash
git clone https://github.com/anmol11379-web/Andriod-Club-Site.git
cd Andriod-Club-Site
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Start Local Development Server
```bash
npm run dev
```
Open your browser and navigate to:
```
http://localhost:3000
```
The development environment includes Hot Module Replacement (HMR) for instantaneous live reloading.

### 5. Build for Production
To compile and minify the project for production:
```bash
npm run build
```
The compiled output is located in the `dist/` directory.

### 6. Preview Production Build
To preview the production bundle locally:
```bash
npm run preview
```

---

## ⚡ Tech Stack & Architecture

- **Core Framework:** [React 18](https://react.dev/) + [Vite 6](https://vitejs.dev/)
- **Styling:** [Tailwind CSS 3](https://tailwindcss.com/) with a custom cyber-brutalist dark aesthetic
- **Scroll Acceleration:** [Lenis](https://lenis.darkroom.engineering/) configured for hardware-accelerated momentum
- **Iconography:** [Lucide React](https://lucide.dev/)
- **Interactive Micro-FX:** [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)
- **Deployment Infrastructure:** [Netlify](https://www.netlify.com/) configured with [`netlify.toml`](./netlify.toml) and SPA redirects via [`public/_redirects`](./public/_redirects)

---

## 🚀 Key Platform Features

1. **System Boot Telemetry:** A simulated retro-cyber kernel bootloader with progress ramp and seamless dual-shutter curtain reveal.
2. **Hardware 3D Phone Zoom:** Scroll-linked smartphone animation powered by `requestAnimationFrame` and direct GPU transforms, delivering a locked 120fps on both desktop and mobile devices.
3. **Collaborative Developer Cursors:** Multiplayer domain track indicators highlighting active club disciplines (Android, SDC, AI/ML, Design, Cloud/IoT).
4. **Domain & Project Hub:** Interactive showcase displaying active GitHub repositories and technical specializations.
5. **Event Timeline & Archives:** Real-time event telemetry distinguishing between upcoming initiatives and past hackathon archives.
6. **Core Leadership Grid:** Interactive roster categorizing faculty patrons, executive leads, domain architects, and core contributors.
7. **Recruitment Challenge Dossier:** Application portal with real-time validation and interactive submission feedback.

---

## 📁 Repository Structure

```
├── public/                      # Static assets, branding & metadata
│   ├── AboutPage_Assets/        # Faculty mentor & leadership media
│   ├── events/                  # Authentic hackathon and workshop photography
│   ├── Homepage_Assets/         # Quotes and 3D device models
│   ├── Logo.png                 # Primary Android Club crest
│   ├── favicon.svg              # Vector Android robot head icon
│   ├── favicon.ico              # Multi-resolution ICO (16, 32, 48, 64)
│   ├── apple-touch-icon.png     # iOS / macOS web clip icon
│   └── _redirects               # Single-Page Application routing rule for Netlify
├── src/
│   ├── components/              # Shared UI components
│   │   ├── Navbar.jsx           # Glassmorphic header with active section tracking
│   │   ├── SectionHeader.jsx    # Monospace tags & display typography
│   │   ├── PhoneMockup.jsx      # Android OS device UI frame
│   │   ├── CollaborativeCursors.jsx # Multiplayer developer cursors
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
├── index.html                   # HTML entry point with favicon suite & fonts
├── netlify.toml                 # Netlify build configuration & redirect rules
├── package.json                 # Dependencies and npm scripts
├── postcss.config.js            # PostCSS configuration for Tailwind
├── tailwind.config.js           # Theme extensions, cyber borders & fonts
└── vite.config.js               # Vite build & dev server configuration
```

---

## 📊 Data Layer Architecture

The application strictly separates data from presentation. All dynamic content is centralized in:
```
src/data/clubData.js
```

| Export Constant | Description |
| :--- | :--- |
| `CLUB_INFO` | Core club metadata, founding date, announcement banner, and official social handles |
| `PROJECTS_DATA` | Open-source initiatives, technology stacks, GitHub repository links, and descriptions |
| `EVENTS_DATA` | Hackathon cards, banners, status (`upcoming`/`past`), and dates |
| `TEAM_MEMBERS` | Core contributors, domain leads, and faculty leadership profiles |
| `DOMAINS_DATA` | Technical and non-technical domain tracks & curriculum scopes |
| `FAQS` | Frequently asked questions regarding club inductions and activities |

---

## 📜 Chapter Affiliation & License

Developed and maintained by **Android Club, VIT Bhopal University**.  
Open to all students, builders, and mobile developers.
