"use client";

import Lenis from "lenis";
import { useEffect } from "react";

/**
 * SmoothScroll — mounts a global Lenis instance for the buttery,
 * inertia-based scroll feel NewForm uses. Lenis drives real window
 * scroll, so framer-motion's useScroll / whileInView keep working.
 * Respects prefers-reduced-motion by skipping entirely.
 */
export const SmoothScroll = () => {
    useEffect(() => {
        if (
            typeof window !== "undefined" &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ) {
            return;
        }

        const lenis = new Lenis({
            duration: 1.1,
            easing: (t: number) => 1 - Math.pow(1 - t, 3),
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 1.6,
        });

        let raf = 0;
        const loop = (time: number) => {
            lenis.raf(time);
            raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);

        // Expose so the menu / anchor links can scroll smoothly too.
        (window as any).__lenis = lenis;

        return () => {
            cancelAnimationFrame(raf);
            lenis.destroy();
            (window as any).__lenis = undefined;
        };
    }, []);

    return null;
};
