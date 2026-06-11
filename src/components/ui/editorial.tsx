"use client";

import { cn } from "@/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { MagneticButton } from "@/components/ui/motion";

const EASE = [0.22, 1, 0.36, 1] as const;

/* Scroll-reveal wrapper: fades + lifts content into view once. */
export const Reveal = ({
    children,
    delay = 0,
    y = 24,
    className,
}: {
    children: React.ReactNode;
    delay?: number;
    y?: number;
    className?: string;
}) => (
    <motion.div
        initial={{ opacity: 0, y }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.65, ease: EASE, delay }}
        className={className}
    >
        {children}
    </motion.div>
);

/* Short voltage tick that draws in from the left. */
export const Tick = ({ className }: { className?: string }) => (
    <motion.span
        aria-hidden
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: EASE }}
        style={{ originX: 0 }}
        className={cn("block h-[2px] w-[52px] bg-voltage", className)}
    />
);

export const Eyebrow = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => (
    <p
        className={cn(
            "font-twk text-[11px] uppercase tracking-[0.18em] text-sage",
            className
        )}
    >
        {children}
    </p>
);

/* The primary action on the site.
   A refined pill: solid base, label, and a small voltage circular arrow
   badge that nudges on hover. Clean and editorial — no heavy glow.
   `onDark` flips the base to linen so it reads on the ink sections. */
export const VoltageCTA = ({
    href,
    children,
    target,
    rel,
    className,
    onDark = false,
}: {
    href: string;
    children: React.ReactNode;
    target?: string;
    rel?: string;
    className?: string;
    onDark?: boolean;
}) => (
    <MagneticButton
        href={href}
        target={target}
        rel={rel}
        strength={0.25}
        className={cn(
            "group inline-flex items-center gap-3 rounded-full py-[7px] pl-6 pr-[7px] font-twk text-[14px] font-[500] tracking-[0.01em] transition-colors duration-300",
            onDark
                ? "bg-linen text-ink hover:bg-white"
                : "bg-ink text-linen hover:bg-bark",
            className
        )}
    >
        <span className="whitespace-nowrap">{children}</span>
        <span
            aria-hidden
            className="flex size-9 shrink-0 items-center justify-center rounded-full bg-voltage text-ink transition-transform duration-300 ease-out group-hover:translate-x-[3px]"
        >
            →
        </span>
    </MagneticButton>
);

/* Ghost link with an underline that wipes in from the left on hover. */
export const GhostLink = ({
    href,
    children,
    target,
    rel,
    arrow = false,
    className,
}: {
    href: string;
    children: React.ReactNode;
    target?: string;
    rel?: string;
    arrow?: boolean;
    className?: string;
}) => (
    <Link
        href={href}
        target={target}
        rel={rel}
        className={cn(
            "group inline-flex items-center gap-1.5 font-twk text-[14px] font-[350] text-ink",
            className
        )}
    >
        <span className="relative">
            {children}
            <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 ease-out group-hover:scale-x-100" />
        </span>
        {arrow && (
            <span
                aria-hidden
                className="transition-transform group-hover:translate-x-0.5"
            >
                →
            </span>
        )}
    </Link>
);

/* Editorial photo with optional Times-italic caption. Full colour, with a
   gentle zoom on hover. */
export const ImageTile = ({
    src,
    caption,
    className,
    sizes = "(max-width: 768px) 100vw, 40vw",
    priority = false,
}: {
    src: string;
    caption?: string;
    className?: string;
    sizes?: string;
    priority?: boolean;
}) => (
    <figure className={cn("group/tile relative", className)}>
        <div className="relative h-full w-full overflow-hidden rounded-[14px] bg-bark">
            <Image
                src={src}
                alt=""
                fill
                sizes={sizes}
                priority={priority}
                quality={90}
                className="object-cover transition duration-700 ease-out group-hover/tile:scale-[1.03]"
            />
        </div>
        {caption && (
            <figcaption className="mt-3 font-mondwest text-[16px] italic leading-[1.35] text-sage">
                {caption}
            </figcaption>
        )}
    </figure>
);

/* Indexed editorial list row used for catalogs / schedules. */
export const EditorialRow = ({
    index,
    eyebrow,
    title,
    body,
    meta,
    href,
}: {
    index: number;
    eyebrow?: string;
    title: string;
    body?: string;
    meta?: string;
    href?: string;
}) => {
    const inner = (
        <div className="grid grid-cols-1 items-baseline gap-3 border-t border-mist py-8 md:grid-cols-12 md:gap-10">
            <span className="font-twk text-[11px] tabular-nums text-sage md:col-span-1">
                {String(index).padStart(2, "0")}
            </span>
            <div className="md:col-span-5">
                {eyebrow && (
                    <p className="font-twk text-[11px] uppercase tracking-[0.16em] text-sage">
                        {eyebrow}
                    </p>
                )}
                <h3 className="mt-2 font-editorial text-[clamp(28px,3.6vw,48px)] font-[300] leading-[1] tracking-tight text-ink transition-colors group-hover:text-sage">
                    {title}
                </h3>
            </div>
            {body && (
                <p className="font-twk text-[15px] font-[350] leading-[1.5] text-ink/75 md:col-span-4">
                    {body}
                </p>
            )}
            {meta && (
                <p className="font-twk text-[13px] font-[350] uppercase tracking-[0.08em] text-sage md:col-span-2">
                    {meta}
                </p>
            )}
        </div>
    );

    if (href) {
        return (
            <Link href={href} className="group block">
                {inner}
            </Link>
        );
    }
    return <div className="group">{inner}</div>;
};

/* Section shell with the 1440 max-width + editorial padding. */
export const Section = ({
    children,
    className,
    id,
}: {
    children: React.ReactNode;
    className?: string;
    id?: string;
}) => (
    <section
        id={id}
        className={cn(
            "mx-auto max-w-[1440px] px-6 md:px-[50px] py-20 md:py-28",
            className
        )}
    >
        {children}
    </section>
);
