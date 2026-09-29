# ByteSpace – Build Plan

Notes I wrote before touching any code. The goal is to understand the design and the rules first, then build.

## 1. What the assessment asks for

| Item | Status |
|---|---|
| Landing page (full, from Figma) | Required |
| Login + Signup pages | Bonus |
| Public GitHub repo | Required |
| Work on a feature branch, not `main` | Required |
| Pull Request into `main` | Required |
| Clean code, reusable components | Required |
| Live on Vercel, opens publicly | Required |
| Submit: Vercel URL + repo link + notes | Required |

Pages in Figma that are **not** in scope: Search, Course Details/Lessons/Reviews, Creator Profile, 404. I'll skip them unless there's time left.

## 2. Study the design before coding

Things to check in Figma (Dev Mode / inspect panel):

- **Colors** – the brand blue, the lime accent, text greys, border grey, background.
- **Fonts** – family, sizes and weights for headings, body, buttons.
- **Spacing** – container width (content sits inside a 1440px frame with side padding), gaps between sections, card padding.
- **Radius and borders** – pill buttons, card corners.
- **Assets** – logo, icons, photos, decorative shapes. Export icons as SVG, photos as WebP/PNG.
- **Repeated pieces** – anything that shows up more than once becomes a component.

The Figma file only has a desktop layout. I'll make it responsive myself (mobile first) and mention that in the PR notes.

## 3. Break the landing page into components

Following React's "Thinking in React": split the mockup into boxes, name them, build a static version first, and add state only where something actually changes.

```
App
├── Navbar                (logo, links, auth buttons, mobile menu)
├── Hero                  (headline, search bar, hero image)
├── LogoStrip             (partner logos)
├── CourseSection         (title, category filter chips, course grid)
│   └── CourseCard        (reused many times)
├── LearningPaths         (category icons row)
├── Feature               (image + text block, used twice with image left/right)
├── CreatorCTA            (blue banner with button)
├── Testimonials
│   └── TestimonialCard
└── Footer                (newsletter input, link columns)

Shared UI: Button, Container, SectionHeading, Rating (stars)
```

Login and Signup share one `AuthLayout` (blue background plus mockup on the left, form card on the right). Only the form fields change.

Repeated content (courses, testimonials, footer links) lives in a `data/` file as arrays and gets mapped into cards. No hardcoded copy-paste.

## 4. Tech choices (kept simple)

| Choice | Why |
|---|---|
| **Vite + React** | Fast setup, no server needed for a static site, what most juniors are expected to know. |
| **Tailwind CSS** | Design values go straight into the config as tokens, so the styling stays consistent and there's no big CSS file. |
| **React Router** | Three routes: `/`, `/login`, `/signup`. |
| **JavaScript** | TypeScript isn't needed at this size. |

No state library, no UI kit, no backend. Forms get basic client-side validation only.

## 5. Folder structure

```
src/
  assets/          images, svgs
  components/
    ui/            Button, Container, SectionHeading, Rating
    layout/        Navbar, Footer
    home/          Hero, CourseSection, CourseCard, ...
    auth/          AuthLayout
  data/            courses.js, testimonials.js, footerLinks.js
  pages/           Home.jsx, Login.jsx, Signup.jsx
  App.jsx
  main.jsx
```

## 6. Quality rules I'm following

**Responsive** (web.dev)
- Viewport meta tag in `index.html`.
- Mobile first, then add breakpoints where the layout actually breaks, not per device.
- Images get `max-width: 100%` plus width/height so the layout doesn't jump.
- Flexbox/Grid, no fixed pixel widths on containers.

**Accessible, semantic HTML** (MDN)
- `header`, `nav`, `main`, `section`, `footer` instead of div soup.
- One `h1`, then headings in order.
- Real `<button>` for actions, `<a>` / `Link` for navigation.
- Every input has a `<label>`.
- Meaningful `alt` text; `alt=""` for decorative shapes.
- Visible focus states, so the site works with the keyboard.

**Performance**
- Compress images, lazy-load anything below the fold.
- Only load the font weights that are actually used.

## 7. Git workflow (GitHub flow)

1. `main` holds only the initial setup.
2. Create a branch: `feature/landing-page`.
3. Small commits, one change each, with clear messages:
   `feat: add navbar`, `feat: add course card`, `fix: hero spacing on mobile`, `chore: setup tailwind`.
4. Push the branch, open a PR into `main` with a short description, screenshots and the preview link.
5. Bonus pages go on their own branch (`feature/auth-pages`) with a separate PR.
6. Merge after self-review, then delete the branch.

## 8. Deployment

- Import the GitHub repo in Vercel (framework preset: Vite).
- Every pushed branch/PR gets a preview URL automatically; merging into `main` creates the production deploy.
- Add a `vercel.json` rewrite so `/login` and `/signup` don't 404 on refresh (client-side routing).
- Open the live link in a private window to confirm it's public.

## 9. Build order

1. Setup: Vite, Tailwind, router, fonts, color tokens, folder structure → commit on `main`.
2. Branch `feature/landing-page`.
3. Shared UI (Button, Container, headings).
4. Navbar and Footer.
5. Sections top to bottom.
6. Responsive pass (mobile, tablet, desktop).
7. Accessibility and cleanup pass.
8. PR, then deploy.
9. Bonus: `feature/auth-pages` → Login + Signup → PR.
10. README: how to run it, live link, what I'd improve with more time.

## 10. Done checklist

- [ ] Landing page matches Figma on desktop
- [ ] Looks fine on mobile and tablet
- [ ] No console errors, `npm run build` passes
- [ ] Lighthouse check (accessibility and performance) looks reasonable
- [ ] Repo is public, PR is open/merged
- [ ] Vercel link opens in incognito
- [ ] README filled in

## Sources

- GitHub flow – https://docs.github.com/en/get-started/using-github/github-flow
- Thinking in React – https://react.dev/learn/thinking-in-react
- Responsive design basics – https://web.dev/articles/responsive-web-design-basics
- HTML and accessibility – https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/HTML
- Figma Dev Mode – https://help.figma.com/hc/en-us/articles/15023124644247-Guide-to-Dev-Mode
- Vercel Git deployments – https://vercel.com/docs/git
