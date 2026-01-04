'use client';

import React, { useEffect, useState } from 'react'
import { technologies } from '../constants/technologies';
import { colors } from '../constants/colors';

export default function Technologies() {
    const [sphereRotation, setSphereRotation] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hoveredTech, setHoveredTech] = useState<number | null>(null);

    useEffect(() => {
        const autoRotate = setInterval(() => {
            if (!isDragging) {
                setSphereRotation(prev => ({ x: prev.x + 0.3, y: prev.y + 0.2 }));
            }
        }, 50);

        return () => clearInterval(autoRotate);
    }, [isDragging])

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setLastPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (isDragging) {
            const deltaX = e.clientX - lastPosition.x;
            const deltaY = e.clientY - lastPosition.y;
            setSphereRotation(prev => ({ x: prev.x + deltaY * 0.5, y: prev.y + deltaX * 0.5 }));
            setLastPosition({ x: e.clientX, y: e.clientY });
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const generateSpherePositions = () => {
        const positions = [];
        const phi = Math.PI * (3 - Math.sqrt(5));

        for (let i = 0; i < technologies.length; i++) {
            const y = 1 - (i / (technologies.length - 1)) * 2;
            const radius = Math.sqrt(1 - y * y);
            const theta = phi * i;

            positions.push({
                x: Math.cos(theta) * radius,
                y: y,
                z: Math.sin(theta) * radius
            });
        }
        return positions;
    };

    const spherePositions = generateSpherePositions();

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
    };
    
    return (
        <div>
            {/* Skills & Technologies Section */}
            <section id="technologies" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Text Content */}
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: colors.peach }}>
                                Technologies
                            </h2>

                            <div className="space-y-4 text-gray-400">
                                <p className="text-lg">
                                    I am a full-stack developer experienced in building scalable, user-centric web applications using React, Next.js, Node.js, and TypeScript.
                                </p>
                                <p>
                                    HTML, CSS, JS (TypeScript), building small and medium web apps with React, custom plugins, features, animations, and coding interactive layouts.
                                </p>
                                <p>
                                  I also have experience with message brokers, caching, and system design concepts using Redis, Kafka, and RabbitMQ, along with UI/UX design workflows in Figma and development in Linux-based environments.
                                  </p>
                                <p className="pt-4">
                                    Visit my{' '}
                                    <a href="https://linkedin.com" className="underline hover:no-underline" style={{ color: colors.pink }}>
                                        LinkedIn profile
                                    </a>
                                    {' '}for more details or just{' '}
                                    <button onClick={() => scrollToSection('contact')} className="underline hover:no-underline" style={{ color: colors.pink }}>
                                        contact me
                                    </button>
                                </p>
                            </div>
                        </div>

                        {/* Right Side - 3D Skill Sphere */}
                        <div
                            className="relative h-[500px] flex items-center justify-center cursor-grab active:cursor-grabbing"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseUp}
                        >
                            <div className="relative w-full h-full flex items-center justify-center perspective-1000">
                                {technologies.map((tech, idx) => {
                                    const pos = spherePositions[idx];
                                    const rotX = sphereRotation.x * (Math.PI / 180);
                                    const rotY = sphereRotation.y * (Math.PI / 180);

                                    // Apply rotation
                                    let x = pos.x;
                                    let y = pos.y;
                                    let z = pos.z;

                                    // Rotate around X axis
                                    let tempY = y * Math.cos(rotX) - z * Math.sin(rotX);
                                    let tempZ = y * Math.sin(rotX) + z * Math.cos(rotX);
                                    y = tempY;
                                    z = tempZ;

                                    // Rotate around Y axis
                                    let tempX = x * Math.cos(rotY) - z * Math.sin(rotY);
                                    tempZ = x * Math.sin(rotY) + z * Math.cos(rotY);
                                    x = tempX;
                                    z = tempZ;

                                    const scale = 200;
                                    const translateX = x * scale;
                                    const translateY = y * scale;
                                    const translateZ = z * scale;

                                    const depth = (z + 1) / 2;
                                    const opacity = 0.3 + depth * 0.7;
                                    const size = tech.size * (0.5 + depth * 0.5);
                                    const isHovered = hoveredTech === idx;

                                    return (
                                        <div
                                            key={idx}
                                            className="absolute flex flex-col items-center gap-2 transition-all duration-100"
                                            style={{
                                                transform: `translate3d(${translateX}px, ${translateY}px, ${translateZ}px)`,
                                                opacity: opacity,
                                                zIndex: Math.floor(depth * 100),
                                                pointerEvents: 'auto',
                                            }}
                                            onMouseEnter={() => setHoveredTech(idx)}
                                            onMouseLeave={() => setHoveredTech(null)}
                                        >
                                            <div
                                                className="whitespace-nowrap font-semibold"
                                                style={{
                                                    fontSize: `${size}px`,
                                                    color: depth > 0.6 ? colors.peach : depth > 0.4 ? colors.pink : colors.purple,
                                                    textShadow: depth > 0.5 ? `0 0 20px ${colors.pink}80` : 'none',
                                                    userSelect: 'none'
                                                }}
                                            >
                                                {tech.name}
                                            </div>
                                            
                                            {/* Capacity Bar */}
                                            {isHovered && tech.capacity && (
                                                <div className="flex items-center gap-2 whitespace-nowrap">
                                                    <div 
                                                        className="h-1.5 bg-gray-700 rounded-full overflow-hidden"
                                                        style={{ width: '80px' }}
                                                    >
                                                        <div
                                                            className="h-full rounded-full transition-all duration-300"
                                                            style={{
                                                                width: `${tech.capacity}%`,
                                                                backgroundColor: depth > 0.6 ? colors.peach : depth > 0.4 ? colors.pink : colors.purple,
                                                                boxShadow: `0 0 10px ${depth > 0.6 ? colors.peach : depth > 0.4 ? colors.pink : colors.purple}80`
                                                            }}
                                                        />
                                                    </div>
                                                    <span 
                                                        className="text-xs font-medium"
                                                        style={{
                                                            color: depth > 0.6 ? colors.peach : depth > 0.4 ? colors.pink : colors.purple,
                                                        }}
                                                    >
                                                        {tech.capacity}%
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Hint text */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-sm text-gray-500">
                                Drag to rotate • Hover for proficiency
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}