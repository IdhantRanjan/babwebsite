// constants
import { LIST_ITEM_VARIANTS, CHILD_VARIANTS, FADE_IN_VARIANTS, MODAL_VARIANTS } from "./constants/animation";
import { APP_DOMAIN, APP_HOSTNAMES, APP_NAME, APP_TAGLINE, APP_CONTACT_EMAIL, APP_LOCATION } from "./constants/site";
import {
    DEFAULT_AVATAR_URL,
    PAGINATION_LIMIT,
    HERO_PHOTOS,
    REAL_PHOTOS,
    PARTNERS,
    PARTNER_LOGOS,
    STATS,
    PILLARS,
    PROGRAMS,
    PROCESS,
    LOCATIONS,
    EVENTS,
    TESTIMONIALS,
    TEAM,
    PROGRAM_ARCHIVES,
} from "./constants/misc";
export type { ProgramArchive } from "./constants/misc";
import { NAV_LINKS } from "./constants/nav-links";
import { aeonik, inter, editorialNew, mondwest } from "./constants/fonts";

// functions
import { cn } from "./functions/cn";
import { isValidUrl } from "./functions/urls";
import { generateMetadata } from "./functions/metadata";

export {
    // animation
    LIST_ITEM_VARIANTS,
    CHILD_VARIANTS,
    FADE_IN_VARIANTS,
    MODAL_VARIANTS,
    // site
    APP_DOMAIN,
    APP_HOSTNAMES,
    APP_NAME,
    APP_TAGLINE,
    APP_CONTACT_EMAIL,
    APP_LOCATION,
    // misc
    DEFAULT_AVATAR_URL,
    PAGINATION_LIMIT,
    HERO_PHOTOS,
    REAL_PHOTOS,
    PARTNERS,
    PARTNER_LOGOS,
    STATS,
    PILLARS,
    PROGRAMS,
    PROCESS,
    LOCATIONS,
    EVENTS,
    TESTIMONIALS,
    TEAM,
    PROGRAM_ARCHIVES,
    // nav
    NAV_LINKS,
    // fonts
    aeonik,
    inter,
    editorialNew,
    mondwest,
    // functions
    cn,
    isValidUrl,
    generateMetadata,
};
