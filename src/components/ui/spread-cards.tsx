"use client";

import { cn } from "@/utils";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import * as React from "react";

interface SpreadCardsProps {
    children: React.ReactNode;
    className?: string;
    /** Horizontal "stack" distance as a percentage of card width. Default 110. */
    spread?: number;
    /** Stagger window length, 0..1. Larger = more sequential. Default 0.55. */
    staggerWindow?: number;
}

interface CardItemProps {
    child: React.ReactNode;
    index: number;
    total: number;
    scrollYProgress: MotionValue<number>;
    spread: number;
    staggerWindow: number;
    enabled: boolean;
}

const CardItem = ({
    child,
    index,
    total,
    scrollYProgress,
    spread,
    staggerWindow,
    enabled,
}: CardItemProps) => {
    // Distance from center of the row, e.g. for 3 cards: -1, 0, 1.
    const center = (total - 1) / 2;
    const offset = index - center;

    // Each card animates within a staggered window of overall scroll progress.
    const span = 1 - staggerWindow; // total ramp space across all cards
    const start = total === 1 ? 0 : (index / (total - 1)) * span;
    const end = start + staggerWindow;

    const x = useTransform(
        scrollYProgress,
        [start, end],
        [`${-offset * spread}%`, "0%"]
    );
    const y = useTransform(scrollYProgress, [start, end], [40, 0]);
    const rotate = useTransform(
        scrollYProgress,
        [start, end],
        [-offset * 5, 0]
    );
    const scale = useTransform(scrollYProgress, [start, end], [0.9, 1]);
    const opacity = useTransform(
        scrollYProgress,
        [start, Math.min(end, start + staggerWindow * 0.6)],
        [0, 1]
    );

    if (!enabled) {
        return <div>{child}</div>;
    }

    return (
        <motion.div style={{ x, y, rotate, scale, opacity }}>{child}</motion.div>
    );
};

/**
 * A row of cards that start "stacked" toward the center and spread out into
 * their final grid positions as the row scrolls through the viewport.
 *
 * Pass children as the row content; this component should be given the grid
 * className (e.g. `grid grid-cols-3 gap-5`).
 */
export const SpreadCards = ({
    children,
    className,
    spread = 110,
    staggerWindow = 0.55,
}: SpreadCardsProps) => {
    const ref = React.useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 0.85", "end 0.35"],
    });

    const [enabled, setEnabled] = React.useState(false);
    React.useEffect(() => {
        const mq = window.matchMedia("(min-width: 768px)");
        const update = () => setEnabled(mq.matches);
        update();
        mq.addEventListener("change", update);
        return () => mq.removeEventListener("change", update);
    }, []);

    const items = React.Children.toArray(children);

    return (
        <div ref={ref} className={className}>
            {items.map((child, i) => (
                <CardItem
                    key={i}
                    child={child}
                    index={i}
                    total={items.length}
                    scrollYProgress={scrollYProgress}
                    spread={spread}
                    staggerWindow={staggerWindow}
                    enabled={enabled}
                />
            ))}
        </div>
    );
};
