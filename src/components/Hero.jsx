import React from "react";
import "../index.css";

const WILDWOOD_IMAGE =
  "https://www.datocms-assets.com/153672/1785262298-ww_web_officialtrailer_desktop.jpg";

export default function Hero() {
  return (
    <>
      <section className="relative h-[150vh] w-full bg-black">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <img
            src={WILDWOOD_IMAGE}
            alt="Wildwood"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 bg-[#666]/5" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-l from-black/30 via-[#555]/8 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 z-50 mx-auto w-full max-w-[1440px] px-5 sm:px-7 md:px-10 lg:px-12 pb-[10vh]">
            <div className="grid grid-cols-1 gap-[5vw] lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.9fr)]">
              <div className="flex flex-col items-start">
                <div className="wildwood-eyebrow">
                  <div className="wildwood-text-mask">
                    <p className="wildwood-reveal-up font-display text-[14px] uppercase tracking-[-0.03em] md:text-[12px] lg:text-[12px] text-white/85">
                      / LAIKA Studios
                    </p>
                  </div>
                </div>
                <div className="wildwood-title-wrap mt-[20px]">
                  <div className="wildwood-title-mask">
                    <h1 className="wildwood-title wildwood-title-reveal font-grotesk font-extrabold tracking-[-0.02em] uppercase lg:text-[64px] text-[56px] md:text-[56px] text-white">
                      Wildwood
                    </h1>
                  </div>
                </div>
                <div className="wildwood-mobile-description-wrap mt-4 max-w-[470px] lg:hidden">
                  <div className="wildwood-text-mask">
                    <div className="wildwood-mobile-description wildwood-reveal-up wildwood-reveal-description">
                      <p className="font-display text-[20px] leading-[1.4] text-white/90 md:text-[18px]">
                        Watch the first official trailer for Wildwood now and
                        see the movie in theatres everywhere October 23.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="wildwood-button-entry mt-[13vh]">
                  <div className="wildwood-text-mask">
                    <div className="wildwood-reveal-up wildwood-reveal-button">
                      <a
                        href="https://www.youtube.com/watch?v=dtr5JL1zkiM"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Watch the Wildwood trailer"
                        className="wildwood-trailer group"
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
                        <span className="wildwood-button-label font-display text-[14px]">
                          WATCH THE TRAILER
                        </span>
                        <span className="wildwood-arrow-window">
                          <svg
                            className="wildwood-arrow wildwood-arrow-one"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              d="M7.4 16.6 L16.1 7.9 M9.1 7.9 H16.1 V14.9"
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
                              d="M7.4 16.6 L16.1 7.9 M9.1 7.9 H16.1 V14.9"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="square"
                              strokeLinejoin="miter"
                            />
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden items-end justify-end lg:flex">
                <div className="wildwood-description-wrap max-w-[330px] mb-32 mr-36 lg:text-white">
                  <div className="wildwood-description">
                    <div className="wildwood-description-line-mask">
                      <span className="wildwood-description-line wildwood-description-line-1">
                        Watch the first official trailer for Wildwood now
                      </span>
                    </div>
                    <div className="wildwood-description-line-mask">
                      <span className="wildwood-description-line wildwood-description-line-2">
                        and see the movie in theatres everywhere
                      </span>
                      <span className="wildwood-description-line wildwood-description-line-2">
                        October 23.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
