import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Triangle } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const projectsData = [
    {
        title: 'Admin Dashboard Dashboard',
        description: 'A modern and responsive admin dashboard built with React, featuring sidebar navigation, dashboard statistics cards, sales overview chart, recent activity section, and light/dark mode UI for a clean management experience.',
         tags: ['React', 'JavaScript', 'CSS', 'Responsive Design', 'Chart UI'],
        image: '/admin-panel.png',
        github: 'https://github.com/PRERNASONI2000/ReactAdminPanel',
        live: 'https://prernasoni2000.github.io/ReactAdminPanel/'
    },
    {
        title: 'UGCStudioAI',
        description: 'World’s First UGC Video Maker that Creates Realistic, Human-Like UGC Videos for Your Brand in 20+ Languages, in Just Minutes.',
        tags: ['HTML', 'BootStrap', 'CSS', 'JQuery Plugins', 'Responsive Design'],
        image: '/ugcstudio.png',
        github: '#',
        live: 'https://ugcstudioai.pro/partners/'
    },
    {
       title: 'Interior Design Landing Page',
  description: 'A modern and responsive interior design landing page designed in Figma and developed in React, featuring a custom slider, reusable components, and a clean user-focused UI.',
  tags: ['React', 'Vite', 'TailwindCSS', 'Figma', 'Responsive Design'],
        image: '/idesign.png',
        vercel: 'https://vercel.com/prernasoni2000s-projects',
        live: 'https://idesign-kohl.vercel.app/'
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

const Projects = () => {
    return (
        <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
            {/* Background subtle elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary-600/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>

            <SectionTitle
                title="Featured Projects"
                subtitle="A showcase of my recent frontend development work and technical creations."
            />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
            >
                {projectsData.map((project, index) => (
                    <motion.div
                        key={index}
                        variants={projectVariants}
                        whileHover={{ scale: 1.05 }}
                        className="group relative flex flex-col bg-card/80 backdrop-blur-sm border border-border/50 rounded-[20px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-400 z-10 dark:shadow-black/40"
                    >
                        {/* Subtle Card Gradient Background on Hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                        {/* Project Image */}
                        <div className="relative h-56 w-full overflow-hidden">
                            <div className="absolute inset-0 bg-primary-600/10 group-hover:bg-transparent transition-colors duration-400 z-10"></div>
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-out"
                            />
                        </div>

                        {/* Project Info */}
                        <div className="p-6 flex flex-col flex-grow relative z-20">
                            <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary-500 transition-colors duration-300">
                                {project.title}
                            </h3>

                            <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                                {project.description}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1.5 text-xs font-semibold bg-primary-600/10 text-primary-600 dark:text-primary-400 rounded-full border border-primary-600/20"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Buttons */}
                            <div className="flex gap-4 mt-auto">
                                <a
                                    href={project.live}
                                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-primary-600 hover:bg-gradient-to-r hover:from-primary-500 hover:to-indigo-500 text-white text-sm font-bold transition-all duration-300 shadow-md hover:shadow-primary-500/25"
                                    aria-label={`Live Demo of ${project.title}`}
                                >
                                    Live Demo <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </a>
                                {project.github ? (<a
                                    href={project.github}
                                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-secondary/80 hover:bg-secondary text-secondary-foreground text-sm font-bold transition-all duration-300 border border-border hover:border-border/80"
                                    aria-label={`GitHub Repository of ${project.title}`}
                                >
                                    GitHub <Github size={16} />
                                </a>): project.vercel? (
                                    <a
                                    href={project.vercel}
                                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-secondary/80 hover:bg-secondary text-secondary-foreground text-sm font-bold transition-all duration-300 border border-border hover:border-border/80"
                                    aria-label={`GitHub Repository of ${project.title}`}
                                >
                                    Vercel <Triangle size={16} />
                                </a>
                                ): null}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Projects;
