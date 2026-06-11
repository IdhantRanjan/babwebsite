import { cn } from "@/utils";

/* ------------------------------------------------------------------ *
 * WaveSeam — a single organic wave edge, NewForm's signature section
 * transition. `fill` is the colour that bleeds across the seam (the
 * colour of the section the wave belongs to). `flip` mirrors it
 * vertically so it can cap the top or the bottom of a band.
 * preserveAspectRatio="none" lets it stretch to any width.
 * ------------------------------------------------------------------ */
export const WaveSeam = ({
    fill,
    flip = false,
    className,
}: {
    fill: string;
    flip?: boolean;
    className?: string;
}) => (
    <svg
        aria-hidden
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className={cn(
            "pointer-events-none block w-full",
            flip && "rotate-180",
            className
        )}
    >
        {/* Smooth asymmetric wave. The shape fills everything ABOVE the
            curve, so the colour drips down into the section below. */}
        <path
            d="M0,0 L1440,0 L1440,70 C1230,118 1040,118 820,82 C600,46 360,30 0,74 Z"
            fill={fill}
        />
    </svg>
);

/* ------------------------------------------------------------------ *
 * WaveHill — a single centred crest (the footer rise). The coloured
 * mass sits BELOW the crest; the peak pokes up into the section above.
 * ------------------------------------------------------------------ */
export const WaveHill = ({
    fill,
    className,
}: {
    fill: string;
    className?: string;
}) => (
    <svg
        aria-hidden
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        className={cn("pointer-events-none block w-full", className)}
    >
        <path
            d="M0,160 L0,96 C300,96 470,2 720,2 C970,2 1140,96 1440,96 L1440,160 Z"
            fill={fill}
        />
    </svg>
);

/* ------------------------------------------------------------------ *
 * DarkSection — a full-bleed dark band capped top and bottom with
 * linen wave seams, so the page flows light → dark → light the way
 * NewForm alternates. Children render on the ink field.
 * ------------------------------------------------------------------ */
export const DarkSection = ({
    children,
    className,
    id,
    seamTop = true,
    seamBottom = true,
}: {
    children: React.ReactNode;
    className?: string;
    id?: string;
    seamTop?: boolean;
    seamBottom?: boolean;
}) => (
    <section id={id} className="relative bg-ink text-linen">
        {seamTop && (
            <WaveSeam
                fill="#f9fcff"
                className="absolute left-0 top-0 z-10 h-[clamp(48px,7vw,104px)] -translate-y-px"
            />
        )}
        <div
            className={cn(
                "relative z-0 mx-auto max-w-[1440px] px-6 md:px-[50px]",
                "pt-[clamp(96px,16vw,200px)] pb-[clamp(96px,16vw,200px)]",
                className
            )}
        >
            {children}
        </div>
        {seamBottom && (
            <WaveSeam
                fill="#f9fcff"
                flip
                className="absolute bottom-0 left-0 z-10 h-[clamp(48px,7vw,104px)] translate-y-px"
            />
        )}
    </section>
);
