"use client";

import { cn } from "@/utils";
import { motion } from "framer-motion";
import * as React from "react";

export interface ScrollingItem {
    title: string;
    subtitle?: string;
    body?: string;
}

interface ScrollingColumnProps {
    items: ScrollingItem[];
    duration?: number;
    className?: string;
}

/**
 * A continuously scrolling vertical column of plain-text cards.
 * Inspired by the testimonials column pattern, but without avatars or names —
 * just the content. Renders each card twice so the marquee loops seamlessly.
 */
export const ScrollingColumn = ({
    items,
    duration = 22,
    className,
}: ScrollingColumnProps) => {
    return (
        <div className={className}>
            <motion.div
                animate={{ translateY: "-50%" }}
                transition={{
                    duration,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                }}
                className="flex flex-col gap-5 pb-5"
            >
                {[...Array(2)].map((_, copyIndex) => (
                    <React.Fragment key={copyIndex}>
                        {items.map((item, i) => (
                            <div
                                key={`${copyIndex}-${i}`}
                                className={cn(
                                    "p-6 rounded-[14px] border border-mist bg-linen",
                                    "max-w-xs w-full"
                                )}
                            >
                                {item.subtitle && (
                                    <p className="font-twk text-[11px] font-[350] uppercase tracking-[0.15em] text-sage">
                                        {item.subtitle}
                                    </p>
                                )}
                                <h3 className="mt-2 font-editorial text-[24px] font-[400] tracking-tight text-ink !leading-tight">
                                    {item.title}
                                </h3>
                                {item.body && (
                                    <p className="mt-3 font-twk text-[14px] font-[350] text-ink/70 leading-relaxed">
                                        {item.body}
                                    </p>
                                )}
                            </div>
                        ))}
                    </React.Fragment>
                ))}
            </motion.div>
        </div>
    );
};
