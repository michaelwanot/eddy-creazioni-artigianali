import clsx from "clsx";
import Link from "next/link";
import type { ComponentProps } from "react";

type LinkProps = { href: string } & ComponentProps<typeof Link> & { variant?: "primary" | "ghost" };
type ButtonProps = { href?: undefined } & ComponentProps<"button"> & { variant?: "primary" | "ghost" };
type Props = LinkProps | ButtonProps;

export function Button(props: Props) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-medium transition border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage/40";
  const variants = {
    primary: "bg-brand-sage text-white border-brand-sage hover:bg-brand-sage-light",
    ghost: "bg-white/60 text-brand-sage border-brand-beige hover:bg-white/80 backdrop-blur",
  } as const;
  const variant: "primary" | "ghost" = props.variant ?? "primary";
  const className = clsx(base, variants[variant], props.className);

  if ("href" in props && props.href) {
    const { href, variant: _, className: __, ...rest } = props as LinkProps;
    return <Link href={href} className={className} {...rest} />;
  }
  const { variant: _, className: __, ...rest } = props as ButtonProps;
  return <button className={className} {...rest} />;
}
