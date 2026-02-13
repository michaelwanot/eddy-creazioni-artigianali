import clsx from "clsx";
import Link from "next/link";
import type { ComponentProps } from "react";

type Props =
  | ({ href: string } & ComponentProps<typeof Link> & { variant?: "primary" | "ghost" })
  | ({ href?: undefined } & ComponentProps<"button"> & { variant?: "primary" | "ghost" });

export function Button(props: Props) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-medium transition border";
  const variants = {
    primary: "bg-neutral-900 text-white border-neutral-900 hover:bg-neutral-800",
    ghost: "bg-white text-neutral-900 border-neutral-200 hover:bg-neutral-50",
  } as const;
  const variant = (props as any).variant ?? "primary";
  const className = clsx(base, variants[variant], (props as any).className);

  if ("href" in props && props.href) {
    const { href, ...rest } = props as any;
    return <Link href={href} className={className} {...rest} />;
  }
  const { ...rest } = props as any;
  return <button className={className} {...rest} />;
}
