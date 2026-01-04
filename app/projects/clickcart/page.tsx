"use client"; import React, { useState } from 'react';
import { ExternalLink, Github, ArrowLeft, CheckCircle2, Truck, Package, Route, Shield, Database, Code, Cloud, Server, Layers, Zap, Lock, Image as ImageIcon, Box, X, ZoomIn, RouteIcon, ShoppingBag, Store } from 'lucide-react';
import Image from "next/image";


const colors = {
    primary: '#f97316', // orange-500
    dark: '',
    darker: 'black',
    accent: '#fb923c' // orange-400
};

export default function ClickCartProject() {
    const [activeTab, setActiveTab] = useState('overview');
    const [selectedImage, setSelectedImage] = useState(null);

    const technologies = [
        'MongoDB',
        'Express.js',
        'React.js',
        'Node.js',
        'Keycloak',
        'Docker',
        'Redis',
        'RabbitMQ',
        'Cloudinary'
    ];

    // Gallery Screenshots
    const galleryImages = [
        {
            url: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
            title: 'Dashboard Overview',
            description: 'Main dashboard showing order management and logistics'
        },
        {
            url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
            title: 'Route Optimization',
            description: 'Real-time route planning and driver assignment interface'
        },
        {
            url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
            title: 'E-commerce Storefront',
            description: 'Customer-facing shopping interface with cart functionality'
        },
        {
            url: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
            title: 'Warehouse Management',
            description: 'Package tracking and inventory management system'
        },
        {
            url: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&h=600&fit=crop',
            title: 'Driver Mobile App',
            description: 'Mobile interface for delivery drivers'
        },
        {
            url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop',
            title: 'Client Management',
            description: 'Client contracts, billing, and order intake system'
        }
    ];

    const systemComponents = [
        {
            icon: Package,
            title: 'Client Management System (CMS)',
            description: 'Legacy on-premise system handling client contracts, billing, and order intake with SOAP-based XML API'
        },
        {
            icon: Route,
            title: 'Route Optimization System (ROS)',
            description: 'Generates optimal delivery routes, assigns orders into clusters, and sequences them into efficient paths'
        },
        {
            icon: Box,
            title: 'Warehouse Management System (WMS)',
            description: 'Tracks packages from receipt to vehicle loading with proprietary TCP/IP messaging protocol'
        },
        {
            icon: Truck,
            title: 'Driver Managemnet System(DMS)',
            description: 'Gets ready orders from WMS and and assigned those orders to available drivers ensuring no driver is in idle for so much time. Also By clusturing delivery areas and optimizing shortest path DMS tracks packages from WMS to Customer '
        },
        {
            icon: ShoppingBag,
            title: 'Cart Service',
            description: 'User can add items to their cart. Implemented with ensuring no items are belonging to specific user '
        },
        {
            icon: Store,
            title: 'Catalog Service',
            description: 'Add items to the store'
        },
        {
            icon: Store,
            title: 'API Gateway',
            description: 'Call Backend RestAPIs ensuring that there is no API calls between frontend and system backend'
        }
    ];

    const techStack = [
        {
            icon: Database,
            name: 'MongoDB',
            category: 'Database',
            reason: 'NoSQL document-oriented database with flexible JSON-like structures',
            advantages: [
                'Flexible schema for evolving data structures',
                'Great for microservices architecture',
                'High scalability for distributed clusters',
                'Natural integration with Node.js',
                'Better performance for nested objects'
            ],
            whyOverOthers: 'No complex joins needed, faster development, better performance for nested data structures'
        },
        {
            icon: Code,
            name: 'Express.js',
            category: 'Backend Framework',
            reason: 'Minimalistic and fast backend framework for building APIs using Node.js',
            advantages: [
                'Lightweight and highly customizable',
                'Simple routing and middleware system',
                'Perfect for microservices architecture',
                'Large ecosystem (JWT, Mongoose, bcrypt)',
                'Faster setup compared to alternatives'
            ],
            whyOverOthers: 'Much faster setup, more flexible, ideal for JSON-based REST APIs'
        },
        {
            icon: Layers,
            name: 'React.js',
            category: 'Frontend Library',
            reason: 'Frontend library for building dynamic UI components',
            advantages: [
                'Component-based architecture for reusability',
                'Very fast due to virtual DOM',
                'Perfect for API-driven applications',
                'Strong community and ecosystem',
                'Easier learning curve than Angular'
            ],
            whyOverOthers: 'Better flexibility, huge community support, lightweight and fast'
        },
        {
            icon: Server,
            name: 'Node.js',
            category: 'Runtime Environment',
            reason: 'JavaScript runtime for executing backend code',
            advantages: [
                'Non-blocking, asynchronous architecture',
                'Ideal for real-time systems',
                'Same language across frontend and backend',
                'High performance for I/O operations',
                'Great for event-driven systems'
            ],
            whyOverOthers: 'Faster development, easy microservices integration, single language stack'
        },
        {
            icon: Shield,
            name: 'Keycloak',
            category: 'Authentication & Authorization',
            reason: 'Open-source identity and access management solution',
            advantages: [
                'Enterprise-grade and open-source',
                'Built-in SSO and role-based access',
                'No manual authentication code needed',
                'Centralized user management',
                'JWT access token support'
            ],
            whyOverOthers: 'Security + simplicity + scalability without vendor lock-in'
        },
        {
            icon: Cloud,
            name: 'Cloudinary',
            category: 'Image & File Storage',
            reason: 'Cloud media storage and delivery service for images',
            advantages: [
                'Automatic image optimization',
                'Easy uploads with SDK',
                'Built-in transformations (resize, crop)',
                'Fast delivery via global CDN',
                'Better than local storage or S3'
            ],
            whyOverOthers: 'Simple, powerful, and optimized specifically for images'
        },
        {
            icon: Box,
            name: 'Docker',
            category: 'Containerization',
            reason: 'Package and run applications in isolated containers',
            advantages: [
                'Run multiple services easily',
                'Same environment everywhere',
                'Perfect for microservices',
                'Easy deployment and scaling',
                'No version conflicts'
            ],
            whyOverOthers: 'Makes services reproducible and isolated'
        },
        {
            icon: Zap,
            name: 'Redis',
            category: 'Caching / Pub-Sub',
            reason: 'Ultra-fast in-memory data store',
            advantages: [
                'Great for caching driver availability',
                'Helps microservices communicate',
                '100× faster than regular databases',
                'Perfect for real-time cached data',
                'Session management'
            ],
            whyOverOthers: 'Extremely fast for real-time operations'
        },
        {
            icon: Server,
            name: 'RabbitMQ',
            category: 'Message Queue',
            reason: 'Asynchronous communication between microservices',
            advantages: [
                'Prevents system overload',
                'Ensures reliable message delivery',
                'Perfect for transactional flows',
                'Lighter than Kafka',
                'Event-based architecture'
            ],
            whyOverOthers: 'Less complex than Kafka, perfect for transactional events'
        }
    ];

    const keyObjectives = [
        'Create centralized platform for multiple logistics operations',
        'Replace siloed, manual systems with integrated solution',
        'Implement real-time route optimization',
        'Develop web portal and mobile app for drivers',
        'Integrate legacy systems (CMS, WMS, ROS)',
        'Ensure scalable microservices architecture',
        'Provide secure authentication and authorization',
        'Enable efficient last-mile delivery tracking'
    ];

    const mernBenefits = [
        {
            title: 'Full JavaScript Stack',
            description: 'One language across frontend, backend, and database (JSON documents)'
        },
        {
            title: 'Fast Development',
            description: 'Ideal for e-commerce, delivery management, route optimization, and catalog systems'
        },
        {
            title: 'Perfect for Microservices',
            description: 'Each service (ROS, WMS, DMS, Cart, Catalog) works smoothly with Node + MongoDB'
        },
        {
            title: 'Large Ecosystem',
            description: 'Libraries for JWT, Mongoose, HTTP requests, real-time updates, and UI components'
        }
    ];

    const TabButton = ({ id, label }: any) => (
        <button
            onClick={() => setActiveTab(id)}
            className={`px-6 py-3 font-semibold transition-all duration-300 relative ${activeTab === id ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'
                }`}
        >
            {label}
            {activeTab === id && (
                <div
                    className="absolute bottom-0 left-0 right-0 h-1 rounded-t-full transition-all duration-300"
                    style={{ backgroundColor: colors.primary }}
                />
            )}
        </button>
    );

    return (
        <div className="min-h-screen" style={{ backgroundColor: colors.darker }}>
            {/* Animated Background Pattern */}
            <div className="fixed inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl animate-float"
                    style={{ backgroundColor: colors.primary }} />
                <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-float-delayed"
                    style={{ backgroundColor: colors.accent }} />
                <div className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full blur-3xl animate-pulse-slow"
                    style={{ backgroundColor: colors.primary }} />
            </div>

            {/* Hero Section */}
            <div className="relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
                    <button
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300 mb-8 group"
                        onClick={() => window.history.back()}
                    >
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        <span>Back to Projects</span>
                    </button>

                    <div className="flex items-center gap-3 mb-6 animate-slideDown">
                        <span
                            className="px-4 py-2 rounded-full text-sm font-bold uppercase"
                            style={{
                                backgroundColor: `${colors.primary}30`,
                                color: colors.primary,
                                border: `2px solid ${colors.primary}`
                            }}
                        >
                            Completed
                        </span>
                        <span className="text-gray-400 text-sm uppercase tracking-wider">
                            Web Application • Mobile App
                        </span>
                    </div>

                    <h1
                        className="text-6xl md:text-7xl font-bold mb-4 animate-slideDown"
                        style={{
                            color: colors.primary,
                            textShadow: `0 4px 30px ${colors.primary}40`
                        }}
                    >
                        ClickCart
                    </h1>

                    <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 animate-slideDown">
                        Web-Based E-Commerce & Logistics Platform
                    </h2>

                    <p className="text-sl text-gray-300 max-w-4xl leading-relaxed mb-10 animate-fadeIn">
                        A comprehensive platform that integrates e-commerce with last-mile delivery logistics.
                        Replacing siloed, manual systems with a modern, scalable solution for Click Cart (Pvt) Ltd.,
                        Sri Lanka's rapidly growing logistics company.
                    </p>

                    {/* Quick Action Buttons */}
                    <div className="flex flex-wrap gap-4 animate-fadeIn">
                        <button
                            className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg group text-white"
                            style={{ backgroundColor: colors.primary }}
                            onClick={()=>window.open('https://drive.google.com/drive/folders/13JUL_PSCanIlsRgDSG8ecpnUZGwUlNbr?usp=drive_link')}
                        >
                            <ExternalLink size={20} className="group-hover:rotate-12 transition-transform" />
                            Interfaces
                        </button>
                        <button
                            className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg border-2 group"
                            style={{
                                borderColor: colors.primary,
                                color: colors.primary,
                                backgroundColor: `${colors.primary}10`
                            }}
                            onClick={()=>window.open('https://github.com/ShaniGamage/ClickCart')}
                        >
                            <Github size={20} className="group-hover:rotate-12 transition-transform" />
                            View Repository
                        </button>
                    </div>
                </div>

                {/* Wave Divider */}
                <div className="relative h-24">
                    <svg className="absolute bottom-0 w-full h-24" viewBox="0 0 1440 120" preserveAspectRatio="none">
                        <path
                            d="M0,64 C360,120 720,0 1080,64 C1260,96 1380,96 1440,64 L1440,120 L0,120 Z"
                            fill="white"
                            opacity="0.1"
                        />
                    </svg>
                </div>
            </div>

            {/* Content Section */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Tab Navigation */}
                <div className="rounded-2xl p-2 mb-12 border"
                    style={{
                        backgroundColor: colors.dark,
                        borderColor: `${colors.primary}30`
                    }}>
                    <div className="flex flex-wrap gap-2">
                        <TabButton id="overview" label="Overview" />
                        <TabButton id="systems" label="System Components" />
                        <TabButton id="tech" label="Technologies" />
                        <TabButton id="mern" label="MERN Stack" />
                        <TabButton id="arch" label="Architecture" />
                    </div>
                </div>

                {/* Tab Content */}
                <div className="space-y-8">
                    {/* Overview Tab */}
                    {activeTab === 'overview' && (
                        <div className="space-y-8 animate-fadeIn">
                            {/* Problem Statement */}
                            <div className="rounded-2xl p-8 shadow-2xl border hover:border-opacity-60 transition-all duration-500"
                                style={{
                                    backgroundColor: colors.dark,
                                    borderColor: `${colors.primary}30`
                                }}>
                                <h2
                                    className="text-4xl font-bold mb-6 flex items-center gap-3"
                                    style={{ color: colors.primary }}
                                >
                                    <div className="w-12 h-12 rounded-full flex items-center justify-center"
                                        style={{ backgroundColor: `${colors.primary}20` }}>
                                        <Truck size={24} style={{ color: colors.primary }} />
                                    </div>
                                    Problem Statement
                                </h2>
                                <p className="text-gray-300 leading-relaxed text-lg mb-4">
                                    Click Cart (Pvt) Ltd. is a rapidly growing logistics company in Sri Lanka, specializing in
                                    last-mile delivery for e-commerce businesses. They offer delivery services for a range of clients,
                                    from large online retailers to small-scale independent sellers.
                                </p>
                                <p className="text-gray-300 leading-relaxed text-lg">
                                    To scale their operations and stay competitive, they needed to replace their siloed, manual systems
                                    with a modern, integrated platform that could handle complex logistics operations efficiently.
                                </p>
                            </div>

                            {/* Solution Overview */}
                            <div className="rounded-2xl p-8 shadow-2xl border"
                                style={{
                                    backgroundColor: `${colors.primary}10`,
                                    borderColor: `${colors.primary}40`
                                }}>
                                <h2 className="text-4xl font-bold mb-4" style={{ color: colors.primary }}>
                                    Solution Overview
                                </h2>
                                <p className="text-gray-200 leading-relaxed text-lg font-medium">
                                    The new platform is a comprehensive web-based portal and mobile application for drivers,
                                    both branded as "ClickCart." It integrates e-commerce functionality with advanced logistics
                                    management, route optimization, and warehouse tracking systems.
                                </p>
                            </div>

                            {/* Key Objectives */}
                            <div className="rounded-2xl p-8 shadow-2xl border"
                                style={{
                                    backgroundColor: colors.dark,
                                    borderColor: `${colors.primary}30`
                                }}>
                                <h2 className="text-4xl font-bold mb-6" style={{ color: colors.primary }}>
                                    Key Objectives
                                </h2>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {keyObjectives.map((objective, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-start gap-3 p-4 rounded-lg border transition-all duration-300 hover:translate-x-2"
                                            style={{
                                                backgroundColor: `${colors.primary}05`,
                                                borderColor: `${colors.primary}20`
                                            }}
                                        >
                                            <CheckCircle2
                                                size={24}
                                                className="flex-shrink-0 mt-1"
                                                style={{ color: colors.primary }}
                                            />
                                            <p className="text-gray-300 leading-relaxed">{objective}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* System Components Tab */}
                    {activeTab === 'systems' && (
                        <div className="space-y-8 animate-fadeIn">
                            <div className="rounded-2xl p-8 shadow-2xl border"
                                style={{
                                    backgroundColor: colors.dark,
                                    borderColor: `${colors.primary}30`
                                }}>
                                <h2 className="text-4xl font-bold mb-8" style={{ color: colors.primary }}>
                                    Integrated System Components
                                </h2>
                                <div className="space-y-6">
                                    {systemComponents.map((system, idx) => (
                                        <div
                                            key={idx}
                                            className="group p-6 rounded-xl border transition-all duration-500 hover:scale-[1.02]"
                                            style={{
                                                backgroundColor: `${colors.primary}05`,
                                                borderColor: `${colors.primary}30`
                                            }}
                                        >
                                            <div className="flex items-start gap-6">
                                                <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                                                    style={{ backgroundColor: `${colors.primary}20` }}>
                                                    <system.icon size={32} style={{ color: colors.primary }} />
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-2xl font-bold mb-3 text-white">
                                                        {system.title}
                                                    </h3>
                                                    <p className="text-gray-300 leading-relaxed text-lg">
                                                        {system.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Technologies Tab */}
                    {activeTab === 'tech' && (
                        <div className="space-y-8 animate-fadeIn">
                            <div className="rounded-2xl p-8 shadow-2xl border mb-8"
                                style={{
                                    backgroundColor: colors.dark,
                                    borderColor: `${colors.primary}30`
                                }}>
                                <h2 className="text-4xl font-bold mb-3" style={{ color: colors.primary }}>
                                    Technologies Used & Why They Were Selected
                                </h2>
                                <p className="text-gray-400 text-lg">
                                    Modern, scalable technology stack built for e-commerce and logistics
                                </p>
                            </div>

                            {/* Tech Stack Details */}
                            <div className="space-y-6">
                                {techStack.map((tech, idx) => (
                                    <div
                                        key={idx}
                                        className="rounded-xl p-8 border transition-all duration-500 hover:scale-[1.01]"
                                        style={{
                                            backgroundColor: colors.dark,
                                            borderColor: `${colors.primary}30`
                                        }}
                                    >
                                        <div className="flex items-start gap-6 mb-6">
                                            <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
                                                style={{ backgroundColor: `${colors.primary}20` }}>
                                                <tech.icon size={32} style={{ color: colors.primary }} />
                                            </div>
                                            <div className="flex-1">
                                                <div className="mb-2">
                                                    <span className="text-sm font-semibold uppercase tracking-wider"
                                                        style={{ color: colors.primary }}>
                                                        {tech.category}
                                                    </span>
                                                </div>
                                                <h3 className="text-3xl font-bold mb-3 text-white">
                                                    {tech.name}
                                                </h3>
                                                <p className="text-gray-300 leading-relaxed text-lg mb-4">
                                                    {tech.reason}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6 mb-4">
                                            <div className="p-4 rounded-lg" style={{ backgroundColor: `${colors.primary}05` }}>
                                                <h4 className="text-lg font-bold mb-3" style={{ color: colors.primary }}>
                                                    Key Advantages
                                                </h4>
                                                <ul className="space-y-2">
                                                    {tech.advantages.map((adv, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-gray-300">
                                                            <CheckCircle2 size={18} className="flex-shrink-0 mt-1" style={{ color: colors.primary }} />
                                                            <span>{adv}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="p-4 rounded-lg" style={{ backgroundColor: `${colors.primary}10` }}>
                                                <h4 className="text-lg font-bold mb-3" style={{ color: colors.primary }}>
                                                    Why Over Alternatives
                                                </h4>
                                                <p className="text-gray-200 leading-relaxed">
                                                    {tech.whyOverOthers}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* MERN Stack Benefits Tab */}
                    {activeTab === 'mern' && (
                        <div className="space-y-8 animate-fadeIn">
                            <div className="rounded-2xl p-8 shadow-2xl border"
                                style={{
                                    backgroundColor: colors.dark,
                                    borderColor: `${colors.primary}30`
                                }}>
                                <h2 className="text-4xl font-bold mb-6" style={{ color: colors.primary }}>
                                    Why MERN Stack?
                                </h2>
                                <p className="text-gray-300 leading-relaxed text-lg mb-8">
                                    MERN (MongoDB, Express.js, React.js, Node.js) was chosen over alternatives like MEAN,
                                    LAMP, or full Java/.NET solutions for several compelling reasons:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6">
                                    {mernBenefits.map((benefit, idx) => (
                                        <div
                                            key={idx}
                                            className="group p-6 rounded-xl border transition-all duration-500 hover:scale-105"
                                            style={{
                                                backgroundColor: `${colors.primary}05`,
                                                borderColor: `${colors.primary}30`
                                            }}
                                        >
                                            <h3 className="text-xl font-bold mb-3" style={{ color: colors.primary }}>
                                                {benefit.title}
                                            </h3>
                                            <p className="text-gray-300 leading-relaxed">
                                                {benefit.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Technologies Grid */}
                            <div className="rounded-2xl p-8 shadow-2xl border"
                                style={{
                                    backgroundColor: colors.dark,
                                    borderColor: `${colors.primary}30`
                                }}>
                                <h2 className="text-3xl font-bold mb-6" style={{ color: colors.primary }}>
                                    Complete Technology Stack
                                </h2>
                                <div className="flex flex-wrap gap-4">
                                    {technologies.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-6 py-3 rounded-full text-lg font-semibold border-2 transition-all duration-300 hover:scale-110 cursor-pointer"
                                            style={{
                                                borderColor: colors.primary,
                                                color: colors.primary,
                                                backgroundColor: `${colors.primary}10`
                                            }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* architecture Tab */}
                    {activeTab === 'arch' && (
                        <div className="space-y-8 animate-fadeIn">
                            <div
                                className="rounded-2xl p-8 shadow-2xl border"
                                style={{
                                    backgroundColor: colors.dark,
                                    borderColor: `${colors.primary}30`,
                                }}
                            >
                                <div className="flex items-center gap-3 mb-8">
                                    <ImageIcon size={32} style={{ color: colors.primary }} />
                                    <h2 className="text-4xl font-bold" style={{ color: colors.primary }}>
                                        Architecture Diagram
                                    </h2>
                                </div>

                                <p className="text-gray-400 text-lg mb-8">
                                    High level vision of system
                                </p>

                                {/* IMAGE CONTAINER */}
                                <div
                                    className="group relative rounded-xl overflow-hidden border transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                                    style={{ borderColor: `${colors.primary}30` }}
                                >
                                    <Image
                                        src="/projects/clickcart-arch.jpg"
                                        alt="ClickCart Architecture"
                                        width={1200}
                                        height={800}
                                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                                        priority
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                                    {/* Zoom Icon */}
                                    <div
                                        className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                                        style={{ backgroundColor: `${colors.primary}90` }}
                                    >
                                        <ZoomIn size={20} className="text-white" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>



            <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(20px, 20px) scale(1.1);
          }
        }
        
        @keyframes floatDelayed {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-20px, -20px) scale(1.1);
          }
        }
        
      }`}</style>
        </div>
    )
}

