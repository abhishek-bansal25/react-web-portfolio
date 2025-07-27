import { motion } from "framer-motion";

const techStack = [
    { name: "React", icon: "/icons/react-original.svg" },
    { name: "React Native", icon: "/icons/react-original.svg" },
    { name: "TypeScript", icon: "/icons/typescript-original.svg" },
    { name: "Javascript", icon: "/icons/javascript-original.svg" },
    { name: "Node.js", icon: "/icons/nodejs-plain-wordmark.svg" },
    { name: "Redux", icon: "/icons/redux-original.svg" },
    { name: "Cypress", icon: "/icons/cypressio-original.svg" },
];

const TechStack = () => {
    return (
        <section id="tech-stack" className="py-20 bg-white dark:bg-gray-950 px-6">
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
                Tech Stack and skills
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {techStack.map((tech, index) => (
                    <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group relative p-[1px] rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 
                                    hover:from-pink-500 hover:to-yellow-500 transition duration-300"
                    >
                        <div className="bg-white dark:bg-gray-900 rounded-xl p-5 flex flex-col items-center justify-center h-full">
                            <img
                                src={tech.icon}
                                alt={tech.name}
                                className="w-12 h-12 object-contain mb-2 group-hover:scale-110 transition"
                            />
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-500">
                                {tech.name}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default TechStack;
