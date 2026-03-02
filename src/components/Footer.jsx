import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-muted py-12 mt-20 border-t border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="flex justify-center space-x-6 mb-8">
                    <a href="#" className="text-muted-foreground hover:text-primary-600 dark:hover:text-primary-500 transition-colors">
                        <span className="sr-only">GitHub</span>
                        <Github size={24} className="transition-transform duration-300 hover:scale-125 hover:-translate-y-1" />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary-600 dark:hover:text-primary-500 transition-colors">
                        <span className="sr-only">LinkedIn</span>
                        <Linkedin size={24} className="transition-transform duration-300 hover:scale-125 hover:-translate-y-1" />
                    </a>
                    {/* <a href="#" className="text-muted-foreground hover:text-primary-600 dark:hover:text-primary-500 transition-colors">
                        <span className="sr-only">Twitter</span>
                        <Twitter size={24} className="transition-transform duration-300 hover:scale-125 hover:-translate-y-1" />
                    </a> */}
                    <a href="#" className="text-muted-foreground hover:text-primary-600 dark:hover:text-primary-500 transition-colors">
                        <span className="sr-only">Email</span>
                        <Mail size={24} className="transition-transform duration-300 hover:scale-125 hover:-translate-y-1" />
                    </a>
                </div>
                <p className="text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} Your Name. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
