import {
    Eyebrow,
    GhostLink,
    ImageTile,
    Reveal,
    Section,
    Tick,
    VoltageCTA,
} from "@/components/ui/editorial";
import { Highlight } from "@/components/ui/highlight";
import { RevealLines } from "@/components/ui/motion";
import { APP_CONTACT_EMAIL, LOCATIONS, REAL_PHOTOS } from "@/utils";

/* ---- What we offer (overview) ---- */
const OFFERINGS = [
    {
        title: "Summer camps",
        meta: "Ages 8–16 · 5 days",
        description:
            "Multi-day camps where students build a business from scratch: idea, brand, budget, and a final pitch in front of real founders and investors.",
    },
    {
        title: "School & community workshops",
        meta: "All grades · 45–90 min",
        description:
            "Single-session, interactive workshops we bring back to schools, libraries, and centers throughout the year, not just once.",
    },
    {
        title: "Community nights",
        meta: "Families welcome",
        description:
            "Evening events featuring local business leaders and college professors on student loans, wealth-building, and entrepreneurship.",
    },
    {
        title: "The financial literacy course",
        meta: "Online · self-paced",
        description:
            "A free, 27-module course built with GreenState Credit Union, covering budgeting, credit, investing, and taxes.",
    },
];

/* ---- Camps: the 5-day arc ---- */
const CAMP_DAYS = [
    {
        day: "Day 1",
        title: "Money mindset",
        description:
            "Budgeting, saving, and the basics of how money grows, through games and team challenges.",
    },
    {
        day: "Day 2",
        title: "Idea generation",
        description:
            "Students brainstorm real business ideas, then narrow them down with market research and customer feedback.",
    },
    {
        day: "Day 3",
        title: "Build & brand",
        description:
            "Teams design a brand, build a prototype, and figure out pricing, costs, and their target customer.",
    },
    {
        day: "Day 4",
        title: "Pitch prep",
        description:
            "Working with mentors from local businesses, teams polish their pitch and practice in front of peers.",
    },
    {
        day: "Day 5",
        title: "Pitch day",
        description:
            "Final pitches before a panel of business leaders, professors, and credit union experts. Awards and prizes.",
    },
];

/* ---- Workshop catalog ---- */
const WORKSHOPS = [
    {
        title: "Budgeting 101",
        duration: "45 min",
        audience: "Grades 5–8",
        description:
            "Hands-on intro to budgeting with real money scenarios: wants vs. needs, the 50/30/20 rule, and tracking spending.",
    },
    {
        title: "Intro to Investing",
        duration: "60 min",
        audience: "Grades 8–12",
        description:
            "Stocks, bonds, ETFs, and the power of compound interest, explained without jargon. Includes a stock-picking game.",
    },
    {
        title: "Credit & Loans",
        duration: "45 min",
        audience: "Grades 9–12",
        description:
            "What a credit score is, how loans work, and the real cost of a balance. Co-taught with GreenState Credit Union.",
    },
    {
        title: "Build a Business",
        duration: "90 min",
        audience: "Grades 5–12",
        description:
            "A condensed version of our camp pitch experience. Students design and pitch a business idea in one session.",
    },
    {
        title: "Financial Literacy Night",
        duration: "Evening event",
        audience: "Families welcome",
        description:
            "Featuring local business leaders and college professors. Past topics: student loans, wealth-building, entrepreneurship.",
    },
    {
        title: "Career Pathways",
        duration: "60 min",
        audience: "Grades 8–12",
        description:
            "A look at finance, business, and entrepreneurship careers, with real conversations with people doing the work.",
    },
];

