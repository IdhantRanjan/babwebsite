"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;
const DURATION = 2100;

/* Vertical wavy edge welded to the left of the curtain, so the peel
   sweeps across as an organic dark boundary (the NewForm reveal). */
const WaveEdge = () => (
    <svg
        aria-hidden
        viewBox="0 0 120 1080"
        preserveAspectRatio="none"
        className="absolute left-0 top-0 h-full w-[clamp(56px,8vw,120px)] -translate-x-[99%]"
    >
        <path
            d="M120,0 L120,1080 L62,1080 C18,840 104,690 70,540 C38,398 108,250 60,0 Z"
            fill="#10131a"
        />
    </svg>
);

export const Preloader = () => {
    const reduce = useReducedMotion();
    const [count, setCount] = useState(0);
    const [done, setDone] = useState(false);
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        let seen = false;
        try {
            seen = sessionStorage.getItem("bab-preloaded") === "1";
        } catch {
            /* sessionStorage unavailable — just run once */
        }

        if (seen || reduce) {
            setHidden(true);
            return;
        }

        document.body.style.overflow = "hidden";
        const start = Date.now();

        // Counter is cosmetic; setInterval keyed off real elapsed time so it
        // stays correct even if the tab throttles timers.
        const id = setInterval(() => {
            const p = Math.min(1, (Date.now() - start) / DURATION);
            setCount(Math.round((1 - Math.pow(1 - p, 2.4)) * 100));
            if (p >= 1) clearInterval(id);
        }, 32);

        // Completion is driven by ONE guaranteed timeout — never by rAF or by
        // the interval reaching its end — so the curtain always lifts.
        const finish = setTimeout(() => setDone(true), DURATION + 260);

        return () => {
            clearInterval(id);
            clearTimeout(finish);
        };
    }, [reduce]);

    useEffect(() => {
        if (!done) return;
        try {
            sessionStorage.setItem("bab-preloaded", "1");
        } catch {
            /* ignore */
        }
        const t = setTimeout(() => {
            document.body.style.overflow = "";
            setHidden(true);
        }, 1100);
        return () => clearTimeout(t);
    }, [done]);

    if (hidden) return null;

    return (
        <motion.div
            initial={{ x: 0 }}
            animate={done ? { x: "118%" } : { x: 0 }}
            transition={{ duration: 1.05, ease: EASE }}
            // Inline position/inset/z are intentional: critical full-screen
            // coverage must never depend on a utility class being generated.
            style={{ position: "fixed", inset: 0, zIndex: 200 }}
            className="overflow-hidden bg-ink text-linen"
        >
            <WaveEdge />

            {/* Counter */}
            <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ position: "absolute", inset: 0 }}
            >
                <div className="flex items-end">
                    <span className="font-twk text-[clamp(72px,15vw,200px)] font-[600] leading-[0.8] tracking-[-0.04em] tabular-nums text-linen">
                        {count}%
                    </span>
                    <motion.span
                        aria-hidden
                        animate={{ opacity: [1, 1, 0.15, 0.15, 1] }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="mb-[0.18em] ml-2 inline-block h-[0.12em] w-[clamp(28px,4vw,64px)] bg-voltage"
                    />
                </div>
            </div>

            {/* Loading marquee */}
            <div className="absolute bottom-7 left-0 w-full overflow-hidden">
                <motion.div
                    className="flex w-max items-center whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                >
                    {Array.from({ length: 16 }).map((_, i) => (
                        <span
                            key={i}
                            className="mx-6 font-mondwest text-[18px] italic text-linen/25"
                        >
                            Loading…
                        </span>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};
