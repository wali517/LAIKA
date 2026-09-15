import { useEffect, useRef, useState } from "react";
import films from "../data/films.js";

const navLinks = [
  { label: "Live Action", href: "/live-action" },
  { label: "Who We Are", href: "/who-we-are" },
  { label: "News & Events", href: "/news" },
  { label: "Careers", href: "/careers" },
];

const filmOrder = [
  "Wildwood",
  "Missing Link",
  "Kubo",
  "The Boxtrolls",
  "ParaNorman",
  "Coraline",
];

const normalize = (value = "") =>
  value.toLowerCase().replace(/\s+/g, " ").trim();

const slugify = (value = "") =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

function LaikaLogo() {
  return (
    <span
      className="block h-12 w-22 select-none"
      data-icon="LaikaLogo"
      aria-hidden="true"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 88 48"
        className="h-full w-full"
      >
        <path
          fill="currentColor"
          d="M9.75 48.003V43.87H4.2V25.58L0 26.953v21.05h9.75ZM18.238 26.994c0-.714.425-1.576 1.374-1.892l3.73-1.202c.319-.1.588-.149.823-.149.537 0 1.177.26 1.177 1.497v6.143l-7.104 1.155v-5.552Zm0 21.007V36.98l7.104-.965v11.986h4.316V23.348c0-2.527-1.816-4.46-4.22-4.46-.482 0-.979.08-1.475.234l-5.645 1.842c-2.505.796-4.396 3.389-4.396 6.03V48h4.316ZM39.767 48.002V13.96l-4.876 1.586v32.457h4.876ZM50.312 48.003V30.134l9.959 17.87h5.999l-10.61-18.63L65.396 5.6l-6.197 2.026-8.886 22.485V10.518l-5.015 1.638v35.847h5.015ZM74.075 9.175c0-.568.34-1.293 1.134-1.558l6.231-1.946c1.15-.361 1.547.031 1.547 1.014v15.343l-8.912 1.487V9.175Zm0 38.826V29.46l8.912-1.264v19.806h5.01V4.785c0-2.725-1.963-4.783-4.567-4.783a5.29 5.29 0 0 0-1.578.25l-8.125 2.613c-2.644.84-4.665 3.52-4.665 6.31V48h5.013Z"
        />
      </svg>
    </span>
  );
}

function ChevronDown({ open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      className={`h-5 w-5 transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"}`}
      aria-hidden="true"
    >
      <path
        d="M8 9C9.63877 10.9462 10.9796 12.9496 12 15C13.0204 12.9496 14.3612 10.9796 16 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="M8.10086 10.4368L8.87868 10.3661C10.4343 10.2247 11.9192 10.0126 13.3335 9.72973L6.89878 16.1644L7.95944 17.2251L14.4648 10.7197C14.182 12.1339 13.9698 13.6188 13.8284 15.1745L13.7577 15.9523L15.2426 16.023L15.3134 15.2452C15.5255 12.7703 16.0205 10.4368 16.7276 8.31552C16.869 8.03268 16.7276 7.74984 16.5154 7.5377C16.3033 7.32557 16.0205 7.32557 15.7376 7.32557C13.6163 8.03268 11.3536 8.45694 8.80797 8.73978L8.03015 8.8105L8.10086 10.2954L8.10086 10.4368Z"
        fill="currentColor"
      />
    </svg>
  );
}

