"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { cn } from "@/utils";

interface ShufflePhotoGridProps {
    photos: readonly string[] | string[];
    interval?: number;
    className?: string;
}

const shuffle = <T,>(arr: T[]): T[] => {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
};

export function ShufflePhotoGrid({
    photos,
    interval = 2400,
    className,
}: ShufflePhotoGridProps) {
    const initial = React.useMemo(() => [...photos], [photos]);
    const [order, setOrder] = React.useState<string[]>(initial);

    React.useEffect(() => {
        const id = setInterval(() => {
            setOrder((prev) => shuffle(prev));
        }, interval);
        return () => clearInterval(id);
    }, [interval]);

    return (
        <div className={cn("grid grid-cols-3 gap-3", className)}>
            {order.map((src) => (
                <motion.div
                    key={src}
                    layout
                    transition={{
                        type: "spring",
                        stiffness: 110,
                        damping: 16,
                        mass: 0.9,
                    }}
                    className="relative aspect-square overflow-hidden rounded-2xl ring-1 ring-border bg-muted"
                >
                    <Image
                        src={src}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 33vw, 200px"
                        className="object-cover"
                    />
                </motion.div>
            ))}
        </div>
    );
}
