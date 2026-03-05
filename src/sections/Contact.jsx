import React, { useState, useEffect } from 'react';
import { supabase } from "../supabaseClient";
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, MapPin, Linkedin, Mail, Github, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const Notification = ({ message, type, onClose }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
            className={`fixed top-24 right-4 z-50 flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl backdrop-blur-md border ${type === 'success'
                ? 'bg-green-500/10 border-green-500/20 text-green-600 dark:text-green-400'
                : 'bg-red-500/10 border-red-500/20 text-red-600 dark:text-red-400'
                }`}
        >
            {type === 'success' ? <CheckCircle size={20} className="text-green-500" /> : <AlertCircle size={20} className="text-red-500" />}
            <p className="font-medium">{message}</p>
            <button onClick={onClose} className="ml-4 opacity-70 hover:opacity-100 transition-opacity">×</button>
        </motion.div>
    );
};

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [notification, setNotification] = useState(null);

    useEffect(() => {
        if (notification) {
            const timer = setTimeout(() => {
                setNotification(null);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [notification]);

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!formData.subject.trim()) newErrors.subject = "Subject is required";
        if (!formData.message.trim()) newErrors.message = "Message is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));

        // Clear error when user starts typing
        if (errors[id]) {
            setErrors(prev => ({ ...prev, [id]: null }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        // 1. Validate form fields (all required, email format)
        if (!validateForm()) return;

        setLoading(true); // Show loader

        try {
            // 2. Save data to Supabase table 'contacts'
            const { error: supabaseError } = await supabase
                .from("contacts")
                .insert([{
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                }]);

            // If Supabase insertion fails, stop and throw to outer catch block
            if (supabaseError) throw supabaseError;

            // 3. Attempt to send email via EmailJS (works both online and offline scenarios)
            // By wrapping this in its own try/catch, if EmailJS fails,
            // we still show success because the message safely saved to Supabase.
            try {
                await emailjs.send(
                    'service_qxyga4v',      // Service ID
                    'template_t5b2358',     // Template ID
                    {
                        name: formData.name,
                        email: formData.email,
                        subject: formData.subject,
                        message: formData.message,
                    },
                    'C9Ua8dAJ6EEfSSQkk'     // Public Key
                );
                console.log("Email sent successfully via EmailJS.");
            } catch (emailError) {
                // Log email error but don't prevent the overall success alert
                console.error("EmailJS sending failed:", emailError);
            }

            // 4. Show success alert and clear the form
            setNotification({ type: 'success', message: 'Message sent successfully!' });
            setFormData({ name: "", email: "", subject: "", message: "" });

        } catch (err) {
            // Handle errors for Supabase save
            console.error("Error saving message:", err);
            setNotification({ type: 'error', message: 'Failed to send message. Please try again.' });
        } finally {
            setLoading(false); // Hide loader
        }
    };

    const inputClasses = (error) => `
        w-full px-4 py-3.5 rounded-xl bg-background/50 dark:bg-card/50 
        border ${error ? 'border-red-500 focus:ring-red-500/20 shadow-[0_0_10px_rgba(239,68,68,0.2)]' : 'border-border focus:border-primary-500 focus:ring-primary-500/20'} 
        focus:ring-4 outline-none transition-all duration-300 backdrop-blur-sm
    `;

    return (
        <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
            {/* Background elements */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary-600/5 blur-[100px] rounded-full pointer-events-none -z-10"></div>

            <AnimatePresence>
                {notification && (
                    <Notification
                        type={notification.type}
                        message={notification.message}
                        onClose={() => setNotification(null)}
                    />
                )}
            </AnimatePresence>

            <SectionTitle title="Get In Touch" subtitle="I'm currently looking for new opportunities, my inbox is always open." />

            <div className="flex flex-col lg:flex-row gap-16 mt-16 relative z-10">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="lg:w-5/12 space-y-10"
                >
                    <div>
                        <h3 className="text-3xl font-bold text-foreground mb-4">Let's talk business.</h3>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            Have a project in mind or just want to say hi? Fill up the form and I'll get back to you within 24 hours.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {[
                            { icon: Linkedin, label: 'LinkedIn', value: 'Connect with me', href: 'https://www.linkedin.com/in/prerna-soni-472a9323a' },
                            { icon: Mail, label: 'Email', value: 'prernasoni2000@gmail.com', href: 'mailto:prernasoni2000@gmail.com' },
                            { icon: Github, label: 'GitHub', value: 'View my projects', href: 'https://github.com/PRERNASONI2000' }
                        ].map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center space-x-6 p-4 rounded-2xl hover:bg-card/50 transition-colors duration-300"
                            >
                                <div className="bg-primary-600/10 p-4 rounded-xl text-primary-600 dark:text-primary-400 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(var(--primary-600),0.3)] group-hover:-translate-y-1">
                                    <item.icon size={24} className="transition-transform duration-300" />
                                </div>
                                <div>
                                    <p className="text-foreground font-semibold text-lg">{item.label}</p>
                                    <p className="text-muted-foreground group-hover:text-foreground transition-colors">{item.value}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="lg:w-7/12"
                >
                    <div className="bg-card/80 backdrop-blur-xl p-8 sm:p-10 rounded-[32px] shadow-xl border border-border/50 relative overflow-hidden group">
                        {/* Soft Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10" noValidate>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2 relative">
                                    <label htmlFor="name" className="text-sm font-semibold text-foreground/80 ml-1">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={inputClasses(errors.name)}
                                        placeholder="John Doe"
                                    />
                                    <AnimatePresence>
                                        {errors.name && (
                                            <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} className="text-red-500 text-sm mt-1 ml-1 font-medium">{errors.name}</motion.p>
                                        )}
                                    </AnimatePresence>
                                </div>
                                <div className="space-y-2 relative">
                                    <label htmlFor="email" className="text-sm font-semibold text-foreground/80 ml-1">Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={inputClasses(errors.email)}
                                        placeholder="john@example.com"
                                    />
                                    <AnimatePresence>
                                        {errors.email && (
                                            <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} className="text-red-500 text-sm mt-1 ml-1 font-medium">{errors.email}</motion.p>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>

                            <div className="space-y-2 relative">
                                <label htmlFor="subject" className="text-sm font-semibold text-foreground/80 ml-1">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className={inputClasses(errors.subject)}
                                    placeholder="Project Inquiry"
                                />
                                <AnimatePresence>
                                    {errors.subject && (
                                        <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} className="text-red-500 text-sm mt-1 ml-1 font-medium">{errors.subject}</motion.p>
                                    )}
                                </AnimatePresence>
                            </div>

                            <div className="space-y-2 relative">
                                <label htmlFor="message" className="text-sm font-semibold text-foreground/80 ml-1">Message</label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={`${inputClasses(errors.message)} resize-none`}
                                    placeholder="Tell me about your project..."
                                ></textarea>
                                <AnimatePresence>
                                    {errors.message && (
                                        <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} className="text-red-500 text-sm mt-1 ml-1 font-medium">{errors.message}</motion.p>
                                    )}
                                </AnimatePresence>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full relative overflow-hidden group inline-flex items-center justify-center px-8 py-4 rounded-xl text-white font-bold bg-primary-600 hover:bg-primary-500 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-[0_0_20px_rgba(var(--primary-600),0.4)] hover:scale-[1.02]"
                            >
                                {/* Button Hover Gradient */}
                                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                <span className="relative z-10 flex items-center gap-2">
                                    {loading ? (
                                        <Loader2 className="animate-spin text-white" size={20} />
                                    ) : (
                                        <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    )}
                                    {loading ? "Sending..." : "Send Message"}
                                </span>
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
