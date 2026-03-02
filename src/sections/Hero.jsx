import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="pt-32 pb-16 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-center min-h-[90vh]">
            <div className="max-w-3xl">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-primary-600 dark:text-primary-500 font-medium mb-4"
                >
                    Hi, my name is
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold text-foreground mb-4 tracking-tight"
                >
                    John Doe.
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-4xl md:text-6xl font-bold text-muted-foreground mb-6 tracking-tight"
                >
                    I build things for the web.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-lg text-muted-foreground mb-10 max-w-2xl leading-relaxed"
                >
                    I'm a frontend developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <a
                        href="#projects"
                        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-500 transition-colors shadow-sm"
                    >
                        Check out my work
                    </a>
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center px-6 py-3 border border-border text-base font-medium rounded-md text-foreground bg-card hover:bg-muted transition-colors shadow-sm"
                    >
                        <Mail className="mr-2 transition-transform duration-300 hover:scale-125 hover:-translate-y-0.5" size={18} />
                        Contact Me
                    </a>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block"
            >
                <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                    <ArrowDown size={24} className="transition-transform duration-300 hover:scale-125 hover:translate-y-1" />
                </a>
            </motion.div>
        </section>
    );
};

export default Hero;
