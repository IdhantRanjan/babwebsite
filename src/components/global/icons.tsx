import Image from "next/image";
import { LucideProps } from "lucide-react";

interface LogoProps {
    className?: string;
    size?: number;
}

export const Icons = {
    logo: ({ className, size = 40 }: LogoProps) => (
        <Image
            src="/logo.png"
            alt="Build-A-Biz logo"
            width={size}
            height={size}
            className={className}
            priority
        />
    ),
    bolt: (props: LucideProps) => (
        <svg
            {...props}
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
        </svg>
    ),
};
