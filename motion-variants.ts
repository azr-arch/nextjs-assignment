import { delay } from "motion/react";

export const listVariant = {
    hidden: { opacity: 0, delay: 0.5 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.3,
        },
    },
};

export const listItemVariant = {
    hidden: { opacity: 0, x: "-100%" },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            ease: "easeOut",
        },
    },
};

export const fadeIn = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
    },
};

export const featureListVariant = {
    hidden: {
        x: "-100",
    },
    show: {
        x: 0,
        transition: {},
    },
};

export const featureItemVariant = {
    hidden: {
        opacity: 0,
        scale: 0.5,
    },
    show: {
        scale: 1,
        opacity: 1,
        transition: {
            delay: 0.3,
        },
    },
};
