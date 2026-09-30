# ByteSpace

Frontend for ByteSpace, an online course platform, built from the Figma design as a frontend assessment.

**Live demo:** [https://byte-space-web.vercel.app/](https://byte-space-web.vercel.app/)

## Pages

| Page | URL |
|---|---|
| Landing page | `/` |
| Courses (search, filters, pagination) | `/courses` |
| Course details with About, Lessons and Reviews tabs | `/courses/[slug]`, `/lessons`, `/reviews` |
| Creators | `/creators` |
| Creator profile | `/creators/[slug]` |
| Login and signup | `/login`, `/signup` |
| 404 | any unknown URL |

## Features

- Search courses by text, topic, level and category, with sorting and pagination.
  All filters live in the URL, so a search can be shared or bookmarked.
- Topic filter on the landing page updates the course grid without reloading.
- Course details with a shared hero and sidebar, and a star filter for reviews.
- Creator profiles list only that creator's courses, with a follow button.
- Login and signup forms with validation. Following a creator asks you to sign in
  first and brings you back to the same page afterwards.
- Responsive on mobile, tablet and desktop.
- Light motion: floating 3D shapes, numbers that count up, sections that fade in
  on scroll and a short fade between pages. All of it turns off when the system
  "reduce motion" setting is on.
- Accessibility: semantic HTML, labels on every input, keyboard-friendly dropdowns
  and visible focus styles.

## Tech stack

- Next.js 16 (App Router)
- Tailwind CSS 4
- JavaScript

No UI kit, state library or animation library.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Run the production build |
| `npm run lint` | Lint the project |

## Project structure

```
src/
  app/
    (main)/       pages with the navbar and footer
    (auth)/       login and signup, without the navbar and footer
  components/
    ui/           shared building blocks (Button, Dropdown, Icon, ...)
    layout/       navbar and footer
    home/         landing page sections
    course/       course cards, filters and course details parts
    creator/      creator profile parts
    auth/         login and signup forms
  hooks/          shared logic (form handling, in-view detection)
  services/       the only place that reads data
  mocks/          sample data shaped like an API response
  lib/            constants and helpers
```

## Notes

- All data comes from `mocks/` through `services/`. To use a real API, only the
  functions in `services/` need to change.
- There is no backend yet. Login and signup fake the request, and the signed-in user
  and followed creators are stored in `localStorage`.
- The Figma file is desktop only, so the mobile and tablet layouts are my own.
- The newsletter button says "Subscribe" instead of "Search", which looks like a typo in the design.
- The course preview video and social login buttons show a "coming soon" note.

## What I'd improve with more time

- Connect the pages to a real API and real authentication
- Add tests for the filters, forms and follow flow
- Add a cart and checkout for the "Enroll Now" button
