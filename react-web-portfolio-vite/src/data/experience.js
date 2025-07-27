import { FaBolt, FaCode } from "react-icons/fa"

export const experiences = [
    {
        company: "Statiq",
        role: "React Native Developer",
        period: "Mar 2023 - Present",
        icon: "/icons/statiq-logo.jpeg",
        summary:
            "Built India's leading EV charging app, with real-time communication and offline support features.",
        points: [
            "Built WebSocket features, geofencing push notifications (MoEngage), vehicle management, and a charger locator.",
            "Integrated e-commerce with Bluetooth-powered device setup and charging.",
            "Led 3 white-label apps end-to-end using Atomic Design + TypeScript.",
            "Added offline Bluetooth support and performance optimizations.",
            "Migrated JS codebase to TypeScript and Redux to RTK-Query.",
        ],
    },
    {
        company: "Onco.com",
        role: "Full Stack Developer",
        period: "Dec 2021 - Mar 2023",
        icon: "/icons/onco-logo.jpeg",
        summary:
            "Contributed to India's largest digitally connected cancer care platform, across web and mobile.",
        points: [
            "Developed key patient interaction features on Android & iOS using React Native.",
            "Built APIs for follow-ups, services, and appointment systems.",
            "Integrated WhatsApp automation with 20+ triggers for patient engagement.",
            "Implemented Detox and Cypress testing for apps and web services.",
            "Optimized UI and API performance for faster load and response times.",
        ],
    },
];
