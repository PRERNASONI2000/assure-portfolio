import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {title}
            </h2>
            {subtitle && (
                <div className="h-1 w-20 bg-primary-600 rounded-full mx-auto mt-4 mb-6"></div>
            )}
            {subtitle && (
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}
        </motion.div>
    );
};

export default SectionTitle;
