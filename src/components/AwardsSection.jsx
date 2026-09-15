import { useEffect, useRef, useState } from "react";
import awardPages from "../data/awards.js";
import Reveal from "./Reveal";

const awards = awardPages.flat();
const awardImages = {
  "Academy Awards®":
    "https://www.datocms-assets.com/153672/1751496612-sci_tech_awards_graphic_160x160px.png",

  "Annie Awards":
    "https://www.datocms-assets.com/153672/1747748675-bea4724b69c0a4acbc8ac5c617e25e1154e43493.png",

  BAFTA:
    "https://www.datocms-assets.com/153672/1747335542-0f8ac4b7ea07d033f579241473ac151eb9a50625.png",

  "Golden Globes":
    "https://www.datocms-assets.com/153672/1754595735-golden-globes-logo.png",

  "Visual Effects Society":
    "https://www.datocms-assets.com/153672/1753370700-ves_logo.png",
};

const SLIDE_MS = 900;
function AnimatedNumber({ value, direction = 1 }) {
  const newValue = String(value).padStart(2, "0");

  const [display, setDisplay] = useState(newValue);
  const [phase, setPhase] = useState("idle");

  const directionRef = useRef(direction);
  const timersRef = useRef([]);

  useEffect(() => {
    if (newValue === display) return;
    directionRef.current = direction;
    setPhase("exit");
    const enterTimer = setTimeout(() => {
      setDisplay(newValue);
      setPhase("enter");
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setPhase("settle");
        });
      });
    }, 250);
    const finishTimer = setTimeout(() => {
      setPhase("idle");
    }, 800);
    timersRef.current.push(enterTimer, finishTimer);
    return () => {
      timersRef.current.forEach(clearTimeout);
      timersRef.current = [];
    };
  }, [newValue]);

  const isNext = directionRef.current === 1;
  const exitTransform = isNext ? "translateY(-110%)" : "translateY(110%)";
  const enterTransform = isNext ? "translateY(110%)" : "translateY(-110%)";
  let transform = "translateY(0%)";
  if (phase === "exit") {
    transform = exitTransform;
  }
  if (phase === "enter") {
    transform = enterTransform;
  }

  return (
    <span className="relative inline-flex h-[1em] w-[2ch] shrink-0 overflow-hidden tabular-nums">
      <span
        className="absolute inset-0 flex items-center justify-center"
        style={{
          transform,
          transition:
            phase === "exit" || phase === "settle"
              ? "transform 300ms cubic-bezier(0.65, 0, 0.35, 1)"
              : "none",
        }}
      >
        {display}
      </span>
    </span>
  );
}

function ChevronPath({ direction = "next" }) {
  return (
    <path
      d={direction === "prev" ? "M15 6L9 12L15 18" : "M9 6L15 12L9 18"}
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
  );
}
function NavButton({ direction = "next", onClick, disabled, label }) {
  const isPrev = direction === "prev";
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className="cursor-pointer group relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-sm border border-black bg-transparent text-black disabled:pointer-events-none disabled:opacity-30 md:h-14 md:w-14"
    >
      <span className="relative flex h-5 w-5 items-center justify-center overflow-visible">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className={`absolute h-5 w-5 transition-transform duration-700 ease-out ${isPrev ? "group-hover:-translate-x-10" : "group-hover:translate-x-10"}`}
          aria-hidden="true"
        >
          <ChevronPath direction={direction} />
        </svg>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className={`absolute h-5 w-5 transition-transform duration-700 ease-out ${isPrev ? "translate-x-10 group-hover:translate-x-0" : "-translate-x-10 group-hover:translate-x-0"}`}
          aria-hidden="true"
        >
          <ChevronPath direction={direction} />
        </svg>
      </span>
    </button>
  );
}

export default function AwardsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [visibleCards, setVisibleCards] = useState(4);
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(4);
      }
    };
    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  useEffect(() => {
    setCurrent((value) =>
      Math.min(value, Math.max(0, awards.length - visibleCards)),
    );
  }, [visibleCards]);
  const maxPosition = Math.max(0, awards.length - visibleCards);
  const next = () => {
    setDirection(1);
    setCurrent((value) => Math.min(value + 1, maxPosition));
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((value) => Math.max(value - 1, 0));
  };
  const totalPositions = maxPosition + 1;

  return (
    <section
      id="awards"
      className="w-full overflow-hidden bg-brand-cream border-black/10 py-12"
    >
      <div className="mx-auto w-full max-w-360">
        <Reveal as="div" className="w-full overflow-hidden">
          <div
            className="flex w-full select-none touch-pan-y"
            style={{
              transform: `translate3d(-${current * (100 / visibleCards)}%, 0, 0)`,
              transition: "transform 700ms cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            {awards.map((award, index) => (
              <div
                key={`${award.name}-${index}`}
                className="relative min-w-full shrink-0 sm:min-w-[50%] lg:min-w-[25%]"
              >
                <div className="relative flex h-55 flex-col justify-between border-y border-l border-r border-black/10 border-y-side-dashed px-4 py-8 md:h-65">
                  <p className="relative z-10 m-0 max-w-full text-[22px] leading-[1.05] text-black md:text-[18px] font-display">
                    {award.name}
                  </p>
                  <div className="relative z-10 mt-auto mb-2">
                    {award.stats?.split("\n").map((text, statIndex) => (
                      <p
                        key={statIndex}
                        className="m-0 text-[14px] leading-[1.35] text-black md:text-[15px] font-display"
                      >
                        {text}
                      </p>
                    ))}
                  </div>
                  <div className="pointer-events-none absolute bottom-5 right-5 flex h-22.5 w-22.5 items-center justify-center md:bottom-4 md:right-4 md:h-22.5 md:w-22.5">
                    {awardImages[award.name] ? (
                      <img
                        src={awardImages[award.name]}
                        alt={award.name}
                        loading="lazy"
                        className="block max-h-full max-w-full object-contain"
                      />
                    ) : award.image ? (
                      <img
                        src={award.image}
                        alt={award.name}
                        loading="lazy"
                        className="block max-h-full max-w-full object-contain"
                      />
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
        <div className="flex items-center justify-end gap-8 border-t border-black/10 px-6 py-5 md:px-8 md:py-6"
          role="group"
          aria-label="Pagination controls"
        >
          <div className="flex items-center gap-1 text-[13px] font-medium text-black mt-7 md:mt-10">
            <AnimatedNumber value={current + 1} direction={direction} />
            <span className="text-black/50">/</span>
            <span>{String(totalPositions).padStart(2, "0")}</span>
          </div>
          <div className="flex items-center gap-3">
            <NavButton
              direction="prev"
              onClick={prev}
              disabled={current === 0}
              label="Previous page"
            />
            <NavButton
              direction="next"
              onClick={next}
              disabled={current === maxPosition}
              label="Next page"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
