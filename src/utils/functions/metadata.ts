import { Metadata } from "next";

export const generateMetadata = ({
    title = "Build-A-Biz, Empowering the next generation of entrepreneurs",
    description = "Build-A-Biz is a Naperville-based nonprofit empowering students with hands-on financial literacy and entrepreneurship through free camps, workshops, and accredited courses.",
    image = "/logo.png",
    icons = [
        {
            rel: "icon",
            url: "/logo.png",
        },
        {
            rel: "apple-touch-icon",
            url: "/logo.png",
        },
    ],
    noIndex = false,
}: {
    title?: string;
    description?: string;
    image?: string | null;
    icons?: Metadata["icons"];
    noIndex?: boolean;
} = {}): Metadata => ({
    title,
    description,
    icons,
    openGraph: {
        title,
        description,
        ...(image && { images: [{ url: image }] }),
    },
    twitter: {
        title,
        description,
        ...(image && { card: "summary_large_image", images: [image] }),
    },
    ...(noIndex && { robots: { index: false, follow: false } }),
});
