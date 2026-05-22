# Ocean Serenity FZ-LLC — Master Website Build Prompt

> Use this prompt verbatim with an AI builder (Cascade / v0 / Lovable / Cursor). It is opinionated, visual, and concrete.

---

## 1. The One-Line Brief

Build the **flagship corporate website** for **Ocean Serenity FZ-LLC** — a Dubai-based maritime & industrial holding group that owns four specialised companies (ASP Global Marine, Knot & Sail, Ocean Infinity, Warmsol Marine & Industrial). The site must feel like the **Rolls-Royce of maritime websites**: cinematic, quiet, confident, and unmistakably premium. Think *Feadship × Rolex × Apple × Maersk*, **not** a typical marine-services template.

---

## 2. Brand Soul (read this first, build from this)

- **Tone**: Restrained luxury. We *never* shout. Whitespace is a feature.
- **Feeling on first scroll**: "These people own the ocean."
- **Forbidden aesthetics**: stock-photo sliders, generic gradients, glassmorphism cards in a 4-column grid, floating wave SVGs, Bootstrap-looking buttons, AI-generated hero illustrations, "trusted by" logo strips with grayscale logos.
- **Required aesthetics**: cinematic full-bleed imagery, oversized editorial typography, micro-typography (eyebrow labels, numbered sections), generous negative space, slow deliberate motion.

### Reference Sites (study these exactly)
1. **feadship.nl** — editorial layout, type scale, restraint
2. **lurssen.com** — dark cinematic hero, slow video
3. **oceanco.com** — luxury maritime gold standard
4. **maersk.com** — corporate-group navigation architecture
5. **rolls-roycemotorcars.com** — luxury micro-interactions
6. **arc.dev** & **linear.app** — modern motion language and type
7. **nuri.com** / **stripe.com/enterprise** — section pacing

---

## 3. Visual System (build a real design system, not Tailwind defaults)

### Color Palette (use these exact values)
```
--ink         : #05080D   /* near-black, primary background */
--deep-sea    : #0A1628   /* secondary surface */
--midnight    : #0F2238   /* card surface */
--horizon     : #1B3A5B   /* hover / border */
--brass       : #B8945A   /* PRIMARY accent — warm metallic */
--brass-light : #D4B47C
--pearl       : #F5F1EA   /* off-white, body on dark */
--mist        : #8A95A5   /* secondary text */
--signal      : #4FD1C5   /* used SPARINGLY for live data only */
```
**Rule**: 90% of the site is `--ink` + `--pearl` + `--mist`. Brass is used ONLY for: active nav state, primary CTA underline, key numbers, hover accents. Never gradient backgrounds. Never neon cyan.

### Typography (load these, no substitutes)
- **Display**: `Fraunces` (variable, optical size 144) — for H1/H2, oversized editorial
- **Body**: `Inter Tight` — UI and paragraph
- **Mono**: `JetBrains Mono` — for numbers, coordinates, eyebrow labels

Type scale (desktop):
```
Display XL : 160px / 0.95 / -0.04em   (hero only)
Display L  : 96px  / 1.0  / -0.03em
H1         : 72px  / 1.05 / -0.025em
H2         : 48px  / 1.1  / -0.02em
H3         : 28px  / 1.3
Body L     : 19px  / 1.6
Body       : 16px  / 1.65
Eyebrow    : 12px  / 1   / 0.18em / uppercase / mono
```

### Layout
- 12-column grid, 1440px max, 120px outer gutter on desktop
- Sections separated by **160px** vertical padding minimum
- Asymmetric layouts — never center everything. Use 7/5, 8/4, 4/8 splits.
- Hairline dividers `1px solid rgba(245,241,234,0.08)` between sections, never thick lines

### Motion
- Default easing: `cubic-bezier(0.16, 1, 0.3, 1)` (slow-out)
- Default duration: `700ms` for entries, `200ms` for hover
- All scroll reveals: `translateY(40px) + opacity 0 → 0`, staggered 80ms
- Hero text: per-word reveal with mask (like Awwwards sites)
- Use **Framer Motion** + **Lenis** smooth scroll. No jQuery, no AOS.
- Cursor: custom small dot cursor on desktop that grows on hover over links

