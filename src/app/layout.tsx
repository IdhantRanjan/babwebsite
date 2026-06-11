import { Toaster } from "@/components/ui/sonner";
import "@/styles/globals.css";
import { aeonik, cn, generateMetadata, inter, editorialNew, mondwest } from "@/utils";

export const metadata = generateMetadata();

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scrollbar">
            <body
                className={cn(
                    "min-h-screen bg-background text-foreground antialiased !font-default overflow-x-hidden",
                    aeonik.variable,
                    inter.variable,
                    editorialNew.variable,
                    mondwest.variable,
                )}
            >
                <Toaster richColors theme="light" position="top-right" />
                {children}
            </body>
        </html>
    );
}
