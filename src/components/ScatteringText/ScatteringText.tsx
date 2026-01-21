import { useState } from "react";

type ScatteringTextProps = {
    textParts: { text: string; scatter?: boolean }[]; // array de fragmentos
    Tag?: "h1" | "h2" | "h3"; // permite cambiar etiqueta
    className?: string;
};

export default function ScatteringText({
    textParts,
    Tag = "h1",
    className = "",
}: ScatteringTextProps) {
    const [scatter, setScatter] = useState(false);

    // Genera posiciones solo para los fragmentos que tienen scatter
    const positions = textParts.map((part) =>
        part.scatter
            ? part.text.split("").map(() => ({
                x: Math.random() * -5,
                y: Math.random() * 10 - 5,
            }))
            : []
    );

    return (
        <Tag
            className={className}
            onMouseEnter={() => setScatter(true)}
            onMouseLeave={() => setScatter(false)}
        >
            {textParts.map((part, partIndex) => {
                if (!part.scatter) {
                    return part.text;
                }
                return (
                    <span key={partIndex} style={{ display: "inline-block" }}>
                        {part.text.split("").map((char, i) => (
                            <span
                                key={i}
                                style={{
                                    display: "inline-block",
                                    transform: scatter
                                        ? `translate(${positions[partIndex][i].x}px, ${positions[partIndex][i].y}px)`
                                        : "translate(0,0)",
                                    transition: "transform 0.4s ease",
                                    transitionDelay: `${i * 20}ms`,
                                }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </span>
                        ))}
                    </span>
                );
            })}
        </Tag>
    );
}