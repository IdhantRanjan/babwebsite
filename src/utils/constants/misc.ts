import {
    BookOpenIcon,
    BriefcaseIcon,
    DollarSignIcon,
    GraduationCapIcon,
    HandshakeIcon,
    LineChartIcon,
    PiggyBankIcon,
    PresentationIcon,
    TargetIcon,
    TentIcon,
    TrophyIcon,
    UsersIcon,
} from "lucide-react";

export const DEFAULT_AVATAR_URL = "https://api.dicebear.com/8.x/initials/svg?backgroundType=gradientLinear&backgroundRotation=0,360&seed=";

export const PAGINATION_LIMIT = 10;

/* ---------- Hero photo grid ---------- */
// Real Build-A-Biz photos (from sessions we've run) shown first, with stock
// Unsplash placeholders filling out the grid until more are added.
const ALIVE_CENTER_PHOTOS = [
    "/programs/alive-center/IMG_5166.jpg",
    "/programs/alive-center/IMG_5223.jpg",
    "/programs/alive-center/IMG_5233.jpg",
    "/programs/alive-center/IMG_5244.jpg",
    "/programs/alive-center/IMG_5271.jpg",
    "/programs/alive-center/IMG_5297.jpg",
    "/programs/alive-center/IMG_5305.jpg",
    "/programs/alive-center/IMG_5306.jpg",
    "/programs/alive-center/IMG_5316.jpg",
    "/programs/alive-center/IMG_5330.jpg",
    "/programs/alive-center/IMG_5335.jpg",
    "/programs/alive-center/IMG_5362.jpg",
    "/programs/alive-center/IMG_5364.jpg",
    "/programs/alive-center/IMG_5370.jpg",
    "/programs/alive-center/IMG_5376.jpg",
    "/programs/alive-center/IMG_5378.jpg",
    "/programs/alive-center/IMG_5391.jpg",
    "/programs/alive-center/IMG_5395.jpg",
    "/programs/alive-center/IMG_5404.jpg",
    "/programs/alive-center/IMG_5417.jpg",
];

const YMCA_PHOTOS = [
    "/programs/ymca/ymca-1.jpg",
    "/programs/ymca/ymca-2.jpg",
    "/programs/ymca/IMG_6053.jpg",
    "/programs/ymca/IMG_6777.jpg",
    "/programs/ymca/IMG_6794.jpg",
    "/programs/ymca/IMG_6796.jpg",
    "/programs/ymca/IMG_8163.jpg",
    "/programs/ymca/IMG_7757.jpg",
    "/programs/ymca/IMG_8154.jpg",
    "/programs/ymca/IMG_7535.jpg",
    "/programs/ymca/IMG_6748.jpg",
    "/programs/ymca/IMG_8162.jpg",
    "/programs/ymca/IMG_8137.jpg",
    "/programs/ymca/3992EFB9-FD31-4860-AC7D-9E9DE54A3954.jpg",
    "/programs/ymca/IMG_1858.jpg",
    "/programs/ymca/IMG_6742.jpg",
    "/programs/ymca/IMG_6744.jpg",
];

const XILIN_PHOTOS = [
    "/programs/xilin/xilin-1.jpg",
    "/programs/xilin/xilin-2.jpg",
    "/programs/xilin/xilin-3.jpg",
];

// Diversified general pool, mixing alive-center, ymca, and xilin photos.
export const REAL_PHOTOS = [
    "/programs/alive-center/IMG_5404.jpg",
    "/programs/ymca/IMG_8154.jpg",
    "/programs/alive-center/IMG_5233.jpg",
    "/programs/xilin/xilin-1.jpg",
    "/programs/ymca/IMG_6053.jpg",
    "/programs/alive-center/IMG_5297.jpg",
    "/programs/ymca/IMG_8162.jpg",
    "/programs/alive-center/IMG_5166.jpg",
    "/programs/ymca/IMG_6742.jpg",
    "/programs/alive-center/IMG_5362.jpg",
    "/programs/xilin/xilin-2.jpg",
    "/programs/ymca/IMG_7757.jpg",
    "/programs/alive-center/IMG_5330.jpg",
    "/programs/ymca/IMG_6796.jpg",
    "/programs/alive-center/IMG_5395.jpg",
    "/programs/ymca/IMG_8137.jpg",
    "/programs/alive-center/IMG_5316.jpg",
    "/programs/xilin/xilin-3.jpg",
    "/programs/ymca/IMG_7535.jpg",
    "/programs/alive-center/IMG_5223.jpg",
    "/programs/ymca/IMG_6748.jpg",
    "/programs/alive-center/IMG_5306.jpg",
] as const;