---

## 4. Page-by-Page Spec

### 4.1 Hero (full viewport, 100vh)
- Background: **looping muted 4K video** of dark ocean surface at dawn (or a slowly drifting superyacht aerial). Heavy crossfade, no cuts.
- Top-left: mono eyebrow `OCEAN SERENITY FZ–LLC · DUBAI · EST. [YEAR]`
- Center-left: Display XL headline animating in word-by-word:
  > **"A quiet force across four oceans."**
- Below: one sentence (Body L, --mist):
  > *Ocean Serenity is a maritime and industrial group operating four specialist companies in marine agency, yachting, autonomous systems, and industrial engineering.*
- Bottom row: 3 live counters in mono font — vessels under management, ports served, countries — separated by hairlines.
- Bottom-right corner: tiny scroll indicator `SCROLL ↓` in mono.
- **No buttons in the hero.** Confidence > conversion.

### 4.2 Group Manifesto (section 02)
- Eyebrow: `02 — THE GROUP`
- Massive editorial paragraph (max-width 900px), set in Fraunces 40px, with select words highlighted in brass:
  > "We don't chase scale. We build **deliberate** companies that solve specific problems for the people who move the world's cargo, capital, and curiosity across water."
- Right column: a vertical list of 4 numbered principles (Integrity / Precision / Stewardship / Endurance) with one-line descriptions.

### 4.3 The Four Companies (the centerpiece — redo completely)
**Do NOT use a 4-column card grid.** Instead:

- Full-width **stacked horizontal panels**, one per company, each 80vh tall.
- On scroll, each panel pins briefly and the content slides in.
- Left 55%: large editorial image / video of that company's work (a ship at port, a sailing yacht, an AUV underwater, an industrial facility).
- Right 45%: 
  - Eyebrow: `01 / 04 — PORT AGENCY`
  - Massive serif company name (Display L)
  - One-paragraph description
  - 3 capability bullets with hairline separators
  - A single text link: `Visit ASP Global Marine →` (brass underline on hover)
- Background color shifts subtly between panels (ink → deep-sea → midnight → ink).

The four companies in order:
1. **ASP Global Marine** — Port agency, crew, chandling
2. **Knot & Sail** — Yacht management & luxury sailing
3. **Ocean Infinity** — Autonomous marine technology (AUV/ROV)
4. **Warmsol Marine & Industrial** — Thermal insulation & industrial engineering

### 4.4 Global Footprint
- Full-bleed dark interactive world map (use **react-simple-maps** or custom SVG, NOT Mapbox default).
- Plotted ports as 1px brass dots with subtle pulse animation.
- Hover a dot → small tooltip with port name, country, which group companies operate there.
- Side panel lists regions with counts. Mono numbers.

### 4.5 Capabilities Matrix
- A clean **table** (yes, a literal table — editorial, not cards).
- Rows: services. Columns: which of the 4 companies deliver it. Filled cells = a small brass dot.
- This is the most "information-dense" section and looks deliberately corporate-elegant.

### 4.6 Fleet & Operations (live data feel)
- A panel that *looks* like a maritime ops dashboard but stylized.
- 3–4 "live" metrics ticking up: tonnage handled YTD, port calls this month, vessels at sea, projects active.
- Mono font, animated number counters, brass underlines.

### 4.7 Leadership
- 3–4 large b/w portrait photographs, one per row, alternating left/right alignment.
- Name in Display, role in mono eyebrow, 2-line bio.
- No social icons. No LinkedIn buttons. Names only.

### 4.8 Sustainability & Stewardship
- Single full-bleed photograph (e.g. clean ocean horizon).
- Overlaid: one paragraph statement about IMO 2050, decarbonization commitment, marine biodiversity programs.
- Below: 3 commitments with target dates in mono.

### 4.9 Press & Insights
- A vertical list (not cards) of 5 most recent articles.
- Each row: date (mono) | category (eyebrow) | headline (Fraunces 28px) | →
- Hairline between rows. On hover, row text shifts 8px right, brass underline appears.

