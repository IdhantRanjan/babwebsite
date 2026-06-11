"use client";

import { cn } from "@/utils";
import {
    animate,
    motion,
    useAnimationFrame,
    useInView,
    useMotionValue,
    useReducedMotion,
    useScroll,
    useSpring,
    useTransform,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

const MotionLink = motion.create(Link);

/* ------------------------------------------------------------------ *
 * RevealLines — the signature NewForm move.
 * Each line sits in an overflow-hidden frame and slides up from below
 * with a stagger. Use immediate for hero (animates on mount), otherwise
 * it triggers when scrolled into view.
 * ------------------------------------------------------------------ */
export const RevealLines = ({
    lines,
    className,
    lineClassName,
    immediate = false,
    delay = 0,
    stagger = 0.09,
    as: Tag = "h1",
}: {
    lines: string[];
    className?: string;
    lineClassName?: string;
    immediate?: boolean;
    delay?: number;
    stagger?: number;
    as?: keyof JSX.IntrinsicElements;
}) => {
    const reduce = useReducedMotion();
    const ref = React.useRef<HTMLElement>(null);
    // Single IntersectionObserver on the block-level heading. Observing each
    // clipped inline line span individually (framer's whileInView) proved
    // unreliable — the observer never fired and lines stuck mid-reveal.
    const inView = useInView(ref, { once: true, margin: "-12% 0px" });
    const show = immediate || inView || reduce;
    const Comp = Tag as any;

    return (
        <Comp ref={ref} className={className}>
            {lines.map((line, i) => (
                <span key={i} className="block overflow-hidden pb-[0.06em]">
                    <motion.span
                        className={cn("block", lineClassName)}
                        initial={reduce ? { opacity: 1 } : { y: "112%" }}
                        animate={show ? { y: "0%", opacity: 1 } : { y: "112%" }}
                        transition={{
                            duration: 0.9,
                            ease: EASE,
                            delay: delay + i * stagger,
                        }}
                    >
                        {line}
                    </motion.span>
                </span>
            ))}
        </Comp>
    );
};

/* ------------------------------------------------------------------ *
 * Reveal — fade + lift wrapper (general purpose).
 * ------------------------------------------------------------------ */
export const Reveal = ({
    children,
    delay = 0,
    y = 26,
    className,
}: {
    children: React.ReactNode;
    delay?: number;
    y?: number;
    className?: string;
}) => {
    const reduce = useReducedMotion();
    return (
        <motion.div
            initial={reduce ? { opacity: 1 } : { opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE, delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

/* ------------------------------------------------------------------ *
 * Marquee — infinite horizontal ticker. Items separated by a blue tick.
 * ------------------------------------------------------------------ */
export const Marquee = ({
    items,
    className,
    duration = 32,
    reverse = false,
}: {
    items: string[];
    className?: string;
    duration?: number;
    reverse?: boolean;
}) => {
    const run = [...items, ...items];
    return (
        <div
            className={cn(
                "relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]",
                className
            )}
        >
            <motion.div
                className="flex w-max items-center"
                animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
                transition={{ duration, repeat: Infinity, ease: "linear" }}
            >
                {run.map((item, i) => (
                    <span key={i} className="flex items-center">
                        <span className="font-mondwest text-[clamp(28px,4.4vw,60px)] font-[400] leading-none tracking-tight text-ink">
                            {item}
                        </span>
                        <span
                            aria-hidden
                            className="mx-6 inline-block h-[2px] w-[44px] shrink-0 bg-voltage md:mx-10"
                        />
                    </span>
                ))}
            </motion.div>
        </div>
    );
};

/* ------------------------------------------------------------------ *
 * DualMarquee — two ribbons scrolling in opposite directions, with B&W
 * image tiles woven between phrases and contrasting type per row
 * (serif on top, pixel-serif below). NewForm's "Wall Street Capitalism /
 * Running on Blockchain Rails" band, rebuilt for Build-A-Biz.
 * ------------------------------------------------------------------ */
const RibbonImg = ({ src }: { src: string }) => (
    // Inline styles guarantee the fill image stays boxed even if a utility
    // class fails to generate — a fill image with no positioned, sized parent
    // escapes to fill the viewport.
    <span
        className="relative mx-5 inline-block shrink-0 overflow-hidden rounded-[8px] bg-bark align-middle md:mx-7"
        style={{
            position: "relative",
            display: "inline-block",
            overflow: "hidden",
            height: "clamp(38px, 5vw, 68px)",
            width: "clamp(76px, 11vw, 144px)",
        }}
    >
        <Image
            src={src}
            alt=""
            fill
            sizes="160px"
            className="object-cover"
        />
    </span>
);

const Ribbon = ({
    phrases,
    images,
    reverse = false,
    fontClass,
    duration = 42,
}: {
    phrases: string[];
    images: string[];
    reverse?: boolean;
    fontClass: string;
    duration?: number;
}) => {
    const reduce = useReducedMotion();
    const seq: { t: "p" | "i"; v: string }[] = [];
    phrases.forEach((p, i) => {
        seq.push({ t: "p", v: p });
        const img = images[i % images.length];
        if (img) seq.push({ t: "i", v: img });
    });
    const run = [...seq, ...seq];

    const trackRef = React.useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const half = React.useRef(0); // width of one (un-doubled) copy
    const speed = React.useRef(0); // current px/s, eased toward target
    const target = React.useRef(0); // desired px/s
    const scale = useSpring(1, { stiffness: 140, damping: 22 });
    const [origin, setOrigin] = React.useState("50% 50%");

    const baseSpeed = () => (half.current > 0 ? half.current / duration : 0);

    React.useEffect(() => {
        const measure = () => {
            if (!trackRef.current) return;
            half.current = trackRef.current.scrollWidth / 2;
            speed.current = baseSpeed();
            target.current = baseSpeed();
        };
        measure();
        const ro = new ResizeObserver(measure);
        if (trackRef.current) ro.observe(trackRef.current);
        return () => ro.disconnect();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [duration]);

    useAnimationFrame((_, delta) => {
        if (reduce || half.current === 0) return;
        // Ease the speed toward its target so hover slow-downs feel smooth.
        speed.current += (target.current - speed.current) * Math.min(1, delta / 220);
        const dir = reverse ? 1 : -1;
        let next = x.get() + dir * speed.current * (delta / 1000);
        const hw = half.current;
        if (next <= -hw) next += hw;
        else if (next >= 0) next -= hw;
        x.set(next);
    });

    return (
        <div
            className="relative w-full cursor-default overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
            onMouseEnter={() => {
                target.current = baseSpeed() * 0.14; // slow to a crawl
                scale.set(1.08);
            }}
            onMouseLeave={() => {
                target.current = baseSpeed();
                scale.set(1);
                setOrigin("50% 50%");
            }}
            onMouseMove={(e) => {
                // Zoom toward the cursor: map pointer into the track's own box.
                if (!trackRef.current) return;
                const r = trackRef.current.getBoundingClientRect();
                if (r.width === 0) return;
                const px = ((e.clientX - r.left) / r.width) * 100;
                setOrigin(`${px}% 50%`);
            }}
        >
            <motion.div
                ref={trackRef}
                className="flex w-max items-center"
                style={{ x, scale, transformOrigin: origin }}
            >
                {run.map((it, idx) =>
                    it.t === "p" ? (
                        <span key={idx} className="flex items-center">
                            <span className={fontClass}>{it.v}</span>
                            <span
                                aria-hidden
                                className="mx-5 inline-block h-[2px] w-[36px] shrink-0 bg-voltage md:mx-8 md:w-[44px]"
                            />
                        </span>
                    ) : (
                        <RibbonImg key={idx} src={it.v} />
                    )
                )}
            </motion.div>
        </div>
    );
};

export const DualMarquee = ({
    rowA,
    rowB,
    images,
    className,
}: {
    rowA: string[];
    rowB: string[];
    images: string[];
    className?: string;
}) => (
    <div className={cn("flex flex-col gap-4 md:gap-6", className)}>
        <Ribbon
            phrases={rowA}
            images={images}
            fontClass="font-editorial text-[clamp(30px,5vw,66px)] font-[300] leading-none tracking-tight text-ink"
        />
        <Ribbon
            phrases={rowB}
            images={[...images].reverse()}
            reverse
            duration={48}
            fontClass="font-mondwest text-[clamp(28px,4.6vw,58px)] font-[400] leading-none tracking-tight text-ink"
        />
    </div>
);

/* ------------------------------------------------------------------ *
 * ScrollCue — a "Scroll" label beside a thin track with a voltage
 * segment travelling downward. Sits at the foot of the hero.
 * ------------------------------------------------------------------ */
export const ScrollCue = ({
    label = "Scroll",
    className,
}: {
    label?: string;
    className?: string;
}) => {
    const reduce = useReducedMotion();
    return (
        <div className={cn("flex items-center gap-3", className)}>
            <span className="font-twk text-[11px] uppercase tracking-[0.18em] text-sage">
                {label}
            </span>
            <span className="relative block h-9 w-px overflow-hidden bg-mist">
                <motion.span
                    className="absolute inset-x-0 top-0 h-1/2 bg-voltage"
                    animate={reduce ? {} : { y: ["-100%", "200%"] }}
                    transition={{
                        duration: 1.7,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </span>
        </div>
    );
};

/* ------------------------------------------------------------------ *
 * Parallax — subtle vertical drift as the element passes the viewport.
 * ------------------------------------------------------------------ */
export const Parallax = ({
    children,
    className,
    distance = 60,
}: {
    children: React.ReactNode;
    className?: string;
    distance?: number;
}) => {
    const ref = React.useRef<HTMLDivElement>(null);
    const reduce = useReducedMotion();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const y = useTransform(
        scrollYProgress,
        [0, 1],
        reduce ? [0, 0] : [distance, -distance]
    );
    return (
        <div ref={ref} className={className}>
            <motion.div style={{ y }} className="h-full w-full">
                {children}
            </motion.div>
        </div>
    );
};

/* ------------------------------------------------------------------ *
 * RevealImage — clip-path inset wipe + slow zoom-out on enter.
 * ------------------------------------------------------------------ */
export const RevealImage = ({
    children,
    className,
    delay = 0,
    immediate = false,
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    /** Animate on mount instead of on scroll — use for above-the-fold images. */
    immediate?: boolean;
}) => {
    const reduce = useReducedMotion();
    const reveal = immediate
        ? { animate: { clipPath: "inset(0% 0% 0% 0%)" } }
        : {
              whileInView: { clipPath: "inset(0% 0% 0% 0%)" },
              viewport: { once: true, margin: "-10%" } as const,
          };
    const zoom = immediate
        ? { animate: { scale: 1 } }
        : {
              whileInView: { scale: 1 },
              viewport: { once: true, margin: "-10%" } as const,
          };
    return (
        <motion.div
            className={cn("overflow-hidden", className)}
            initial={reduce ? {} : { clipPath: "inset(100% 0% 0% 0%)" }}
            {...reveal}
            transition={{ duration: 1, ease: EASE, delay }}
        >
            <motion.div
                initial={reduce ? {} : { scale: 1.16 }}
                {...zoom}
                transition={{ duration: 1.2, ease: EASE, delay }}
                className="h-full w-full"
            >
                {children}
            </motion.div>
        </motion.div>
    );
};

/* ------------------------------------------------------------------ *
 * ScrollProgress — thin azure bar pinned to the very top of the page.
 * ------------------------------------------------------------------ */
export const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 30,
        restDelta: 0.001,
    });
    return (
        <motion.div
            style={{ scaleX }}
            className="fixed left-0 top-0 z-[100] h-[2px] w-full origin-left bg-voltage"
        />
    );
};

/* ------------------------------------------------------------------ *
 * MagneticButton — the filled CTA drifts toward the cursor on hover.
 * Renders a next/link. Used by VoltageCTA.
 * ------------------------------------------------------------------ */
export const MagneticButton = ({
    href,
    children,
    className,
    target,
    rel,
    strength = 0.4,
}: {
    href: string;
    children: React.ReactNode;
    className?: string;
    target?: string;
    rel?: string;
    strength?: number;
}) => {
    const ref = React.useRef<HTMLAnchorElement>(null);
    const reduce = useReducedMotion();
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const sx = useSpring(x, { stiffness: 180, damping: 14 });
    const sy = useSpring(y, { stiffness: 180, damping: 14 });

    const onMove = (e: React.MouseEvent) => {
        if (reduce || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * strength);
        y.set((e.clientY - (r.top + r.height / 2)) * strength);
    };
    const reset = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <MotionLink
            ref={ref}
            href={href}
            target={target}
            rel={rel}
            onMouseMove={onMove}
            onMouseLeave={reset}
            style={{ x: sx, y: sy }}
            className={className}
        >
            {children}
        </MotionLink>
    );
};

/* ------------------------------------------------------------------ *
 * CountUp — animates the numeric part of a stat when scrolled into view.
 * Handles prefixes ($), grouping commas, and suffixes (+, %, k).
 * ------------------------------------------------------------------ */
export const CountUp = ({
    value,
    className,
    duration = 1.6,
}: {
    value: string;
    className?: string;
    duration?: number;
}) => {
    const ref = React.useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });
    const reduce = useReducedMotion();
    const match = value.match(/^(\D*)([\d,]+)(.*)$/);

    const [display, setDisplay] = React.useState(() =>
        match && !reduce ? `${match[1]}0${match[3]}` : value
    );

    React.useEffect(() => {
        if (!inView || !match || reduce) {
            if (reduce) setDisplay(value);
            return;
        }
        const prefix = match[1];
        const target = parseInt(match[2].replace(/,/g, ""), 10);
        const suffix = match[3];
        const controls = animate(0, target, {
            duration,
            ease: EASE,
            onUpdate: (v) => {
                setDisplay(
                    `${prefix}${Math.round(v).toLocaleString()}${suffix}`
                );
            },
        });
        return () => controls.stop();
    }, [inView, reduce]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <span ref={ref} className={className}>
            {display}
        </span>
    );
};