export const HERO_PHOTOS = REAL_PHOTOS;

/* ---------- Partner / sponsor names ---------- */
export const PARTNERS = [
    { name: "GreenState Credit Union" },
    { name: "North Central College" },
    { name: "Alive Center" },
    { name: "YMCA" },
    { name: "School District 204" },
    { name: "School District 203" },
] as const;

export const PARTNER_LOGOS = [
    { name: "GreenState Credit Union", src: "/logos/greenstate.png" },
    { name: "North Central College", src: "/logos/north-central.png" },
    { name: "Alive Center", src: "/logos/alive-center.png" },
    { name: "YMCA", src: "/logos/ymca.png" },
    { name: "School District 204", src: "/logos/district-204.png" },
    { name: "School District 203", src: "/logos/district-203.png" },
    { name: "WGN", src: "/logos/wgn.png" },
] as const;

/* ---------- Impact stats ---------- */
export const STATS = [
    { value: "2000+", label: "Students Impacted" },
    { value: "20+", label: "Communities Served" },
    { value: "$5K", label: "Funding This Year" },
    { value: "100%", label: "Free for Students" },
] as const;

/* ---------- Mission "Why we exist" pillars ---------- */
export const PILLARS = [
    {
        title: "Financial Literacy",
        description:
            "Most schools never teach budgeting, credit, or investing. We change that with hands-on lessons.",
        icon: PiggyBankIcon,
    },
    {
        title: "Entrepreneurship",
        description:
            "Students design real products, pitch real ideas, and learn what it takes to build a business.",
        icon: BriefcaseIcon,
    },
    {
        title: "Real-World Mentors",
        description:
            "Business leaders, college professors, and credit union experts guide every session.",
        icon: HandshakeIcon,
    },
] as const;

/* ---------- Programs cards ---------- */
export const PROGRAMS = [
    {
        title: "Summer Camps",
        description:
            "Multi-day camps where students build a business idea from scratch: branding, budgeting, and a final pitch.",
        href: "/programs#camps",
        icon: TentIcon,
        tag: "Ages 8–16",
        image: "/programs/alive-center/IMG_5305.jpg",
    },
    {
        title: "School Workshops",
        description:
            "Interactive workshops we bring repeatedly to schools, libraries, and community centers throughout the year.",
        href: "/programs#workshops",
        icon: PresentationIcon,
        tag: "All grades",
        image: "/programs/ymca/ymca-1.jpg",
    },
    {
        title: "Financial Literacy Course",
        description:
            "A free, self-paced online course on budgeting, credit, and investing, built with GreenState Credit Union.",
        href: "/course",
        icon: GraduationCapIcon,
        tag: "High school",
        image: "/programs/alive-center/IMG_5391.jpg",
    },
] as const;

/* ---------- "How it works" steps ---------- */
export const PROCESS = [
    {
        title: "Sign up free",
        description:
            "Every Build-A-Biz program is free. Just pick a camp, workshop, or course and reserve a spot.",
        icon: TargetIcon,
    },
    {
        title: "Learn about money",
        description:
            "Master budgeting, investing, credit, and how wealth actually works, through hands-on lessons, not lectures.",
        icon: BookOpenIcon,
    },
    {
        title: "Build real skills",
        description:
            "Apply what you learn by designing a business, understanding financial decisions, and leaving with skills for life.",
        icon: TrophyIcon,
    },
] as const;

/* ---------- Locations ---------- */
export const LOCATIONS = [
    {
        name: "Alive Center Naperville",
        address: "Naperville, IL",
    },
    {
        name: "Alive Center Hanover Park",
        address: "Hanover Park, IL",
    },
    {
        name: "Alive Center Aurora",
        address: "Aurora, IL",
    },
    {
        name: "YMCA Safe N' Sound Program",
        address: "Naperville, IL",
    },
] as const;

