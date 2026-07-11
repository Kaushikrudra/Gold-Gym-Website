# 🏋️ Neo Fitness Gym - Premium Fitness Landing Page

A fully responsive, high-performance, multi-page landing platform for **Neo Fitness Gym** built with React, Vite, Tailwind CSS v4, and React Router. Featuring a sleek modern dark-gold design aesthetic, client-side BMI calculations, dynamic booking schedulers, sliding reviews, and SEO optimization.

---

## 🎨 Theme & Styling Palette

The project is styled using **Tailwind CSS v4's CSS-first theme configuration** inside `src/index.css`:
*   **Primary Background**: `#0a0a0a` (Deep Slate Black)
*   **Secondary Background**: `#141414` (Dark Charcoal Card fill)
*   **Gold Accents**: Primary Gold (`#FFD700`), Dark Gold (`#B8860B`), and Highlight Gold (`#FFC93C`)
*   **Typography**: Clean Sans-Serif system fonts (`system-ui`) with gold-stroke headings (`.text-stroke-gold`) and clean `#b3b3b3` body texts.
*   **Gradients**: Custom gold-to-black diagonal cuts (`.gold-gradient`).

---

## 🚀 Key Features

1.  **Sticky Month-End Offer Banner**: Top-sticky banner showing a live countdown timer counting down days:hours:minutes:seconds until the end of the current month. State-saved dismissals are handled via `sessionStorage`.
2.  **BMI Calculator Widget**: Metric (cm/kg) and Imperial (ft-in/lbs) calculation widget featuring a color-coded range indicator and a slider needle representing the computed index value.
3.  **Tabbed Contact & Booking Scheduler**: tabbed interface inside the Contact page allowing users to submit emails or schedule a gym trial. Form checks date limits (restricts to today-onwards) and verifies phone patterns.
4.  **Auto-sliding Reviews Slider**: Carousel testimonials slider rotating automatically every 5 seconds. Uses star rating SVGs and custom circular member avatars.
5.  **Before/After Comparison Cards**: Displays member transformation progress utilizing comparison image columns and gold badges.
6.  **Reusable FAQ Accordion**: Interactive 8-question accordion with expand/collapse states and smooth height transitions. Integrated into both the Pricing and Contact pages.
7.  **Dynamic Page Shimmer Skeletons**: Intercepts route shifts and renders grey pulse loading shim boxes for 450ms, improving perceptual page speed.
8.  **SEO Meta Header Provider**: Intercepts page mounts and injects customized document title headers and Facebook Open Graph metadata tag payloads via `react-helmet-async`.
9.  **High-Performance Scroll optimization**: Employs `{ passive: true }` passive scroll event listeners and `requestAnimationFrame` animation throttling to guarantee lag-free 60FPS scroll repaints across desktops and mobile.

---

## 🧭 Project Page Routing Structure

The application separates concerns by dividing layouts and page content folders:

```text
neo-fitness-gym/
├── netlify.toml          <- Deployment wildcard rewrite configuration
├── package.json          <- Dependencies: react-router-dom, react-helmet-async, lucide-react
├── vite.config.js        <- Imports @tailwindcss/vite plugin
├── src/
│   ├── App.jsx           <- Configures BrowserRouter, scroll-to-top routing, Layout template
│   ├── index.css         <- Tailwind directives, custom gradients, scrollbar layouts
│   ├── App.css           <- Cleared styles preventing override stutters
│   ├── components/       <- Reusable widgets & blocks
│   │   ├── Navbar.jsx          <- Sticky navigation menu containing OfferBanner
│   │   ├── OfferBanner.jsx     <- Live Month-End countdown
│   │   ├── BMICalculator.jsx   <- CM/KG and LBS/FT-IN indicator
│   │   ├── BookingForm.jsx     <- Private trial scheduler form
│   │   ├── FAQAccordion.jsx    <- Collapsible policy FAQs
│   │   ├── Testimonials.jsx    <- Auto rotating reviews
│   │   ├── BeforeAfter.jsx     <- Transformations gallery
│   │   ├── Newsletter.jsx      <- Footer email subscription
│   │   ├── LoadingSkeleton.jsx <- Shimmer fallback placeholders
│   │   ├── SEO.jsx             <- Injects document meta titles/descriptions
│   │   ├── ... (homepage preview layout chunks)
│   └── pages/            <- Router Page Views
│       ├── Home.jsx      <- Aggregates homepage previews with CTA "See More" redirections
│       ├── About.jsx     <- Vision highlights, trainer coaching backgrounds
│       ├── Courses.jsx   <- 6 custom fitness courses details & grids
│       ├── Trainers.jsx  <- Trainer profiles for Vikram, Ananya, Karan, and Simran
│       ├── Pricing.jsx   <- Starter, Pro, and Elite tiers with FAQ integration
│       ├── Gallery.jsx   <- Dynamic image filters (All / Training / Equipment / Members)
│       ├── Blog.jsx      <- 6 real fitness articles with excerpt tags
│       └── Contact.jsx   <- Message form tabs, contact cards, and full-color Google Map
```

---

## 💻 Local Development Setup

To run the project locally, run the following commands in your terminal:

1.  **Clone or navigate to the directory**:
    ```bash
    cd neo-fitness-gym
    ```
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Start the local development server**:
    ```bash
    npm run dev
    ```
    Open the output link (usually `http://localhost:5173/`) in your web browser.

4.  **Test building the production assets**:
    ```bash
    npm run build
    ```
    The compiled bundle will be saved inside the `dist/` directory.

---

## ☁️ Netlify Deployment Config

The project includes a [netlify.toml](file:///home/rudra/Documents/Gold-gym/netlify.toml) file containing SPA redirect configurations. This is critical for preventing 404 errors on direct path refreshes on subroutes (like `/courses` or `/pricing`):

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```
