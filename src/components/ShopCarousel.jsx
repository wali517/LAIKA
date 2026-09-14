import { useEffect, useRef, useState } from "react";
import products from "../data/products.js";
import Reveal from "./Reveal";

function useMeasuredSize() {
  const ref = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      setSize({
        width: el.offsetWidth,
        height: el.offsetHeight,
      });
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return [ref, size];
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
        d="M7 17L17 7M17 7H8M17 7V16"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
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

function DashBorder({
  size,
  hovered,
  rx = 4,
  insetX = 1,
  insetY = 1,
  strokeWidth = 1.5,
  dashArray = hovered ? "2 3" : "2 3",
}) {
  const w = Math.max(size.width - insetX * 2, 0);
  const h = Math.max(size.height - insetY * 2, 0);

  if (!w || !h) return null;

  return (
    <svg
      className="pointer-events-none absolute"
      style={{
        left: insetX,
        top: insetY,
        width: w,
        height: h,
      }}
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
        stroke={hovered ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.75)"}
        strokeWidth={hovered ? 1.2 : strokeWidth}
        strokeDasharray={dashArray}
        strokeLinecap="round"
        style={{
          transition:
            "stroke 400ms ease, stroke-width 400ms ease, stroke-dasharray 500ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      />
    </svg>
  );
}
function SwapIcon({ hovered, offset = 16, children }) {
  return (
    <span
      className="relative block overflow-hidden"
      style={{ width: Math.abs(offset), height: Math.abs(offset) }}
    >
      <span
        className="absolute inset-0 flex items-center justify-center"
        style={{
          transform: hovered ? `translateX(${offset}px)` : "translateX(0px)",
          opacity: hovered ? 0 : 1,
          transition:
            "transform 500ms cubic-bezier(0.19, 1, 0.22, 1), opacity 250ms ease",
        }}
      >
        {children}
      </span>
      <span
        className="absolute inset-0 flex items-center justify-center"
        style={{
          transform: hovered ? "translateX(0px)" : `translateX(${-offset}px)`,
          opacity: hovered ? 1 : 0,
          transition:
            "transform 500ms cubic-bezier(0.19, 1, 0.22, 1), opacity 500ms ease",
        }}
      >
        {children}
      </span>
    </span>
  );
}

function ShopNowButton() {
  const [ref, size] = useMeasuredSize();
  const [hovered, setHovered] = useState(false);
  return (
    <a
      ref={ref}
      href="https://shop.laika.com/"
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="cursor-pointer group relative inline-flex items-center gap-13 overflow-hidden rounded-[6px] bg-black px-6 py-6.5 text-[14px] font-bold uppercase tracking-widest text-white"
    >
      <DashBorder
        size={size}
        hovered={hovered}
        rx={7}
        dashArray={hovered ? "0.7 0.7" : "1 2"}
      />
      <span className="relative z-10">Shop Now</span>
      <span className="relative z-10 flex h-4 w-4 items-center justify-center overflow-hidden">
        <SwapIcon hovered={hovered} offset={16}>
          <ArrowIcon className="h-4 w-4" />
        </SwapIcon>
      </span>
    </a>
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
      className="cursor-pointer group relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-[4px] border border-black bg-transparent text-black disabled:pointer-events-none disabled:opacity-30 md:h-14 md:w-14"
    >
      <span className="relative flex h-5 w-5 items-center justify-center overflow-visible">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className={`absolute h-5 w-5 transition-transform duration-700 ease-out ${isPrev ? "group-hover:-translate-x-[40px]" : "group-hover:translate-x-[40px]"}`}
          aria-hidden="true"
        >
          <ChevronPath direction={direction} />
        </svg>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className={`absolute h-5 w-5 transition-transform duration-700 ease-out ${isPrev ? "translate-x-[40px] group-hover:translate-x-0" : "-translate-x-[40px] group-hover:translate-x-0"}`}
          aria-hidden="true"
        >
          <ChevronPath direction={direction} />
        </svg>
      </span>
    </button>
  );
}

const SLIDE_MS = 1200;
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

function ProductCard({ product }) {
  const [cardHovered, setCardHovered] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [btnRef, btnSize] = useMeasuredSize();

  return (
    <article
      onMouseEnter={() => setCardHovered(true)}
      onMouseLeave={() => setCardHovered(false)}
      className="flex min-w-0 flex-col overflow-hidden rounded-[12px] border border-black/10 bg-white p-2.5"
    >
      <div className="relative overflow-hidden rounded-[10px] bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="h-[250px] w-full object-cover object-center"
        />
        {product.price && (
          <span className="absolute right-3 top-3 rounded-md bg-black/80 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
            {product.price}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-4 pt-5 pb-0">
        <div className="flex lg:flex-wrap content-start gap-2">
          {product.tags.map((tag, i) => (
            <span
              key={`${product.id}-${tag}`}
              className={`rounded-[3px] px-6 py-3 text-[14px] mb-20 md:mb-8 lg:mb-30 uppercase font-display ${i === 0 ? "bg-brand-yellow text-black" : "bg-gray-100 text-black/70"}`}
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="h-[58px] w-[260px] text-[18px] font-display font-medium leading-snug text-black mb-1 md:mb-4 lg:mb-3">
          {product.name}
        </h3>
        <a
          href={product.href || "https://shop.laika.com/"}
          target="_blank"
          rel="noreferrer"
          onMouseEnter={() => setLinkHovered(true)}
          onMouseLeave={() => setLinkHovered(false)}
          className="flex items-center justify-between pt-4 text-black"
          style={{
            borderTop: `2px ${cardHovered ? "solid" : "dotted"} ${cardHovered ? "rgba(0,0,0,0.8)" : "rgba(0,0,0,0.25)"}`,
            transition: "border-color 500ms ease, border-style 500ms ease",
          }}
        >
          <span className="text-[14px] uppercase tracking-sung">
            VIEW PRODUCT
          </span>
          <span
            ref={btnRef}
            className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-[8px] bg-black text-white left-1"
          >
            <DashBorder
              size={btnSize}
              hovered={cardHovered}
              rx={8}
              dashArray={cardHovered ? "1 1" : "2 3"}
            />
            <SwapIcon hovered={cardHovered} offset={14}>
              <ArrowIcon className="h-4 w-4" />
            </SwapIcon>
          </span>
        </a>
      </div>
    </article>
  );
}

export default function ShopCarousel() {
  const [perPage, setPerPage] = useState(3);
  useEffect(() => {
    const updatePerPage = () => {
      if (window.innerWidth < 640) {
        setPerPage(1);
      } else if (window.innerWidth < 1024) {
        setPerPage(2);
      } else {
        setPerPage(3);
      }
    };
    updatePerPage();
    window.addEventListener("resize", updatePerPage);
    return () => window.removeEventListener("resize", updatePerPage);
  }, []);

  const totalPages = Math.max(1, Math.ceil(products.length / perPage));
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    setPage((value) => Math.min(value, totalPages - 1));
  }, [totalPages]);

  const next = () => {
    setDirection(1);
    setPage((value) => Math.min(value + 1, totalPages - 1));
  };

  const prev = () => {
    setDirection(-1);
    setPage((value) => Math.max(value - 1, 0));
  };

  const pages = [];
  for (let i = 0; i < products.length; i += perPage) {
    pages.push(products.slice(i, i + perPage));
  }

  return (
    <section
      className="bg-brand-cream px-6 py-20 pt-20 md:px-16 mx-auto w-full max-w-[1560px] lg:pt-35"
      id="shop"
    >
      <Reveal
        as="div"
        className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between"
      >
        <div className="pt-7 relative">
          <h2 className="font-grotesk text-4xl font-extrabold leading-none md:text-[53px">
            Shop{" "}
            <span className="font-grotesk font-extrabold uppercase tracking-tight">
              LAIKA
            </span>
          </h2>
        </div>
        <div className="flex flex-col items-start gap-6 md:items-end">
          <div className="lg:w-[340px] w-full md:text-centre">
            <p className="mb-4 text-black text-[14px] lg:text-[16px] font-display">
              Bring the world of LAIKA home. Explore our shop, filled with
              products inspired by your favorite films.
            </p>
            <ShopNowButton />
          </div>
          <div className="flex items-center gap-3">
            <span className="mr-2 flex items-center text-sm font-medium text-black/60">
              <AnimatedNumber value={page + 1} direction={direction} />
              <span className="mx-0.5 leading-none">/</span>
              <span className="leading-none">
                {String(totalPages).padStart(2, "0")}
              </span>
            </span>
            <NavButton
              direction="prev"
              onClick={prev}
              disabled={page === 0}
              label="Previous page"
            />
            <NavButton
              direction="next"
              onClick={next}
              disabled={page === totalPages - 1}
              label="Next page"
            />
          </div>
        </div>
      </Reveal>
      <Reveal as="div" delay={100} className="overflow-hidden">
        <div
          className="flex w-full"
          style={{
            transform: `translate3d(-${page * 100}%, 0, 0)`,
            transition: "transform 600ms cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          {pages.map((pageProducts, pageIndex) => (
            <div
              key={pageIndex}
              className="grid w-full shrink-0 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {pageProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
