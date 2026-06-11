"use client";

import { cn } from "@/utils";
import { motion } from "framer-motion";
import Image from "next/image";

interface Logo {
    name: string;
    src: string;
}

interface AnimatedLogosProps {
    logos: readonly Logo[];
    className?: string;
    /** Tailwind height class for each logo, e.g. "h-12 md:h-14" */
    size?: string;
}

/**
 * Continuously-scrolling logo marquee.
 *
 * Renders the logo list THREE times back-to-back and animates by exactly
 * one third (`-33.3333%`) of the container's width on each loop. Because the
 * scroll distance equals one full copy of the logos, the start and end of the
 * animation cycle land on visually identical frames — so the loop is seamless
 * with no empty space and no jump.
 */
export const AnimatedLogos = ({
    logos,
    className,
    size = "h-12 md:h-16",
}: AnimatedLogosProps) => {
    const allLogos = [...logos, ...logos, ...logos];

    return (
        <div
            className={cn(
                "relative w-full overflow-hidden",
                "[mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]",
                className
            )}
        >
            <motion.div
                className="flex w-max items-center gap-14 md:gap-24"
                animate={{ x: ["0%", "-33.3333%"] }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                }}
            >
                {allLogos.map((logo, i) => (
                    <div
                        key={i}
                        className="shrink-0 flex items-center justify-center"
                    >
                        <Image
                            src={logo.src}
                            alt={logo.name}
                            width={240}
                            height={120}
                            className={cn("w-auto object-contain", size)}
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};
