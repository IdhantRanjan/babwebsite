import Link from "next/link";
import { APP_CONTACT_EMAIL, APP_LOCATION, APP_NAME } from "@/utils";
import { VoltageCTA } from "@/components/ui/editorial";
import { WaveHill } from "@/components/ui/wavy";

const COLUMNS = [
    {
        title: "Programs",
        links: [
            { label: "What We Offer", href: "/programs" },
            { label: "Camps", href: "/programs#camps" },
            { label: "Workshops", href: "/programs#workshops" },
            { label: "The Course", href: "/course" },
        ],
    },
    {
        title: "Archives",
        links: [
            { label: "YMCA", href: "/ymca" },
            { label: "Alive Center", href: "/alive-center" },
            { label: "Xilin Association", href: "/xilin" },
            { label: "Zambia", href: "/zambia" },
        ],
    },
    {
        title: "Organization",
        links: [
            { label: "Mission & Impact", href: "/about" },
            { label: "Media", href: "/media" },
            { label: "Contact", href: "/about#contact" },
        ],
    },
];

/* Wavy voltage glyph — the signature mark at the foot of the page. */
const WavyMark = () => (
    <svg
        aria-hidden
        viewBox="0 0 72 52"
        fill="none"
        className="h-[52px] w-[72px]"
    >
        <path
            d="M22 4C12 12 30 18 20 26C10 34 28 40 18 48"
            stroke="#1e9fff"
            strokeWidth="4"
            strokeLinecap="round"
        />
        <path
            d="M52 4C42 12 60 18 50 26C40 34 58 40 48 48"
            stroke="#1e9fff"
            strokeWidth="4"
            strokeLinecap="round"
        />
    </svg>
);

const Footer = () => {
    return (
        <footer className="relative bg-ink text-linen">
            {/* Wavy rise out of the section above. Kept low so the crest
                clears the last text/images on every page. */}
            <WaveHill
                fill="#10131a"
                className="absolute left-0 top-0 h-[clamp(40px,6vw,96px)] -translate-y-[52%]"
            />

            <div className="relative mx-auto max-w-[1440px] px-6 md:px-[50px] pt-[clamp(88px,12vw,168px)] pb-16 md:pb-24">
                {/* CTA statement */}
                <div className="max-w-4xl">
                    <span className="block h-[2px] w-[52px] bg-voltage" />
                    <h2 className="mt-8 font-editorial text-[44px] md:text-[96px] font-[300] leading-[0.92] tracking-tight text-linen">
                        Money is a language. We teach the next generation to speak it.
                    </h2>
                    <div className="mt-10">
                        <VoltageCTA
                            href={`mailto:${APP_CONTACT_EMAIL}?subject=Build-A-Biz`}
                            onDark
                        >
                            Get in touch
                        </VoltageCTA>
                    </div>
                </div>

                {/* Link columns */}
                <div className="mt-20 grid grid-cols-2 gap-10 md:grid-cols-4">
                    <div>
                        <p className="font-twk text-[15px] font-[550]">
                            <span className="text-linen">Build-A-</span>
                            <span className="text-voltage">Biz</span>
                        </p>
                        <p className="mt-4 max-w-[220px] font-twk text-[14px] font-[350] leading-[1.5] text-linen/55">
                            A student-led nonprofit teaching financial literacy and
                            entrepreneurship, completely free.
                        </p>
                    </div>

                    {COLUMNS.map((col) => (
                        <div key={col.title}>
                            <p className="font-twk text-[11px] uppercase tracking-[0.18em] text-moss">
                                {col.title}
                            </p>
                            <ul className="mt-5 space-y-3">
                                {col.links.map((l) => (
                                    <li key={l.href}>
                                        <Link
                                            href={l.href}
                                            className="font-twk text-[14px] font-[350] text-linen/75 transition-colors hover:text-linen hover:underline underline-offset-4"
                                        >
                                            {l.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom row */}
                <div className="mt-16 flex flex-col gap-6 border-t border-bark pt-8 md:flex-row md:items-center md:justify-between">
                    <WavyMark />
                    <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-8">
                        <p className="font-twk text-[11px] uppercase tracking-[0.14em] text-linen/40">
                            © {new Date().getFullYear()} {APP_NAME} · 501(c)(3) nonprofit
                        </p>
                        <p className="font-twk text-[11px] uppercase tracking-[0.14em] text-linen/40">
                            {APP_LOCATION}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
