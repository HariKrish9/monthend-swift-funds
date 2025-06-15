
import React, { useState, useEffect } from 'react';

const TickingNumber = ({ target, duration }: { target: number, duration: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = target;
        if (start === end) return;

        let frameId: number;

        const animate = () => {
            start += Math.ceil(Math.random() * 250);
            if (start >= end) {
                setCount(end);
            } else {
                setCount(start);
                frameId = requestAnimationFrame(animate);
            }
        };

        frameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(frameId);
    }, [target, duration]);

    return <span>{count.toLocaleString()}</span>
}

export const HeroBackgroundAnimation = () => {
    const positions = [
        { top: '15%', left: '10%', transform: 'rotate(-25deg) scale(1.2)' },
        { top: '20%', left: '80%', transform: 'rotate(15deg) scale(0.8)' },
        { top: '70%', left: '5%', transform: 'rotate(20deg) scale(1.5)' },
        { top: '80%', left: '60%', transform: 'rotate(-10deg) scale(1)' },
        { top: '50%', left: '45%', transform: 'rotate(5deg) scale(2)' },
    ];

    return (
        <div className="absolute inset-0 z-0 opacity-[.07] pointer-events-none">
            {positions.map((style, i) => (
                <div key={i} className="absolute text-white font-mono text-4xl md:text-6xl" style={style}>
                    <TickingNumber target={Math.floor(Math.random() * 50000) + 10000} duration={5000 + i * 1000} />
                </div>
            ))}
        </div>
    );
};
