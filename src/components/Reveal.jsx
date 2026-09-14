import { forwardRef, useEffect, useRef, useState } from "react";

/**
 * Reveal
 * Generic "fade up from bottom" scroll-reveal wrapper.
 * Wrap any block of content in this to have it fade + rise into
 * view the first time it enters the viewport. Used across every
 * section (sketch quote, awards, shop, newsletter, footer) so the
 * whole page has one consistent reveal animation.
 *
 * Accepts a forwarded ref (merged with its own internal
 * IntersectionObserver ref) so it can wrap elements that also need
 * an external ref — e.g. the footer's mouse-tracked reveal strip.
 */
const Reveal = forwardRef(function Reveal(
  {
    as: Tag = "div",
    children,
    className = "",
    delay = 0,
    threshold = 0.15,
    once = true,
    ...rest
  },
  forwardedRef
) {
  const internalRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = internalRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) io.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [once, threshold]);

  const setRefs = (node) => {
    internalRef.current = node;
    if (typeof forwardedRef === "function") forwardedRef(node);
    else if (forwardedRef) forwardedRef.current = node;
  };

  return (
    <Tag
      ref={setRefs}
      className={`transition-all ease-[cubic-bezier(0.22,1,0.36,1)] duration-[800ms] will-change-transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
});

export default Reveal;
