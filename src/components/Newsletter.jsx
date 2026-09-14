import { useState } from "react";
import Reveal from "./Reveal";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(false);
  const [buttonActive, setButtonActive] = useState(false);
  const [emailHovered, setEmailHovered] = useState(false);
  const active = focused || buttonActive;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  };

  return (
    <section
      id="newsletter"
      className="relative w-full overflow-hidden bg-brand-cream lg:mt-10 md:mt-10 mt-10"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="grid min-h-0 w-full grid-cols-1 gap-0 lg:min-h-[680px] lg:grid-cols-[0.42fr_1fr] lg:gap-10 lg:ml-10 min-[1441px]:grid-cols-[0.42fr_1fr]">
          <Reveal
            as="div"
            className="relative flex flex-col lg:justify-between md:mt-0  px-4 md:px-4"
          >
            <p className="text-[14px] font-semibold uppercase tracking-[0.12em] text-black/70 sm:text-[11px] lg:mt-20">
              / STAY IN TOUCH
            </p>
            <div className="max-w-full lg:pb-6">
              <h2 className="font-display text-[22px] font-normal leading-[1.4] tracking-[-0.02em] text-black md:text-[18px] lg:text-[20px] md:mt-20 mt-20">
                Subscribe to our newsletter and be the first to hear about sneak
                peek trailers, new products, events, and behind-the-scenes
                content.
              </h2>
            </div>
          </Reveal>
          <Reveal
            as="div"
            delay={120}
            className="relative mt-10 h-[520px] w-full overflow-hidden lg:h-full min-[1441px]:mr-[calc((1440px-100vw)/2)] min-[1441px]:w-[calc(100%+((100vw-1440px)/2))]"
          >
            <img
              src="https://www.datocms-assets.com/153672/1750184938-laika_home_c-10-newsletter_desktop.jpg"
              alt=""
              className="absolute inset-0 h-full w-full object-cover lg:rounded-l-[10px]"
            />
            <div className="pointer-events-none absolute inset-0 bg-black/[0.02]" />
            <div className="absolute bottom-10 lg:bottom-20 lg:right-20 right-7 z-10 w-[88%] max-w-[500px] bg-brand-yellow p-5 md:w-[62%] md:p-7 lg:w-[58%] lg:p-8 rounded-[8px]">
              <div className="relative h-full min-h-[100px]">
                <p className="absolute top-[-15px] lg:top-[-25px] md:top-[-20px] md:left-[-18px] left-[-12px] lg:left-[-25px] text-[10px] font-display uppercase tracking-[0.1em] text-black sm:text-[8px]">
                  SUBSCRIBE
                </p>
                {submitted ? (
                  <div className="border-b-2 border-black pb-12">
                    <p className="font-display text-xl font-bold tracking-[-0.03em] text-black sm:text-2xl">
                      You're on the list! 🎉
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="absolute top-15 w-full"
                  >
                    <div className="flex w-full items-end">
                      <div
                        onMouseEnter={() => setEmailHovered(true)}
                        onMouseLeave={() => setEmailHovered(false)}
                        className={`relative -left-6 translate-y-0 md:translate-y-0.5 lg:translate-y-1 flex-1 w-full min-w-0 h-[40px] transition-all duration-300 ${emailHovered ? "border border-black" : "border border-transparent"}`}
                      >
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Your email"
                          aria-label="Your email"
                          className="relative lg:top-1 md:top-1 lg:right-2 md:right-1 h-full w-full border-0 bg-transparent px-3 font-grotesk font-extrabold text-[22px] font-extrabold leading-none tracking-[-0.02em] text-black placeholder:text-black placeholder:opacity-100 outline-none ring-0 lg:text-[28px]"
                        />
                      </div>
                      <button
                        type="submit"
                        aria-label="Subscribe"
                        onMouseEnter={() => setButtonActive(true)}
                        onMouseLeave={() => setButtonActive(false)}
                        className="relative lg:top-1 md:bottom-[-2px] bottom-1 lg:left-5 md:left-4 left-2 flex h-[48px] w-[46px] shrink-0 items-center justify-center overflow-hidden rounded-[4px] bg-[#111] text-white"
                      >
                        <svg
                          className="pointer-events-none absolute inset-[2px] h-[calc(100%-4px)] w-[calc(100%-4px)]"
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
                            strokeDasharray={
                              emailHovered || buttonActive ? "500 0" : "10 5"
                            }
                            className="transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"
                          />
                        </svg>
                        <svg
                          width="18"
                          height="24"
                          viewBox="0 0 18 18"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M3 9H15"
                            stroke="currentColor"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                          />
                          <path
                            d="M11.5 5.5L15 9L11.5 12.5"
                            stroke="currentColor"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="relative lg:left-1/2 left-1/2 md:left-1/2 md:mt-[10px] mt-[5px] lg:mt-[12px] h-[2px] lg:w-[calc(100%+3rem)] md:w-[calc(100%+3rem)] w-[calc(100%+2rem)] lg:-translate-x-1/2 -translate-x-1/2 bg-black" />
                  </form>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