const ProgramsPage = () => {
    return (
        <div className="bg-linen text-ink">
            {/* ===== HERO ===== */}
            <Section className="pt-12 md:pt-20 pb-16 md:pb-24">
                <Tick />
                <Eyebrow className="mt-6">Programs · always free</Eyebrow>
                <div className="mt-8 grid grid-cols-1 items-start gap-x-10 gap-y-12 lg:grid-cols-12">
                    <RevealLines
                        as="h1"
                        immediate
                        delay={0.1}
                        lines={["Everything", "we offer."]}
                        className="font-editorial text-[clamp(56px,10vw,150px)] font-[300] leading-[0.9] tracking-[-0.02em] text-ink lg:col-span-7"
                    />
                    <Reveal delay={0.12} className="lg:col-span-5 lg:col-start-8">
                        <ImageTile
                            src={REAL_PHOTOS[2]}
                            caption="Camp pitch session"
                            className="aspect-[4/3] w-full"
                            sizes="(max-width: 1024px) 100vw, 42vw"
                            priority
                        />
                    </Reveal>
                </div>
                <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12">
                    <Reveal delay={0.1} className="lg:col-span-7">
                        <p className="font-twk text-[18px] font-[350] leading-[1.5] text-ink/85">
                            From week-long{" "}
                            <Highlight variant="marker">summer camps</Highlight> to single
                            workshops, community nights, and a full online course,
                            Build-A-Biz brings{" "}
                            <Highlight>hands-on financial literacy</Highlight> and
                            entrepreneurship to students wherever they already learn. Every
                            program is completely free.
                        </p>
                        <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
                            <VoltageCTA
                                href={`mailto:${APP_CONTACT_EMAIL}?subject=Program inquiry`}
                            >
                                Bring us to your school
                            </VoltageCTA>
                            <GhostLink href="#camps" arrow>
                                See the camp week
                            </GhostLink>
                        </div>
                    </Reveal>
                </div>
            </Section>

            {/* ===== OVERVIEW ===== */}
            <Section className="py-16 md:py-24">
                <Reveal>
                    <Eyebrow>The offerings</Eyebrow>
                    <h2 className="mt-4 max-w-[20ch] font-mondwest text-[clamp(36px,6vw,96px)] font-[400] leading-[0.9] tracking-[-0.02em] text-ink">
                        Four ways students learn with us.
                    </h2>
                </Reveal>
                <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2">
                    {OFFERINGS.map((o, i) => (
                        <Reveal key={o.title} delay={0.05 * i}>
                            <div className="flex flex-col border-t border-mist pt-6">
                                <span className="font-twk text-[11px] tabular-nums text-sage">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <h3 className="mt-4 font-editorial text-[clamp(28px,3.2vw,46px)] font-[300] leading-[1.02] tracking-tight text-ink">
                                    {o.title}
                                </h3>
                                <p className="mt-3 font-twk text-[13px] font-[400] uppercase tracking-[0.08em] text-sage">
                                    {o.meta}
                                </p>
                                <p className="mt-4 max-w-md font-twk text-[16px] font-[350] leading-[1.55] text-ink/75">
                                    {o.description}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </Section>

            {/* ===== CAMPS ===== */}
            <Section id="camps" className="py-16 md:py-24">
                <Reveal>
                    <Eyebrow>The camps</Eyebrow>
                    <h2 className="mt-4 max-w-[16ch] font-mondwest text-[clamp(40px,8vw,140px)] font-[400] leading-[0.9] tracking-[-0.02em] text-ink">
                        Build a business in <Highlight variant="marker">one week</Highlight>.
                    </h2>
                    <p className="mt-6 max-w-xl font-twk text-[16px] font-[350] leading-[1.55] text-ink/75">
                        Our camps are five-day, hands-on programs where students ages 8 to
                        16 take an idea all the way to a final pitch.
                    </p>
                </Reveal>
                <div className="mt-14 flex flex-col">
                    {CAMP_DAYS.map((d, i) => (
                        <Reveal key={d.day} delay={0.04 * i}>
                            <div className="grid grid-cols-1 items-baseline gap-3 border-t border-mist py-8 md:grid-cols-12 md:gap-10">
                                <span className="font-twk text-[11px] uppercase tracking-[0.14em] text-sage md:col-span-2">
                                    {d.day}
                                </span>
                                <h3 className="font-editorial text-[clamp(28px,3.6vw,52px)] font-[300] leading-[1] tracking-tight text-ink md:col-span-5">
                                    {d.title}
                                </h3>
                                <p className="font-twk text-[15px] font-[350] leading-[1.5] text-ink/75 md:col-span-5">
                                    {d.description}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                    <div className="border-t border-mist" />
                </div>
            </Section>

            {/* ===== WORKSHOP CATALOG ===== */}
            <Section id="workshops" className="py-16 md:py-24">
                <Reveal>
                    <Eyebrow>The catalog</Eyebrow>
                    <h2 className="mt-4 font-editorial text-[clamp(40px,6vw,96px)] font-[300] leading-[0.92] tracking-tight text-ink">
                        Workshops we&apos;ll bring to you.
                    </h2>
                    <p className="mt-5 max-w-xl font-twk text-[16px] font-[350] leading-[1.55] text-ink/70">
                        Single-session and recurring workshops, taught by Build-A-Biz
                        students and partner professionals. Pick one, and we&apos;ll run
                        it at no cost.
                    </p>
                </Reveal>
                <div className="mt-14 flex flex-col">
                    {WORKSHOPS.map((w, i) => (
                        <Reveal key={w.title} delay={0.03 * i}>
                            <div className="grid grid-cols-1 items-baseline gap-3 border-t border-mist py-8 md:grid-cols-12 md:gap-10">
                                <span className="font-twk text-[11px] tabular-nums text-sage md:col-span-1">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <h3 className="font-editorial text-[clamp(28px,3.4vw,48px)] font-[300] leading-[1] tracking-tight text-ink md:col-span-5">
                                    {w.title}
                                </h3>
                                <p className="font-twk text-[15px] font-[350] leading-[1.5] text-ink/75 md:col-span-4">
                                    {w.description}
                                </p>
                                <p className="font-twk text-[13px] font-[350] uppercase tracking-[0.06em] text-sage md:col-span-2">
                                    {w.duration}
                                    <br />
                                    {w.audience}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                    <div className="border-t border-mist" />
                </div>
            </Section>

            {/* ===== LOCATIONS ===== */}
            <Section className="py-16 md:py-24">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
                    <Reveal className="lg:col-span-5">
                        <Eyebrow>Where we run programs</Eyebrow>
                        <h2 className="mt-4 font-editorial text-[clamp(36px,5vw,72px)] font-[300] leading-[0.95] tracking-tight text-ink">
                            Our locations.
                        </h2>
                        <p className="mt-6 max-w-sm font-twk text-[16px] font-[350] leading-[1.55] text-ink/75">
                            Camps and workshops run during summer and the school year. Want
                            one hosted at your school or center?
                        </p>
                        <div className="mt-8">
                            <GhostLink
                                href={`mailto:${APP_CONTACT_EMAIL}?subject=Host a program`}
                                arrow
                            >
                                Email us to host
                            </GhostLink>
                        </div>
                    </Reveal>
                    <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
                        <div className="flex flex-col">
                            {LOCATIONS.map((l) => (
                                <div
                                    key={l.name}
                                    className="flex items-baseline justify-between gap-6 border-t border-mist py-5"
                                >
                                    <span className="font-editorial text-[clamp(22px,2.4vw,32px)] font-[300] text-ink">
                                        {l.name}
                                    </span>
                                    <span className="shrink-0 font-twk text-[13px] font-[350] uppercase tracking-[0.06em] text-sage">
                                        {l.address}
                                    </span>
                                </div>
                            ))}
                            <div className="border-t border-mist" />
                        </div>
                    </Reveal>
                </div>
            </Section>

            {/* ===== CTA ===== */}
            <Section className="pt-16 md:pt-24 pb-28 md:pb-40">
                <Reveal>
                    <Tick />
                    <h2 className="mt-7 max-w-[16ch] font-editorial text-[clamp(40px,6vw,96px)] font-[300] leading-[0.92] tracking-tight text-ink">
                        Ready to get started?
                    </h2>
                    <p className="mt-6 max-w-md font-twk text-[18px] font-[350] leading-[1.5] text-ink/80">
                        Whether you want to enroll a student or host a program, we&apos;d
                        love to hear from you.
                    </p>
                    <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                        <VoltageCTA
                            href={`mailto:${APP_CONTACT_EMAIL}?subject=Program signup`}
                        >
                            Reserve a spot
                        </VoltageCTA>
                        <GhostLink href="/course" arrow>
                            Explore the course
                        </GhostLink>
                    </div>
                </Reveal>
            </Section>
        </div>
    );
};

export default ProgramsPage;
