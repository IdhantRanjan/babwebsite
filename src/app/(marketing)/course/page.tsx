import {
    Eyebrow,
    GhostLink,
    Reveal,
    Section,
    Tick,
    VoltageCTA,
} from "@/components/ui/editorial";
import { Highlight } from "@/components/ui/highlight";
import { RevealLines } from "@/components/ui/motion";
import { ScrollingColumn } from "@/components/ui/scrolling-column";
import { APP_CONTACT_EMAIL } from "@/utils";

const COURSE_URL = "https://www.moneyright.gs/BuildABiz";

/* The financial literacy course is delivered through GreenState Credit
   Union's MoneyRight platform. These are the modules students work through. */
const MODULES = [
    {
        title: "Budget Basics for High School",
        description:
            "The basics of budgeting and important related concepts that can be applied for the future.",
        minutes: 22,
    },
    {
        title: "Smart Spending",
        description:
            "Master the art of spending with intention, building a plan that works in real life and avoiding spending under pressure.",
        minutes: 34,
    },
    {
        title: "Choices About Money",
        description:
            "Financial decisions almost always involve a trade-off, getting something now usually means giving up something else.",
        minutes: 24,
    },
    {
        title: "The Psychology of Money",
        description:
            "Your brain is wired to spend now and worry later, learn why saving feels hard and what you can do about it.",
        minutes: 16,
    },
    {
        title: "Borrowing and Credit",
        description:
            "Understand how credit really works, from building your score and reading reports to how interest adds up.",
        minutes: 39,
    },
    {
        title: "Understanding Interest",
        description:
            "Einstein supposedly called compound interest the eighth wonder of the world. Was he right?",
        minutes: 20,
    },
    {
        title: "Introduction to Investing",
        description:
            "Learn how to save your money, which accounts to consider, and how fees may quietly eat into your returns.",
        minutes: 20,
    },
    {
        title: "Investing in the Modern World",
        description:
            "What moves the markets, who keeps them fair, and how to tell solid advice from social media hype.",
        minutes: 26,
    },
    {
        title: "Investing: Accounts, Taxes, and Advice",
        description:
            "Go deeper into investment taxes, when to hire an advisor, and how career value and retirement savings work together.",
        minutes: 18,
    },
    {
        title: "Financial Services",
        description:
            "A look at commonly used financial services and accounts, including banks, credit unions, and alternatives.",
        minutes: 27,
    },
    {
        title: "Managing Financial Accounts",
        description:
            "How to get the most from financial services while minimizing fees and protecting your personal information.",
        minutes: 21,
    },
    {
        title: "Financial Health",
        description:
            "What does it mean to be financially healthy? How do you measure it? Let's take a look.",
        minutes: 18,
    },
    {
        title: "How Taxes Work",
        description:
            "Demystify how taxes work, why your paycheck may be smaller than expected, and what to know before filing.",
        minutes: 14,
    },
    {
        title: "Earning a Living",
        description:
            "Your choices about careers and employer benefits are some of the biggest financial decisions you'll make.",
        minutes: 31,
    },
    {
        title: "Insurance Basics",
        description:
            "Learn which types of insurance actually matter at every life stage and how to choose wisely.",
        minutes: 32,
    },
    {
        title: "Protecting Your Identity",
        description:
            "Learn how identity thieves and scammers operate and the steps that keep your information safe.",
        minutes: 25,
    },
    {
        title: "Consumer Rights and Protection",
        description:
            "The laws and tools that protect you every time you buy, and how to fight back when something goes wrong.",
        minutes: 21,
    },
    {
        title: "Recognizing Financial Problems",
        description:
            "Spot the warning signs of financial trouble early and learn the strategies that help people climb out of debt.",
        minutes: 30,
    },
    {
        title: "Buying a Car",
        description:
            "Every step of buying a car, from choosing the right model to negotiating a fair deal and financing.",
        minutes: 30,
    },
    {
        title: "Renting an Apartment",
        description:
            "From figuring out what you can afford to splitting costs with roommates, get ready for your first lease.",
        minutes: 20,
    },
    {
        title: "Buying a Home",
        description:
            "The pros and cons of buying a home, including a comparison with renting.",
        minutes: 22,
    },
    {
        title: "Paying for College",
        description:
            "Learn about financial aid, how to choose the right loans, and repaying college debt.",
        minutes: 21,
    },
    {
        title: "Education and Financial Success",
        description:
            "Why college is a great investment, even though it has an increasingly high cost.",
        minutes: 22,
    },
    {
        title: "Planning for Your Future",
        description:
            "Map out your financial future, investing basics, risk management, and the accounts that grow your money.",
        minutes: 28,
    },
    {
        title: "Starting a Business",
        description:
            "A look at the concepts involved with starting a business as a teen.",
        minutes: 37,
    },
    {
        title: "The Economy and You",
        description:
            "How economic systems, businesses, households, government policies, and trade affect daily life.",
        minutes: 22,
    },
    {
        title: "Government and the Economy",
        description:
            "How government rules, taxes, policies, and global trade work together to shape the modern economy.",
        minutes: 27,
    },
];

