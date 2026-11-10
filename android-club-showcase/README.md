# 🤖 Android Club — Official Showcase & Recruitment Website

A production-quality showcase website and interactive recruitment portal for **Android Club at VIT Bhopal University**.

Engineered for the recruitment frontend challenge, this project reproduces the cyber-brutalist pixel-grid layout, spacing, typography hierarchy, and micro-interactions of the layout reference while sourcing real brand assets, colors, copy, team profiles, events, and open-source projects directly from [androidclub.tech](https://androidclub.tech).

---

## ⚡ Live Preview & Reference Alignment

* **Layout & Structure Reference Cloned:** [v0-pixel-perfect-seven.vercel.app](https://v0-pixel-perfect-seven.vercel.app/)
* **Brand & Content Source:** [androidclub.tech/recruitment](https://androidclub.tech/recruitment) & [androidclub.tech](https://androidclub.tech)
* **GitHub Organization:** [github.com/androidvitb](https://github.com/androidvitb)
* **Primary Color Theme:** `#3DDC84` (Android Green), `#00F0FF` (Cyber Cyan), `#FF7300` (Neon Orange), `#0A090F` (Obsidian Tech Black)
* **Typography:** `Space Grotesk` (Display & Headings), `JetBrains Mono` / `IBM Plex Mono` (Tech Tags & Monospace Metadata), `Plus Jakarta Sans` (Body)

---

## 🚀 Key Features & Sections

1. **Sticky Cyber Navigation (`Navbar.jsx`)**
   - Translucent frosted glass effect on scroll (`backdrop-blur-md`).
   - Monospace section indicators (`[01] ABOUT`, `[02] DOMAINS`, etc.) with active underline progress.
   - Mobile hamburger drawer with full ARIA accessibility and smooth scrolling.
   - Fast CTA button `JOIN THE CLUB` with pulsing green LED indicator.

2. **Hero Section (`Hero.jsx`)**
   - Version announcement pill: `[RECRUITMENT 2026-27] // APPLICATIONS NOW OPEN`.
   - Massive dual-tone display typography: `BUILD WITHOUT LIMITS.`
   - Dual action buttons: `JOIN THE CLUB` and `EXPLORE PROJECTS`.
   - **Collaborative Live Developer Cursors (`CollaborativeCursors.jsx`)**:
     - Fast, snappy multiplayer developer cursors (speed increased to 4.8s–6.2s cycles) drifting smoothly around the Hero headline and CTAs.
     - 7 Domain tracks with crisp pixel-badge tags matching tech specializations:
       - `FULL STACK` (#00F0FF Cyber Cyan)
       - `GAME DEV` (#FF0055 Neon Pink)
       - `ANDROID DEV` (#3DDC84 Android Green)
       - `MACHINE LEARNING` (#BF00FF Electric Purple)
       - `UI/UX DESIGN` (#FFD600 Pixel Yellow)
       - `CYBER SECURITY` (#FF7300 Neon Orange)
       - `CLOUD & IOT` (#36EA66 Neon Emerald)
     - Interactive tooltips showing real development actions ("Deploying real-time event portal", "Compiling 3D OpenGL engine", etc.).
     - Toggle controls (`[7 LIVE TRACKS]`) to show/hide the cursors anytime.
   - Dual action buttons: `JOIN THE CLUB` and `EXPLORE PROJECTS` with live telemetry footer metrics.

3. **Partners & Affiliates Bar (`Partners.jsx`)**
   - Pixel-badge layout featuring Google Developers, Dainik Bhaskar, CodeChef, Coding Ninjas, HackerEarth, Unstop, Notion, and .XYZ.

4. **Mobile Phone Zoom-In Showcase (`MobileZoomShowcase.jsx`)**
   - Directly replicates the signature scroll-linked mobile phone zoom animation from `androidclub.tech`.
   - **Silky LERP Damping (60/120fps)**: Powered by a continuous `requestAnimationFrame` linear interpolation loop with physics damping (`diff * 0.11`), completely eliminating step-stutter and scroll jitter across trackpads, mice, and mobile touchscreens.
   - **Seamless Blended Heading Transition**:
     - As the mobile phone scales up and dives towards the camera, the initial ecosystem stats drift outward and dissolve.
     - Out of the expanding phone screen emerges the next section's heading: `[01] // ABOUT ANDROID CLUB — ENGINEERING IMPACT. ONE REPO AT A TIME.` with a glowing green backdrop.
     - The phone frame gracefully blends into the dark canvas as the heading reaches optical lock-in, seamlessly introducing the Heritage and Focus Pillar cards with zero jump cut or dead scroll space.
   - **Ecosystem Content & Flanking Elements**:
     - Left: Double tech crosshair dots `••` and angular brackets, *"Explore the Android Community"*, and the 70%+ global smartphone market share fact.
     - Right: Interactive quote callout (*"Android isn't just an operating system — it's a global community of millions"*).
     - Screen Center: Glowing Android robot logo with dynamic pulse, AC-OS 15.0 interface, and recruitment radar.
     - Right Rail: Vertical `GALLERY` progress tracker with scroll percentage and clickable pagination dots.
   - Surrounding text smoothly translates outward and fades as the phone zooms in to create a seamless cinematic depth transition.

5. **About Us (`About.jsx`)**
   - Club mission, vision, and heritage: Founded in 2017 by Abhay Nigam.
   - Faculty leadership notes: Dr. Chandan Kumar Behera (Assistant Director – Students' Welfare) & Dr. Adarsh Patel (Faculty Coordinator).
   - 4 Highlight focus area cards: Native & Modern Android, Cross-domain SDC Builds, Edge AI & Embedded R&D, and Impactful Hackathons.

5. **Recruitment Roadmap (`Steps.jsx`)**
   - Cloned 4-stage pipeline: Choose Domain → Challenge Submission → Technical Interview → Induction & Onboarding.

6. **By The Numbers Banner (`StatsBanner.jsx`)**
   - Vibrant full-width Android Green banner with high-contrast metrics: `80+` Core Members, `1,000+` Community Reach, `40+` Events, and `3B+` Ecosystem Devices.

7. **Domains & Tracks (`Domains.jsx`)**
   - Interactive track switcher between **Technical** (Android, SDC, R&D ML/IoT, UI/UX) and **Non-Technical** (Operations, Event Management, PR & Outreach, Media, Content, Finance).

8. **Projects Showcase (`Projects.jsx`)**
   - Real club projects sourced from `github.com/androidvitb`: **Spendwise** (Jetpack Compose & Room), **Workout-Assistant** (Flutter & Dart), **AcWoC Platform**, **AgriScan AI**, **CardioPulse BLE**, and **CampusNav**.
   - Category filtering (`ALL`, `ANDROID NATIVE`, `WEB / SDC`, `EDGE AI & IOT`), architectural highlights, and direct GitHub links.

9. **Why Android Club Wins (`Comparison.jsx`)**
   - Cloned comparison matrix from v0 contrasting Android Club's production engineering against typical college student chapters.

10. **Events & Hackathons Timeline (`Events.jsx`)**
    - Filter toggle between `ALL`, `UPCOMING (LIVE)`, and `PAST ARCHIVES`.
    - Features real club events: **Geek Rush 2026**, **Laser Tag Tech Arena**, **Meet & Greet 3.0**, **Pydroid X**, **404: Fun Found**, **Android Fusion**, and **DSA Tussle**.
    - Clear visual distinction between live registration banners and archived completion tags.

11. **Voices From The Core (`Testimonials.jsx`)**
    - Direct testimonial quotes from President Giriraj Parsewar, Vice President Avyaan Verma, General Secretary Ujjawal Patidar, Operations Lead Antareep Dey, and Event Management Lead Amrutha Duvvuri.

12. **Leadership Core Grid (`Team.jsx`)**
    - Team photos from Firebase Storage and club assets, roles, domain tags, and social media links (GitHub, LinkedIn). Filterable by Executive, Tech, and Operations.

13. **Recruitment FAQ Accordion (`FAQ.jsx`)**
    - Smooth interactive accordion answering domain eligibility, time commitment, non-tech roles, and interview preparation.

14. **Interactive Recruitment Challenge Portal (`RecruitmentChallenge.jsx`)**
    - Multi-field application dossier with domain selection, registration number, GitHub/portfolio links, and motivations.
    - Instant client-side validation.
    - Real celebratory confetti burst on submission (`canvas-confetti`).
    - Generates a reference application code (`AC-XXXX-DOMAIN`).

15. **Campus Contact & Office Info (`Contact.jsx`)**
    - Campus coordinates at VIT Bhopal University, Sehore, MP.
    - Active office hours, direct lead message form, and social media icons.

16. **Final CTA & Footer (`FinalCTA.jsx` & `Footer.jsx`)**
    - `STOP HESITATING. START SHIPPING.` callout with top border accent.
    - Full directory footer with quick links, campus details, and copyright.

---

## 🛠️ Tech Stack

* **Framework:** React 18
* **Build Tool:** Vite 6 (ultra-fast HMR and optimized production bundles)
* **Styling:** Tailwind CSS 3 (configured with custom cyber/pixel color palette and animations)
* **Icons:** Lucide React
* **Interactive FX:** Canvas-Confetti (lightweight celebration animations)
* **Fonts:** Space Grotesk, JetBrains Mono, Plus Jakarta Sans (via Google Fonts)

---

## 📁 Project Structure

```
android-club-showcase/
├── index.html                   # HTML entry point with fonts & metadata
├── package.json                 # Project dependencies and scripts
├── vite.config.js               # Vite configuration
├── tailwind.config.js           # Custom theme colors, fonts, and animations
├── postcss.config.js            # PostCSS plugins
├── public/
│   └── Logo.png                 # Official Android Club logo
└── src/
    ├── main.jsx                 # React root mounting
    ├── App.jsx                  # Main single-page application layout
    ├── index.css                # Global styles, scanline effects, custom scrollbar
    ├── data/
    │   └── clubData.js          # Centralized data file (projects, team, events, etc.)
    ├── components/
    │   ├── Navbar.jsx           # Sticky header with anchor navigation
    │   ├── SectionHeader.jsx    # Monospace tag + display header typography
    │   ├── PhoneMockup.jsx      # Interactive Android phone focal element
    │   └── Footer.jsx           # Multi-column directory footer
    └── sections/
        ├── Hero.jsx             # Hero with tagline and dual CTA
        ├── Partners.jsx         # Sponsors & ecosystem badges
        ├── About.jsx            # Heritage & 4 focus pillars
        ├── Steps.jsx            # 4-step recruitment roadmap
        ├── StatsBanner.jsx      # High-impact green stats banner
        ├── Domains.jsx          # Technical & non-tech domains
        ├── Projects.jsx         # Open source showcase with filters
        ├── Comparison.jsx       # Why Android Club Wins comparison table
        ├── Events.jsx           # Upcoming vs Past events timeline
        ├── Testimonials.jsx     # Quotes from leadership
        ├── Team.jsx             # Core team members grid
        ├── FAQ.jsx              # Recruitment questions accordion
        ├── RecruitmentChallenge.jsx # Interactive application form + confetti
        ├── Contact.jsx          # Campus info & inquiry form
        └── FinalCTA.jsx         # Callout banner before footer
```

---

## 💻 Setup & Local Development Instructions

### Prerequisites
* Node.js version 18.0 or higher
* npm (bundled with Node.js)

### 1. Installation
Navigate into the project directory and install dependencies:
```bash
cd android-club-showcase
npm install
```

### 2. Start Local Development Server
Start the Vite development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open `http://localhost:3000` (or the URL shown in your terminal) in your browser.

### 3. Build for Production
Create an optimized production build in the `dist/` directory:
```bash
npm run build
```

### 4. Preview Production Build
Locally preview the generated production build:
```bash
npm run preview
```

---

## 📝 Where to Edit Content

All data is strictly decoupled from the presentation layer. To modify or add new content:

* **Club Info, Taglines, Socials, Coordinators:** Edit `src/data/clubData.js` → `CLUB_INFO`
* **Projects & Apps:** Edit `src/data/clubData.js` → `PROJECTS_DATA`
* **Events & Hackathons:** Edit `src/data/clubData.js` → `EVENTS_DATA`
* **Team Members & Photos:** Edit `src/data/clubData.js` → `TEAM_MEMBERS`
* **Recruitment FAQs:** Edit `src/data/clubData.js` → `FAQS`
* **Domains & Tracks:** Edit `src/data/clubData.js` → `DOMAINS_DATA`

---

## 🌐 Deployment to Vercel

### Method 1: Using the Vercel Web Dashboard (Easiest)
1. Push your code to a GitHub repository (instructions below).
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New"** → **"Project"**.
4. Import your GitHub repository.
5. In **Build and Output Settings**:
   - **Framework Preset:** Vite
   - **Root Directory:** `./` (or `android-club-showcase` if deploying from monorepo)
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
6. Click **Deploy**. Vercel will build and assign a production URL in seconds.

### Method 2: Using the Vercel CLI
```bash
# Install Vercel CLI globally if not already installed
npm install -g vercel

# Navigate to project directory
cd android-club-showcase

# Run deployment
vercel

# Deploy to production
vercel --prod
```

---

## 🐙 Pushing to a GitHub Repository

```bash
# Navigate to the project directory
cd android-club-showcase

# Initialize git repository
git init

# Add all files
git add .

# Commit changes
git commit -m "feat: complete production-quality android club showcase & recruitment website"

# Rename branch to main
git branch -M main

# Add your GitHub remote repository (replace with your repo URL)
git remote add origin https://github.com/<your-username>/android-club-showcase.git

# Push to GitHub
git push -u origin main
```

---

## 📋 Verification & Acceptance Checklist

- [x] **All required sections present:** Welcome/Hero, About Us, Projects Showcase, Events (Upcoming vs Past), Team Grid, Contact, Footer.
- [x] **Cloned layout & aesthetics from v0 reference:** Cyber-brutalist spacing, monospace tags (`[01] // ...`), sharp borders, uppercase headings, pill badges, and blinking indicators.
- [x] **Brand identity matching androidclub.tech:** Official logo, `#3DDC84` green, `#00F0FF` cyan, `#FF7300` orange, `#0A090F` obsidian tech dark mode.
- [x] **Real club data:** Real team members from Firebase Storage, real open source projects from `github.com/androidvitb`, real hackathon history and dates.
- [x] **Interactive features:** Animated phone mockup with Compose code executor, event filter tabs, project filter pills, FAQ accordion, recruitment application form with confetti.
- [x] **Responsiveness:** Tested for mobile (360px), tablet (768px), desktop (1024px, 1440px).
- [x] **Zero build errors:** Production build generates clean minified bundles in `dist/`.

