export const ROUTES = {
  home: "/",
  courses: "/courses",
  creators: "/creators",
  login: "/login",
  signup: "/signup",
  cart: "/cart",
};

export const courseUrl = (slug, tab) => (tab ? `${ROUTES.courses}/${slug}/${tab}` : `${ROUTES.courses}/${slug}`);

export const creatorUrl = (slug) => `${ROUTES.creators}/${slug}`;

export const NAV_LINKS = [
  { label: "Home", href: ROUTES.home },
  { label: "Courses", href: ROUTES.courses },
  { label: "Creators", href: ROUTES.creators },
];

export const FOOTER_LINKS = [
  {
    title: "Browse",
    columns: [
      ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
      ["Development", "Marketing", "Photography", "Finance", "Sport"],
    ],
  },
  {
    title: "Platform",
    columns: [["Become a Creator", "Affiliate Program", "Contact", "Help", "About"]],
  },
];

export const LEGAL_LINKS = ["Privacy Policy", "Terms of Service", "Cookies Settings"];
