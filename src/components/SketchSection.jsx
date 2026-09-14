import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

const images = {
  topLeft: {
    baseDesktop:
      "https://www.datocms-assets.com/153672/1751393199-laika_website_misc_sketches_ml_desktop_2.jpg",
    hoverDesktop:
      "https://www.datocms-assets.com/153672/1750184511-laika_home_c-11_sketches_ml_desktop_2.jpg",
    baseMobile:
      "https://www.datocms-assets.com/153672/1751393227-laika_website_misc_sketches_ml_mobile_2.jpg",
    hoverMobile:
      "https://www.datocms-assets.com/153672/1750184511-laika_home_c-11_sketches_ml_mobile_2.jpg",
  },
  topRight: {
    baseDesktop:
      "https://www.datocms-assets.com/153672/1750184511-laika_home_c-11_sketches_cor_desktop_1.jpg",
    hoverDesktop:
      "https://www.datocms-assets.com/153672/1750184512-laika_home_c-11_sketches_cor_desktop_2.jpg",
    baseMobile:
      "https://www.datocms-assets.com/153672/1750184512-laika_home_c-11_sketches_cor_mobile_1.jpg",
    hoverMobile:
      "https://www.datocms-assets.com/153672/1750184511-laika_home_c-11_sketches_cor_mobile_2.jpg",
  },
  bottomLeft: {
    baseDesktop:
      "https://www.datocms-assets.com/153672/1750184511-laika_home_c-11_sketches_par_desktop_1.jpg",
    hoverDesktop:
      "https://www.datocms-assets.com/153672/1750184511-laika_home_c-11_sketches_par_desktop_2.jpg",
    baseMobile:
      "https://www.datocms-assets.com/153672/1750184512-laika_home_c-11_sketches_par_mobile_1.jpg",
    hoverMobile:
      "https://www.datocms-assets.com/153672/1750184512-laika_home_c-11_sketches_par_mobile_2.jpg",
  },
  bottomRight: {
    baseDesktop:
      "https://www.datocms-assets.com/153672/1750184512-laika_home_c-11_sketches_kbo_desktop_1.jpg",
    hoverDesktop:
      "https://www.datocms-assets.com/153672/1750184512-laika_home_c-11_sketches_kbo_desktop_2.jpg",
    baseMobile:
      "https://www.datocms-assets.com/153672/1750184511-laika_home_c-11_sketches_kbo_mobile_1.jpg",
    hoverMobile:
      "https://www.datocms-assets.com/153672/1750184512-laika_home_c-11_sketches_kbo_mobile_2.jpg",
  },
};

