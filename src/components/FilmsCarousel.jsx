import React, { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const films = [
  {
    id: "wildwood",
    title: "WILDWOOD",
    category: "ANIMATED FILMS",
    image:
      "https://www.datocms-assets.com/153672/1750184412-laika_home_c-04-slider_1_ww_desktop.jpg",
    mobile:
      "https://www.datocms-assets.com/153672/1750184411-laika_home_c-04-slider_1_ww_mobile.jpg",
    thumb:
      "https://www.datocms-assets.com/153672/1750184411-laika_home_c-04-slider_1_ww_thumbnail.jpg",
    logo: "https://www.datocms-assets.com/153672/1751400881-trim-ww-logo-white.svg",
    description:
      "Magic. Wonder. Danger. Welcome to Wildwood! LAIKA is in production on its next animated feature film, a love letter to the studio's home just outside Portland, Oregon.",
    href: "/our-films/wildwood",
  },
  {
    id: "missing-link",
    title: "MISSING LINK",
    category: "ANIMATED FILMS",
    image:
      "https://www.datocms-assets.com/153672/1750184410-laika_home_c-04-slider_2_ml_desktop_2.jpg",
    mobile:
      "https://www.datocms-assets.com/153672/1750184411-laika_home_c-04-slider_2_ml_mobile_2.jpg",
    thumb:
      "https://www.datocms-assets.com/153672/1750184411-laika_home_c-04-slider_2_ml_thumbnail_2.jpg",
    logo: "https://www.datocms-assets.com/153672/1751400880-trim-ml-logo-horizontal-white.svg",
    description:
      "Meet Mr. Link: the world’s most endearing—and hairy—adventurer, who sets off on a globe-trotting trek to find his long-lost relatives. Missing Link is a vibrant, witty tale of friendship, discovery, and belonging. Travel the world one stop-motion frame at a time.",
    href: "/our-films/missinglink",
  },
  {
    id: "kubo",
    title: "KUBO AND THE TWO STRINGS",
    category: "ANIMATED FILMS",
    image:
      "https://www.datocms-assets.com/153672/1750184410-laika_home_c-04-slider_3_kbo_desktop.jpg",
    mobile:
      "https://www.datocms-assets.com/153672/1750184411-laika_home_c-04-slider_3_kbo_mobile.jpg",
    thumb:
      "https://www.datocms-assets.com/153672/1750184410-laika_home_c-04-slider_3_kbo_thumbnail.jpg",
    logo: "https://www.datocms-assets.com/153672/1751400881-trim-kbo-logo-white.svg",
    description:
      "Magic, myth, and memory collide in Kubo and the Two Strings, a breathtaking epic set in ancient Japan. Armed with a magical shamisen and a mysterious past, Kubo must unravel his family's legacy in a quest that will define his destiny.",
    href: "/our-films/kubo",
  },
  {
    id: "boxtrolls",
    title: "THE BOXTROLLS",
    category: "ANIMATED FILMS",
    image:
      "https://www.datocms-assets.com/153672/1750184411-laika_home_c-04-slider_4_box_desktop.jpg",
    mobile:
      "https://www.datocms-assets.com/153672/1750184411-laika_home_c-04-slider_4_box_mobile.jpg",
    thumb:
      "https://www.datocms-assets.com/153672/1750184411-laika_home_c-04-slider_4_box_thumbnail.jpg",
    logo: "https://www.datocms-assets.com/153672/1751400881-trim-box-logo-white.svg",
    description:
      "In the quirky underground world of Cheesebridge, a young boy raised by mischievous trash-collecting trolls must fight to protect his adopted family. The Boxtrolls is a wildly imaginative tale about identity, kindness, and breaking outside the box.",
    href: "/our-films/boxtrolls",
  },
  {
    id: "paranorman",
    title: "PARANORMAN",
    category: "ANIMATED FILMS",
    image:
      "https://www.datocms-assets.com/153672/1750184411-laika_home_c-04-slider_5_par_desktop_2.jpg",
    mobile:
      "https://www.datocms-assets.com/153672/1750184411-laika_home_c-04-slider_5_par_mobile_2.jpg",
    thumb:
      "https://www.datocms-assets.com/153672/1750184411-laika_home_c-04-slider_5_par_thumbnail_2.jpg",
    logo: "https://www.datocms-assets.com/153672/1751400935-trim-par-white-logo.svg",
    description:
      "When the dead rise, only one misunderstood boy can save his town. ParaNorman blends ghoulish thrills and heartfelt humor in a spooky adventure about courage, acceptance, and empathy.",
    href: "/our-films/paranorman",
  },
  {
    id: "coraline",
    title: "CORALINE",
    category: "ANIMATED FILMS",
    image:
      "https://www.datocms-assets.com/153672/1750184410-laika_home_c-04-slider_6_cor_desktop.jpg",
    mobile:
      "https://www.datocms-assets.com/153672/1750184410-laika_home_c-04-slider_6_cor_mobile.jpg",
    thumb:
      "https://www.datocms-assets.com/153672/1750184410-laika_home_c-04-slider_6_cor_thumbnail.jpg",
    logo: "https://www.datocms-assets.com/153672/1751400881-trim-cor-logo-nocat-white.svg",
    description:
      "Be careful what you wish for. The story that started it all — Coraline is a darkly enchanting tale of a curious girl who discovers a secret door to a seemingly perfect alternate reality—until its sinister secrets begin to unravel.",
    href: "/our-films/coraline",
  },
];

const IMAGE_DURATION = 1600;
function ArrowRightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className="w-5 h-5"
    >
      <path
        d="M10.9 8.199L11.5 8.699C12.7 9.699 13.9 10.599 15.1 11.399H6V12.899H15.2C14 13.699 12.8 14.599 11.6 15.599L11 16.099L12 17.199L12.6 16.699C14.5 15.099 16.5 13.799 18.5 12.799C18.8 12.699 18.9 12.399 18.9 12.099C18.9 11.799 18.7 11.599 18.5 11.399C16.5 10.399 14.6 9.099 12.6 7.499L12 6.999L11 8.099L10.9 8.199Z"
        fill="currentColor"
      />
    </svg>
  );
}