function DesktopNavbar({ scrolled, navbarVisible, filmsOpen, setFilmsOpen }) {
  const [buttonHovered, setButtonHovered] = useState(false);
  const [hoveredFilm, setHoveredFilm] = useState(null);
  const closeTimer = useRef(null);
  const openFilms = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setFilmsOpen(true);
  };
  const scheduleClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }
    closeTimer.current = setTimeout(() => {
      setFilmsOpen(false);
      setHoveredFilm(null);
      setButtonHovered(false);
    }, 120);
  };
  const closeFilmsImmediately = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setFilmsOpen(false);
    setHoveredFilm(null);
    setButtonHovered(false);
  };
  const getFilm = (title) =>
    films.find((film) => normalize(film.title) === normalize(title));
  return (
    <>
      <div
        className={`hidden xl:block fixed inset-0 z-80 bg-black/50 pointer-events-none transition-all duration-350 ease-out ${filmsOpen ? "opacity-100 backdrop-blur-sm" : "opacity-0 backdrop-blur-0"}`}
        aria-hidden="true"
      />
      <header
        className={`hidden xl:block fixed top-0 left-0 right-0 z-100 px-5 pt-4.5 transition-transform duration-350 ease-out ${navbarVisible ? "translate-y-0" : "-translate-y-45"}`}
      >
        <div
          className={`relative mx-auto w-full max-w-360 overflow-hidden rounded-lg transition-all duration-350 ease-out ${scrolled || filmsOpen ? ` bg-white text-brand-dark shadow-[0_15px_45px_rgba(0,0,0,0.08)] ` : ` bg-transparent text-white `}`}
        >
          <div className="flex h-27.75 items-center justify-between p-8">
            <a
              href="/"
              aria-label="Laika Studios home"
              title="Laika Studio"
              className="flex shrink-0 items-center"
            >
              <LaikaLogo />
            </a>
            <nav>
              <ul className="flex items-center gap-6 text-[15px]">
                <li>
                  <div
                    className="relative flex items-center"
                    onMouseEnter={() => {
                      setButtonHovered(true);
                      openFilms();
                    }}
                    onMouseLeave={() => {
                      setButtonHovered(false);
                      scheduleClose();
                    }}
                  >
                    <button
                      type="button"
                      aria-expanded={filmsOpen}
                      aria-controls="animated-films-dropdown"
                      onFocus={() => {
                        setButtonHovered(true);
                        openFilms();
                      }}
                      className={`relative flex items-center gap-1 px-3.25 py-2.25 rounded-md leading-none whitespace-nowrap transition-all duration-400 ${buttonHovered ? "bg-brand-yellow text-brand-dark" : ""}`}
                    >
                      <span>Animated Films</span>
                      <ChevronDown open={filmsOpen} />
                      <span
                        className={`absolute top-18.5 left-8.25 right-8.25 h-px origin-center bg-current transition-transform duration-400 ${buttonHovered ? "scale-x-100" : "scale-x-0"}`}
                      />
                    </button>
                  </div>
                </li>
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onMouseEnter={closeFilmsImmediately}
                      className={`group relative block rounded-md px-3.25 py-2.25 leading-none whitespace-nowrap transition-all duration-400 ${scrolled ? ` hover:bg-brand-yellow hover:text-brand-dark ` : ` hover:bg-white hover:text-brand-dark `}`}
                    >
                      {link.label}
                      <span
                        className={`absolute top-18.5 left-5.75 right-5.75 h-px origin-center scale-x-0 transition-transform duration-400 group-hover:scale-x-100 ${scrolled ? "bg-brand-dark" : "bg-white"}`}
                      />
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="https://shop.laika.com/"
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={closeFilmsImmediately}
                    className={`group relative flex items-center gap-0.75 rounded-md px-3.25 py-2.25 leading-none whitespace-nowrap transition-all duration-400 ${scrolled ? ` hover:bg-brand-yellow hover:text-brand-dark ` : ` hover:bg-white hover:text-brand-dark `}`}
                  >
                    <span>Shop</span>
                    <span className="flex items-center">
                      <ExternalIcon />
                    </span>
                    <span
                      className={`absolute top-18.5 left-5.75 right-5.75 h-px origin-center bg-current scale-x-0 transition-transform duration-400 group-hover:scale-x-100 ${scrolled ? "bg-brand-dark" : "bg-white"}`}
                    />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div
            id="animated-films-dropdown"
            onMouseEnter={() => {
              if (closeTimer.current) {
                clearTimeout(closeTimer.current);
                closeTimer.current = null;
              }
              setFilmsOpen(true);
            }}
            onMouseLeave={() => {
              setHoveredFilm(null);
              setButtonHovered(false);
              if (closeTimer.current) {
                clearTimeout(closeTimer.current);
              }
              closeTimer.current = setTimeout(() => {
                setFilmsOpen(false);
                closeTimer.current = null;
              }, 120);
            }}
            className={`overflow-hidden transition-[max-height,opacity] duration-350 ease-out ${filmsOpen ? "max-h-100 opacity-100" : "max-h-0 opacity-0"}`}
          >
            <div className="mx-10 border-t border-dashed border-brand-dark/40"/>
            <div className="grid grid-cols-[300px_300px] gap-12.5 px-10 pt-16.25 pb-17.5">
              <div className="flex flex-col gap-10.5">
                {filmOrder.slice(0, 3).map((title, index) => {
                  const film = getFilm(title);
                  if (!film) return null;
                  const number = String(index + 1).padStart(2, "0");
                  const isHovered = hoveredFilm === title;
                  const muted = hoveredFilm !== null && !isHovered;
                  const href =
                    film.href || film.url || `/films/${slugify(title)}`;
                  return (
                    <a
                      key={title}
                      href={href}
                      onMouseEnter={() => setHoveredFilm(title)}
                      onMouseLeave={() => setHoveredFilm(null)}
                      onFocus={() => setHoveredFilm(title)}
                      className="group relative flex w-max items-baseline gap-3.75"
                    >
                      <span
                        className={`text-[15px] leading-none transition-colors duration-400 ${muted ? "text-[#999999]" : "text-brand-dark"}`}
                      >
                        /{number}/
                      </span>
                      <span
                        className={`relative font-display text-[20px] font-normal leading-7.5 transition-colors duration-400 ${muted ? "text-[#999999]" : "text-brand-dark"}`}
                      >
                        {title}
                        <span
                          className={`absolute -bottom-0.75 left-0 right-0 h-px origin-left bg-brand-dark transition-transform duration-400 ${isHovered ? "scale-x-100" : "scale-x-0"}`}
                        />
                      </span>
                    </a>
                  );
                })}
              </div>
              <div className="flex flex-col gap-10.5">
                {filmOrder.slice(3, 6).map((title, localIndex) => {
                  const film = getFilm(title);
                  if (!film) return null;
                  const index = localIndex + 3;
                  const number = String(index + 1).padStart(2, "0");
                  const isHovered = hoveredFilm === title;
                  const muted = hoveredFilm !== null && !isHovered;
                  const href =
                    film.href || film.url || `/films/${slugify(title)}`;
                  return (
                    <a
                      key={title}
                      href={href}
                      onMouseEnter={() => setHoveredFilm(title)}
                      onMouseLeave={() => setHoveredFilm(null)}
                      onFocus={() => setHoveredFilm(title)}
                      className="group relative flex w-max items-baseline gap-5"
                    >
                      <span
                        className={`text-[15px] leading-none transition-colors duration-400 ${muted ? "text-[#999999]" : "text-brand-dark"}`}
                      >
                        /{number}/
                      </span>
                      <span
                        className={`relative font-display text-[20px] font-normal leading-7.5 transition-colors duration-400 ${muted ? "text-[#999999]" : "text-brand-dark"}`}
                      >
                        {title}
                        <span
                          className={`absolute -bottom-0.75 left-0 right-0 h-px origin-left bg-brand-dark transition-transform duration-400 ${isHovered ? "scale-x-100" : "scale-x-0"}`}
                        />
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

function MobileTabletNavbar({
  scrolled,
  navbarVisible,
  mobileMenuOpen,
  setMobileMenuOpen,
}) {
  const [filmsExpanded, setFilmsExpanded] = useState(false);
  const closeMenu = () => {
    setMobileMenuOpen(false);
    setFilmsExpanded(false);
  };
  const getFilm = (title) =>
    films.find((film) => normalize(film.title) === normalize(title));
  useEffect(() => {
    if (!mobileMenuOpen) {
      document.body.style.overflow = "";
      return;
    }
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileMenuOpen]);
  return (
    <>
      {!mobileMenuOpen && (
        <header
          className={`xl:hidden fixed bg-[#151515] left-0 right-0 top-0 z-100 transition-transform duration-350 ease-out ${navbarVisible ? "translate-y-0" : "-translate-y-30"}`}
        >
          <nav
            className={`flex h-22 items-center justify-between border-b border-dashed px-4.25 transition-colors duration-300 ${scrolled ? ` border-brand-dark/30 bg-white text-brand-dark ` : ` border-white/40 bg-transparent text-white `}`}
          >
            <a
              href="/"
              aria-label="Laika Studios home"
              title="Laika Studio"
              className="transition-opacity duration-400 hover:opacity-70"
            >
              <LaikaLogo />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="rounded-full px-2.5 py-2 text-[16px] leading-none transition-all duration-400"
            >
              Menu
            </button>
          </nav>
        </header>
      )}
      <div
        className={`xl:hidden fixed inset-0 z-200 overflow-y-auto overscroll-contain bg-[#151515] text-white transition-transform duration-350 ease-[cubic-bezier(.22,1,.36,1)] ${mobileMenuOpen ? "translate-x-0" : "pointer-events-none translate-x-full"}`}
      >
        <div className="sticky top-0 z-10 flex h-22 items-center justify-between border-b border-dashed border-white/30 bg-[#151515] px-4.25">
          <a
            href="/"
            onClick={closeMenu}
            aria-label="Laika Studios home"
            title="Laika Studio"
            className="transition-opacity duration-400 hover:opacity-70"
          >
            <LaikaLogo />
          </a>
          <button
            type="button"
            onClick={closeMenu}
            className="flex items-center gap-2.25 rounded-full px-2.5 py-2 text-[16px] leading-none transition-all duration-400"
          >
            <span>Close</span>
            <span className="text-[20px] font-light leading-none"> ×</span>
          </button>
        </div>
        <nav>
          <div className="border-b border-dashed border-white/25">
            <button
              type="button"
              onClick={() => setFilmsExpanded((value) => !value)}
              aria-expanded={filmsExpanded}
              className={`flex min-h-31.75 w-full items-center justify-between px-4.25 text-left transition-colors duration-400 ${filmsExpanded ? "text-brand-yellow" : "text-white"}`}
            >
              <span
                className="font-grotesk text-[clamp(44px,3.2vw,40px)] font-bold leading-none
      tracking-[-0.02em]"
              >
                Animated Films
              </span>
              <span className="mr-3.75 flex items-center">
                <ChevronDown open={filmsExpanded} />
              </span>
            </button>
            <div
              className={`overflow-hidden transition-[max-height,opacity] duration-350 ease-out ${filmsExpanded ? "max-h-175 opacity-100" : "max-h-0 opacity-0"}`}
            >
              <div className="flex flex-col gap-5 px-4.25 pb-8">
                {filmOrder.map((title, index) => {
                  const film = getFilm(title);
                  if (!film) return null;
                  const number = String(index + 1).padStart(2, "0");
                  const href =
                    film.href || film.url || `/films/${slugify(title)}`;
                  return (
                    <a
                      key={title}
                      href={href}
                      onClick={closeMenu}
                      className="flex font-display font-bold items-baseline gap-12.5 text-[14px] leading-5 transition-colors duration-20 hover:text-brand-yellow"
                    >
                      <span className="text-white/50">/{number}/</span>
                      <span>{title}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeMenu}
              className="flex min-h-31.75 items-center border-b border-dashed border-white/25 px-4.25 font-grotesk font-bold text-[clamp(44px,3.2vw,39px)] leading-none tracking-[-0.045em] transition-colors duration-400 hover:text-brand-yellow"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://shop.laika.com/"
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
            className="flex min-h-31.75 items-center justify-between border-b border-dashed border-white/25 px-4.25 font-grotesk font-bold text-[clamp(44px,3.2vw,39px)] leading-none tracking-[-0.045em] transition-colors duration-400 hover:text-brand-yellow"
          >
            <span>Shop</span>
            <span className="mr-3.75">
              <ExternalIcon />
            </span>
          </a>
        </nav>
      </div>
    </>
  );
}

export default function Navbar() {
  const [filmsOpen, setFilmsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const lastScrollY = useRef(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= 20) {
        setNavbarVisible(true);
        setScrolled(false);
        lastScrollY.current = currentScrollY;
        return;
      }
      setScrolled(true);
      if (mobileMenuOpen) {
        setNavbarVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }
      if (currentScrollY > lastScrollY.current + 4) {
        setNavbarVisible(false);
      }
      if (currentScrollY < lastScrollY.current - 4) {
        setNavbarVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };
    lastScrollY.current = window.scrollY;
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mobileMenuOpen]);
  useEffect(() => {
    if (mobileMenuOpen) {
      setFilmsOpen(false);
    }
  }, [mobileMenuOpen]);
  return (
    <>
      <DesktopNavbar
        scrolled={scrolled}
        navbarVisible={navbarVisible}
        filmsOpen={filmsOpen}
        setFilmsOpen={setFilmsOpen}
      />
      <MobileTabletNavbar
        scrolled={scrolled}
        navbarVisible={navbarVisible}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </>
  );
}
