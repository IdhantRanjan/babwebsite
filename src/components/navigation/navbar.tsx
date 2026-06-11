"use client";

import { APP_CONTACT_EMAIL, APP_LOCATION, cn } from "@/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface MenuItem {
    label: string;
    href: string;
    tag: string;
}

const OFFER: MenuItem = {
    label: "What We Offer",
    href: "/programs",
    tag: "Camps, workshops & community sessions",
};

const COURSE_ITEM: MenuItem = {
    label: "The Course",
    href: "/course",
    tag: "27 self-paced modules, free",
};

const ARCHIVES: MenuItem[] = [
    { label: "YMCA", href: "/ymca", tag: "Our recurring program with the YMCA" },
    { label: "Alive Center", href: "/alive-center", tag: "Across all three Alive Center sites" },
    { label: "Xilin Association", href: "/xilin", tag: "With the Xilin community" },
    { label: "Zambia", href: "/zambia", tag: "Financial literacy across the globe" },
];

const ABOUT: MenuItem[] = [
    { label: "Mission & Impact", href: "/about", tag: "Who we are and the numbers behind it" },
    { label: "Media", href: "/media", tag: "Photos, press, and event highlights" },
];

// Programs dropdown — offerings + archives only. The Course lives on its own
// in the navbar, so it is intentionally NOT nested here.
const PROGRAMS_MENU: MenuItem[] = [OFFER, ...ARCHIVES];

/* Full-screen overlay index, grouped by section. Course sits under "Learn",
   never under Programs. */
const GROUPS: { label: string; items: MenuItem[] }[] = [
    { label: "Programs", items: [OFFER, ...ARCHIVES] },
    { label: "Learn", items: [COURSE_ITEM] },
    { label: "Organization", items: ABOUT },
];

const EASE = [0.22, 1, 0.36, 1] as const;

/* Animated voltage equalizer bars (the menu glyph). */
const EqualizerBars = ({ active = false }: { active?: boolean }) => {
    const bars = [
        { h: 9, d: 0 },
        { h: 16, d: 0.18 },
        { h: 12, d: 0.36 },
    ];
    return (
        <span className="flex h-[16px] items-center gap-[3px]" aria-hidden>
            {bars.map((b, i) => (
                <motion.span
                    key={i}
                    className="block w-[2.5px] rounded-full bg-voltage"
                    style={{ height: b.h }}
                    animate={active ? { scaleY: [1, 1.7, 0.7, 1.3, 1] } : { scaleY: 1 }}
                    transition={{
                        duration: 1.1,
                        repeat: active ? Infinity : 0,
                        ease: "easeInOut",
                        delay: b.d,
                    }}
                />
            ))}
        </span>
    );
};

const Wordmark = ({
    onClick,
    light = false,
}: {
    onClick?: () => void;
    light?: boolean;
}) => (
    <Link
        href="/"
        onClick={onClick}
        className="flex items-center gap-2.5"
        aria-label="Build-A-Biz home"
    >
        <Image
            src="/logo.png"
            alt=""
            width={80}
            height={80}
            priority
            className="h-9 w-9 shrink-0 object-contain"
        />
        <span className="font-editorial text-[26px] font-[500] leading-none tracking-[-0.01em]">
            <span className={light ? "text-linen" : "text-ink"}>Build-A-</span>
            <span className="text-voltage">Biz</span>
        </span>
    </Link>
);

