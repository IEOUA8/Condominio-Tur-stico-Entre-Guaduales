import type { SVGProps } from "react";

/* Sistema de iconos line-art (stroke = currentColor). Sobrio, boutique. */
export type IconName =
  | "menu"
  | "close"
  | "whatsapp"
  | "phone"
  | "mail"
  | "arrowRight"
  | "arrowUpRight"
  | "chevronDown"
  | "chevronLeft"
  | "chevronRight"
  | "star"
  | "mapPin"
  | "check"
  | "plus"
  | "minus"
  | "users"
  | "calendar"
  | "sparkles"
  | "shield"
  | "instagram"
  | "facebook"
  | "threads"
  | "tiktok"
  | "airbnb"
  | "google"
  | "cabin"
  | "hotTub"
  | "flame"
  | "grill"
  | "car"
  | "trail"
  | "leaf"
  | "water"
  | "moon"
  | "van"
  | "paw"
  | "clock"
  | "info";

type Props = SVGProps<SVGSVGElement> & {
  name: IconName;
  size?: number;
  title?: string;
};

const P: Record<IconName, React.ReactNode> = {
  menu: <path d="M3 6h18M3 12h18M3 18h18" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  whatsapp: (
    <>
      <path d="M3 21l1.9-5.2A8.5 8.5 0 1 1 8.2 19L3 21z" />
      <path d="M8.5 9.5c0 3.5 2.5 6 6 6 .6 0 1.2-.4 1.4-1l.2-.7-2-1-0.9.9c-1-.5-1.8-1.3-2.3-2.3l.9-.9-1-2-.7.2c-.6.2-1 .8-1 1.4z" fill="currentColor" stroke="none" />
    </>
  ),
  phone: <path d="M4 5c0 8 7 15 15 15l1.5-3-4-2-1.5 1.5A11 11 0 0 1 8.5 8L10 6.5 8 2.5 5 4c-.6.3-1 .7-1 1z" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M4 7l8 5 8-5" />
    </>
  ),
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
  arrowUpRight: <path d="M7 17L17 7M8 7h9v9" />,
  chevronDown: <path d="M6 9l6 6 6-6" />,
  chevronLeft: <path d="M15 6l-6 6 6 6" />,
  chevronRight: <path d="M9 6l6 6-6 6" />,
  star: <path d="M12 3l2.6 5.6 6 .8-4.4 4.2 1.1 6-5.3-2.9L6.3 19.6l1.1-6L3 9.4l6-.8L12 3z" />,
  mapPin: (
    <>
      <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  check: <path d="M4 12l5 5L20 6" />,
  plus: <path d="M12 5v14M5 12h14" />,
  minus: <path d="M5 12h14" />,
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <path d="M16 5.5a3 3 0 0 1 0 5.7M21 20c0-2.5-1.5-4.7-3.7-5.6" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 9h18M8 3v4M16 3v4" />
    </>
  ),
  sparkles: <path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3zM19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14z" />,
  shield: <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />,
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  facebook: <path d="M14 8h2V5h-2c-1.7 0-3 1.3-3 3v2H9v3h2v6h3v-6h2.2l.8-3H14V8.5c0-.3.2-.5.5-.5z" />,
  threads: (
    <>
      <path d="M16.4 8.6C15.3 7.2 13.8 6.5 12 6.5 8.4 6.5 6 9 6 12.6c0 3.6 2.4 6 6 6 2.3 0 3.9-.9 4.8-2.7" />
      <path d="M15.6 15c.6-1 .7-2.3-.1-3.2-1-1.1-3-1.2-4.1-.2-.9.8-.8 2.2.2 2.8 1.4.9 3.4 0 3.6-2.1.1-1.6-.7-3-2.2-3.6" />
    </>
  ),
  tiktok: (
    <>
      <path d="M13.8 4v10a3.4 3.4 0 1 1-3.4-3.4c.35 0 .7.05 1 .14" />
      <path d="M13.8 4c.35 2.7 2.3 4.5 5 4.6" />
    </>
  ),
  airbnb: (
    <path d="M12 4c1.6 0 2.8 1.5 4.4 4.8 1.5 3 2.6 5.4 2.8 7 .3 2-1.1 3.6-3 3.6-1.4 0-2.4-.8-3.1-2.3-.5-1-.9-1.5-1.1-1.5s-.6.5-1.1 1.5C10.1 18.6 9 19.4 7.7 19.4c-1.9 0-3.3-1.6-3-3.6.2-1.6 1.3-4 2.8-7C9.2 5.5 10.4 4 12 4z" />
  ),
  google: <path d="M20 12c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8c2.2 0 4 .8 5.4 2L15 10c-.8-.7-1.8-1.1-3-1.1A4.1 4.1 0 1 0 16 14h-4v-3h8z" />,
  cabin: <path d="M3 20h18M5 20v-8l7-5 7 5v8M9 20v-5h6v5" />,
  hotTub: (
    <>
      <path d="M4 12h16v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-5z" />
      <path d="M8 12V8a2 2 0 0 1 4 0M12 5v.5M9 3v.5M15 4v.5" />
    </>
  ),
  flame: <path d="M12 3s5 4 5 9a5 5 0 0 1-10 0c0-2 1-3 1-3 .5 1.5 1.5 2 1.5 2C9 8 12 3 12 3z" />,
  grill: (
    <>
      <path d="M4 7h16l-2 6H6L4 7z" />
      <path d="M8 13l-2 7M16 13l2 7M9 4v1M12 3v2M15 4v1" />
    </>
  ),
  car: (
    <>
      <path d="M5 16l1.5-5A3 3 0 0 1 9.4 9h5.2a3 3 0 0 1 2.9 2L19 16" />
      <path d="M3 16h18v3H3zM7 19v1M17 19v1" />
    </>
  ),
  trail: <path d="M7 21c0-4 3-5 3-9M14 3c0 4-3 5-3 9M9 12c2 0 3 1.5 3 4M14 8c-2 0-3 1-3 3" />,
  leaf: <path d="M5 19C4 12 9 5 20 5c0 11-7 16-14 15 0-5 3-8 8-9" />,
  water: <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" />,
  moon: <path d="M20 14A8 8 0 1 1 10 4a6 6 0 0 0 10 10z" />,
  van: (
    <>
      <path d="M3 8h11l4 3h3v5H3zM3 8v8" />
      <circle cx="7.5" cy="18" r="1.5" />
      <circle cx="17.5" cy="18" r="1.5" />
    </>
  ),
  paw: <path d="M12 14c-2 0-4 1.5-4 3.2 0 1 .9 1.8 2 1.8h4c1.1 0 2-.8 2-1.8 0-1.7-2-3.2-4-3.2zM7 11a1.5 2 0 1 0 0-.1M17 11a1.5 2 0 1 0 0-.1M9.5 7.5a1.4 1.8 0 1 0 0-.1M14.5 7.5a1.4 1.8 0 1 0 0-.1" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  info: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5M12 8v.5" />
    </>
  ),
};

export function Icon({ name, size = 24, title, ...rest }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      {P[name]}
    </svg>
  );
}
