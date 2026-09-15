"use client";

import { useRef, useState } from "react";
import Reveal from "./Reveal";
import "../index.css";

const IconLaika = (props) => (
  <svg viewBox="0 0 88 48" fill="none" {...props}>
    <path
      fill="currentColor"
      d="M9.75 48.003V43.87H4.2V25.58L0 26.953v21.05h9.75ZM18.238 26.994c0-.714.425-1.576 1.374-1.892l3.73-1.202c.319-.1.588-.149.823-.149.537 0 1.177.26 1.177 1.497v6.143l-7.104 1.155v-5.552Zm0 21.007V36.98l7.104-.965v11.986h4.316V23.348c0-2.527-1.816-4.46-4.22-4.46-.482 0-.979.08-1.475.234l-5.645 1.842c-2.505.796-4.396 3.389-4.396 6.03V48h4.316ZM39.767 48.002V13.96l-4.876 1.586v32.457h4.876ZM50.312 48.003V30.134l9.959 17.87h5.999l-10.61-18.63L65.396 5.6l-6.197 2.026-8.886 22.485V10.518l-5.015 1.638v35.847h5.015ZM74.075 9.175c0-.568.34-1.293 1.134-1.558l6.231-1.946c1.15-.361 1.547.031 1.547 1.014v15.343l-8.912 1.487V9.175Zm0 38.826V29.46l8.912-1.264v19.806h5.01V4.785c0-2.725-1.963-4.783-4.567-4.783a5.29 5.29 0 0 0-1.578.25l-8.125 2.613c-2.644.84-4.665 3.52-4.665 6.31V48h5.013Z"
    />
  </svg>
);