### 4.10 Contact / Footer
- Editorial footer, not a 4-column link soup.
- Left: Dubai HQ address, set typographically like a letterhead.
- Center: secondary offices listed simply.
- Right: a single email `office@oceanserenity.ae` and phone.
- Bottom hairline row: company registration, year, legal links in 11px mono.
- **No newsletter signup. No social icons row. No "designed by".**

---

## 5. Navigation
- Fixed top bar, transparent on hero, becomes `--ink` with hairline-bottom on scroll.
- Left: wordmark "Ocean Serenity" in Fraunces (NOT the logo SVG until scrolled).
- Center: minimal nav — `Group / Companies / Operations / Insights / Contact`
- Right: language switcher `EN / AR` in mono, hairline-separated.
- On hover of "Companies", a **full-width mega-panel** drops down (not a dropdown menu) showing all 4 companies with their tagline and a thumbnail image. Drops in 400ms with stagger.

---

## 6. Technical Stack (non-negotiable)

- **Framework**: Keep Vite + React 18 (already set up). Do NOT migrate to Next.js — overkill for a marketing site of this size and slower to iterate.
- **Styling**: Tailwind (already set up) + a real `tailwind.config.js` that maps to the design tokens in §3, not the default palette.
- **Motion**: `framer-motion` + `@studio-freight/lenis` for smooth scroll.
- **3D (used sparingly)**: keep `@react-three/fiber` only if used for ONE moment — e.g. a slowly rotating compass / propeller / globe on a single section. Otherwise remove.
- **Icons**: `lucide-react` but used at 16px max, hairline weight only. No filled icons.
- **Images**: WebP, lazy-loaded, with a blur-up placeholder.
- **Routing**: `react-router-dom` — `/`, `/group`, `/companies/[slug]`, `/operations`, `/insights`, `/contact`.

---

## 7. Hard Rules (do not violate)

1. **Never** use Tailwind's default `blue-500`, `cyan-400`, `slate-*`. Only the tokens in §3.
2. **Never** center-align large blocks of text. Editorial = left-aligned, ragged right.
3. **Never** use a card with `rounded-2xl` and a gradient border. We don't do glass cards.
4. **Never** put more than 2 CTAs on a single screen.
5. **Never** auto-play sound. Video is always muted.
6. **Every** number on the site is set in JetBrains Mono.
7. **Every** section must have an eyebrow with section number (`01 — `, `02 — `).
8. **Mobile**: not a downscale — re-think. Hero becomes a single still image with the same headline. Horizontal company panels become vertical full-height slides.

---

## 8. Content Voice Samples (copy in this register)

- ❌ "We provide world-class marine solutions for our valued clients."
- ✅ "We move ships, and the people who run them, through the world's busiest ports."

- ❌ "Innovative cutting-edge autonomous technology"
- ✅ "Robots, on and under the water, doing what humans shouldn't have to."

- ❌ "Get in touch with our team today!"
- ✅ "Write to us. office@oceanserenity.ae"

---

## 9. Definition of Done

The site is done when:
- A stranger lands on it and assumes the company is 80 years old and manages a multi-billion-dollar fleet.
- There is not a single element on screen that feels like a "Tailwind template".
- A maritime CEO would forward the link to a peer without embarrassment.
- The hero loads in under 1.5s on 4G.
- Lighthouse: Performance 95+, Accessibility 100, Best Practices 100, SEO 100.

---

## 10. First Build Order

Build in this order, do not skip ahead:
1. Design tokens in `tailwind.config.js` + global CSS (fonts, cursor, lenis).
2. Navbar (transparent + scrolled states, mega-panel).
3. Hero (video, typography, counters).
4. Section 03 — The Four Companies (the hardest, get this right early).
5. All other sections.
6. Mobile rethink.
7. Polish pass: motion timing, hover states, micro-typography.

> **Begin.** Do not ask clarifying questions about visual direction — everything you need is above. Ask only about content (real numbers, real port names, real bios) when you need them; until then, use plausible placeholders clearly marked `[TBD]`.
