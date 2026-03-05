import { useEffect } from 'react';

const generateFavicon = (name) => {
    // Extract initials: "Aditya Soni" -> "AS", "John" -> "J"
    const initials = name
        .split(' ')
        .map(word => word.charAt(0))
        .join('')
        .substring(0, 2)
        .toUpperCase();

    // SVG string for the favicon
    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
            <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#4f46e5" /> <!-- indigo-600 -->
                    <stop offset="100%" stop-color="#7c3aed" /> <!-- violet-600 -->
                </linearGradient>
            </defs>
            <rect width="128" height="128" rx="32" fill="url(#gradient)" />
            <text 
                x="50%" 
                y="55%" 
                font-family="system-ui, -apple-system, sans-serif" 
                font-size="64" 
                font-weight="bold" 
                fill="#ffffff" 
                text-anchor="middle" 
                alignment-baseline="middle"
            >
                ${initials}
            </text>
        </svg>
    `;

    // Encode SVG to base64, preserving hash/pound symbols
    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

export const useDynamicFavicon = (name) => {
    useEffect(() => {
        if (!name) return;

        const faviconUrl = generateFavicon(name);

        let link = document.querySelector("link[rel~='icon']");

        if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            document.head.appendChild(link);
        }

        link.type = 'image/svg+xml';
        link.href = faviconUrl;

    }, [name]);
};