const IconInstagram = (props) => (
  <svg viewBox="0 0 16 16" fill="none" {...props}>
    <path
      fill="currentColor"
      d="M11.4123 5.34474C10.9885 5.34557 10.6439 5.00238 10.643 4.57853C10.6422 4.15468 10.9854 3.81005 11.4094 3.80922C11.8335 3.80839 12.1781 4.15178 12.1789 4.57563C12.1796 4.99948 11.8364 5.34391 11.4123 5.34474Z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.00768 11.2855C6.19308 11.289 4.71895 9.82088 4.71543 8.00583C4.7119 6.1912 6.18042 4.71684 7.99504 4.71332C9.81006 4.70979 11.2844 6.17876 11.2879 7.99318C11.2914 9.80823 9.8225 11.282 8.00768 11.2855ZM7.99732 5.86646C6.81951 5.86854 5.86606 6.82552 5.86814 8.00355C5.87042 9.18179 6.8276 10.135 8.0054 10.1328C9.18363 10.1305 10.1371 9.1737 10.1348 7.99546C10.1325 6.81722 9.17534 5.86418 7.99732 5.86646Z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.79847 1.9444C4.2049 1.78514 4.67001 1.67607 5.35098 1.64393C6.03362 1.61117 6.25155 1.6037 7.98923 1.60038C9.72733 1.59707 9.94526 1.6037 10.6279 1.63397C11.3091 1.66342 11.7744 1.77084 12.1816 1.92843C12.603 2.0908 12.9605 2.30936 13.3167 2.66416C13.673 3.01937 13.8924 3.37562 14.0568 3.79636C14.2158 4.20321 14.3249 4.66791 14.3573 5.3493C14.3896 6.03173 14.3975 6.24946 14.4008 7.98737C14.4041 9.72508 14.3971 9.94322 14.3672 10.6263C14.3376 11.307 14.2304 11.7726 14.0728 12.1796C13.91 12.601 13.6918 12.9585 13.337 13.3147C12.9823 13.6712 12.6256 13.8904 12.2049 14.055C11.798 14.2139 11.3333 14.3229 10.6524 14.3555C9.96973 14.3878 9.75179 14.3955 8.01349 14.3988C6.27601 14.4021 6.05808 14.3955 5.37546 14.3654C4.69427 14.3356 4.22875 14.2284 3.8217 14.071C3.40034 13.908 3.04285 13.6901 2.68661 13.3351C2.33015 12.9801 2.11057 12.6236 1.94634 12.2029C1.78709 11.7962 1.67842 11.3313 1.64587 10.6505C1.61331 9.96769 1.60565 9.74955 1.60233 8.01184C1.599 6.27393 1.60585 6.0562 1.6357 5.37356C1.66578 4.69217 1.77257 4.22684 1.93016 3.81937C2.09294 3.39822 2.31108 3.04093 2.66629 2.68448C3.02108 2.32823 3.37774 2.10842 3.79847 1.9444ZM4.23705 12.9958C4.46286 13.0827 4.80168 13.1864 5.42564 13.2135C6.1008 13.2428 6.30297 13.2492 8.01141 13.2459C9.72048 13.2428 9.92266 13.2355 10.5976 13.2038C11.2209 13.1741 11.5598 13.0692 11.785 12.9813C12.0838 12.8645 12.2965 12.725 12.52 12.5012C12.7436 12.2767 12.8819 12.0633 12.9976 11.7645C13.0847 11.5385 13.1882 11.1994 13.2153 10.5755C13.245 9.90071 13.2512 9.69833 13.2479 7.98945C13.2448 6.28098 13.2375 6.0786 13.2054 5.40363C13.1759 4.78009 13.0712 4.44125 12.9831 4.21627C12.8663 3.91704 12.7272 3.7047 12.5028 3.48096C12.2785 3.25721 12.0651 3.11931 11.7659 3.00361C11.5405 2.91631 11.2012 2.81304 10.5777 2.78588C9.90254 2.75623 9.70015 2.75021 7.9913 2.75353C6.28286 2.75685 6.08069 2.76369 5.40573 2.79562C4.78199 2.82527 4.44357 2.92999 4.21796 3.01812C3.91936 3.13487 3.70661 3.27359 3.48287 3.49817C3.25954 3.72274 3.12123 3.9357 3.00553 4.23514C2.91886 4.46075 2.81455 4.79999 2.7878 5.42354C2.75835 6.09871 2.75214 6.3011 2.75545 8.00956C2.75857 9.71844 2.76582 9.92083 2.79755 10.5954C2.82679 11.2193 2.93233 11.5577 3.02005 11.7836C3.13679 12.082 3.27593 12.2947 3.50009 12.5185C3.72466 12.7414 3.93803 12.8801 4.23705 12.9958Z"
    />
  </svg>
);

const IconTikTok = (props) => (
  <svg viewBox="0 0 16 16" fill="none" {...props}>
    <path
      fill="currentColor"
      d="M11.0641 3.88C10.6085 3.35968 10.3574 2.6916 10.3574 2H8.29742V10.2667C8.28186 10.7141 8.0931 11.1381 7.77096 11.449C7.44881 11.7599 7.01848 11.9336 6.57075 11.9333C5.62409 11.9333 4.83742 11.16 4.83742 10.2C4.83742 9.05333 5.94409 8.19333 7.08409 8.54667V6.44C4.78409 6.13333 2.77075 7.92 2.77075 10.2C2.77075 12.42 4.61075 14 6.56409 14C8.65742 14 10.3574 12.3 10.3574 10.2V6.00667C11.1928 6.60657 12.1957 6.92843 13.2241 6.92667V4.86667C13.2241 4.86667 11.9708 4.92667 11.0641 3.88Z"
    />
  </svg>
);

