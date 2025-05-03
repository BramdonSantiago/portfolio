import './Bubbles.css';

import React, { useEffect } from 'react';


const BubbleBackground: React.FC = () => {
    useEffect(() => {
        const container = document.getElementById('bubble-container');
        if (!container) return;

        const total = 5;
        for (let i = 0; i < total; i++) {
            const bubble = document.createElement('div');
            bubble.className = 'bubble';

            const size = Math.random() * 54 + 10;
            bubble.style.width = `${size}px`;
            bubble.style.height = `${size}px`;
            bubble.style.left = `${Math.random() * 100}vw`;
            bubble.style.animationDuration = `${8 + Math.random() * 5}s`;
            bubble.style.animationDelay = `${Math.random() * 5}s`;

            container.appendChild(bubble);
        }

        return () => {
            container.innerHTML = ''; // Cleanup
        };
    }, []);

    return (
        <div id="bubble-container" className="bubble-bg" />
    );
};

export default BubbleBackground;