const totalMinutes = MODULES.reduce((sum, m) => sum + m.minutes, 0);

const FACTS = [
    { value: `${MODULES.length}`, label: "Course modules" },
    { value: `${Math.round(totalMinutes / 60)}+ hrs`, label: "Of lessons" },
    { value: "Online", label: "Self-paced" },
    { value: "Free", label: "For all students" },
];

const CoursePage = () => {
    const moduleItems = MODULES.map((m) => ({
        title: m.title,
        subtitle: `${m.minutes} min`,
        body: m.description,
    }));
    const per = Math.ceil(moduleItems.length / 3);
    const cols = [
        moduleItems.slice(0, per),
        moduleItems.slice(per, per * 2),
        moduleItems.slice(per * 2),
    ];

    return (
        <div className="bg-linen text-ink">
            {/* ===== HERO — video front and center ===== */}
            <Section className="pt-12 md:pt-20 pb-12 md:pb-16">
                <Tick />
                <Eyebrow className="mt-6">Course · with GreenState Credit Union</Eyebrow>
                <RevealLines
                    as="h1"
                    immediate
                    delay={0.1}
                    lines={["The financial", "literacy course."]}
                    className="mt-7 font-editorial text-[clamp(48px,8.5vw,128px)] font-[300] leading-[0.9] tracking-[-0.02em] text-ink"
                />
                <Reveal delay={0.12} className="mt-10">
                    <div className="relative overflow-hidden rounded-[18px] border border-mist bg-bark shadow-voltage">
                        <video
                            src="/videos/course-promo.mp4"
                            autoPlay
                            muted
                            loop
                            controls
                            playsInline
                            preload="metadata"
                            className="block aspect-video h-auto w-full object-cover"
                        />
                    </div>
                </Reveal>
                <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
                    <Reveal delay={0.1} className="lg:col-span-7">
                        <p className="max-w-2xl font-twk text-[18px] font-[350] leading-[1.55] text-ink/85">
                            A complete, self-paced course built with GreenState Credit
                            Union. Budgeting, credit, investing, taxes, and everything in
                            between, <Highlight variant="marker">free for every student</Highlight>.
                        </p>
                    </Reveal>
                    <Reveal delay={0.14} className="lg:col-span-4 lg:col-start-9">
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-4 lg:justify-end">
                            <VoltageCTA href={COURSE_URL} target="_blank" rel="noopener noreferrer">
                                Start the course
                            </VoltageCTA>
                            <GhostLink href="#modules" arrow>
                                See what&apos;s inside
                            </GhostLink>
                        </div>
                    </Reveal>
                </div>
            </Section>

            {/* ===== ABOUT + ACCESS (close to the header) ===== */}
            <Section className="py-16 md:py-24">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
                    <Reveal className="lg:col-span-7">
                        <Eyebrow>About the course</Eyebrow>
                        <h2 className="mt-4 font-editorial text-[clamp(36px,5vw,80px)] font-[300] leading-[0.95] tracking-tight text-ink">
                            Real personal finance, start to finish.
                        </h2>
                        <p className="mt-6 max-w-xl font-twk text-[18px] font-[350] leading-[1.55] text-ink/80">
                            The course is delivered through GreenState Credit Union&apos;s
                            MoneyRight platform. Students move through interactive modules
                            at their own pace and finish with a graded assessment. Along
                            the way, they can complete a scholarship module to become
                            eligible for a <Highlight>$1,000 award</Highlight>.
                        </p>
                        <p className="mt-4 max-w-xl font-twk text-[16px] font-[350] leading-[1.55] text-ink/70">
                            It&apos;s the same financial education trusted by hundreds of
                            organizations, made free for Build-A-Biz students.
                        </p>

                        {/* Quick facts row */}
                        <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
                            {FACTS.map((f) => (
                                <div key={f.label}>
                                    <div className="font-mondwest text-[clamp(32px,4vw,56px)] font-[400] leading-[0.85] tracking-[-0.02em] text-ink">
                                        {f.value}
                                    </div>
                                    <div className="mt-3 font-twk text-[12px] font-[350] uppercase tracking-[0.06em] text-sage">
                                        {f.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Reveal>

                    <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
                        <div className="rounded-[18px] border border-mist bg-white/40 p-8">
                            <Eyebrow>Access</Eyebrow>
                            <h3 className="mt-3 font-editorial text-[30px] font-[300] leading-[1.05] text-ink">
                                Open the course on MoneyRight.
                            </h3>
                            <p className="mt-3 font-twk text-[15px] font-[350] leading-[1.55] text-ink/70">
                                Hosted on GreenState&apos;s secure platform. Log in and
                                start learning, no cost, no catch.
                            </p>
                            <div className="mt-7">
                                <VoltageCTA
                                    href={COURSE_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full justify-between"
                                >
                                    Open the course
                                </VoltageCTA>
                            </div>
                            <p className="mt-4 text-center font-mondwest text-[14px] italic text-sage">
                                moneyright.gs/BuildABiz
                            </p>
                        </div>
                    </Reveal>
                </div>
            </Section>

            {/* ===== MODULES — scrolling tiles ===== */}
            <Section id="modules" className="py-16 md:py-24">
                <Reveal>
                    <Eyebrow>Inside the course</Eyebrow>
                    <h2 className="mt-4 font-editorial text-[clamp(40px,6vw,96px)] font-[300] leading-[0.92] tracking-tight text-ink">
                        {MODULES.length} modules of financial literacy.
                    </h2>
                    <p className="mt-5 max-w-xl font-twk text-[16px] font-[350] leading-[1.55] text-ink/70">
                        Each module is a short, interactive lesson on a real-world money
                        topic. Work through them in any order.
                    </p>
                </Reveal>
                <div className="mt-12 flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[680px] overflow-hidden">
                    <ScrollingColumn items={cols[0]} duration={28} />
                    <ScrollingColumn
                        items={cols[1]}
                        duration={34}
                        className="hidden md:block"
                    />
                    <ScrollingColumn
                        items={cols[2]}
                        duration={30}
                        className="hidden lg:block"
                    />
                </div>
            </Section>

            {/* ===== CTA ===== */}
            <Section className="pt-16 md:pt-24 pb-28 md:pb-40">
                <Reveal>
                    <Tick />
                    <h2 className="mt-7 max-w-[14ch] font-editorial text-[clamp(40px,6vw,96px)] font-[300] leading-[0.92] tracking-tight text-ink">
                        Start learning today.
                    </h2>
                    <p className="mt-6 max-w-md font-twk text-[18px] font-[350] leading-[1.5] text-ink/80">
                        The full course is free and self-paced. Questions about getting
                        your school or group set up?
                    </p>
                    <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                        <VoltageCTA href={COURSE_URL} target="_blank" rel="noopener noreferrer">
                            Start the course
                        </VoltageCTA>
                        <GhostLink
                            href={`mailto:${APP_CONTACT_EMAIL}?subject=Course inquiry`}
                            arrow
                        >
                            Email us
                        </GhostLink>
                    </div>
                </Reveal>
            </Section>
        </div>
    );
};

export default CoursePage;
