import { motion } from "framer-motion";
import { experiences } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-white dark:bg-gray-900">
      <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
        Experience
      </h2>
      <div className="relative border-l-4 border-blue-500 max-w-4xl mx-auto space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="pl-6 relative"
          >
            <img
              src={exp.icon}
              alt={`${exp.company} logo`}
              className="absolute -left-10 top-1 w-10 h-10 object-contain bg-white dark:bg-gray-900 p-1 rounded-full shadow"
            />
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
              {exp.role}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {exp.company} — {exp.period}
            </p>
            <p className="mt-2 italic text-gray-700 dark:text-gray-300">
              {exp.summary}
            </p>
            <ul className="mt-3 list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
              {exp.points.map((point: string, i:number) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};