const IconYouTube = (props) => (
  <svg viewBox="0 0 16 16" fill="none" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.1641 3.22239C15.4123 3.47223 15.5906 3.78289 15.6811 4.12328C16.0156 5.37964 16.0156 7.99965 16.0156 7.99965C16.0156 7.99965 16.0156 10.6196 15.6811 11.876C15.5906 12.2164 15.4123 12.5271 15.1641 12.7769C14.9159 13.0267 14.6063 13.207 14.2665 13.2996C13.0156 13.636 8.01562 13.636 8.01562 13.636C8.01562 13.636 3.01562 13.636 1.76472 13.2996C1.42491 13.207 1.1154 13.0267 0.86715 12.7769C0.618902 12.5271 0.440629 12.2164 0.35017 11.876C0.015625 10.6196 0.015625 7.99965 0.015625 7.99965C0.015625 7.99965 0.015625 5.37964 0.35017 4.12328C0.440629 3.78289 0.618902 3.47223 0.86715 3.22239C1.1154 2.97254 1.42491 2.79228 1.76472 2.69965C3.01562 2.36328 8.01562 2.36328 8.01562 2.36328C8.01562 2.36328 13.0156 2.36328 14.2665 2.69965C14.6063 2.79228 14.9159 2.97254 15.1641 3.22239ZM10.5611 7.99967L6.37927 5.62058V10.3788L10.5611 7.99967Z"
    />
  </svg>
);

const IconLinkedIn = (props) => (
  <svg viewBox="0 0 16 16" fill="none" {...props}>
    <path
      fill="currentColor"
      d="M13.4541 1.60156H2.54656C2.02406 1.60156 1.60156 2.01406 1.60156 2.52406V13.4766C1.60156 13.9866 2.02406 14.4016 2.54656 14.4016H13.4541C13.9766 14.4016 14.4016 13.9866 14.4016 13.4791V2.52406C14.4016 2.01406 13.9766 1.60156 13.4541 1.60156ZM5.39906 12.5091H3.49906V6.39906H5.39906V12.5091ZM4.44906 5.56656C3.83906 5.56656 3.34656 5.07406 3.34656 4.46656C3.34656 3.85906 3.83906 3.36656 4.44906 3.36656C5.05656 3.36656 5.54906 3.85906 5.54906 4.46656C5.54906 5.07156 5.05656 5.56656 4.44906 5.56656ZM12.5091 12.5091H10.6116V9.53906C10.6116 8.83156 10.5991 7.91906 9.62406 7.91906C8.63656 7.91906 8.48656 8.69156 8.48656 9.48906V12.5091H6.59156V6.39906H8.41182V7.23406H8.43656C8.68906 6.75406 9.30906 6.24656 10.2316 6.24656C12.1541 6.24656 12.5091 7.51156 12.5091 9.15656V12.5091Z"
    />
  </svg>
);

const IconFacebook = (props) => (
  <svg viewBox="0 0 16 16" fill="none" {...props}>
    <path
      fill="currentColor"
      d="M7.99765 1.60156C11.5323 1.60156 14.3976 4.46694 14.3976 8.00156C14.3976 11.2737 11.9419 13.9719 8.77302 14.3547V9.9573L10.5044 9.95729L10.8635 8.00156H8.77302V7.30987C8.77302 6.79312 8.87438 6.43537 9.10692 6.20681C9.33946 5.97824 9.70319 5.87886 10.2279 5.87886C10.3607 5.87886 10.4829 5.88018 10.5914 5.88282C10.7492 5.88666 10.8778 5.8933 10.9673 5.90272V4.12982C10.9315 4.11988 10.8893 4.10994 10.842 4.10016C10.7348 4.07799 10.6015 4.05662 10.4583 4.03786C10.1589 3.99865 9.81594 3.97079 9.57599 3.97079C8.60693 3.97079 7.87457 4.17811 7.36336 4.60753C6.74639 5.12578 6.45157 5.96754 6.45157 7.15883V8.00156H5.13184V9.95729H6.45157V14.2131C3.66396 13.5215 1.59766 11.003 1.59766 8.00156C1.59766 4.46694 4.46304 1.60156 7.99765 1.60156Z"
    />
  </svg>
);

