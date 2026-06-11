import {
    GhostLink,
    ImageTile,
    Tick,
    VoltageCTA,
} from "@/components/ui/editorial";
import {
    CountUp,
    DualMarquee,
    Parallax,
    Reveal,
    RevealImage,
    RevealLines,
    ScrollCue,
} from "@/components/ui/motion";
import { DarkSection } from "@/components/ui/wavy";
import { Highlight } from "@/components/ui/highlight";
import { EVENTS, PROGRAMS, REAL_PHOTOS, STATS } from "@/utils";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
    return (
        <div className="bg-linen text-ink">
            {/* ============ HERO ============ */}
            <section className="mx-auto max-w-[1440px] px-6 md:px-[50px] pt-10 md:pt-16 pb-16 md:pb-20">
                <Tick />
                <Reveal delay={0.05}>
                    <p className="mt-6 max-w-md font-twk text-[14px] font-[400] uppercase tracking-[0.16em] text-sage">
                        A student-led financial literacy nonprofit
                    </p>
                </Reveal>

                <div className="mt-8 grid grid-cols-1 items-start gap-x-10 gap-y-12 lg:grid-cols-12">
                    <RevealLines
                        as="h1"
                        immediate
                        delay={0.1}
                        lines={["The money", "skills schools", "forget to teach."]}
                        className="col-span-1 font-editorial text-[clamp(58px,11vw,164px)] font-[300] leading-[0.9] tracking-[-0.02em] text-ink lg:col-span-7"
                    />

                    {/* Right rail: image → supporting copy → actions, all aligned */}
                    <div className="col-span-1 lg:col-span-4 lg:col-start-9">
                        <RevealImage immediate delay={0.45} className="rounded-[14px]">
                            <ImageTile
                                src={REAL_PHOTOS[4]}
                                caption="YMCA scheduled session, 2025"
                                className="aspect-[4/5] w-full"
                                sizes="(max-width: 1024px) 100vw, 33vw"
                                priority
                            />
                        </RevealImage>
                        <Reveal delay={0.15}>
                            <p className="mt-8 font-twk text-[17px] font-[350] leading-[1.55] text-ink/85">
                                Build-A-Biz is a student-run nonprofit teaching the next
                                generation of entrepreneurs and investors to be{" "}
                                <Highlight variant="marker">financially independent</Highlight>.
                                Free camps, workshops, and a full course, taught alongside
                                real founders and credit union experts. From{" "}
                                <Highlight>Naperville to Zambia</Highlight>.
                            </p>
                            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                                <VoltageCTA href="/programs">Explore programs</VoltageCTA>
                                <GhostLink href="/about" arrow>
                                    Read our mission
                                </GhostLink>
                            </div>
                        </Reveal>
                    </div>
                </div>

                <div className="mt-14 flex items-center justify-between md:mt-20">
                    <ScrollCue />
                    <span className="hidden font-twk text-[11px] uppercase tracking-[0.18em] text-sage md:block">
                        Est. 2024 · Naperville, IL
                    </span>
                </div>
            </section>

            {/* ============ DUAL MARQUEE ============ */}
            <section className="border-y border-mist py-10 md:py-14">
                <DualMarquee
                    rowA={[
                        "Budgeting",
                        "Investing",
                        "Credit",
                        "Compound Interest",
                        "Taxes",
                    ]}
                    rowB={[
                        "Pitch your idea",
                        "Build a business",
                        "Own your future",
                        "Start early",
                    ]}
                    images={[
                        REAL_PHOTOS[0],
                        REAL_PHOTOS[3],
                        REAL_PHOTOS[7],
                        REAL_PHOTOS[10],
                        REAL_PHOTOS[14],
                    ]}
                />
            </section>

            {/* ============ STATEMENT (dark) ============ */}
            <DarkSection>
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
                    <RevealLines
                        as="h2"
                        lines={[
                            "Most schools never",
                            "teach the things that",
                            "actually run your life.",
                        ]}
                        className="font-editorial text-[clamp(40px,6.4vw,104px)] font-[300] leading-[0.92] tracking-[-0.01em] text-linen lg:col-span-8"
                    />
                    <div className="flex flex-col justify-end lg:col-span-3 lg:col-start-10">
                        <Reveal delay={0.2}>
                            <Tick className="mb-6" />
                            <p className="font-twk text-[18px] font-[350] leading-[1.5] text-linen/75">
                                Budgeting. Credit. Investing. How to start a real
                                business. We teach it{" "}
                                <Highlight>the way it sticks</Highlight>, through
                                hands-on camps, workshops, and community nights.
                            </p>
                            <div className="mt-8">
                                <GhostLink
                                    href="/about"
                                    arrow
                                    className="text-linen"
                                >
                                    Why we exist
                                </GhostLink>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </DarkSection>

            {/* ============ PROGRAMS ============ */}
            <section className="mx-auto max-w-[1440px] px-6 md:px-[50px] py-20 md:py-28">
                <div className="flex items-end justify-between">
                    <RevealLines
                        as="h2"
                        lines={["Three ways in."]}
                        className="font-mondwest text-[clamp(44px,8vw,140px)] font-[400] leading-[0.9] tracking-[-0.02em] text-ink"
                    />
                    <span className="hidden font-twk text-[11px] uppercase tracking-[0.18em] text-sage md:block">
                        ( 01 — 03 )
                    </span>
                </div>

                <div className="mt-16 flex flex-col">
                    {PROGRAMS.map((p, i) => (
                        <Reveal key={p.title} delay={0.05 * i}>
                            <Link
                                href={p.href}
                                className="group grid grid-cols-1 items-center gap-6 border-t border-mist py-10 transition-colors hover:bg-mist/20 md:grid-cols-12 md:gap-10 md:px-3"
                            >
                                <span className="font-twk text-[11px] tabular-nums text-sage md:col-span-1">
                                    {String(i + 1).padStart(2, "0")}
                                </span>

                                <div className="md:col-span-5">
                                    <p className="font-twk text-[11px] uppercase tracking-[0.16em] text-sage">
                                        {p.tag}
                                    </p>
                                    <h3 className="mt-2 font-editorial text-[clamp(34px,4.5vw,60px)] font-[300] leading-[0.95] tracking-tight text-ink transition-colors group-hover:text-voltage">
                                        {p.title}
                                    </h3>
                                </div>

                                <p className="font-twk text-[16px] font-[350] leading-[1.5] text-ink/75 md:col-span-4">
                                    {p.description}
                                </p>

                                <div className="md:col-span-2">
                                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[14px] bg-bark">
                                        <Image
                                            src={p.image}
                                            alt=""
                                            fill
                                            sizes="(max-width: 768px) 100vw, 20vw"
                                            className="object-cover transition duration-500 group-hover:scale-105"
                                        />
                                        <span
                                            aria-hidden
                                            className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-voltage text-[14px] text-ink opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                        >
                                            →
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </Reveal>
                    ))}
                    <div className="border-t border-mist" />
                </div>
            </section>

            {/* ============ NUMBERS (dark, bordered stat cards) ============ */}
            <DarkSection>
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
                    <div className="lg:col-span-5">
                        <Tick />
                        <RevealLines
                            as="h2"
                            lines={["The record", "so far."]}
                            className="mt-6 font-editorial text-[clamp(40px,6vw,92px)] font-[300] leading-[0.92] tracking-tight text-linen"
                        />
                    </div>
                    <div className="lg:col-span-6 lg:col-start-7">
                        <Reveal delay={0.1}>
                            <p className="font-twk text-[18px] font-[350] leading-[1.5] text-linen/75">
                                Built by students, backed by the community. A few of the
                                numbers behind the work, and we&apos;re only getting
                                started.
                            </p>
                            <div className="mt-8">
                                <VoltageCTA href="/about" onDark>
                                    Read our mission
                                </VoltageCTA>
                            </div>
                        </Reveal>
                    </div>
                </div>

                <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-12 md:mt-24 md:grid-cols-4 md:gap-x-12">
                    {STATS.map((s, i) => (
                        <Reveal key={s.label} delay={0.06 * i}>
                            <CountUp
                                value={s.value}
                                className="block font-mondwest text-[clamp(48px,6.5vw,104px)] font-[400] leading-[0.85] tracking-[-0.02em] text-linen"
                            />
                            <div className="mt-4 font-twk text-[13px] font-[350] uppercase tracking-[0.06em] text-moss">
                                {s.label}
                            </div>
                        </Reveal>
                    ))}
                </div>
            </DarkSection>

            {/* ============ EDITORIAL IMAGE SPREAD ============ */}
            <section className="mx-auto max-w-[1440px] px-6 md:px-[50px] py-20 md:py-28">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
                    <Parallax distance={40} className="md:col-span-5">
                        <RevealImage className="rounded-[14px]">
                            <ImageTile
                                src={REAL_PHOTOS[1]}
                                caption="Workshop in session"
                                className="aspect-[4/5]"
                            />
                        </RevealImage>
                    </Parallax>
                    <div className="flex flex-col justify-center md:col-span-6 md:col-start-7">
                        <RevealLines
                            as="h2"
                            lines={["What it's actually", "like in the room."]}
                            className="font-editorial text-[clamp(36px,5vw,72px)] font-[300] leading-[0.95] tracking-tight text-ink"
                        />
                        <Reveal delay={0.15}>
                            <p className="mt-6 max-w-md font-twk text-[16px] font-[350] leading-[1.5] text-ink/80">
                                Real students. Real money decisions. Real founders and
                                finance professionals in the room. Not a lecture, a
                                working session.
                            </p>
                            <div className="mt-8">
                                <GhostLink href="/media" arrow>
                                    See the gallery
                                </GhostLink>
                            </div>
                        </Reveal>
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-2 gap-10 md:grid-cols-12">
                    <RevealImage className="rounded-[14px] md:col-span-4">
                        <ImageTile
                            src={REAL_PHOTOS[8]}
                            caption="Teams at work"
                            className="aspect-[4/3]"
                        />
                    </RevealImage>
                    <RevealImage delay={0.08} className="rounded-[14px] md:col-span-4">
                        <ImageTile
                            src={REAL_PHOTOS[11]}
                            caption="Building the pitch"
                            className="aspect-[4/3]"
                        />
                    </RevealImage>
                    <RevealImage delay={0.16} className="rounded-[14px] md:col-span-4">
                        <ImageTile
                            src={REAL_PHOTOS[15]}
                            caption="Demo day"
                            className="aspect-[4/3]"
                        />
                    </RevealImage>
                </div>
            </section>

            {/* ============ EVENTS ============ */}
            <section className="mx-auto max-w-[1440px] px-6 md:px-[50px] py-20 md:py-28">
                <div className="flex items-end justify-between">
                    <RevealLines
                        as="h2"
                        lines={["In the field."]}
                        className="font-mondwest text-[clamp(40px,7vw,120px)] font-[400] leading-[0.9] tracking-[-0.02em] text-ink"
                    />
                    <GhostLink href="/media" arrow>
                        All updates
                    </GhostLink>
                </div>

                <div className="mt-14 flex flex-col">
                    {EVENTS.map((e, i) => (
                        <Reveal key={e.title} delay={0.04 * i}>
                            <div className="grid grid-cols-1 gap-3 border-t border-mist py-8 md:grid-cols-12 md:gap-10">
                                <span className="font-twk text-[14px] font-[350] uppercase tracking-[0.08em] text-sage md:col-span-2">
                                    {e.date}
                                </span>
                                <h3 className="font-editorial text-[clamp(26px,3vw,44px)] font-[300] leading-[1] text-ink md:col-span-6">
                                    {e.title}
                                </h3>
                                <div className="md:col-span-4">
                                    <p className="font-twk text-[14px] font-[550] text-ink">
                                        {e.host}
                                    </p>
                                    <p className="mt-1 font-twk text-[14px] font-[350] leading-[1.5] text-ink/70">
                                        {e.description}
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                    <div className="border-t border-mist" />
                </div>
            </section>

            {/* ============ COURSE FEATURE ============ */}
            <section className="mx-auto max-w-[1440px] px-6 md:px-[50px] py-20 md:py-32">
                <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12">
                    <div className="md:col-span-6">
                        <Tick />
                        <RevealLines
                            as="h2"
                            lines={["A full course in", "financial literacy.", "Free."]}
                            className="mt-6 font-editorial text-[clamp(40px,6vw,96px)] font-[300] leading-[0.92] tracking-tight text-ink"
                        />
                        <Reveal delay={0.15}>
                            <p className="mt-6 max-w-md font-twk text-[18px] font-[350] leading-[1.5] text-ink/80">
                                Twenty-seven self-paced modules built with GreenState
                                Credit Union, covering budgeting, credit, investing, and
                                taxes. Open to <Highlight variant="marker">every student</Highlight>.
                            </p>
                            <div className="mt-10">
                                <VoltageCTA href="/course">Start the course</VoltageCTA>
                            </div>
                        </Reveal>
                    </div>
                    <Parallax distance={40} className="md:col-span-5 md:col-start-8">
                        <RevealImage className="rounded-[14px]">
                            <ImageTile
                                src={REAL_PHOTOS[6]}
                                caption="In the classroom"
                                className="aspect-[5/4]"
                            />
                        </RevealImage>
                    </Parallax>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