/* ---------- Past & upcoming events ---------- */
export const EVENTS = [
    {
        title: "Financial Literacy Workshop",
        date: "Spring 2026",
        host: "Xilin Community Center",
        description: "Budgeting, saving, and smart money habits for students and families.",
        icon: LineChartIcon,
    },
    {
        title: "Money Smarts Series",
        date: "Spring 2026",
        host: "YMCA",
        description: "A hands-on series on credit, compound interest, and everyday finance.",
        icon: PiggyBankIcon,
    },
    {
        title: "Summer Finance Lab",
        date: "Summer 2026",
        host: "Alive Center",
        description: "An interactive summer workshop on budgeting, investing, and goal-setting.",
        icon: UsersIcon,
    },
    {
        title: "Global Financial Literacy",
        date: "2026",
        host: "Zambia",
        description: "Bringing Build-A-Biz financial literacy lessons to students in Zambia.",
        icon: BookOpenIcon,
    },
] as const;

/* ---------- Testimonials (placeholders, fill with real quotes later) ---------- */
export const TESTIMONIALS = [
    {
        name: "Parent, Naperville",
        role: "Camp parent",
        quote:
            "My son came home talking about compound interest. I didn't even learn that until college.",
    },
    {
        name: "Sarah K.",
        role: "Workshop attendee",
        quote:
            "I felt nervous about pitching. By the end I had a business idea I actually want to try.",
    },
    {
        name: "Mr. Patel",
        role: "Middle school teacher",
        quote:
            "Build-A-Biz brought the kind of real-world content my classroom doesn't have time to cover.",
    },
] as const;

/* ---------- Program archives (digital archive pages) ---------- */
export interface ProgramArchive {
    slug: string;
    name: string;
    location: string;
    badge: string;
    headline: string;
    intro: string;
    lessons: { title: string; description: string }[];
    /** Real photos from this program. If empty, only a "coming soon" slot is shown. */
    photos: string[];
    /** Optional lead image for the page hero. */
    heroImage?: string;
}

