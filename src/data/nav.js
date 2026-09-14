// Straight from the live site's navigation payload (S01Navigation).
// "Animated Films" is the only item with a dropdown; its 6 entries split
// into two columns of 3 in the mega menu (left col under the logo,
// right col under the shop link, per the reference video).
export const navItems = [
  {
    label: "Animated Films",
    href: "/our-films",
    dropdown: [
      { label: "Wildwood", href: "/our-films/wildwood" },
      { label: "Missing Link", href: "/our-films/missinglink" },
      { label: "Kubo", href: "/our-films/kubo" },
      { label: "The Boxtrolls", href: "/our-films/boxtrolls" },
      { label: "ParaNorman", href: "/our-films/paranorman" },
      { label: "Coraline", href: "/our-films/coraline" },
    ],
  },
  { label: "Live Action", href: "/live-action", dropdown: [] },
  { label: "Who We Are", href: "/who-we-are", dropdown: [] },
  { label: "News & Events", href: "/news", dropdown: [] },
  { label: "Careers", href: "/careers", dropdown: [] },
];

export const shopLink = { label: "Shop", href: "https://shop.laika.com/" };