/* Desktop hover dropdown. */
const Dropdown = ({
    label,
    items,
    open,
    setOpen,
    pathname,
}: {
    label: string;
    items: MenuItem[];
    open: boolean;
    setOpen: (v: boolean) => void;
    pathname: string;
}) => {
    const active = items.some((i) => i.href === pathname);
    return (
        <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            <button
                className="group flex items-center gap-1.5 py-2 font-twk text-[14px] font-[400] text-ink"
                aria-expanded={open}
            >
                <span className="relative">
                    {label}
                    <span
                        className={cn(
                            "absolute -bottom-0.5 left-0 h-px w-full origin-left bg-voltage transition-transform duration-300",
                            open || active ? "scale-x-100" : "scale-x-0"
                        )}
                    />
                </span>
                <span
                    aria-hidden
                    className={cn(
                        "text-[10px] text-sage transition-transform duration-300",
                        open && "rotate-180"
                    )}
                >
                    ▾
                </span>
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.22, ease: EASE }}
                        className="absolute left-0 top-full z-50 w-[340px] pt-3"
                    >
                        <div className="rounded-[16px] border border-mist bg-linen p-2 shadow-voltage">
                            {items.map((item, i) => {
                                const isActive = item.href === pathname;
                                return (
                                    <motion.div
                                        key={item.href}
                                        initial={{ opacity: 0, y: 6 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            delay: 0.03 * i + 0.05,
                                            duration: 0.3,
                                            ease: EASE,
                                        }}
                                    >
                                        <Link
                                            href={item.href}
                                            className={cn(
                                                "group flex items-baseline gap-3 rounded-[10px] px-3 py-3 transition-colors hover:bg-mist/30",
                                                isActive && "bg-mist/25"
                                            )}
                                        >
                                            <span className="mt-[6px] h-[2px] w-[14px] shrink-0 bg-voltage opacity-0 transition-opacity group-hover:opacity-100" />
                                            <span>
                                                <span className="block font-editorial text-[20px] font-[400] leading-[1.1] text-ink">
                                                    {item.label}
                                                </span>
                                                <span className="mt-0.5 block font-twk text-[12px] font-[350] leading-[1.4] text-sage">
                                                    {item.tag}
                                                </span>
                                            </span>
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [menu, setMenu] = useState<string | null>(null);
    const [menuHover, setMenuHover] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname() ?? "/";

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <header
                className={cn(
                    "sticky top-0 z-50 w-full border-b backdrop-blur-xl backdrop-saturate-150 transition-all duration-300",
                    scrolled
                        ? "border-white/50 bg-linen/75 shadow-[0_8px_30px_rgba(16,19,26,0.07)]"
                        : "border-white/30 bg-linen/55"
                )}
            >
            <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-6 md:px-[50px]">
                <Wordmark />

                <nav className="hidden items-center gap-9 lg:flex">
                    <Dropdown
                        label="Programs"
                        items={PROGRAMS_MENU}
                        open={menu === "programs"}
                        setOpen={(v) => setMenu(v ? "programs" : null)}
                        pathname={pathname}
                    />
                    <Link
                        href="/course"
                        className="group py-2 font-twk text-[14px] font-[400] text-ink"
                    >
                        <span className="relative">
                            Course
                            <span
                                className={cn(
                                    "absolute -bottom-0.5 left-0 h-px w-full origin-left bg-voltage transition-transform duration-300",
                                    pathname === "/course"
                                        ? "scale-x-100"
                                        : "scale-x-0 group-hover:scale-x-100"
                                )}
                            />
                        </span>
                    </Link>
                    <Dropdown
                        label="About"
                        items={ABOUT}
                        open={menu === "about"}
                        setOpen={(v) => setMenu(v ? "about" : null)}
                        pathname={pathname}
                    />
                </nav>

                <button
                    onClick={() => setOpen(true)}
                    onMouseEnter={() => setMenuHover(true)}
                    onMouseLeave={() => setMenuHover(false)}
                    className="flex items-center gap-2.5"
                    aria-label="Open menu"
                >
                    <span className="font-twk text-[14px] font-[400] text-ink">Menu</span>
                    <EqualizerBars active={menuHover || open} />
                </button>
            </div>
            </header>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: EASE }}
                        className="fixed inset-0 z-[120] flex flex-col bg-ink text-linen"
                    >
                        {/* Overlay header */}
                        <div className="mx-auto flex h-16 w-full max-w-[1440px] shrink-0 items-center justify-between px-6 md:px-[50px]">
                            <Wordmark light onClick={() => setOpen(false)} />
                            <button
                                onClick={() => setOpen(false)}
                                className="group flex items-center gap-2.5"
                                aria-label="Close menu"
                            >
                                <span className="font-twk text-[14px] font-[400] text-linen">
                                    Close
                                </span>
                                <span className="text-[22px] leading-none text-voltage transition-transform duration-300 group-hover:rotate-90">
                                    ×
                                </span>
                            </button>
                        </div>

                        {/* Directory */}
                        <nav className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-center px-6 md:px-[50px] py-10">
                            <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-3">
                                {GROUPS.map((group, gi) => (
                                    <div key={group.label}>
                                        <motion.p
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{
                                                delay: 0.06 * gi + 0.05,
                                                duration: 0.4,
                                                ease: EASE,
                                            }}
                                            className="font-twk text-[11px] uppercase tracking-[0.2em] text-moss"
                                        >
                                            {group.label}
                                        </motion.p>
                                        <ul className="mt-5">
                                            {group.items.map((l, i) => {
                                                const isActive = l.href === pathname;
                                                return (
                                                    <motion.li
                                                        key={l.href}
                                                        initial={{ opacity: 0, y: 18 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{
                                                            delay: 0.04 * i + 0.08 * gi + 0.1,
                                                            duration: 0.45,
                                                            ease: EASE,
                                                        }}
                                                    >
                                                        <Link
                                                            href={l.href}
                                                            onClick={() => setOpen(false)}
                                                            className="group flex items-baseline gap-3 border-b border-bark py-4"
                                                        >
                                                            <span
                                                                className={cn(
                                                                    "font-editorial text-[30px] md:text-[40px] font-[300] leading-[1.05] transition-colors",
                                                                    isActive
                                                                        ? "text-voltage"
                                                                        : "text-linen group-hover:text-moss"
                                                                )}
                                                            >
                                                                {l.label}
                                                            </span>
                                                            <span className="h-[2px] w-[18px] translate-y-[-8px] bg-voltage opacity-0 transition-opacity group-hover:opacity-100" />
                                                        </Link>
                                                    </motion.li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                ))}
                            </div>

                            {/* Overlay footer */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.35, duration: 0.5 }}
                                className="mt-16 flex flex-col gap-4 border-t border-bark pt-8 md:flex-row md:items-center md:justify-between"
                            >
                                <a
                                    href={`mailto:${APP_CONTACT_EMAIL}`}
                                    className="font-mondwest text-[20px] italic text-linen transition-colors hover:text-voltage"
                                >
                                    {APP_CONTACT_EMAIL}
                                </a>
                                <p className="font-twk text-[11px] uppercase tracking-[0.16em] text-linen/40">
                                    {APP_LOCATION} · 501(c)(3) nonprofit
                                </p>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
