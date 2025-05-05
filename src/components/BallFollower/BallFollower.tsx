import './BallFollower.css';

import { useState, useEffect } from 'react';

const BallFollower = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [small, setSmall] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: any) => {
            setPosition({ x: e.clientX, y: e.clientY });

            const el = document.elementFromPoint(e.clientX, e.clientY);
            setSmall(el?.tagName.toLowerCase() === 'a');
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const size = small ? 8 : 48;
    const offset = size / 2;

    return (
        <div
            className={`ballfollower ${small ? 'small' : ''}`}
            style={{
                top: `${position.y - offset}px`,
                left: `${position.x - offset}px`,
                width: `${size}px`,
                height: `${size}px`,
            }}
        ></div>
    );
};

export default BallFollower;