const IconLetterboxd = (props) => (
  <svg viewBox="0 0 16 16" fill="none" {...props}>
    <path
      fill="currentColor"
      d="M5.48267 9.53067C5.21595 9.95754 4.845 10.3095 4.40473 10.5535C3.96446 10.7975 3.46935 10.9255 2.966 10.9253C1.328 10.9253 0 9.59867 0 7.96267C0 6.32667 1.328 5 2.96667 5C4.028 5 4.95867 5.55733 5.48267 6.39467C5.198 6.84933 5.034 7.38667 5.034 7.96267C5.034 8.53867 5.198 9.076 5.48267 9.53067ZM10.0673 7.96267C10.0673 7.38667 10.232 6.84933 10.5167 6.39467C9.99267 5.55733 9.06133 5 8 5C6.93867 5 6.00733 5.55733 5.48333 6.39467C5.768 6.84933 5.93267 7.38667 5.93267 7.96267C5.93267 8.53867 5.768 9.076 5.48333 9.53067C6.00733 10.368 6.93867 10.9253 8 10.9253C9.06133 10.9253 9.99267 10.368 10.5167 9.53067C10.2214 9.06106 10.0661 8.51737 10.0673 7.96267ZM13.034 5C12.5306 4.99988 12.0355 5.12783 11.5953 5.37181C11.155 5.61579 10.7841 5.96779 10.5173 6.39467C10.802 6.84933 10.966 7.38667 10.966 7.96267C10.966 8.53867 10.802 9.076 10.5173 9.53067C10.7841 9.95754 11.155 10.3095 11.5953 10.5535C12.0355 10.7975 12.5306 10.9255 13.034 10.9253C14.672 10.9253 16 9.59867 16 7.96267C16 6.32667 14.672 5 13.0333 5H13.034Z"
    />
  </svg>
);

const DashedCircle = (props) => (
  <svg viewBox="0 0 44 44" fill="none" {...props}>
    <rect
      x="0.5"
      y="0.5"
      width="43"
      height="43"
      rx="21.5"
      ry="21.5"
      strokeWidth="1"
      strokeDasharray="1 3"
      fill="none"
      stroke="currentColor"
    />
  </svg>
);

const socials = [
  {
    number: "/01/",
    label: "Instagram",
    Icon: IconInstagram,
    href: "https://www.instagram.com/laikastudios",
  },
  {
    number: "/02/",
    label: "TikTok",
    Icon: IconTikTok,
    href: "https://www.tiktok.com/@laikastudios",
  },
  {
    number: "/03/",
    label: "YouTube",
    Icon: IconYouTube,
    href: "https://www.youtube.com/@LAIKAStudios",
  },
  {
    number: "/04/",
    label: "LinkedIn",
    Icon: IconLinkedIn,
    href: "https://www.linkedin.com/company/laika/",
  },
  {
    number: "/05/",
    label: "Facebook",
    Icon: IconFacebook,
    href: "https://www.facebook.com/laikastudios",
  },
  {
    number: "/06/",
    label: "Letterboxd",
    Icon: IconLetterboxd,
    href: "https://letterboxd.com/laikastudios/",
  },
];

const legalLinksCol1 = [
  { label: "COOKIES PREFERENCES", href: "#", isButton: true },
  { label: "PRIVACY POLICY", href: "/privacy-policy" },
];

const legalLinksCol2 = [
  { label: "TERMS & CONDITIONS", href: "/terms-and-conditions" },
  { label: "PRIVACY CHOICES", href: "/gpc-confirmation" },
];

const legalLinksCol3 = [
  { label: "CONTACT US", href: "/contact-us" },
  {
    label: "SITEMAP",
    href: "https://www.laika.com/sitemap.xml",
    external: true,
  },
];

const legalLinksCol4 = [{ label: "TRUST CENTER", href: "/trust-center" }];

