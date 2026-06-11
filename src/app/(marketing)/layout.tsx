import React from "react";
import { Footer, Navbar } from "@/components";
import { ScrollProgress } from "@/components/ui/motion";
import { Preloader } from "@/components/ui/preloader";
import { SmoothScroll } from "@/components/ui/smooth-scroll";

interface Props {
    children: React.ReactNode;
}

const MarketingLayout = ({ children }: Props) => {
    return (
        <div className="bg-linen text-ink">
            <Preloader />
            <SmoothScroll />
            <ScrollProgress />
            <Navbar />
            <main className="w-full">{children}</main>
            <Footer />
        </div>
    );
};

export default MarketingLayout;
