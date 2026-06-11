"use client";

import { cn } from "@/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import * as React from "react";

interface CyclingGalleryProps {
    photos: readonly string[] | string[];
    /** Auto-cycle interval in ms. */
    interval?: number;
    /** Show thumbnail strip below the main image. */
    showThumbnails?: boolean;
    /** Aspect ratio class for the main image. */
    aspectClass?: string;
    className?: string;
}

export function CyclingGallery({
    photos,
    interval = 3800,
    showThumbnails = true,
    aspectClass = "aspect-[16/10]",
    className,
}: CyclingGalleryProps) {
    const [index, setIndex] = React.useState(0);
    const [paused, setPaused] = React.useState(false);
    const total = photos.length;

    const advance = React.useCallback(
        (delta: number) => {
            setIndex((prev) => (prev + delta + total) % total);
        },
        [total]
    );

    React.useEffect(() => {
        if (paused || total <= 1) return;
        const id = setInterval(() => advance(1), interval);
        return () => clearInterval(id);
    }, [interval, advance, paused, total]);

    // Briefly pause auto-cycle on manual navigation
    const handleNav = (delta: number) => {
        advance(delta);
        setPaused(true);
        window.setTimeout(() => setPaused(false), 6000);
    };

    return (
        <div className={cn("w-full", className)}>
            {/* Main image */}
            <div
                className={cn(
                    "relative w-full overflow-hidden rounded-[14px] bg-bark group",
                    aspectClass
                )}
            >
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 1.04 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.99 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={photos[index]}
                            alt=""
                            fill
                            sizes="(max-width: 768px) 100vw, 900px"
                            className="object-cover"
                            quality={90}
                            priority={index === 0}
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Arrow controls */}
                {total > 1 && (
                    <>
                        <button
                            type="button"
                            onClick={() => handleNav(-1)}
                            aria-label="Previous photo"
                            className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 z-10 inline-flex size-10 md:size-11 items-center justify-center rounded-full bg-linen/85 backdrop-blur text-ink hover:bg-voltage transition-colors"
                        >
                            <ChevronLeftIcon className="size-5" />
                        </button>
                        <button
                            type="button"
                            onClick={() => handleNav(1)}
                            aria-label="Next photo"
                            className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 z-10 inline-flex size-10 md:size-11 items-center justify-center rounded-full bg-linen/85 backdrop-blur text-ink hover:bg-voltage transition-colors"
                        >
                            <ChevronRightIcon className="size-5" />
                        </button>

                        {/* Counter pill */}
                        <div className="absolute bottom-3 right-3 z-10 rounded-full bg-ink/70 backdrop-blur px-3 py-1 font-twk text-[11px] font-[350] text-linen tabular-nums">
                            {index + 1} / {total}
                        </div>
                    </>
                )}
            </div>

            {/* Thumbnail strip */}
            {showThumbnails && total > 1 && (
                <div className="mt-4 flex flex-wrap justify-center gap-2.5">
                    {photos.map((src, i) => (
                        <button
                            key={`${src}-${i}`}
                            onClick={() => {
                                setIndex(i);
                                setPaused(true);
                                window.setTimeout(() => setPaused(false), 6000);
                            }}
                            aria-label={`View photo ${i + 1}`}
                            className={cn(
                                "relative size-14 md:size-16 overflow-hidden rounded-[8px] transition-all",
                                i === index
                                    ? "ring-2 ring-voltage"
                                    : "opacity-50 hover:opacity-100"
                            )}
                        >
                            <Image
                                src={src}
                                alt=""
                                fill
                                sizes="64px"
                                className="object-cover"
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
