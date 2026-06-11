import {
    BuildingIcon,
    GlobeIcon,
    HandshakeIcon,
    HeartHandshakeIcon,
    LucideIcon,
    NewspaperIcon,
    PresentationIcon,
    SparklesIcon,
    TentIcon,
} from "lucide-react";

export interface NavMenuItem {
    title: string;
    tagline: string;
    href: string;
    icon: LucideIcon;
}

export interface NavLink {
    title: string;
    href: string;
    menu?: NavMenuItem[];
}

export const NAV_LINKS: NavLink[] = [
    {
        title: "Programs",
        href: "/camps",
        menu: [
            {
                title: "Camps",
                tagline: "5-day hands-on summer experiences.",
                href: "/camps",
                icon: TentIcon,
            },
            {
                title: "Workshops",
                tagline: "Single-session workshops at schools and libraries.",
                href: "/workshops",
                icon: PresentationIcon,
            },
            {
                title: "YMCA",
                tagline: "Our recurring program with the YMCA.",
                href: "/ymca",
                icon: HeartHandshakeIcon,
            },
            {
                title: "Alive Center",
                tagline: "Workshops across all three Alive Center locations.",
                href: "/alive-center",
                icon: SparklesIcon,
            },
            {
                title: "Xilin Association",
                tagline: "Financial literacy with the Xilin community.",
                href: "/xilin",
                icon: BuildingIcon,
            },
            {
                title: "Zambia",
                tagline: "Bringing financial literacy across the globe.",
                href: "/zambia",
                icon: GlobeIcon,
            },
        ],
    },
    {
        title: "Course",
        href: "/course",
    },
    {
        title: "About Us",
        href: "/about",
        menu: [
            {
                title: "Mission & Impact",
                tagline: "What we do, who we are, and the numbers behind it.",
                href: "/about",
                icon: HandshakeIcon,
            },
            {
                title: "Media",
                tagline: "Photos, press, and highlights from our events.",
                href: "/media",
                icon: NewspaperIcon,
            },
        ],
    },
];
