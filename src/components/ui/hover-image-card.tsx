"use client";

import { cn } from "@/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

interface HoverImageCardProps {
    title: string;
    description: string;
    href: string;
    /** Pre-rendered icon node (server-rendered JSX). */
    icon: React.ReactNode;
    tag: string;
    image: string;
    className?: string;
}

/**
 * Program tile that fills with a photo on hover. On hover-out the photo fades
 * away and the static card content returns.
 */
export const HoverImageCard = ({
    title,
    description,
    href,
    icon,
    tag,
    image,
    className,
}: HoverImageCardProps) => {
    const [hover, setHover] = React.useState(false);

    return (
        <Link
            href={href}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onFocus={() => setHover(true)}
            onBlur={() => setHover(false)}
            className={cn(
                "group relative block h-full overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md",
                className
            )}
        >
            {/* Image overlay on hover */}
            <AnimatePresence>
                {hover && (
                    <motion.div
                        key="overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="pointer-events-none absolute inset-0 z-10"
                    >
                        <Image
                            src={image}
                            alt=""
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/25" />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Card content */}
            <div
                className={cn(
                    "relative z-20 flex h-full flex-col p-7 transition-colors duration-200",
                    hover ? "text-white" : ""
                )}
            >
                <div className="flex items-start justify-between gap-4">
                    <div
                        className={cn(
                            "size-11 rounded-lg flex items-center justify-center shrink-0 transition-colors",
                            hover
                                ? "bg-white/15 text-white"
                                : "bg-primary/10 text-primary"
                        )}
                    >
                        {icon}
                    </div>
                    <span
                        className={cn(
                            "text-[11px] font-medium tracking-wide uppercase transition-colors",
                            hover ? "text-white/85" : "text-muted-foreground"
                        )}
                    >
                        {tag}
                    </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-tight">
                    {title}
                </h3>
                <p
                    className={cn(
                        "mt-3 leading-relaxed transition-colors",
                        hover ? "text-white/90" : "text-muted-foreground"
                    )}
                >
                    {description}
                </p>
                <span
                    className={cn(
                        "mt-6 inline-flex items-center text-sm font-medium transition-colors",
                        hover ? "text-white" : "text-primary"
                    )}
                >
                    Learn more
                    <ArrowUpRightIcon className="size-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
            </div>
        </Link>
    );
};
