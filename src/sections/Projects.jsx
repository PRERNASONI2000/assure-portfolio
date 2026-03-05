import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const projectsData = [
    {
        title: 'E-commerce Platform',
        description: 'A full-stack e-commerce solution with user authentication, payment processing, and a comprehensive admin dashboard.',
        tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        github: '#',
        live: '#'
    },
    {
        title: 'Task Management App',
        description: 'A sleek, intuitive task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
        tags: ['Next.js', 'Tailwind', 'Supabase', 'Framer Motion'],
        image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        github: '#',
        live: '#'
    },
    {
        title: 'AI Image Generator',
        description: 'A web application that leverages OpenAI\'s DALL-E API to generate striking images based on user text prompts.',
        tags: ['React', 'OpenAI API', 'Express'],
        image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        github: '#',
        live: '#'
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
                                <a
                                    href={project.github}
                                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-secondary/80 hover:bg-secondary text-secondary-foreground text-sm font-bold transition-all duration-300 border border-border hover:border-border/80"
                                    aria-label={`GitHub Repository of ${project.title}`}
                                >
                                    GitHub <Github size={16} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Projects;
