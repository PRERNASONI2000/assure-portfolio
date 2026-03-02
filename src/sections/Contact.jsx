import React from 'react';
import { useState } from "react";
import { supabase } from "../supabaseClient";
import { motion } from 'framer-motion';
import { Send, MapPin, Linkedin, Mail, Github } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const { data, error } = await supabase
                .from("contacts")
                .insert([
                    {
                        name: formData.name,
                        email: formData.email,
                        subject: formData.subject,
                        message: formData.message,
                    },
                ]);

            if (error) {
                console.error("Supabase Error Details:", error.message || error);
                alert(`❌ Error sending message: ${error.message || "Unknown error"}`);
            } else {
                alert("✅ Message sent successfully!");
                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                });
            }
        } catch (err) {
            console.error("Unexpected Error:", err);
            alert("❌ An unexpected error occurred while sending your message.");
        } finally {
            setLoading(false);
        }
    };
    return (
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <SectionTitle title="Get In Touch" subtitle="I'm currently looking for new opportunities, my inbox is always open." />

            <div className="flex flex-col md:flex-row gap-12 mt-12">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="md:w-1/3 space-y-8"
                >
                    <div>
                        <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
                        <p className="text-muted-foreground mb-8">
                            Fill up the form and I will get back to you within 24 hours.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center space-x-4">
                            <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full text-primary-600 dark:text-primary-500">
                                <a href="https://www.linkedin.com/in/prerna-soni-472a9323a"><Linkedin size={24} className="transition-transform duration-300 hover:scale-125 hover:-translate-y-1" /></a>
                            </div>
                            <div>
                                <p className="text-foreground font-medium">Linkedin</p>
                                <p className="text-muted-foreground">Connect with me</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full text-primary-600 dark:text-primary-500">
                                <a href="mailto:prernasoni2000@gmail.com"> <Mail size={24} className="transition-transform duration-300 hover:scale-125 hover:-rotate-12" /></a>
                            </div>
                            <div>
                                <p className="text-foreground font-medium">Email</p>
                                <p className="text-muted-foreground">prernasoni2000@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full text-primary-600 dark:text-primary-500">
                                <a href="https://github.com/PRERNASONI2000"><Github size={24} className="transition-transform duration-300 hover:scale-125 hover:-translate-y-1" /></a>
                            </div>
                            <div>
                                <p className="text-foreground font-medium">Github</p>
                                <p className="text-muted-foreground">View my projects</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="md:w-2/3"
                >
                    <form onSubmit={handleSubmit} className="bg-white dark:bg-card p-8 rounded-2xl shadow-sm border border-border space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-foreground">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-md bg-white dark:bg-background border border-border focus:border-primary-500 focus:ring-2 focus:ring-primary-500 outline-none transition-colors"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-foreground">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-md bg-white dark:bg-background border border-border focus:border-primary-500 focus:ring-2 focus:ring-primary-500 outline-none transition-colors"
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-medium text-foreground">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-md bg-white dark:bg-background border border-border focus:border-primary-500 focus:ring-2 focus:ring-primary-500 outline-none transition-colors"
                                placeholder="Project Inquiry"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-foreground">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-md bg-white dark:bg-background border border-border focus:border-primary-500 focus:ring-2 focus:ring-primary-500 outline-none transition-colors resize-none"
                                placeholder="How can I help you?"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit" disabled={loading}
                            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-500 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                        >
                            <Send className="mr-2 transition-transform duration-300 hover:scale-125 hover:translate-x-1 hover:-translate-y-1" size={18} />
                            {loading ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
