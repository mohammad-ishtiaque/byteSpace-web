# Interview notes – ByteSpace landing page

Personal prep notes. This folder is in .gitignore.

---

## Planning

**Q: What do you do before coding a Figma design?**
Read the requirements, set scope (landing page required, auth pages bonus). Study the design: colours, fonts, spacing, repeated pieces. Break the page into components. Then pick the stack and set up the project.

**Q: Why Next.js and not plain React (Vite)?**
It's a public marketing page. Next.js pre-renders it to HTML at build time (good for SEO and first load), gives `next/image` and `next/font` for performance, routing from folders, and deploys to Vercel with zero config. The build output shows `/` as "Static".

**Q: SSG vs SSR vs CSR?**
SSG = HTML built once at build time (this site). SSR = HTML built on every request. CSR = the browser builds the page with JavaScript.

**Q: Why GitHub Flow and not Git Flow?**
Small project, one developer. `main` always deployable, each feature on its own branch, merged through a PR. A separate `develop` branch would only add steps.

---

## Structure

**Q: Explain your folder structure.**
- `app/` – routes. Folder = URL, `page.jsx` = the page, `layout.jsx` = shared wrapper.
- `app/(main)/` – route group. Parentheses don't appear in the URL; it just gives these pages the Navbar + Footer layout.
- `components/ui/` – generic building blocks (Button, Container, Logo, AvatarGroup).
- `components/layout/` – Navbar, Footer.
- `components/course/` – CourseCard, TopicFilter (will be reused on the search page).
- `components/home/` – sections only used on the home page.
- `services/` – the only place that knows where data comes from.
- `mocks/` – fake data shaped like an API response.
- `lib/` – constants and small helpers.

**Q: How would you connect a real API later?**
Only `services/*.js` changes: replace the mock import with a `fetch`. Services are already `async`, so pages and components don't change.

**Q: How does this structure help with debugging?**
The symptom points to the folder. Wrong URL/404 → `app/`. One card looks wrong → that component. Wrong data → `services/` or `mocks/`. Clicking does nothing → the `"use client"` component.

---

## Next.js specifics

**Q: Server vs Client Components?**
Server Components (default) render on the server and send no JS. Client Components (`"use client"`) are needed for state, events and browser APIs. Only 4 files here are client components: `NavLink` (needs the current URL), `MobileMenu`, `TopicFilter`, `NewsletterForm`.

**Q: Why was the home page a 404 at first?**
There was a `layout.jsx` but no `page.jsx` for `/`. No page file = Next.js shows its built-in 404.

**Q: Why `next/font`?**
Fonts are self-hosted with the site (no request to Google at runtime) and a size-matched fallback is generated, so text doesn't jump when the font loads. Satoshi isn't on Google Fonts, so it's loaded with `next/font/local`.

**Q: `priority` on images?**
Deprecated in Next.js 16. For the hero photo (the LCP element) I used `loading="eager"` + `fetchPriority="high"`. Everything else lazy-loads by default.

---

## Styling

**Q: What are design tokens and why use them?**
Figma colours and text sizes defined once in `globals.css` (`@theme`) and used by name: `bg-primary`, `text-accent`, `text-h2`. Change the brand colour in one place and the whole site follows. No random hex codes in components.

**Q: Tailwind classes weren't applying. How did you debug it?**
Checked the element's computed style in the browser, then searched the generated CSS: the classes weren't there, so Tailwind wasn't scanning the files. Tailwind v4 uses git ignore rules for auto-detection, and the project sits inside another git repo. Fixed with `@import "tailwindcss" source("../")` to point it at `src/`.

**Q: How did you build the hero background?**
Layers: blue + grid lines in pure CSS (two `linear-gradient`s, 120px cells), 3D shapes as transparent WebP images, the lime ring as an SVG, the student photo, then the floating cards as real HTML components.

**Q: Which image format do you use and why?**
Photos and transparent 3D renders in WebP: 70–90% smaller than PNG and still transparent (the woman photo went from 454 KB to 110 KB). Icons and logos in SVG: vector, sharp at any size, tiny. Everything is shown with `next/image`, which picks the right size per device and lazy-loads by default.

**Q: What is lazy loading and where did you not use it?**
Images below the fold only download when the user scrolls near them. The hero photo is the exception: it's the LCP element (the first big thing on screen), so it loads eagerly with high fetch priority.

**Q: How does the topic filter work on the home page?**
The server fetches all courses once and passes them to a client component (`CourseExplorer`), which keeps the selected topic in state and filters instantly with no reload. `TopicFilter` is controlled (the parent owns the selection), so the search page can reuse it. The filter helper lives in `lib/`, not `services/`, so the mock data isn't bundled into the browser JavaScript.

**Q: Why aren't the 3D shapes SVG?**
They have lighting, shadows and gradients. SVG can't reproduce that well. Transparent WebP is small and looks identical.

**Q: The spring shape came out grey from Figma. Why?**
The designer coloured it with a blend layer (hard-light) on top of a grey render. Figma's export dropped that layer. I reapplied the same blend with `sharp` so the saved image matches the design.

**Q: How did you make it responsive?**
Mobile first. Shapes and cards are positioned in % of a box measured from Figma, so the composition keeps its proportions. On phones the floating cards scale down, small shapes are hidden, the topic pills become one scrollable row, and grids go 3 → 2 → 1 columns. Checked for horizontal scroll at 375px, 768px and 1440px.

**Q: A course card was wider than the phone screen. Why?**
Grid items have `min-width: auto`, so they can't shrink below their content (the long title). Adding `min-w-0` lets the item shrink and `truncate` then works.

---

## Accessibility

**Q: What did you do for accessibility?**
Semantic tags (`header`, `nav`, `main`, `section`, `footer`, `article`, `figure`), one `h1`, headings in order, labels on every input (visually hidden where the design has none), `alt=""` + `aria-hidden` on decorative shapes, `aria-current` on the active nav link, `aria-expanded` on the mobile menu button, `aria-pressed` on topic pills, `role="progressbar"` with values on the progress bar, visible focus outlines.

**Q: How is the whole course card clickable but still accessible?**
Only the title is a real link. Its `::after` pseudo-element is stretched over the card, so clicking anywhere works, but screen readers hear one clear link (the course title) instead of a card full of text.

**Q: How does the 404 page work, and why does it import Navbar and Footer itself?**
`app/not-found.jsx` at the root handles every URL that matches no route (and returns HTTP 404). It is rendered inside the *root* layout only, not inside the `(main)` group layout, so it doesn't get the Navbar/Footer automatically. I didn't move them into the root layout because the Login/Register designs have no navbar or footer.

**Q: How did you make the gradient "404" text?**
A linear gradient as the background, clipped to the text: `bg-clip-text text-transparent`. It fades from lime to transparent so the blue shows through at the bottom where the heading overlaps.

**Q: Why keep hidden headings in the footer?**
The design has no visible column titles, but `sr-only` headings still let screen-reader users jump between link groups.

**Q: Why is the search a plain `<form action="/courses">`?**
It works without JavaScript: submitting goes to `/courses?q=...`. The search page will read `q` from the URL, which also makes results shareable.
