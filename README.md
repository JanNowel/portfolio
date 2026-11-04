# Jhon Noel Baculpo — Premium Animated Developer Portfolio

A modern, high-performance, fully responsive personal developer portfolio engineered with **React**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Designed with an Awwwards & Linear-inspired dark aesthetic, 3D interactive graphics, and fluid micro-interactions.

---

## 🌟 Key Features

- **Cybernetic 3D Particle Canvas**: Real-time canvas neural net with cursor attraction and particle physics.
- **Floating Technology Chips**: Parallax floating tech badges around the hero section.
- **Awwwards-Level Micro-Interactions**:
  - Interactive trailing cursor on desktop (with automatic touch device detection).
  - 3D card tilt with specular glare effect on mouse movement.
  - Magnetic spring-physics buttons.
  - Top scroll progress indicator with gradient hue.
  - Interactive project detail modals with keyboard Escape support.
  - Animated number counters.
- **Project Showcase**:
  - **REGESuite / REGEBook**: Online booking and client management system for REGE Styling and Catering Services.
  - **eBantay**: AI-powered municipal incident reporting and monitoring platform with GIS mapping.
  - **Student Hub**: Academic collaboration and productivity mobile application with Flutter and Supabase.
  - **Python System Information**: Windows hardware diagnostic and telemetry desktop application.
- **GitHub Public API Integration**: Live statistics, language distribution bar, and simulated contribution activity heatmap with fallback data.
- **Interactive Technical Capabilities**: Filterable competency matrix across Frontend, Backend, Databases, Tools, and Future Technologies.
- **Transparent Journey Timeline**: Chronological track of academic foundation, hands-on development milestones, and editable OJT entry.
- **Client-Side Contact Dispatch**: Form validation, loading states, confetti celebration, and mailto client preparation.
- **Curriculum Vitae Modal**: In-browser printable CV preview with quick export options.
- **Accessibility & Motion**: Respects `prefers-reduced-motion` settings and adheres to semantic HTML standards.

---

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Confetti**: Canvas-Confetti

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18.0.0 or later recommended)
- npm or pnpm

### Installation

```bash
# Clone or navigate to the project directory
cd my-portfolio

# Install dependencies
npm install

# Start local development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Production Build

```bash
# Typecheck and bundle for production
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Project Structure

```
my-portfolio/
├── public/
│   └── _redirects              # Cloudflare Pages SPA rewrite
├── src/
│   ├── components/
│   │   ├── 3d/                 # Canvas & floating parallax visuals
│   │   │   ├── InteractiveHeroCanvas.tsx
│   │   │   └── FloatingTechElements.tsx
│   │   ├── layout/             # Navigation, footer, and preloader
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Preloader.tsx
│   │   ├── sections/           # Portfolio content sections
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── ProjectModal.tsx
│   │   │   ├── ProjectVisualPreview.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── GitHubShowcase.tsx
│   │   │   └── Contact.tsx
│   │   └── ui/                 # Reusable UI & animation components
│   │       ├── CustomCursor.tsx
│   │       ├── MagneticButton.tsx
│   │       ├── TiltCard.tsx
│   │       ├── ScrollProgressBar.tsx
│   │       ├── SectionHeading.tsx
│   │       ├── Counter.tsx
│   │       └── CVModal.tsx
│   ├── data/
│   │   ├── portfolioData.ts    # Centralized personal info & content
│   │   └── githubFallback.ts   # GitHub fallback profile & repositories
│   ├── types/
│   │   └── index.ts            # TypeScript interfaces
│   ├── utils/
│   │   ├── animations.ts       # Framer Motion animation variants
│   │   └── confetti.ts         # Celebratory confetti trigger
│   ├── App.tsx
│   ├── index.css               # Tailwind & custom scrollbar styles
│   └── main.tsx
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

---

## ⚙️ Customization Guide

All personal data, projects, skills, and links are cleanly separated in:
- `src/data/portfolioData.ts`:
  - `PERSONAL_INFO`: Name, email, title, GitHub URL, LinkedIn URL.
  - `ABOUT_DATA`: Philosophy, introduction, and animated statistics.
  - `PROJECTS`: Add or modify project entries, features, tech stacks, and live links.
  - `SKILL_CATEGORIES`: Customize categorized skill matrices.
  - `TIMELINE_DATA`: Update academic credentials, OJT details, and career milestones.
- To link your actual PDF resume, save it as `public/Jhon_Noel_Baculpo_CV.pdf`.

---

## 🌐 Deployment

### Cloudflare Pages
1. Push your repository to GitHub.
2. In the Cloudflare Dashboard, navigate to **Compute (Workers) > Pages**.
3. Connect your repository.
4. Set Build command: `npm run build`
5. Set Build output directory: `dist`
6. Deploy! The included `public/_redirects` ensures clean single-page app routing.

### GitHub Pages
1. In `vite.config.ts`, you can configure `base: './'` for relative asset paths if deploying to a GitHub user/repo sub-path:
   ```ts
   export default defineConfig({
     base: './',
     plugins: [react()],
   });
   ```
2. Build with `npm run build` and publish the `dist` folder via GitHub Actions or the `gh-pages` branch.

---

## 📄 License

MIT License — Feel free to use and modify for personal branding.