export const PROGRAM_ARCHIVES: ProgramArchive[] = [
    {
        slug: "ymca",
        name: "YMCA",
        location: "Naperville, IL",
        badge: "Program archive",
        headline: "Financial literacy with the YMCA.",
        intro:
            "Through the YMCA's Safe N' Sound program, Build-A-Biz brings recurring financial literacy lessons to students throughout the year, meeting them where they already learn and play.",
        lessons: [
            {
                title: "Budgeting Basics",
                description:
                    "Students learned the difference between wants and needs and built their first spending plans using the 50/30/20 rule.",
            },
            {
                title: "Saving & Goals",
                description:
                    "We explored short- and long-term savings goals and how small, consistent habits add up over time.",
            },
            {
                title: "Smart Spending",
                description:
                    "Hands-on activities on comparison shopping, advertising, and making intentional money decisions.",
            },
        ],
        photos: YMCA_PHOTOS,
        heroImage: "/programs/ymca/IMG_6053.jpg",
    },
    {
        slug: "alive-center",
        name: "Alive Center",
        location: "Naperville · Hanover Park · Aurora, IL",
        badge: "Program archive",
        headline: "Workshops at the Alive Center.",
        intro:
            "The Alive Center gives teens a space to grow, and Build-A-Biz has run financial literacy and entrepreneurship workshops across all three locations: Naperville, Hanover Park, and Aurora.",
        lessons: [
            {
                title: "Intro to Investing",
                description:
                    "Students learned how stocks, compound interest, and long-term investing actually work.",
            },
            {
                title: "Credit & Loans",
                description:
                    "We broke down credit scores, loans, and the real cost of carrying a balance.",
            },
            {
                title: "Build a Business",
                description:
                    "Teens designed and pitched real business ideas in a condensed entrepreneurship sprint.",
            },
        ],
        photos: ALIVE_CENTER_PHOTOS,
        heroImage: "/programs/alive-center/IMG_5305.jpg",
    },
    {
        slug: "xilin",
        name: "Xilin Association",
        location: "Naperville, IL",
        badge: "Program archive",
        headline: "Partnering with the Xilin Association.",
        intro:
            "Working with the Xilin Community Center, Build-A-Biz delivers financial literacy workshops that reach students and families across the community.",
        lessons: [
            {
                title: "Money Foundations",
                description:
                    "An introduction to earning, saving, and budgeting for students of all ages.",
            },
            {
                title: "Banking & Accounts",
                description:
                    "How checking, savings, and credit union accounts work, and how to use them wisely.",
            },
            {
                title: "Planning Ahead",
                description:
                    "Setting financial goals and understanding how today's decisions shape the future.",
            },
        ],
        photos: XILIN_PHOTOS,
        heroImage: "/programs/xilin/xilin-1.jpg",
    },
    {
        slug: "zambia",
        name: "Zambia",
        location: "Delivered live over Zoom",
        badge: "Global program",
        headline: "Financial literacy from Illinois to Zambia.",
        intro:
            "Build-A-Biz extends its mission internationally, teaching students in Zambia live over Zoom with slideshows and videos. We scope each group's access to computers and comfort online, integrate the GreenState course, and run pre- and post-tests throughout, with prizes for the top scorers, all to prove financial education should be a birthright, not a privilege.",
        lessons: [
            {
                title: "Digital Literacy",
                description:
                    "A simple digital literacy program that gets students comfortable with the online tools we teach with, building the foundation for everything that follows.",
            },
            {
                title: "Business Foundations",
                description:
                    "The basics of starting a business: debts, loans, credit cards, and business models, with an emphasis on Africa-based realities like microloans.",
            },
            {
                title: "Local Case Study",
                description:
                    "Students study a real local African business, then research one of their own, discussing its business model and where the pitch could improve.",
            },
            {
                title: "Ideation & Proof of Concept",
                description:
                    "From a raw idea to a legitimate concept: students generate proof of concept, validate the idea, and shape a draft product or MVP.",
            },
            {
                title: "Marketing & Technology",
                description:
                    "Marketing with a focus on technology, from making ads on Canva to market research and drafting a simple website for the product.",
            },
            {
                title: "Pitch Competition",
                description:
                    "Students build a pitch deck and one-pager, present with professionalism and real social skills, and compete for a cash prize.",
            },
        ],
        photos: [
            "/programs/zambia/zambia-1.jpg",
            "/programs/zambia/zambia-2.jpg",
            "/programs/zambia/zambia-3.jpg",
            "/programs/zambia/zambia-4.jpg",
            "/programs/zambia/zambia-5.jpg",
            "/programs/zambia/zambia-6.jpg",
            "/programs/zambia/zambia-7.jpg",
            "/programs/zambia/zambia-8.jpg",
            "/programs/zambia/zambia-9.jpg",
            "/programs/zambia/zambia-10.jpg",
        ],
        heroImage: "/programs/zambia/zambia-2.jpg",
    },
];

/* ---------- Team ---------- */
export interface TeamMember {
    name: string;
    role: string;
    initials: string;
    image?: string;
}

export const TEAM: TeamMember[] = [
    {
        name: "Idhant Ranjan",
        role: "Co-Founder & President",
        initials: "IR",
        image: "/team/idhant.jpg",
    },
    {
        name: "Aditya Rakshit",
        role: "Co-Founder · President Emeritus",
        initials: "AR",
        image: "/team/aditya.jpg",
    },
    {
        name: "David Sun",
        role: "Co-Founder · President Emeritus",
        initials: "DS",
    },
    {
        name: "Ankita Senapati",
        role: "Co-Founder · President Emeritus",
        initials: "AS",
        image: "/team/ankita.jpg",
    },
    {
        name: "James",
        role: "Director of Entrepreneurship",
        initials: "J",
    },
    {
        name: "Veer Patel",
        role: "Co-Director of Financial Literacy",
        initials: "VP",
        image: "/team/veer.jpg",
    },
    {
        name: "Sarit Bose",
        role: "Co-Director of Financial Literacy",
        initials: "SB",
        image: "/team/sarit.jpg",
    },
    {
        name: "Srestha Mitra",
        role: "Co-Director of Curriculum Development",
        initials: "SM",
    },
    {
        name: "Archi Chennur",
        role: "Co-Director of Curriculum Development",
        initials: "AC",
    },
];
