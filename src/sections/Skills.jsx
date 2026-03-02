import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';

const skillsData = [
    { category: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript', 'Redux'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'RESTful APIs', 'GraphQL'] },
    { category: 'Tools', items: ['Git', 'GitHub', 'Vercel', 'Figma', 'Docker', 'Jest'] },
    { category: 'Other', items: ['Responsive Design', 'Web Accessibility', 'Agile/Scrum', 'SEO Optimization'] }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

const Skills = () => {
    return (
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-slate-50/50 dark:bg-muted/30 rounded-3xl my-10 border border-border/50">
            <SectionTitle title="My Skills" subtitle="Technologies and tools I work with" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {skillsData.map((skillGroup, index) => (
                    <motion.div
                        key={index}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={containerVariants}
                        className="bg-white dark:bg-card p-6 rounded-2xl shadow-sm border border-border"
                    >
                        <h3 className="text-xl font-bold text-foreground mb-4 border-b border-border pb-2 inline-block">
                            {skillGroup.category}
                        </h3>
                        <ul className="space-y-3">
                            {skillGroup.items.map((item, i) => (
                                <motion.li
                                    key={i}
                                    variants={itemVariants}
                                    className="flex items-center text-muted-foreground"
                                >
                                    <span className="w-2 h-2 rounded-full bg-primary-500 mr-3"></span>
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
