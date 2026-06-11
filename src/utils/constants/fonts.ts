import { Inter, DM_Sans, Cormorant, Playfair_Display } from "next/font/google";
import localFont from "next/font/local";

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

export const aeonik = localFont({
    src: [
        {
            path: "../../../public/fonts/AeonikPro-Light.woff2",
            weight: "300",
        },
        {
            path: "../../../public/fonts/AeonikPro-Regular.woff2",
            weight: "400",
        },
        {
            path: "../../../public/fonts/AeonikPro-Medium.woff2",
            weight: "500",
        },
        {
            path: "../../../public/fonts/AeonikPro-Bold.woff2",
            weight: "700",
        },
        {
            path: "../../../public/fonts/AeonikPro-Black.woff2",
            weight: "900",
        }
    ],
    variable: "--font-aeonik",
});

export const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});
