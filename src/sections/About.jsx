import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import profilePic from '../assets/images/profile.jpg';

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
                            src={profilePic}
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
                        I’m Prerna Soni, a Frontend Developer specializing in building responsive, user-centric web applications. I excel at translating Figma designs into React applications while ensuring accessible, intuitive, and engaging user interfaces. I also leverage AI-powered features to enhance interactivity.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Through a range of projects, I deliver solutions that are both technically robust and thoughtfully designed for the user.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Beyond coding, I am passionate about exploring emerging web technologies, optimizing user experiences, and continuously refining my craft.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
