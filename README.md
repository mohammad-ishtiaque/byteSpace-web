# ByteSpace

Landing page for ByteSpace, an online course platform. Built from the Figma design as a frontend assessment.

**Live demo:** comming soon

## What's included

- Landing page: hero with search, partner logos, course grid with topic filter,
  learning paths, feature sections, creator call-to-action, testimonials, footer
- 404 page
- Responsive layout (mobile, tablet, desktop)

## Tech stack

- Next.js (App Router)
- Tailwind CSS
- JavaScript

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```
src/
  app/          routes and layouts
  components/   ui/ (shared), layout/ (navbar, footer), home/, course/
  services/     data access (currently mock data)
  mocks/        fake data shaped like an API response
  lib/          constants and helpers
```

## Notes

- Course data comes from `mocks/` through `services/`. To use a real API,
  only the functions in `services/` need to change.
- The design is desktop only; the mobile and tablet layouts are my own.
- The newsletter button says "Subscribe" instead of "Search" (looks like a typo in the design).
- The search page, course pages and login/signup are not built yet, so those links show the 404 page.

## What I'd improve with more time

- Build the search page and reuse `CourseCard` there
- Login and signup pages
- Tests for the topic filter
