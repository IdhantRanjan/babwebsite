import { AnimatedLogos } from "@/components/ui/animated-logos";
import { RevealImage, RevealLines } from "@/components/ui/motion";
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
import {
    APP_CONTACT_EMAIL,
    APP_LOCATION,
    APP_NAME,
    PARTNER_LOGOS,
    STATS,
    TEAM,
} from "@/utils";
import Image from "next/image";

/* A few candid shots from across our programs (incl. Xilin). */
const GLIMPSES = [
    "/programs/xilin/xilin-1.jpg",
    "/programs/alive-center/IMG_5305.jpg",
    "/programs/xilin/xilin-2.jpg",
    "/programs/ymca/IMG_8154.jpg",
    "/programs/xilin/xilin-3.jpg",
    "/programs/alive-center/IMG_5391.jpg",
];

const VALUES = [
    {
        title: "Hands-on, not hand-outs",
        description:
            "Students learn by doing: building, pitching, budgeting. Lectures alone don't teach financial skill.",
    },
    {
        title: "Free, forever",
        description:
            "Cost should never decide who learns finance. Every Build-A-Biz program is 100% free for students.",
    },
    {
        title: "Student-led, community-powered",
        description:
            "We're young, but we partner with credit unions, colleges, and local libraries to bring real depth.",
    },
];

