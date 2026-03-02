import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';

const About = () => {
    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <SectionTitle title="About Me" subtitle="Get to know me better" />

            <div className="flex flex-col md:flex-row gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="md:w-1/2"
                >
                    <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
                        <div className="absolute inset-0 bg-primary-600 rounded-2xl transform translate-x-4 translate-y-4"></div>
                        <img
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Profile"
                            className="relative z-10 rounded-2xl object-cover w-full h-full border-4 border-background shadow-xl grayscale hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="md:w-1/2 space-y-4"
                >
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Hello! My name is John and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS taught me a lot about HTML & CSS!
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, and a huge corporation. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        When I'm not at the computer, I'm usually hanging out with my dog, reading, or exploring nature.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
