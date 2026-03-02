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
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Projects = () => {
    return (
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <SectionTitle title="Some Things I've Built" subtitle="A selection of my recent works" />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-24"
            >
                {projectsData.map((project, index) => (
                    <motion.div
                        key={index}
                        variants={projectVariants}
                        className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-12 relative`}
                    >
                        {/* Project Image */}
                        <div className="w-full md:w-3/5 group relative">
                            <div className="absolute inset-0 bg-primary-600/20 group-hover:bg-transparent transition-colors duration-300 rounded-xl z-10 w-full h-full mix-blend-multiply"></div>
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-[300px] md:h-[400px] object-cover rounded-xl shadow-lg border border-border"
                            />
                        </div>

                        {/* Project Info */}
                        <div className={`w-full md:w-2/5 flex flex-col ${index % 2 === 1 ? 'md:items-start' : 'md:items-end md:text-right'} z-20`}>
                            <p className="text-primary-600 dark:text-primary-500 font-medium mb-2">Featured Project</p>
                            <h3 className="text-2xl font-bold text-foreground mb-6 hover:text-primary-600 dark:hover:text-primary-500 transition-colors">
                                <a href={project.live}>{project.title}</a>
                            </h3>

                            <div className="bg-white dark:bg-card p-6 rounded-xl shadow-md border border-border md:-ml-8 md:mr-0 z-20 mb-6 relative">
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            <ul className={`flex flex-wrap gap-4 mb-8 text-sm text-foreground/80 font-mono ${index % 2 === 1 ? 'justify-start' : 'justify-end'}`}>
                                {project.tags.map((tag, i) => (
                                    <li key={i}>{tag}</li>
                                ))}
                            </ul>

                            <div className={`flex gap-4 ${index % 2 === 1 ? 'justify-start' : 'justify-end'}`}>
                                <a href={project.github} className="text-muted-foreground hover:text-primary-600 dark:hover:text-primary-500 transition-colors" aria-label="GitHub Repository">
                                    <Github size={24} className="transition-transform duration-300 hover:scale-125 hover:rotate-12" />
                                </a>
                                <a href={project.live} className="text-muted-foreground hover:text-primary-600 dark:hover:text-primary-500 transition-colors" aria-label="Live Demo">
                                    <ExternalLink size={24} className="transition-transform duration-300 hover:scale-125 hover:translate-x-1 hover:-translate-y-1" />
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