const AboutPage = () => {
    return (
        <div className="bg-linen text-ink">
            {/* Hero */}
            <Section className="pt-12 md:pt-20 pb-12 md:pb-16">
                <Tick />
                <Eyebrow className="mt-6">Mission & Impact</Eyebrow>
                <div className="mt-8 grid grid-cols-1 items-start gap-x-10 gap-y-10 lg:grid-cols-12">
                    <div className="lg:col-span-7">
                        <RevealLines
                            as="h1"
                            immediate
                            delay={0.1}
                            lines={[
                                "Empowering the next",
                                "generation of",
                                "entrepreneurs &",
                                "investors.",
                            ]}
                            className="font-editorial text-[clamp(38px,5.6vw,86px)] font-[300] leading-[0.95] tracking-[-0.02em] text-ink"
                        />
                        <Reveal delay={0.12}>
                            <p className="mt-8 max-w-xl font-twk text-[17px] font-[350] leading-[1.55] text-ink/85">
                                {APP_NAME} is a Naperville-based{" "}
                                <Highlight variant="marker">501(c)(3) nonprofit</Highlight>{" "}
                                that teaches financial literacy and entrepreneurship to
                                young people through real-world programs, taught with
                                local business leaders, college professors, and credit
                                union partners.
                            </p>
                        </Reveal>
                    </div>
                    <RevealImage
                        immediate
                        delay={0.3}
                        className="rounded-[14px] lg:col-span-5 lg:col-start-8"
                    >
                        <ImageTile
                            src="/team/team-7157.jpg"
                            caption="The Build-A-Biz team"
                            className="aspect-[4/3] w-full"
                            sizes="(max-width: 1024px) 100vw, 42vw"
                            priority
                        />
                    </RevealImage>
                </div>
            </Section>

            {/* Mission */}
            <Section id="mission" className="py-16 md:py-24">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
                    <Reveal className="lg:col-span-7">
                        <h2 className="font-mondwest text-[clamp(36px,6vw,96px)] font-[400] leading-[0.95] tracking-[-0.02em] text-ink">
                            Make finance a{" "}
                            <Highlight variant="marker">birthright</Highlight>, not a
                            privilege.
                        </h2>
                    </Reveal>
                    <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9 lg:mt-3">
                        <p className="font-twk text-[16px] font-[350] leading-[1.5] text-ink/80">
                            We empower the next generation to be financially independent
                            and to lead in the business world through real-world
                            applications. Camps where students design real businesses,
                            workshops where they pitch real ideas, and community nights
                            where they meet real founders and investors. For free.
                        </p>
                        <p className="mt-4 font-twk text-[16px] font-[350] leading-[1.5] text-ink/70">
                            Build-A-Biz is built by students, for students, with a whole
                            lot of community support.
                        </p>
                    </Reveal>
                </div>
            </Section>

            {/* Values */}
            <Section className="py-16 md:py-24">
                <Reveal>
                    <Eyebrow>What we stand for</Eyebrow>
                    <h2 className="mt-4 font-editorial text-[clamp(40px,6vw,96px)] font-[300] leading-[0.92] tracking-tight text-ink">
                        Our values.
                    </h2>
                </Reveal>
                <div className="mt-14 flex flex-col">
                    {VALUES.map((v, i) => (
                        <Reveal key={v.title} delay={0.05 * i}>
                            <div className="grid grid-cols-1 items-baseline gap-3 border-t border-mist py-8 md:grid-cols-12 md:gap-10">
                                <span className="font-twk text-[11px] tabular-nums text-sage md:col-span-1">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <h3 className="font-editorial text-[clamp(26px,3.2vw,44px)] font-[300] leading-[1.02] tracking-tight text-ink md:col-span-6">
                                    {v.title}
                                </h3>
                                <p className="font-twk text-[15px] font-[350] leading-[1.5] text-ink/75 md:col-span-5">
                                    {v.description}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                    <div className="border-t border-mist" />
                </div>
            </Section>

            {/* Impact */}
            <Section id="impact" className="py-16 md:py-24">
                <Tick />
                <Eyebrow className="mt-6">The record so far</Eyebrow>
                <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-14 md:grid-cols-4 md:gap-x-12">
                    {STATS.map((s) => (
                        <Reveal key={s.label}>
                            <div className="font-mondwest text-[clamp(48px,6.5vw,104px)] font-[400] leading-[0.85] tracking-[-0.02em] text-ink">
                                {s.value}
                            </div>
                            <div className="mt-4 font-twk text-[14px] font-[350] uppercase tracking-[0.06em] text-sage">
                                {s.label}
                            </div>
                        </Reveal>
                    ))}
                </div>
            </Section>

            {/* Glimpses */}
            <Section className="py-16 md:py-24">
                <Reveal>
                    <Eyebrow>Out in the community</Eyebrow>
                    <h2 className="mt-4 font-editorial text-[clamp(36px,5vw,80px)] font-[300] leading-[0.95] tracking-tight text-ink">
                        A few glimpses.
                    </h2>
                </Reveal>
                <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-8">
                    {GLIMPSES.map((src, i) => (
                        <RevealImage
                            key={src}
                            delay={0.05 * i}
                            className="rounded-[14px]"
                        >
                            <ImageTile
                                src={src}
                                className="aspect-[4/5]"
                                sizes="(max-width: 768px) 50vw, 30vw"
                            />
                        </RevealImage>
                    ))}
                </div>
            </Section>

            {/* Team */}
            <Section id="team" className="py-16 md:py-24">
                <Reveal>
                    <Eyebrow>The team</Eyebrow>
                    <h2 className="mt-4 font-mondwest text-[clamp(40px,7vw,120px)] font-[400] leading-[0.9] tracking-[-0.02em] text-ink">
                        Student-led.
                    </h2>
                    <p className="mt-5 max-w-xl font-twk text-[16px] font-[350] leading-[1.5] text-ink/70">
                        A growing team of student leaders running Build-A-Biz, and
                        we&apos;re always looking for more.
                    </p>
                </Reveal>
                <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3">
                    {TEAM.map((t, i) => (
                        <Reveal key={t.name + i} delay={0.03 * i}>
                            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[14px] bg-bark">
                                {t.image ? (
                                    <Image
                                        src={t.image}
                                        alt={t.name}
                                        fill
                                        sizes="(max-width: 768px) 50vw, 16vw"
                                        className="object-cover"
                                    />
                                ) : (
                                    <div className="flex h-full w-full items-center justify-center font-mondwest text-[40px] text-mist">
                                        {t.initials}
                                    </div>
                                )}
                            </div>
                            <p className="mt-4 font-twk text-[15px] font-[550] text-ink">
                                {t.name}
                            </p>
                            <p className="font-twk text-[13px] font-[350] text-sage">
                                {t.role}
                            </p>
                        </Reveal>
                    ))}
                </div>
            </Section>

            {/* Partners */}
            <Section className="py-16 md:py-24">
                <Reveal>
                    <Eyebrow>Partners & sponsors</Eyebrow>
                    <h2 className="mt-4 max-w-[18ch] font-editorial text-[clamp(36px,5vw,80px)] font-[300] leading-[0.95] tracking-tight text-ink">
                        We couldn&apos;t do this alone.
                    </h2>
                </Reveal>
                <Reveal delay={0.1} className="mt-14">
                    <AnimatedLogos logos={PARTNER_LOGOS} />
                </Reveal>
            </Section>

            {/* Contact */}
            <Section id="contact" className="py-20 md:py-28">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
                    <Reveal className="lg:col-span-7">
                        <Tick />
                        <h2 className="mt-7 max-w-[16ch] font-editorial text-[clamp(40px,6vw,96px)] font-[300] leading-[0.92] tracking-tight text-ink">
                            Partner, volunteer, or just say hi.
                        </h2>
                        <p className="mt-6 max-w-md font-twk text-[18px] font-[350] leading-[1.5] text-ink/80">
                            Whether you&apos;re a student wanting to join, a parent with
                            questions, or a business that wants to sponsor a camp,
                            we&apos;d love to hear from you.
                        </p>
                        <div className="mt-10 flex flex-wrap items-center gap-8">
                            <VoltageCTA
                                href={`mailto:${APP_CONTACT_EMAIL}?subject=Hello Build-A-Biz`}
                            >
                                Email us
                            </VoltageCTA>
                            <GhostLink
                                href={`mailto:${APP_CONTACT_EMAIL}?subject=Sponsorship inquiry`}
                                arrow
                            >
                                Sponsor a camp
                            </GhostLink>
                        </div>
                    </Reveal>
                    <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9 lg:mt-12">
                        <div className="flex flex-col border-t border-mist">
                            <div className="flex items-baseline justify-between gap-4 border-b border-mist py-5">
                                <span className="font-twk text-[11px] uppercase tracking-[0.14em] text-sage">
                                    Email
                                </span>
                                <a
                                    href={`mailto:${APP_CONTACT_EMAIL}`}
                                    className="font-mondwest text-[18px] italic text-ink hover:text-sage"
                                >
                                    {APP_CONTACT_EMAIL}
                                </a>
                            </div>
                            <div className="flex items-baseline justify-between gap-4 border-b border-mist py-5">
                                <span className="font-twk text-[11px] uppercase tracking-[0.14em] text-sage">
                                    Based in
                                </span>
                                <span className="font-mondwest text-[18px] italic text-ink">
                                    {APP_LOCATION}
                                </span>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </Section>
        </div>
    );
};

export default AboutPage;
