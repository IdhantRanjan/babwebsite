import {
    Eyebrow,
    GhostLink,
    ImageTile,
    Reveal,
    Section,
    Tick,
    VoltageCTA,
} from "@/components/ui/editorial";
import { RevealImage, RevealLines } from "@/components/ui/motion";
import { APP_CONTACT_EMAIL, type ProgramArchive } from "@/utils";

interface ProgramArchivePageProps {
    data: ProgramArchive;
}

export const ProgramArchivePage = ({ data }: ProgramArchivePageProps) => {
    const photos = data.photos;
    const hasPhotos = photos.length > 0;

    return (
        <div className="bg-linen text-ink">
            {/* ===== HERO ===== */}
            <Section className="pt-12 md:pt-20 pb-12 md:pb-16">
                <Tick />
                <Eyebrow className="mt-6">{data.badge}</Eyebrow>
                <RevealLines
                    as="h1"
                    immediate
                    delay={0.08}
                    lines={[data.headline]}
                    className="mt-7 max-w-[16ch] font-editorial text-[clamp(42px,7vw,116px)] font-[300] leading-[0.92] tracking-[-0.02em] text-ink"
                />
                <div className="mt-12 grid grid-cols-1 items-end gap-x-10 gap-y-10 lg:grid-cols-12">
                    {data.heroImage ? (
                        <RevealImage
                            immediate
                            delay={0.3}
                            className="rounded-[14px] lg:col-span-7"
                        >
                            <ImageTile
                                src={data.heroImage}
                                className="aspect-[16/10] w-full"
                                sizes="(max-width: 1024px) 100vw, 58vw"
                                priority
                            />
                        </RevealImage>
                    ) : null}
                    <Reveal
                        delay={0.12}
                        className={
                            data.heroImage
                                ? "lg:col-span-4 lg:col-start-9"
                                : "lg:col-span-7"
                        }
                    >
                        <p className="font-twk text-[17px] font-[350] leading-[1.55] text-ink/85">
                            {data.intro}
                        </p>
                        <p className="mt-6 font-mondwest text-[16px] italic text-sage">
                            {data.location}
                        </p>
                    </Reveal>
                </div>
            </Section>

            {/* ===== LESSONS ===== */}
            <Section className="py-16 md:py-24">
                <Reveal>
                    <Eyebrow>What we taught</Eyebrow>
                    <h2 className="mt-4 font-mondwest text-[clamp(36px,6vw,96px)] font-[400] leading-[0.9] tracking-[-0.02em] text-ink">
                        Lessons from {data.name}.
                    </h2>
                </Reveal>
                <div className="mt-14 flex flex-col">
                    {data.lessons.map((lesson, i) => (
                        <Reveal key={lesson.title} delay={0.04 * i}>
                            <div className="grid grid-cols-1 items-baseline gap-3 border-t border-mist py-8 md:grid-cols-12 md:gap-10">
                                <span className="font-twk text-[11px] tabular-nums text-sage md:col-span-1">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <h3 className="font-editorial text-[clamp(28px,3.6vw,48px)] font-[300] leading-[1] tracking-tight text-ink md:col-span-5">
                                    {lesson.title}
                                </h3>
                                <p className="font-twk text-[15px] font-[350] leading-[1.55] text-ink/75 md:col-span-6">
                                    {lesson.description}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                    <div className="border-t border-mist" />
                </div>
            </Section>

            {/* ===== PHOTO ARCHIVE — aligned grid ===== */}
            <Section className="py-16 md:py-24">
                <Reveal>
                    <Eyebrow>Photo archive</Eyebrow>
                    <h2 className="mt-4 font-editorial text-[clamp(36px,5vw,72px)] font-[300] leading-[0.95] tracking-tight text-ink">
                        Moments from {data.name}.
                    </h2>
                    <p className="mt-5 max-w-xl font-twk text-[16px] font-[350] leading-[1.55] text-ink/70">
                        {hasPhotos
                            ? "Photographs from our sessions. New pictures are added after every program."
                            : "We're adding photos as we run more sessions. Check back soon."}
                    </p>
                </Reveal>

                {hasPhotos ? (
                    <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 md:gap-8">
                        {photos.map((src, i) => (
                            <RevealImage
                                key={src}
                                delay={0.03 * (i % 6)}
                                className="rounded-[14px]"
                            >
                                <ImageTile
                                    src={src}
                                    className="aspect-[4/3]"
                                    sizes="(max-width: 768px) 50vw, 33vw"
                                />
                            </RevealImage>
                        ))}
                    </div>
                ) : (
                    <Reveal delay={0.08} className="mt-12">
                        <div className="flex aspect-[16/7] items-center justify-center rounded-[14px] border border-dashed border-mist">
                            <span className="font-mondwest text-[18px] italic text-sage">
                                Photos from {data.name} coming soon
                            </span>
                        </div>
                    </Reveal>
                )}
            </Section>

            {/* ===== CTA ===== */}
            <Section className="pt-16 md:pt-24 pb-28 md:pb-40">
                <Reveal>
                    <Tick />
                    <h2 className="mt-7 max-w-[18ch] font-editorial text-[clamp(40px,6vw,96px)] font-[300] leading-[0.92] tracking-tight text-ink">
                        Want a program like this near you?
                    </h2>
                    <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                        <VoltageCTA
                            href={`mailto:${APP_CONTACT_EMAIL}?subject=Program partnership`}
                        >
                            Partner with us
                        </VoltageCTA>
                        <GhostLink href="/about" arrow>
                            About Build-A-Biz
                        </GhostLink>
                    </div>
                </Reveal>
            </Section>
        </div>
    );
};