function FloatingImage({ image, sizeClassName }) {
  const [hovered, setHovered] = useState(false);
  const hiddenClip = "polygon(100% 100%, 100% 100%, 100% 100%, 100% 100%)";
  const revealedClip = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";

  return (
    <div
      className={`group relative overflow-hidden ${sizeClassName}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => setHovered((v) => !v)}
    >
      <picture className="absolute inset-0 block h-full w-full">
        <source media="(max-width: 1024px)" srcSet={image.baseMobile} />
        <source media="(min-width: 1024px)" srcSet={image.baseDesktop} />
        <img
          src={image.baseDesktop}
          alt=""
          className="h-full w-full object-cover"
        />
      </picture>
      <div
        className="absolute inset-0 z-[4] pointer-events-none mix-blend-multiply"
        style={{ backgroundColor: "#f4f3f0" }}
      />
      <picture
        className="absolute inset-0 block h-full w-full transition-[clip-path] duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          clipPath: hovered ? revealedClip : hiddenClip,
          WebkitClipPath: hovered ? revealedClip : hiddenClip,
        }}
      >
        <source media="(max-width: 1024px)" srcSet={image.hoverMobile} />
        <source media="(min-width: 1024px)" srcSet={image.hoverDesktop} />
        <img
          src={image.hoverDesktop}
          alt=""
          className="h-full w-full object-cover"
        />
      </picture>
    </div>
  );
}

const DEFAULT_SIZE =
  "h-[150px] w-[250px] md:h-[230px] md:w-[410px] lg:h-[270px] lg:w-[475px]";
function DashBorder({
  size,
  hovered,
  rx = 1,
  ry = 1,
  inset = 1,
  strokeWidth = 1.5,
}) {
  const w = Math.max(size.width - inset * 2, 0);
  const h = Math.max(size.height - inset * 2, 0);
  if (!w || !h) return null;

  return (
    <svg
      className="pointer-events-none absolute"
      style={{ left: inset, top: inset, width: w, height: h }}
      viewBox={`0 0 ${w} ${h}`}
      aria-hidden="true"
    >
      <rect
        x={strokeWidth / 2}
        y={strokeWidth / 2}
        width={Math.max(w - strokeWidth, 0)}
        height={Math.max(h - strokeWidth, 0)}
        rx={rx}
        fill="none"
        stroke="rgba(255,255,255,0.85)"
        strokeWidth={strokeWidth}
        strokeDasharray={hovered ? "1 1" : "2 3"}
        strokeLinecap="round"
        style={{
          transition: "stroke-dasharray 500ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      />
    </svg>
  );
}

function ArrowIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function useMeasuredSize() {
  const ref = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () =>
      setSize({ width: el.offsetWidth, height: el.offsetHeight });
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return [ref, size];
}

function DashedButton() {
  const [ref, size] = useMeasuredSize();
  const [hovered, setHovered] = useState(false);
  const offset = 20;

  return (
    <a
      ref={ref}
      href="/who-we-are"
      aria-label="Learn more about us"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative mt-10 inline-flex items-center gap-4 overflow-hidden rounded-[6px] bg-black px-7 py-4 text-[14px] font-medium uppercase tracking-[0.03em] text-white"
    >
      <DashBorder size={size} hovered={hovered} rx={6} />
      <span className="relative z-10">Learn More</span>
      <span className="relative z-10 flex h-5 w-5 items-center justify-center overflow-hidden">
        <span
          className="absolute inset-0 flex items-center justify-center"
          style={{
            transform: hovered ? `translateX(${offset}px)` : "translateX(0px)",
            opacity: hovered ? 0 : 1,
            transition: "transform 300ms ease, opacity 200ms ease",
          }}
        >
          <ArrowIcon className="h-5 w-5" />
        </span>
        <span
          className="absolute inset-0 flex items-center justify-center"
          style={{
            transform: hovered ? "translateX(0px)" : `translateX(${-offset}px)`,
            opacity: hovered ? 1 : 0,
            transition: "transform 300ms ease, opacity 200ms ease",
          }}
        >
          <ArrowIcon className="h-5 w-5" />
        </span>
      </span>
    </a>
  );
}

export default function SketchSection() {
  return (
    <section
      id="Floatingtext"
      className="relative overflow-hidden bg-brand-cream px-4 py-20 md:px-8 md:py-28 lg:px-10 lg:py-32"
    >
      <div className="relative mx-auto hidden w-full max-w-[1184px] justify-between gap-10 lg:flex">
        <Reveal className="cursor-pointer w-[39%] -translate-x-[10%]" delay={0}>
          <FloatingImage
            image={images.topLeft}
            sizeClassName={`${DEFAULT_SIZE} bg-brand-cream`}
          />
        </Reveal>
        <Reveal className="cursor-pointer mt-8 w-[39%] translate-x-[10%]" delay={100}>
          <FloatingImage
            image={images.topRight}
            sizeClassName={`${DEFAULT_SIZE} bg-brand-cream`}
          />
        </Reveal>
      </div>
      <Reveal
        as="div"
        className="relative z-20 mx-auto flex max-w-[900px] flex-col items-center px-3 py-12 text-center md:py-16 lg:py-20"
        delay={150}
      >
        <blockquote className="max-w-[850px]">
          <p className="font-grotesk text-[44px] font-bold leading-[1.08] tracking-[-0.02em] md:text-[32px] lg:text-[54px]">
            "LAIKA’s films aim to promote thought, feeling, and connectivity
            through art, inspired by our shared humanity."
          </p>
          <p className="mt-7 text-[12px] uppercase tracking-[0.12em] text-black/70 md:mt-9 md:text-[13px]">
            Travis Knight / President &amp; CEO
          </p>
        </blockquote>
        <DashedButton />
      </Reveal>
      <div className="relative mx-auto flex w-full max-w-[560px] flex-col lg:hidden">
        <Reveal className="self-start" delay={200}>
          <FloatingImage
            image={images.topLeft}
            sizeClassName="h-[150px] w-[220px] md:h-[150px] md:w-[250px]"
          />
        </Reveal>
        <Reveal className="mt-6 self-end" delay={250}>
          <FloatingImage
            image={images.bottomRight}
            sizeClassName="h-[160px] w-[260px] md:h-[210px] md:w-[350px]"
          />
        </Reveal>
      </div>
      <div className="relative mx-auto hidden w-full max-w-[1184px] justify-between gap-10 lg:flex">
        <Reveal className="cursor-pointer mt-6 w-[39%] -translate-x-[10%]" delay={200}>
          <FloatingImage
            image={images.bottomLeft}
            sizeClassName={DEFAULT_SIZE}
          />
        </Reveal>
        <Reveal className="cursor-pointer mt-14 w-[39%] translate-x-[10%]" delay={250}>
          <FloatingImage
            image={images.bottomRight}
            sizeClassName={DEFAULT_SIZE}
          />
        </Reveal>
      </div>
    </section>
  );
}
