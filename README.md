# simonbehr.dev

Personal portfolio site — built with Nuxt 4, Vue 3, TypeScript and Tailwind CSS.

Live at [simonbehr.dev](https://simonbehr.dev)

---

## Stack

- **Framework** — Nuxt 4 / Vue 3 with Composition API
- **Language** — TypeScript
- **Styling** — Tailwind CSS v4
- **Animations** — VueUse Motion, custom CSS keyframes
- **Background** — Canvas-based constellation with mouse parallax
- **Color Mode** — Dark / Light via `@nuxtjs/color-mode`
- **Deployment** — Netlify

---

## Features

- Animated hero with staggered word reveal
- Interactive constellation background that reacts to mouse movement
- Dark / Light mode toggle
- Scroll-triggered fade-in animations
- Fully responsive
- Glass-effect tech stack cards

---

## Running locally

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Type check
npm run typecheck

# Lint
npm run lint
```

---

## Project structure

```
app/
├── assets/
│   └── css/
│       └── main.css
├── components/
│   ├── ColorModeButton.vue
│   ├── ConstellationBackground.vue
│   ├── ConstructionOverlay.vue
│   ├── DefaultLayout.vue
│   ├── MainSection.vue
│   ├── MobileNav.vue
│   ├── ProjectCard.vue
│   ├── TechStack.vue
│   ├── TheFooter.vue
│   └── TheHeader.vue
├── composable/
│   ├── useConstellation.ts
│   └── useSmoothScroll.ts
├── layouts/
│   ├── default.vue
│   └── NoBackground.vue
├── pages/
│   ├── index.vue
│   └── impressum.vue
├── app.vue
└── error.vue
```

---

## About

I'm a German frontend developer. This site is where I collect my work and document what I build.

→ [simonbehr.dev](https://simonbehr.dev)