function TrailerButton({ href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Watch the trailer"
      className="wildwood-trailer wildwood-explore  group"
    >
      <svg
        className="wildwood-border"
        viewBox="0 0 252 64"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <rect
          className="wildwood-border-path"
          x="3"
          y="3"
          width="246"
          height="58"
          rx="7"
          ry="7"
          pathLength="1000"
        />
      </svg>
      <span className="wildwood-button-label">Explore</span>
      <span className="wildwood-arrow-window">
        <svg
          className="wildwood-arrow wildwood-arrow-one"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            d="M5 12 H18 M13 7 L18 12 L13 17"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
        </svg>
        <svg
          className="wildwood-arrow wildwood-arrow-two"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            d="M5 12 H18 M13 7 L18 12 L13 17"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
        </svg>
      </span>
    </a>
  );
}

function ChevronIcon({ direction = "right" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className="w-6 h-6"
    >
      {direction === "left" ? (
        <path
          opacity="0.9"
          d="M15 8C13.0538 9.63877 11.0504 10.9796 9 12C11.0504 13.0204 13.0538 14.3612 15 16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
      ) : (
        <path
          opacity="0.9"
          d="M9 16C10.9462 14.3612 12.9496 13.0204 15 12C12.9496 10.9796 10.9462 9.63877 9 8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}

function getIncomingClip(progress, direction = "forward") {
  const p = Math.max(0, Math.min(1, progress));
  if (direction === "forward") {
    const topLeft = 135 - 170 * p;
    const topRight = 100 + 35 * p;
    const bottomRight = 100;
    const bottomLeft = 100 - 100 * p;
    return `polygon(
      ${topLeft}% 0%,
      ${topRight}% 0%,
      ${bottomRight}% 100%,
      ${bottomLeft}% 100%
    )`;
  }

  const topLeft = -35 + 170 * p;
  const topRight = -35 * p;
  const bottomRight = 0;
  const bottomLeft = 100 * p;
  return `polygon(
    ${topLeft}% 0%,
    ${topRight}% 0%,
    ${bottomRight}% 100%,
    ${bottomLeft}% 100%
  )`;
}

export default function LaikaFullSectionPage() {
  const sliderSectionRef = useRef(null);
  const stickyWrapperRef = useRef(null);
  const incomingImageRef = useRef(null);
  const scalableWrapperRef = useRef(null);
  const [thumbsVisible, setThumbsVisible] = useState(false);
  const [active, setActive] = useState(0);
  const [displayed, setDisplayed] = useState(0);
  const [incomingProgress, setIncomingProgress] = useState(1);
  const [direction, setDirection] = useState("forward");
  const [isAnimating, setIsAnimating] = useState(false);
  const [contentVisible, setContentVisible] = useState(true);
  const animationRef = useRef(null);
  const touchStartX = useRef(null);

  useEffect(() => {
    if (
      !sliderSectionRef.current ||
      !stickyWrapperRef.current ||
      !scalableWrapperRef.current
    )
      return;
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sliderSectionRef.current,
        start: "top bottom",
        end: "top top",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const leftTop = 42 - 42 * progress;
          const rightTop = 8 - 8 * progress;
          const clipPathVal = `polygon(0% ${leftTop}%, 100% ${rightTop}%, 100% 100%, 0% 100%)`;

          if (stickyWrapperRef.current) {
            stickyWrapperRef.current.style.clipPath = clipPathVal;
            stickyWrapperRef.current.style.webkitClipPath = clipPathVal;
          }

          if (progress < 1) {
            if (scalableWrapperRef.current) {
              let scaleVal;
              if (progress <= 0.6) {
                scaleVal = 1 + (progress / 0.6) * 0.15;
              } else {
                scaleVal = 1.15 - ((progress - 0.6) / 0.4) * 0.15;
              }
              scalableWrapperRef.current.style.transform = `scale(${scaleVal})`;
            }
            if (incomingImageRef.current) {
              let scaleVal;
              if (progress <= 0.6) {
                scaleVal = 1.15;
              } else {
                scaleVal = 1.15 - ((progress - 0.6) / 0.4) * 0.15;
              }
              incomingImageRef.current.style.transform = `scale(${scaleVal})`;
            }
          } else {
            if (scalableWrapperRef.current) {
              scalableWrapperRef.current.style.transform = "scale(1)";
            }
            if (incomingImageRef.current) {
              incomingImageRef.current.style.transform = "scale(1)";
            }
          }
        },
      });
    }, sliderSectionRef);
    return () => ctx.revert();
  }, []);

  const clearAnimation = () => {
    if (animationRef.current) {
      clearTimeout(animationRef.current);
      animationRef.current = null;
    }
  };

  useEffect(() => {
    if (!sliderSectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setThumbsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      },
    );
    observer.observe(sliderSectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    return () => clearAnimation();
  }, []);

  const goTo = useCallback(
    (index) => {
      if (index < 0 || index >= films.length) return;
      if (index === active || isAnimating) return;
      clearAnimation();
      setIsAnimating(true);
      const isFwd = index > active;
      setDirection(isFwd ? "forward" : "backward");
      setContentVisible(false);
      setActive(index);
      setIncomingProgress(0);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIncomingProgress(1);
        });
      });
      animationRef.current = setTimeout(() => {
        setDisplayed(index);
        setIncomingProgress(1);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setContentVisible(true);
            setIsAnimating(false);
            animationRef.current = null;
          });
        });
      }, IMAGE_DURATION);
    },
    [active, isAnimating],
  );
  const nextSlide = useCallback(() => {
    if (active < films.length - 1) {
      goTo(active + 1);
    }
  }, [active, goTo]);

  const previousSlide = useCallback(() => {
    if (active > 0) {
      goTo(active - 1);
    }
  }, [active, goTo]);

  useEffect(() => {
    const handleKeyboard = (event) => {
      if (event.key === "ArrowRight") nextSlide();
      if (event.key === "ArrowLeft") previousSlide();
    };

    window.addEventListener("keydown", handleKeyboard);
    return () => window.removeEventListener("keydown", handleKeyboard);
  }, [nextSlide, previousSlide]);
  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;
    const endX = event.changedTouches[0].clientX;
    const difference = touchStartX.current - endX;

    if (Math.abs(difference) > 50) {
      if (difference > 0) nextSlide();
      else previousSlide();
    }
    touchStartX.current = null;
  };

  const currentFilm = films[displayed];
  const incomingFilm = films[active];
  const isChanging = active !== displayed;
  const incomingClip = getIncomingClip(incomingProgress, direction);

  return (
    <section
      ref={sliderSectionRef}
      id="homepageslider"
      className="relative z-20 -mt-[45vh] h-[100vh] w-full bg-transparent"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        ref={stickyWrapperRef}
        className="sticky top-0 h-full w-full overflow-hidden bg-black transition-all duration-100"
        style={{
          clipPath: "polygon(0% 42%, 100% 8%, 100% 100%, 0% 100%)",
          WebkitClipPath: "polygon(0% 42%, 100% 8%, 100% 100%, 0% 100%)",
        }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 h-full w-full">
            <picture>
              <source media="(max-width: 1024px)" srcSet={currentFilm.mobile} />
              <source media="(min-width: 1024px)" srcSet={currentFilm.image} />
              <img
                ref={scalableWrapperRef}
                src={currentFilm.image}
                alt={currentFilm.title}
                draggable="false"
                className="absolute inset-0 h-full w-full select-none object-cover object-center scale-[1.0]"
                style={{ willChange: "transform" }}
              />
            </picture>
            {isChanging && (
              <div
                className="absolute inset-0 h-full w-full"
                style={{
                  clipPath: incomingClip,
                  WebkitClipPath: incomingClip,
                  transition: `clip-path ${IMAGE_DURATION}ms cubic-bezier(0.65, 0, 0.35, 1)`,
                  willChange: "clip-path",
                }}
              >
                <picture>
                  <source
                    media="(max-width: 1024px)"
                    srcSet={incomingFilm.mobile}
                  />
                  <source
                    media="(min-width: 1024px)"
                    srcSet={incomingFilm.image}
                  />
                  <img
                    ref={incomingImageRef}
                    src={incomingFilm.image}
                    alt={incomingFilm.title}
                    draggable="false"
                    className="absolute inset-0 h-full w-full select-none object-cover object-center scale-[1.0]"
                    style={{ willChange: "transform" }}
                  />
                </picture>
              </div>
            )}
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 z-[5] bg-black/10" />
        <div className="pointer-events-none absolute inset-0 z-[6] bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
        <div className="absolute inset-0 z-20">
          <div className="relative mx-auto h-full w-full max-w-[1440px]">
            <div
              key={`category-${displayed}`}
              className={`absolute left-[20px] top-[9vh] sm:left-[20px] sm:top-[9vh] md:left-[18px] md:top-[25vh] lg:left-[41.8vw] lg:top-[46%] lg:w-[13vw] transition-all duration-[700ms] ease-out ${
                contentVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-[15px]"
              }`}
            >
              <p className="whitespace-nowrap text-[14px] uppercase tracking-[-0.02em] text-white sm:text-[18px] md:text-[13px] lg:text-[13px]">
                / {currentFilm.category}
              </p>
            </div>
            <div
              key={`logo-${displayed}`}
              className={`relative left-[20px] top-[26vh] h-[15px] w-full sm:left-[20px] sm:top-[17vh] sm:h-[145px] sm:w-full md:left-[18px] md:top-[45vh] md:h-[25px] md:w-[58vw] md:max-w-full md:-translate-y-1/2 lg:left-[1.9vw] lg:top-[50%] lg:h-[16px] lg:max-w-full lg:-translate-y-1/2 transition-all duration-[700ms] ease-out ${
                contentVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-[15px]"
              }`}
            >
              <img
                src={currentFilm.logo}
                alt={currentFilm.title}
                className="relative left-0 top-1/2 max-h-[220px] w-auto max-w-[220px] -translate-y-1/2 object-contain object-left drop-shadow-[0_5px_20px_rgba(0,0,0,0.25)] md:max-h-[460px] md:max-w-[480px] lg:max-w-[280px] lg:max-h-[155px]"
              />
            </div>
            <div
              key={`description-${displayed}`}
              className={`relative left-[27vw] right-[20px] top-[36vh] w-[290px] sm:right-[22px] md:left-[26vw] md:top-[60.5vh] lg:left-[58vw] md:w-[600px] lg:top-[46%] lg:w-[30vw] lg:max-w-[850px] transition-all duration-[700ms] ease-out ${
                contentVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-[15px]"
              }`}
            >
              <div className="min-h-0 md:max-w-[900px] lg:h-[155px] laika-text-reveal laika-text-reveal-delay-2">
                <p className="text-left text-[18px] font-normal leading-[1.45] tracking-[-0.04em] text-white drop-shadow-md sm:text-[19px] md:text-[18px] md:leading-[1.38] lg:text-[16px] lg:leading-[1.34]">
                  {currentFilm.description}
                </p>
              </div>
              <div className="mt-[26px] md:mt-[28px] lg:mt-[-12px] laika-text-reveal laika-text-reveal-delay-3">
                <TrailerButton href={currentFilm.href} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute lg:bottom-[6.5vh] md:bottom-[1vh] bottom-[0.5vh] left-0 z-40 w-full">
          <div
            className="hidden lg:block absolute left-[3.9vw] bottom-0 w-[42vw] max-w-[600px]"
            data-theme="dark"
          >
            <div className="flex items-end justify-between gap-4">
              <ul className="flex items-end gap-[13px] overflow-visible py-1">
                {films.map((filmItem, index) => {
                  const activeThumb = index === active;
                  return (
                    <li
                      key={filmItem.id}
                      className={`desktop-film-thumb shrink-0 transition-all duration-[1200ms] ease-[cubic-bezier(0.19,1,0.22,1)] ${
                        thumbsVisible
                          ? "translate-y-0 opacity-100"
                          : "translate-y-[80px] opacity-0"
                      }`}
                      style={{
                        transitionDelay: `${index * 120}ms`,
                      }}
                    >
                      <button
                        type="button"
                        disabled={isAnimating}
                        onClick={() => goTo(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        className={`group relative block cursor-pointer shrink-0 overflow-visible transition-all duration-300 ${activeThumb ? "h-[60px] w-[90px]" : "h-[60px] w-[52px]"}`}
                      >
                        <img
                          src={filmItem.thumb}
                          alt=""
                          draggable="false"
                          className={`absolute inset-0 h-full w-full rounded-[3px] object-cover transition-opacity duration-200 ${activeThumb ? "opacity-100" : "opacity-70 group-hover:opacity-100"}`}
                        />
                        {activeThumb && (
                          <>
                            <span className="pointer-events-none absolute -left-[7px] -top-[7px] h-[14px] w-[14px] rounded-tl-[12px] border-l border-t border-white/90" />
                            <span className="pointer-events-none absolute -right-[7px] -top-[7px] h-[14px] w-[14px] rounded-tr-[12px] border-r border-t border-white/90" />
                            <span className="pointer-events-none absolute -bottom-[7px] -left-[7px] h-[14px] w-[14px] rounded-bl-[12px] border-b border-l border-white/90" />
                            <span className="pointer-events-none absolute -bottom-[7px] -right-[7px] h-[14px] w-[14px] rounded-br-[12px] border-b border-r border-white/90" />
                          </>
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
              <div className="shrink-0">
                <div className="flex items-center gap-3 font-mono text-white">
                  <div className="text-[13px] font-display lg:mb-5 lg:mr-4 tracking-[0.12em] text-zinc-300">
                    <span className="font-bold text-white">
                      {String(active + 1).padStart(2, "0")}
                    </span>
                    <span className="px-1">/</span>
                    <span className="text-zinc-400">
                      {String(films.length).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex items-center gap-0">
                    <button
                      type="button"
                      disabled={isAnimating || active === 0}
                      onClick={previousSlide}
                      aria-label="Scroll Left"
                      className="lg:mb-5 lg:mr-4 flex h-7 w-7 items-center justify-center text-white transition-opacity hover:opacity-50 disabled:opacity-30"
                    >
                      <ChevronIcon direction="left" />
                    </button>
                    <button
                      type="button"
                      disabled={isAnimating || active === films.length - 1}
                      onClick={nextSlide}
                      aria-label="Scroll Right"
                      className="lg:mb-5 lg:mr-4 flex h-7 w-7 items-center justify-center text-white transition-opacity hover:opacity-50 disabled:opacity-30"
                    >
                      <ChevronIcon direction="right" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative mt-3 h-px w-full">
              <div className="absolute inset-0 border-t border-dashed border-white/50" />
              <div
                className="absolute top-0 h-px bg-white transition-all duration-500 ease-out"
                style={{
                  width: `${100 / films.length}%`,
                  left: `${(active / films.length) * 100}%`,
                }}
              />
            </div>
          </div>
          <div className="absolute inset-x-[18px] bottom-[1.8vh] hidden md:block lg:hidden">
            <div className="absolute left-0 bottom-[4.5vh] font-mono text-[14px] tracking-[0.04em] text-zinc-300">
              <span className="font-bold text-white">
                {String(active + 1).padStart(2, "0")}
              </span>
              <span className="px-1">/</span>
              <span className="text-zinc-400">
                {String(films.length).padStart(2, "0")}
              </span>
            </div>
            <div className="absolute right-0 bottom-[4.3vh] flex items-center">
              <button
                type="button"
                disabled={isAnimating || active === 0}
                onClick={previousSlide}
                aria-label="Previous slide"
                className="flex h-8 w-8 items-center justify-center text-white transition-opacity hover:opacity-50 disabled:opacity-30"
              >
                <ChevronIcon direction="left" />
              </button>
              <button
                type="button"
                disabled={isAnimating || active === films.length - 1}
                onClick={nextSlide}
                aria-label="Next slide"
                className="flex h-8 w-8 items-center justify-center text-white transition-opacity hover:opacity-50 disabled:opacity-30"
              >
                <ChevronIcon direction="right" />
              </button>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-px">
              <div className="absolute inset-0 border-t border-dashed border-white/50" />
              <div
                className="absolute top-0 h-px bg-white transition-all duration-500 ease-out"
                style={{
                  width: `${100 / films.length}%`,
                  left: `${(active / films.length) * 100}%`,
                }}
              />
            </div>
          </div>
          <div className="absolute inset-x-[20px] bottom-[3vh] md:hidden">
            <div className="relative flex w-full items-center justify-between">
              <div className="font-mono text-[11px] tracking-[0.12em] text-zinc-300">
                <span className="font-bold text-white">
                  {String(active + 1).padStart(2, "0")}
                </span>
                <span className="px-1">/</span>
                <span className="text-zinc-400">
                  {String(films.length).padStart(2, "0")}
                </span>
              </div>
              <div className="flex items-center">
                <button
                  type="button"
                  disabled={isAnimating || active === 0}
                  onClick={previousSlide}
                  aria-label="Previous slide"
                  className="flex h-8 w-8 items-center justify-center text-white transition-opacity hover:opacity-50 disabled:opacity-30"
                >
                  <ChevronIcon direction="left" />
                </button>
                <button
                  type="button"
                  disabled={isAnimating || active === films.length - 1}
                  onClick={nextSlide}
                  aria-label="Next slide"
                  className="flex h-8 w-8 items-center justify-center text-white transition-opacity hover:opacity-50 disabled:opacity-30"
                >
                  <ChevronIcon direction="right" />
                </button>
              </div>
            </div>
            <div className="relative mt-[10px] h-px w-full">
              <div className="absolute inset-0 border-t border-dashed border-white/50" />
              <div
                className="absolute top-0 h-px bg-white transition-all duration-500 ease-out"
                style={{
                  width: `${100 / films.length}%`,
                  left: `${(active / films.length) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
