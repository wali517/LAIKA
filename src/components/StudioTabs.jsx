import { useState } from "react";

const studioTabs = [
  {
    id: "animation",
    number: "01",
    title: "Animation",
    description:
      "For 20 years, LAIKA has pioneered the field of animation — creating award-winning films, handcrafted by visionaries and artists. We’re raising the bar, pushing boundaries, and redefining the kinds of stories this artform can tell.",
    href: "/our-films",
    ariaLabel: "animated films page",
    imageDesktop:
      "https://www.datocms-assets.com/153672/1750185177-laika_c-18_spotlight_carousel_animation_desktop_1.jpg",
    imageMobile:
      "https://www.datocms-assets.com/153672/1750185177-laika_c-18_spotlight_carousel_animation_mobile_1.jpg",
  },
  {
    id: "live-action",
    number: "02",
    title: "Live Action",
    description:
      "LAIKA is thrilled to expand its production pipeline with original live-action films and series, brought to life with LAIKA’s distinctive storytelling style. Projects in development include 'Seventeen', 'Crumble', 'Atmosphere', and more.",
    href: "/live-action",
    ariaLabel: "live action page",
    imageDesktop:
      "https://www.datocms-assets.com/153672/1750192371-laika_c-18_spotlight_liveaction_desktop.jpg",
    imageMobile:
      "https://www.datocms-assets.com/153672/1750192370-laika_c-18_spotlight_liveaction_mobile.jpg",
  },
  {
    id: "careers",
    number: "03",
    title: "Careers",
    description:
      "Our studio is a place where you have the freedom to enjoy what you do and mold your own career. Come collaborate, innovate, and make your mark at LAIKA!",
    href: "/careers",
    ariaLabel: "careers page",
    imageDesktop:
      "https://www.datocms-assets.com/153672/1750185177-laika_c-18_spotlight_carousel_careers_desktop_2.jpg",
    imageMobile:
      "https://www.datocms-assets.com/153672/1750185177-laika_c-18_spotlight_carousel_careers_mobile_2.jpg",
  },
];

const BACKGROUND_DESKTOP =
  "https://www.datocms-assets.com/153672/1750185177-laika_c-18_spotlight_carousel_background_box_desktop.jpg";

const BACKGROUND_MOBILE =
  "https://www.datocms-assets.com/153672/1750185178-laika_c-18_spotlight_carousel_background_box_mobile.jpg";

