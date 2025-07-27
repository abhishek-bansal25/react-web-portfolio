import React from "react";
import TechStack from "./TechStack";

export const Hero = () => {
    return (
        <div className="px-6 py-12 text-center" data-aos="fade-up">
            <h1 className="text-4xl font-bold mb-4">Hi, I'm Abhishek Bansal</h1>
            <div className="max-w-6xl mx-auto px-4 sm:px-8">
                <p className="text-lg mb-6 text-gray-500 mx-8">
                    With 3.5 years of hands-on experience in React Native, I've built and optimized production-grade mobile apps with a strong focus on UI smoothness, performance tuning, and system integrations using Firebase, WebSockets, and native modules. Now expanding into modern web development, I'm working with React, TypeScript, Vite, and Tailwind CSS to craft fast, responsive, and scalable web applications.
                </p>
            </div>
            <div className="space-x-4">
                <a href="/projects" className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600">See Projects</a>
                <a href="/contact" className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">Contact Me</a>
            </div>
            {/* <section className="mt-16" data-aos="fade-up">
                <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
                <div className="flex flex-wrap justify-center gap-4 text-gray-800">
                    <span className="bg-gray-100 px-4 py-2 rounded">React</span>
                    <span className="bg-gray-100 px-4 py-2 rounded">React Native</span>
                    <span className="bg-gray-100 px-4 py-2 rounded">Tailwind</span>
                    <span className="bg-gray-100 px-4 py-2 rounded">Node.js</span>
                    <span className="bg-gray-100 px-4 py-2 rounded">Firebase</span>
                </div>
            </section> */}
            <TechStack />
        </div>
    )
}