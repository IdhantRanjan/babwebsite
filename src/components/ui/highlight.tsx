"use client";

import { cn } from "@/utils";
import { motion } from "framer-motion";
import * as React from "react";

interface HighlightProps {
    children: React.ReactNode;
    className?: string;
    /** Animation delay in seconds */
    delay?: number;
    /** "underline" wipes a voltage rule under the text; "marker" sweeps a
        translucent voltage highlighter behind it. */
    variant?: "underline" | "marker";
}

/**
 * Wraps keywords with an animated voltage accent that wipes in (left → right)
 * when scrolled into view. The brand's single accent, used as punctuation.
 */
export const Highlight = ({
    children,
    className,
    delay = 0.1,
    variant = "underline",
}: HighlightProps) => {
    const transition = {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
        delay,
    };

    if (variant === "marker") {
        return (
            <span className={cn("relative inline-block", className)}>
                <motion.span
                    aria-hidden
                    className="absolute inset-x-[-0.12em] bottom-[0.02em] top-[0.12em] -z-0 rounded-[3px] bg-voltage/25"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={transition}
                    style={{ originX: 0 }}
                />
                <span className="relative z-10">{children}</span>
            </span>
        );
    }

    return (
        <span className={cn("relative inline-block", className)}>
            <span className="relative z-10">{children}</span>
            <motion.span
                aria-hidden
                className="absolute -bottom-[0.04em] left-0 h-[0.09em] w-full bg-voltage"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={transition}
                style={{ originX: 0 }}
            />
        </span>
    );
};