export default function Footer() {
  const carpetRef = useRef(null);
  const [mouse, setMouse] = useState({
    x: "50%",
    y: "50%",
  });
  const [revealing, setRevealing] = useState(false);
  const handleCarpetMove = (e) => {
    if (!carpetRef.current) return;
    const rect = carpetRef.current.getBoundingClientRect();
    setMouse({
      x: `${((e.clientX - rect.left) / rect.width) * 100}%`,
      y: `${((e.clientY - rect.top) / rect.height) * 100}%`,
    });
  };

  return (
    <div className="relative w-full top-34">
      <div
        aria-hidden="true"
        className="absolute left-1/2 -top-17.5 h-30 w-full max-w-360 -translate-x-1/2 bg-brand-dark"
        style={{ clipPath: "polygon(0 0, 100% 60px, 100% 120px, 0 120px)" }}
      />
      <footer className="relative w-full bg-brand-dark text-white selection:bg-[#F5C710] selection:text-black">
        <div className="relative mx-auto w-full max-w-360 px-6 pb-0 pt-22.5 md:pt-20 md:px-4 lg:pt-32.5 lg:px-12">
          <Reveal
            as="div"
            className="flex flex-col items-start gap-4 lg:flex-row lg:items-start lg:justify-between lg:pb-10"
          >
            <a
              href="/"
              aria-label="LAIKA Studios home"
              className="block shrink-0 pb-7 md:pb-9 text-white transition-opacity duration-200 hover:opacity-85 lg:pb-0"
            >
              <IconLaika className="h-16 w-auto sm:h-20 md:h-24" />
            </a>
            <div className="w-full border-t border-dashed border-white/20 pt-4 lg:w-auto lg:border-0 lg:pt-0">
              <div className="hidden lg:grid lg:grid-flow-col lg:grid-cols-2 lg:grid-rows-3 lg:gap-x-38 lg:gap-y-8 lg:mr-30">
                {socials.map(({ number, label, Icon, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Find us on ${label}`}
                    className="group relative flex items-center font-semibold font-grotesk uppercase tracking-wide text-2xl sm:text-[36px] transition-colors duration-300 hover:text-[#F5C710]"
                  >
                    <span className="mr-10 shrink-0 text-[16px] font-normal text-white">
                      {number}
                    </span>
                    <span
                      className="pointer-events-none absolute left-15 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 scale-75 items-center justify-center text-[#F5C710] opacity-0 transition-all duration-300 ease-out lg:group-hover:scale-100 lg:group-hover:opacity-100"
                      aria-hidden="true"
                    >
                      <span className="relative flex h-11 w-11 items-center justify-center">
                        <Icon className="relative z-10 h-4 w-4" />
                        <DashedCircle className="absolute inset-0 h-11 w-11 text-[#F5C710]" />
                      </span>
                    </span>
                    <span className="transition-transform duration-300 ease-out lg:group-hover:translate-x-14">
                      {label}
                    </span>
                  </a>
                ))}
              </div>
              <div className="flex flex-col lg:hidden">
                {socials.map(({ number, label, Icon, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Find us on ${label}`}
                    className="group flex items-center justify-between py-3 pt-0 font-semibold uppercase tracking-wide text-2xl text-white transition-colors duration-200"
                  >
                    <div className="flex min-w-0 items-center">
                      <span className="mr-6 shrink-0 text-[16px] font-normal text-white">
                        {number}
                      </span>
                      <span className="transition-all duration-300 ease-out group-hover:translate-x-16 group-hover:text-[#F5C710]">
                        {label}
                      </span>
                    </div>
                    <span className="relative flex h-10 w-10 shrink-0 items-center justify-center text-[#F5C710]">
                      <Icon className="relative z-10 h-4 w-4" />
                      <DashedCircle className="absolute inset-0 h-10 w-10 text-[#F5C710]" />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal
            as="div"
            delay={100}
            className="mt-3 border-t border-dashed border-white/20 pt-6 md:mt-3 lg:mt-20 lg:pt-10"
          >
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex w-full shrink-0 justify-start lg:w-auto">
                <img
                  src="https://www.datocms-assets.com/153672/1787248887-en-b-corp.png?auto=format&fit=max&h=200&q=90"
                  alt="Certified B Corporation"
                  className="h-22.5 w-auto object-contain opacity-90 transition-opacity hover:opacity-100"
                />
              </div>
              <nav aria-label="Legal footer menu" className="w-full lg:w-auto">
                <div className="grid grid-cols-2 gap-x-8 lg:ml-20 lg:gap-x-20 md:grid-cols-4 md:gap-x-12 text-[12px] font-display uppercase tracking-widest text-white">
                  <div className="flex flex-col gap-10 md:gap-10">
                    {legalLinksCol1.map(({ label, isButton, href }) => (
                      <div key={label}>
                        {isButton ? (
                          <button
                            type="button"
                            className="relative w-fit text-left transition-colors duration-200 hover:text-[#F5C710] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[#F5C710] after:transition-all after:duration-300 hover:after:w-full"
                          >
                            {label}
                          </button>
                        ) : (
                          <a
                            href={href}
                            className="relative inline-block w-fit transition-colors duration-200 hover:text-[#F5C710] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[#F5C710] after:transition-all after:duration-300 hover:after:w-full"
                          >
                            {label}
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-8 md:gap-10">
                    {legalLinksCol2.map(({ label, href }) => (
                      <div key={label}>
                        <a
                          href={href}
                          className="relative inline-block w-fit transition-colors
                            duration-200 hover:text-[#F5C710] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[#F5C710] after:transition-all after:duration-300 hover:after:w-full"
                        >
                          {label}
                        </a>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-10 md:gap-10">
                    {legalLinksCol3.map(({ label, href, external }) => (
                      <div key={label}>
                        <a
                          href={href}
                          target={external ? "_blank" : undefined}
                          rel={external ? "noreferrer" : undefined}
                          className="relative inline-block w-fit transition-colors duration-200 hover:text-[#F5C710] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[#F5C710] after:transition-all after:duration-300 hover:after:w-full"
                        >
                          {label}
                        </a>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-10 md:gap-10">
                    {legalLinksCol4.map(({ label, href }) => (
                      <div key={label}>
                        <a
                          href={href}
                          className="relative inline-block w-fit transition-colors duration-200 hover:text-[#F5C710] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[#F5C710] after:transition-all after:duration-300 hover:after:w-full"
                        >
                          {label}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </nav>
            </div>
          </Reveal>
          <Reveal
            as="div"
            delay={200}
            ref={carpetRef}
            onMouseMove={handleCarpetMove}
            onMouseEnter={() => setRevealing(true)}
            onMouseLeave={() => setRevealing(false)}
            className="relative mt-10 min-h-42.5 w-full overflow-hidden border-t border-dashed border-white/20 pt-6 text-xs text-white/60 sm:mt-12 sm:min-h-42.5 sm:pt-6 md:mt-14"
          >
            <img
              src="https://www.laika.com/assets/images/portland_pattern.svg"
              alt=""
              aria-hidden="true"
              className="reveal-mask pointer-events-none absolute inset-0 h-full w-full object-cover opacity-50"
              style={{
                "--mouse-x": mouse.x,
                "--mouse-y": mouse.y,
                "--reveal-size": revealing ? "120px" : "0px",
              }}
            />
            <span className="relative z-10 block font-semibold font-grotesk uppercase tracking-wide text-white/60 text-[18px] sm:text-center lg:absolute lg:left-0 lg:top-6 lg:mt-0 lg:text-left">
              Made in Portland
            </span>
            <span className="relative  mt-3 block text-[10px] tracking-wider text-white/50 text-left md:text-center lg:absolute lg:right-0 lg:top-6 lg:mt-0 lg:text-right">
              © LAIKA Studios {new Date().getFullYear()}. All Rights Reserved
            </span>
          </Reveal>
        </div>
      </footer>
    </div>
  );
}