function ArrowGlyph({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M10.9 8.199L11.5 8.699C12.7 9.699 13.9 10.599 15.1 11.399H6V12.899H15.2C14 13.699 12.8 14.599 11.6 15.599L11 16.099L12 17.199L12.6 16.699C14.5 15.099 16.5 13.799 18.5 12.799C18.8 12.699 18.9 12.399 18.9 12.099C18.9 11.799 18.7 11.599 18.5 11.399C16.5 10.399 14.6 9.099 12.6 7.499L12 6.999L11 8.099L10.9 8.199Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ArrowBadge() {
  return (
    <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-sm bg-[#111] text-white md:h-12 md:w-12 lg:h-13 lg:w-13">
      <svg
        className="pointer-events-none absolute inset-0.5 h-[calc(100%-4px)] w-[calc(100%-4px)]"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <rect
          x="1"
          y="1"
          width="98"
          height="98"
          rx="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="10 5"
          className=" transition-all duration-500 group-hover/card:[stroke-dasharray:500_0]"
        />
      </svg>
      <span className="relative h-5 w-5 overflow-hidden md:h-6 md:w-6 lg:h-6.5 lg:w-6.5">
        <ArrowGlyph className="absolute inset-0 h-full w-full transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover/text:translate-x-full" />
        <ArrowGlyph className="absolute inset-0 h-full w-full -translate-x-full transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover/text:translate-x-0" />
      </span>
    </span>
  );
}

export default function StudioTabs() {
  const [activeId, setActiveId] = useState(studioTabs[0].id);
  return (
    <section className="relative w-full overflow-hidden bg-[#eeeae4] text-[#111]">
      <div className="relative z-10 mx-auto w-full max-w-360 px-4 pb-7.5 pt-12.5 md:px-10 md:pb-10 md:pt-15 lg:min-h-307.5 lg:px-15 lg:pb-0 ">
        <p
          className={`absolute right-4 top-11.5 m-0 text-[14px] p-[0_0_48px] uppercase leading-none tracking-[-0.035em] md:right-10 md:p-[0_0_48px] md:top-8.5 md:text-[12px] lg:right-15 lg:top-37.5 lg:text-[14px] animate-[studioLine_0.6s_cubic-bezier(0.19,1,0.22,1)_0s_both]`}
        >
          / Explore Our Studios
        </p>
        <ul className="relative z-20 m-0 flex list-none flex-col p-0 lg:absolute lg:left-20 lg:top-30.5 md:mt-7.5 md:-ml-5 mt-15 ">
          {studioTabs.map((tab, index) => {
            const isActive = tab.id === activeId;
            return (
              <li
                key={tab.id}
                className={
                  index < 2 ? "mb-5 md:mb-5 lg:mb-7.25" : ""
                }
              >
                <button
                  type="button"
                  onClick={() => setActiveId(tab.id)}
                  data-active={isActive}
                  className={`group relative inline-flex w-max border-0 bg-transparent p-0 text-left font-grotesk outline-none animate-[studioButton_0.65s_cubic-bezier(0.19,1,0.22,1)_0.58s_both]`}
                >
                  <span className="relative inline-block">
                    <span className="relative z-10 block whitespace-nowrap pb-2 text-[32px] font-extrabold leading-none tracking-[-0.02em] md:text-[30px] lg:pb-2.5 lg:text-[42px]">
                      {tab.title}
                    </span>
                    <span
                      className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 opacity-0 transition-all duration-300 group-hover:scale-x-100 group-hover:opacity-100 group-data-[active=true]:scale-x-100 group-data-[active=true]:opacity-100"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle, #111 0.75px, transparent 0.9px)",
                        backgroundSize: "3px 1px",
                        backgroundRepeat: "repeat-x",
                      }}
                    />
                    <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-[#111] opacity-0 transition-all duration-300 group-hover:scale-x-100 group-hover:opacity-100" />
                  </span>
                  <span className="absolute -right-6 -top-px text-[12px] font-medium leading-none tracking-[-0.02em] opacity-0 -translate-x-1.25 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-data-[active=true]:translate-x-0 group-data-[active=true]:opacity-100 md:text-[13px] md:-right-8 lg:-right-6.5 lg:-top-0.5 lg:text-[14px]">
                    /{tab.number}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
        <div className="relative mt-15 w-full max-w-full md:mt-17.5 md:w-auto md:max-w-none md:-ml-5 md:mr-5 lg:absolute lg:left-1/2 lg:top-37.5 lg:mx-0 lg:mt-0 lg:h-162.5 lg:w-127 lg:max-w-none lg:-translate-x-1/2">
          {studioTabs.map((tab) => {
            const isActive = tab.id === activeId;
            return (
              <article
                key={tab.id}
                aria-hidden={!isActive}
                className={
                  isActive
                    ? "static opacity-100 pointer-events-auto z-10 lg:absolute lg:inset-0"
                    : "hidden opacity-0 pointer-events-none z-0 lg:block lg:absolute lg:inset-0"
                }
              >
                <a className="group/card relative z-10 flex h-auto w-full flex-col overflow-visible rounded-lg bg-[#111] md:rounded-[9px] lg:h-full lg:rounded-[10px] lg:overflow-hidden">
                  <picture className="h-full w-full md:h-100 md:w-full lg:h-full lg:aspect-auto">
                    <source
                      srcSet={tab.imageMobile}
                      media="(max-width: 1023px)"
                    />
                    <source
                      srcSet={tab.imageDesktop}
                      media={"(min-width: 1024px)"}
                    />
                    <img
                      src={tab.imageDesktop}
                      alt=""
                      loading={isActive ? "eager" : "lazy"}
                      className="block h-full w-full object-cover object-center rounded-lg"
                    />
                  </picture>
                  <div
                    className={
                      "group/text absolute bottom-3 left-3 right-3 z-20 rounded-lg bg-white p-3 pb-6 md:bottom-4 md:left-4 md:right-4 md:p-5 md:pb-6 lg:bottom-3 lg:left-2.75 lg:right-2.75 lg:p-3.5 lg:pb-4 lg:min-h-47.5 lg:rounded-[10px]"
                    }
                  >
                    <h3 className="m-0 text-[20px] font-normal leading-[1.05] tracking-[-0.045em] md:text-[24px] lg:text-[24px]">
                      {tab.title}
                    </h3>
                    <div className="relative mt-3.75 pr-14.5 md:mt-4 md:pr-17 lg:mt-5 lg:pr-17.5">
                      <p
                        className={
                          "m-0 max-w-55 text-[14px] font-normal leading-[1.4] tracking-tight md:max-w-none md:text-[14px] md:leading-[1.35] lg:max-w-90 lg:text-[18px]"
                        }
                      >
                        {tab.description}
                      </p>
                      <span className="absolute right-0 lg:top-10 md:top-1/2 top-1/2 -translate-y-1/2">
                        <ArrowBadge />
                      </span>
                    </div>
                  </div>
                </a>
              </article>
            );
          })}
        </div>
      </div>
      <div className="relative z-0 -mt-37.5 h-80 w-full overflow-hidden md:-mt-32.5 md:h-95 lg:absolute lg:inset-x-0 lg:top-152.5 lg:mt-0 lg:h-155">
        <picture className="block h-full w-full">
          <source srcSet={BACKGROUND_MOBILE} media="(max-width: 1023px)" />
          <source srcSet={BACKGROUND_DESKTOP} media="(min-width: 1024px)" />
          <img
            src={BACKGROUND_DESKTOP}
            alt=""
            loading="lazy"
            className="block h-full w-full object-cover object-top"
          />
        </picture>
      </div>
    </section>
  );
}
