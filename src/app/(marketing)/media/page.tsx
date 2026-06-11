import { CyclingGallery } from "@/components/ui/cycling-gallery";
import {
    Eyebrow,
    Reveal,
    Section,
    Tick,
    VoltageCTA,
} from "@/components/ui/editorial";
import { RevealLines } from "@/components/ui/motion";
import { APP_CONTACT_EMAIL, REAL_PHOTOS } from "@/utils";
import Image from "next/image";
import Link from "next/link";

const ARTICLES = [
    {
        href: "https://wgnradio.com/your-money-matters/build-a-biz-financial-literacy-from-illinois-to-zambia/",
        image: "/media/wgn-team.jpg",
        eyebrow: "WGN Radio · Your Money Matters",
        title: "Build-A-Biz: Financial Literacy From Illinois to Zambia",
        body:
            "WGN Radio sits down with Build-A-Biz to talk about teaching financial literacy and entrepreneurship to students, from local schools in Illinois to communities in Zambia.",
    },
    {
        href: "https://wgnradio.com/your-money-matters/build-a-biz-financial-literacy-lesson-50-30-20-rule/",
        image: "/media/secondwgn.jpg",
        eyebrow: "WGN Radio · Your Money Matters",
        title: "Build-A-Biz: The 50/30/20 Rule",
        body:
            "Idhant Ranjan joins WGN for Build-A-Biz's first financial literacy lesson, breaking down the 50/30/20 rule: 50% to needs, 30% to wants, and 20% to savings. He and host Jon also talk through why a high-yield savings account at a credit union is a smart money move.",
    },
];

const MediaPage = () => {
    return (
        <div className="bg-linen text-ink">
            {/* ===== HERO ===== */}
            <Section className="pt-12 md:pt-20 pb-12 md:pb-16">
                <Tick />
                <Eyebrow className="mt-6">Media</Eyebrow>
                <RevealLines
                    as="h1"
                    immediate
                    delay={0.1}
                    lines={["Photos, press,", "and highlights."]}
                    className="mt-7 max-w-[16ch] font-editorial text-[clamp(44px,8vw,124px)] font-[300] leading-[0.92] tracking-[-0.02em] text-ink"
                />
                <Reveal delay={0.12}>
                    <p className="mt-8 max-w-2xl font-twk text-[18px] font-[350] leading-[1.55] text-ink/85">
                        A look at what happens at Build-A-Biz camps, workshops, and
                        community nights, from Naperville to Zambia.
                    </p>
                </Reveal>
            </Section>

            {/* ===== FEATURED IN THE MEDIA ===== */}
            <Section className="py-16 md:py-24">
                <Reveal>
                    <Eyebrow>Featured in the media</Eyebrow>
                    <h2 className="mt-4 font-editorial text-[clamp(36px,5vw,80px)] font-[300] leading-[0.95] tracking-tight text-ink">
                        In the press.
                    </h2>
                </Reveal>

                <div className="mt-14 flex flex-col gap-16 md:gap-24">
                    {ARTICLES.map((a, i) => (
                        <Reveal key={a.href} delay={0.05 * i}>
                            <Link
                                href={a.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group grid grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-12"
                            >
                                <div className="relative aspect-[16/10] overflow-hidden rounded-[14px] bg-bark md:col-span-7">
                                    <Image
                                        src={a.image}
                                        alt={a.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 60vw"
                                        quality={90}
                                        className="object-cover transition duration-700 group-hover:scale-[1.03]"
                                        priority={i === 0}
                                    />
                                </div>
                                <div className="md:col-span-5">
                                    <Eyebrow>{a.eyebrow}</Eyebrow>
                                    <h3 className="mt-4 font-editorial text-[clamp(28px,3.2vw,48px)] font-[300] leading-[1.02] tracking-tight text-ink">
                                        {a.title}
                                    </h3>
                                    <p className="mt-5 font-twk text-[16px] font-[350] leading-[1.55] text-ink/75">
                                        {a.body}
                                    </p>
                                    <div className="mt-7 inline-flex items-center gap-1.5 font-twk text-[14px] font-[400] text-ink">
                                        <span className="relative">
                                            Read the full article
                                            <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 ease-out group-hover:scale-x-100" />
                                        </span>
                                        <span
                                            aria-hidden
                                            className="transition-transform group-hover:translate-x-0.5"
                                        >
                                            →
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </Reveal>
                    ))}
                </div>
            </Section>

            {/* ===== FROM THE FIELD — centered gallery ===== */}
            <Section className="py-16 md:py-24">
                <Reveal className="text-center">
                    <Eyebrow className="mx-auto">From the field</Eyebrow>
                    <h2 className="mt-4 font-mondwest text-[clamp(36px,6vw,96px)] font-[400] leading-[0.9] tracking-[-0.02em] text-ink">
                        From the field.
                    </h2>
                </Reveal>
                <Reveal delay={0.08} className="mx-auto mt-12 max-w-3xl">
                    <CyclingGallery photos={REAL_PHOTOS} interval={4200} />
                </Reveal>
            </Section>

            {/* ===== PRESS CTA ===== */}
            <Section className="pt-16 md:pt-24 pb-28 md:pb-40">
                <Reveal>
                    <Tick />
                    <h2 className="mt-7 max-w-[16ch] font-editorial text-[clamp(40px,6vw,96px)] font-[300] leading-[0.92] tracking-tight text-ink">
                        Press inquiries.
                    </h2>
                    <p className="mt-6 max-w-xl font-twk text-[18px] font-[350] leading-[1.55] text-ink/80">
                        Working on a story about youth financial literacy or student-led
                        nonprofits? We&apos;d love to talk. Email us and we&apos;ll send a
                        press kit with photos, stats, and quotes.
                    </p>
                    <div className="mt-10">
                        <VoltageCTA
                            href={`mailto:${APP_CONTACT_EMAIL}?subject=Press inquiry`}
                        >
                            Get the press kit
                        </VoltageCTA>
                    </div>
                </Reveal>
            </Section>
        </div>
    );
};

export default MediaPage;
