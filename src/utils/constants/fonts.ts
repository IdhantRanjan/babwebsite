import { Inter, Manrope, Cormorant, Playfair_Display } from "next/font/google";

/* NewForm editorial overhaul — display serif substitutes.
   Editorial New  -> Cormorant (thin, literary serif at weight 300)
   PP Mondwest    -> Playfair Display (high-contrast, architectural serif) */
export const editorialNew = Cormorant({
    subsets: ["latin"],
    weight: ["300", "400", "500"],
    variable: "--font-editorial-new",
    display: "swap",
});

export const mondwest = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "500"],
    variable: "--font-pp-mondwest",
    display: "swap",
});

/* Body / UI grotesque. Aeonik Pro is proprietary, so we use Manrope —
   a free, OFL-licensed geometric grotesque with very similar proportions. */
export const grotesk = Manrope({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-grotesk",
    display: "swap",
});

export const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});
