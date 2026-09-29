# Glossary: technical terms used in this project

Plain-language explanations, each with an example from ByteSpace.

---

## Performance

**Lazy loading**
Don't download something until it's about to be needed. The browser loads an image only when the user scrolls close to it.
- ByteSpace: the testimonial avatars at the bottom of the page aren't downloaded on first load. They load when you scroll down.
- `next/image` does this by default (`loading="lazy"`).
- Opposite: **eager loading** = download immediately. We use it only for the hero photo, because it's visible the moment the page opens.
- Why: less data on first load means a faster page, especially on mobile.

**LCP (Largest Contentful Paint)**
How long until the biggest thing on screen (usually the hero image or heading) appears. Google uses it to score page speed.
- ByteSpace: the hero student photo is the LCP element, so it gets `loading="eager"` + `fetchPriority="high"` instead of lazy loading.

**CLS (Cumulative Layout Shift)**
How much the page "jumps" while loading, e.g. text moving down when an image appears above it.
- Fix: give every image a `width` and `height` so the browser reserves the space before the image arrives. `next/font` also prevents text jumping when the font loads.

**WebP**
Image format that is 70–90% smaller than PNG and still supports transparency.
- ByteSpace: the woman photo went from 454 KB (PNG) to 110 KB (WebP).

**SVG**
Vector image: drawn with shapes and lines, not pixels. Sharp at any size, tiny file.
- ByteSpace: logo, icons, partner logos, the lime ring in the hero.
- Rule: photos and 3D renders → WebP. Icons and logos → SVG.

**Image optimization (`next/image`)**
Next.js resizes each image to the size the device needs, converts it to WebP/AVIF, and lazy-loads it. A phone gets a small file, a desktop a bigger one.

---

## Rendering

**SSG (Static Site Generation)**
The HTML is built once at build time and served as a ready-made file. Very fast.
- ByteSpace: the build output shows `○ /  (Static)`. The home page is SSG.

**SSR (Server-Side Rendering)**
HTML is built on the server on every request. Used when data changes per user or per request.

**CSR (Client-Side Rendering)**
The browser gets almost empty HTML and JavaScript builds the page. Bad for SEO and first load.

**Server Component**
The default in the Next.js App Router. Runs on the server, sends only HTML and no JavaScript.
- ByteSpace: Hero, CourseCard, Footer.

**Client Component (`"use client"`)**
Needed when something must react in the browser: clicks, state, current URL.
- ByteSpace: `MobileMenu` (open/close), `CourseExplorer` (selected topic), `NavLink` (active page), `NewsletterForm`.

**Hydration**
The server sends HTML, then React "wakes it up" in the browser by attaching click handlers.
- A **hydration mismatch** happens when the browser HTML differs from the server HTML. We saw one caused by the ColorZilla browser extension adding an attribute to `<body>`.

---

## React basics

**Component**
A reusable piece of UI written as a function. `CourseCard` is used on the home page and will be reused on the search page.

**Props**
Inputs passed into a component, like function arguments. `<CourseCard course={course} />`: `course` is a prop.

**State (`useState`)**
Data a component remembers and that changes over time. When it changes, React re-renders.
- ByteSpace: `selectedTopic` in `CourseExplorer`, `isOpen` in `MobileMenu`.

**Controlled component**
A component that doesn't keep its own state. The parent tells it what's selected and it reports clicks back.
- ByteSpace: `TopicFilter` gets `selected` and `onSelect` from `CourseExplorer`.

**`.map()` to render lists**
Turn an array of data into an array of components. Each item needs a unique `key`.
```jsx
{courses.map((course) => <CourseCard key={course.id} course={course} />)}
```

**Example line from the project:**
```js
const STUDENT_AVATARS = [1, 2, 3, 4, 5, 6, 7].map((n) => `/images/avatars/student-${n}.webp`);
```
- `[1, 2, ..., 7]`: a list of numbers.
- `.map((n) => ...)`: for each number `n`, make something new.
- `` `/images/avatars/student-${n}.webp` ``: a template string. `${n}` is replaced by the number.
- Result: `["/images/avatars/student-1.webp", ..., "/images/avatars/student-7.webp"]`.
- Why: shorter than writing 7 paths by hand, and adding an 8th avatar means changing one number.

---

## Next.js structure

**App Router**: routing based on folders in `app/`. Folder = URL, `page.jsx` = the page.

**Layout (`layout.jsx`)**: wraps every page in its folder and stays on screen between pages (e.g. Navbar + Footer).

**Route group `(main)`**: a folder in parentheses. It groups pages under one layout but doesn't appear in the URL.

**`not-found.jsx`**: the 404 page. The root one handles every URL that matches no page.

**Dynamic route `[slug]`**: one file handles many URLs, e.g. `/courses/learn-figma` and `/courses/big-data`.

**Search params**: the `?q=figma&topic=design` part of a URL. Used for search and filters so results can be shared or bookmarked.

---

## Styling

**Design tokens**
Named design values (colours, font sizes) defined once and used everywhere.
- ByteSpace: `--color-primary: #003be2` in `globals.css`, used as `bg-primary`. Change it once and the whole site updates.

**Tailwind CSS**
Style with small classes in the markup (`px-6`, `rounded-3xl`, `text-primary`) instead of writing separate CSS files.

**Responsive / mobile first**
Write styles for phones first, then add changes for bigger screens (`sm:`, `md:`, `lg:`).

**Breakpoint**
The screen width where the layout changes. Tailwind: `sm` 640px, `md` 768px, `lg` 1024px.

---

## Accessibility (a11y)

**Semantic HTML**: using the right tag for the job (`header`, `nav`, `main`, `button`, `a`), so browsers and screen readers understand the page.

**Screen reader**: software that reads the page aloud for blind users.

**`alt` text**: describes an image. Decorative images get `alt=""` so screen readers skip them.

**ARIA attributes**: extra hints for screen readers, e.g. `aria-expanded` (is the menu open?), `aria-pressed` (is this pill selected?), `aria-live` (announce when this list changes).

**`sr-only`**: text hidden visually but still read by screen readers, e.g. the footer column titles.

---

## Architecture

**Mock data**: fake data shaped like a real API response (`mocks/courses.js`), so the UI can be built before the backend exists.

**Services layer**: functions (`services/courses.js`) that are the only place that knows where data comes from. Swap mock for API here and nothing else changes.

**Separation of concerns**: each folder has one job (routes, UI, data, helpers), which makes bugs easy to locate.

**YAGNI** ("You Aren't Gonna Need It"): don't build things before you need them, e.g. we didn't add Redux or TypeScript.

---

## Git

**Branch**: a separate line of work. We work on `feature/landing-page`, not `main`.

**Commit**: a saved snapshot of changes, with a message describing it.

**Pull Request (PR)**: a request to merge a branch into `main`, where changes can be reviewed.

**GitHub Flow**: branch → commit → PR → review → merge → delete branch. `main` always stays deployable.
