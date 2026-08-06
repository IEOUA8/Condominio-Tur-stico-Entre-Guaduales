import Link from "next/link";
import { cn } from "@/lib/cn";
import { Icon, type IconName } from "@/components/ui/Icon";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "gold" | "whatsapp";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500 disabled:cursor-not-allowed disabled:opacity-50 active:scale-[0.98] select-none";

const variants: Record<Variant, string> = {
  primary: "bg-guadua-700 text-ivory-50 hover:bg-forest-800",
  secondary:
    "bg-white text-forest-900 border border-forest-900/12 hover:border-forest-900/25 hover:bg-ivory-50",
  outline: "border border-current text-forest-900 hover:bg-forest-900 hover:text-ivory-50",
  ghost: "text-forest-900 hover:bg-forest-900/6",
  gold: "bg-gold-500 text-forest-950 hover:bg-gold-400",
  whatsapp: "bg-[#25D366] text-[#06381f] hover:brightness-105",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm sm:text-base",
  lg: "px-7 py-3.5 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  icon?: IconName;
  iconPosition?: "left" | "right";
  className?: string;
  children: React.ReactNode;
  fullWidth?: boolean;
};

type ButtonAsButton = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & {
    href: string;
  };

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const {
    variant = "primary",
    size = "md",
    icon,
    iconPosition = "right",
    className,
    children,
    fullWidth,
  } = props;

  const classes = cn(base, variants[variant], sizes[size], fullWidth && "w-full", className);
  const inner = (
    <>
      {icon && iconPosition === "left" && <Icon name={icon} size={size === "lg" ? 20 : 18} />}
      <span>{children}</span>
      {icon && iconPosition === "right" && <Icon name={icon} size={size === "lg" ? 20 : 18} />}
    </>
  );

  if ("href" in props && props.href !== undefined) {
    const { href, ...rest } = props as ButtonAsLink;
    const isExternal = /^https?:|^mailto:|^tel:/.test(href);
    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          {...(sanitize(rest) as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...(sanitize(rest) as object)}>
        {inner}
      </Link>
    );
  }

  const { ...rest } = props as ButtonAsButton;
  return (
    <button className={classes} {...(sanitize(rest) as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {inner}
    </button>
  );
}

/* Quita props de presentación que no van al DOM. */
function sanitize(p: Record<string, unknown>) {
  const {
    variant,
    size,
    icon,
    iconPosition,
    className,
    children,
    fullWidth,
    ...dom
  } = p;
  void variant;
  void size;
  void icon;
  void iconPosition;
  void className;
  void children;
  void fullWidth;
  return dom;
}
