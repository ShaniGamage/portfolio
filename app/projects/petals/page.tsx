'use client'
import React, { useState, useEffect } from 'react';
import { ShoppingCart, Shield, Users, Database, Lock, Smartphone, Zap, Globe, ExternalLink, Github, ArrowLeft, CheckCircle2, Package, CreditCard, BarChart, Settings } from 'lucide-react';

export default function FlowerShopLanding() {
    const [scrolled, setScrolled] = useState(false);
    const [activeTab, setActiveTab] = useState('overview');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const mainColor = '#ec4899'; // pink-500

    const challenges = [
        {
            icon: ShoppingCart,
            title: 'Manual Order Management',
            description: 'Traditional flower shops struggle with manual order processing, leading to errors and delays'
        },
        {
            icon: Users,
            title: 'Customer Data Fragmentation',
            description: 'Customer information scattered across multiple notebooks and systems causes inefficiency'
        },
        {
            icon: Package,
            title: 'Inventory Tracking Issues',
            description: 'Difficulty in tracking stock levels and managing product availability in real-time'
        },
        {
            icon: CreditCard,
            title: 'Payment Processing Limitations',
            description: 'Limited payment options and manual transaction recording create customer friction'
        }
    ];

    const coreFeatures = [
        {
            icon: ShoppingCart,
            title: 'E-commerce Frontend',
            description: 'Clean, modern, and fully responsive design for seamless shopping experience',
            highlights: ['Product catalog', 'Shopping cart', 'Order placement', 'Mobile responsive']
        },
        {
            icon: Shield,
            title: 'Secure Authentication',
            description: 'Robust login and registration system with password hashing for user security',
            highlights: ['User registration', 'Secure login', 'Password hashing', 'Session management']
        },
        {
            icon: Settings,
            title: 'Admin Dashboard',
            description: 'Intuitive admin panel for complete control over products, orders, and users',
            highlights: ['Product management', 'Order tracking', 'User management', 'Real-time updates']
        },
        {
            icon: Package,
            title: 'Product Management',
            description: 'Full CRUD operations for managing flower inventory and product details',
            highlights: ['Add products', 'Update details', 'Delete items', 'Image upload']
        },
        {
            icon: Database,
            title: 'Database Integration',
            description: 'MySQL database for secure and efficient data storage and retrieval',
            highlights: ['Data persistence', 'Query optimization', 'Backup support', 'Relational structure']
        },
        {
            icon: BarChart,
            title: 'Order Management',
            description: 'Complete order tracking system from placement to delivery',
            highlights: ['Order history', 'Status updates', 'Customer notifications', 'Analytics']
        }
    ];

    const technologies = [
        { name: 'HTML5', category: 'Frontend Markup', icon: Globe },
        { name: 'CSS3', category: 'Styling', icon: Smartphone },
        { name: 'JavaScript', category: 'Frontend Logic', icon: Zap },
        { name: 'PHP', category: 'Backend', icon: Database },
        { name: 'MySQL', category: 'Database', icon: Database },
        { name: 'Responsive Design', category: 'UX', icon: Smartphone }
    ];

    const securityFeatures = [
        'Password hashing with PHP',
        'SQL injection prevention',
        'Session management',
        'CSRF protection',
        'Input validation',
        'Secure data transmission',
        'Admin role verification',
        'Database access control'
    ];

    const adminFeatures = [
        {
            title: 'Product Management',
            description: 'Add, edit, and delete flower products with images and descriptions',
            icon: Package
        },
        {
            title: 'Order Processing',
            description: 'View and manage customer orders with status updates',
            icon: ShoppingCart
        },
        {
            title: 'User Management',
            description: 'Manage customer accounts and access permissions',
            icon: Users
        },
        {
            title: 'Dashboard Analytics',
            description: 'View sales statistics and performance metrics',
            icon: BarChart
        },
        {
            title: 'Inventory Control',
            description: 'Track stock levels and manage product availability',
            icon: Database
        },
        {
            title: 'Security Settings',
            description: 'Configure security parameters and user access levels',
            icon: Shield
        }
    ];

    const keyHighlights = [
        'Fully responsive design for mobile and desktop',
        'Secure user authentication system',
        'Password hashing for data security',
        'Real-time product management',
        'Intuitive admin dashboard',
        'Dynamic content loading',
        'Clean and modern UI/UX',
        'MySQL database integration',
        'CRUD operations for all entities',
        'Session-based authentication'
    ];

    const TabButton = ({ id, label }: any) => (
        <button
            onClick={() => setActiveTab(id)}
            className={`px-4 md:px-6 py-3 font-semibold transition-all duration-300 relative text-sm md:text-base ${activeTab === id ? 'text-white' : 'text-gray-300 hover:text-white'
                }`}
        >
            {label}
            {activeTab === id && (
                <div
                    className="absolute bottom-0 left-0 right-0 h-1 rounded-t-full transition-all duration-300"
                    style={{ backgroundColor: mainColor }}
                />
            )}
        </button>
    );

    return (
        <div className="min-h-screen bg-black">
            {/* Animated Background Pattern */}
            <div className="fixed inset-0 opacity-10 pointer-events-none">
                <div
                    className="absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl animate-float"
                    style={{ backgroundColor: mainColor }}
                />
                <div
                    className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-float-delayed"
                    style={{ backgroundColor: '#ffffff' }}
                />
                <div
                    className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full blur-3xl animate-pulse-slow"
                    style={{ backgroundColor: mainColor }}
                />
            </div>

            {/* Hero Section */}
            <div className="relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
                    <button
                        className="flex items-center gap-2 text-white/80 hover:text-white transition-all duration-300 mb-8 group"
                        onClick={() => window.history.back()}
                    >
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        <span>Back to Projects</span>
                    </button>

                    <div className="flex items-center gap-3 mb-6 animate-slideDown">
                        <span
                            className="px-4 py-2 rounded-full text-sm font-bold uppercase backdrop-blur-sm"
                            style={{
                                backgroundColor: `${mainColor}40`,
                                color: 'white',
                                border: `2px solid ${mainColor}`
                            }}
                        >
                            Completed
                        </span>
                        <span className="text-white/80 text-sm uppercase tracking-wider">
                            E-commerce Website
                        </span>
                    </div>

                    <h1
                        className="text-6xl md:text-7xl font-bold mb-6 animate-slideDown"
                        style={{
                            color: mainColor,
                            textShadow: `0 4px 20px ${mainColor}50`
                        }}
                    >
                        Petals.
                    </h1>

                    <p className="text-sl md:text-lg text-white/90 max-w-4xl leading-relaxed mb-10 animate-fadeIn">
                        A fully responsive flower shop e-commerce website with a secure admin panel, built using HTML, CSS, JavaScript,
                        PHP, and MySQL. Features include user authentication, product management, shopping cart functionality, and a
                        comprehensive admin dashboard for managing products, orders, and customers.
                    </p>

                    {/* Quick Action Buttons */}
                    <div className="flex flex-wrap gap-4 animate-fadeIn">
                        <button
                            className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg group"
                            style={{ backgroundColor: mainColor }}
                            onClick={() => window.open('https://drive.google.com/drive/folders/1xN_i0LXZ3STAf-ChJ_UyiQ7TzV4YuUfx?usp=drive_link', '_blank')}
                        >
                            <ExternalLink size={20} className="group-hover:rotate-12 transition-transform" />
                            Interfaces
                        </button>
                        <button
                            className="flex items-center gap-2 px-6 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg border-2 backdrop-blur-sm group"
                            style={{
                                borderColor: mainColor,
                                color: mainColor,
                                backgroundColor: 'rgba(255, 255, 255, 0.1)'
                            }}
                            onClick={()=>window.open('https://github.com/ShaniGamage/flower-shop')}
                        >
                            <Github size={20} className="group-hover:rotate-12 transition-transform" />
                            GitHub Repo
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
                <div
                    className="backdrop-blur-md rounded-2xl p-2 mb-12 border border-white/20"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                >
                    <div className="flex flex-wrap gap-2">
                        <TabButton id="overview" label="Overview" />
                        <TabButton id="problem" label="Problem Statement" />
                        <TabButton id="features" label="Features" />
                        <TabButton id="admin" label="Admin Panel" />
                        <TabButton id="tech" label="Technologies" />
                    </div>
                </div>

                {/* Tab Content */}
                <div className="space-y-8">
                    {/* Overview Tab */}
                    {activeTab === 'overview' && (
                        <div className="space-y-8 animate-fadeIn">
                            <div
                                className="backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:scale-[1.02]"
                                style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
                            >
                                <h2
                                    className="text-4xl font-bold mb-6 flex items-center gap-3"
                                    style={{ color: mainColor }}
                                >
                                    <div
                                        className="w-12 h-12 rounded-full flex items-center justify-center"
                                        style={{ backgroundColor: `${mainColor}40` }}
                                    >
                                        <ShoppingCart size={24} style={{ color: mainColor }} />
                                    </div>
                                    Project Overview
                                </h2>
                                <p className="text-white/90 leading-relaxed text-lg mb-6">
                                    This Flower Shop Website is a comprehensive e-commerce solution designed to modernize the traditional
                                    flower retail business. The platform combines a beautiful, user-friendly frontend with a powerful admin
                                    panel, enabling complete control over products, orders, and customer management.
                                </p>
                                <p className="text-white/90 leading-relaxed text-lg">
                                    Built with core web technologies (HTML, CSS, JavaScript) for the frontend and PHP with MySQL for the
                                    backend, this project demonstrates robust full-stack development skills. Security is a top priority,
                                    with password hashing and secure authentication systems protecting user data. The responsive design
                                    ensures a seamless experience across all devices, from desktop to mobile.
                                </p>
                            </div>

                            {/* Core Features Grid */}
                            <div className="rounded-2xl p-8 shadow-2xl border border-white/20">
                                <h2 className="text-4xl font-bold mb-8" style={{ color: mainColor }}>
                                    Core Features
                                </h2>
                                <div className="grid md:grid-cols-3 gap-6">
                                    {coreFeatures.slice(0, 3).map((feature, idx) => (
                                        <div
                                            key={idx}
                                            className="group p-6 rounded-xl backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 hover:shadow-xl"
                                            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                                        >
                                            <div
                                                className="mb-4 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                                                style={{ backgroundColor: `${mainColor}30` }}
                                            >
                                                <feature.icon size={28} style={{ color: mainColor }} />
                                            </div>
                                            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-opacity-90 transition-colors">
                                                {feature.title}
                                            </h3>
                                            <p className="text-white/70 leading-relaxed mb-4">
                                                {feature.description}
                                            </p>
                                            <div className="space-y-2">
                                                {feature.highlights.map((highlight, hidx) => (
                                                    <div key={hidx} className="flex items-start text-sm text-gray-400">
                                                        <CheckCircle2 className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" style={{ color: mainColor }} />
                                                        <span>{highlight}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Problem Statement Tab */}
                    {activeTab === 'problem' && (
                        <div className="space-y-8 animate-fadeIn">
                            <div
                                className="backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20"
                            >
                                <h2 className="text-4xl font-bold mb-8" style={{ color: mainColor }}>
                                    Problem Statement
                                </h2>
                                <p className="text-white/90 leading-relaxed text-lg mb-8">
                                    Traditional flower shops face numerous challenges in managing their business operations efficiently.
                                    Manual processes for order management, inventory tracking, and customer data handling lead to errors,
                                    delays, and lost opportunities. Without a digital presence, these businesses struggle to reach modern
                                    customers who expect convenient online shopping experiences.
                                </p>
                                <div className="space-y-6">
                                    {challenges.map((challenge, idx) => (
                                        <div
                                            key={idx}
                                            className="group p-6 rounded-xl backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-500 hover:translate-x-2"
                                            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                                        >
                                            <div className="flex items-start gap-4">
                                                <div
                                                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                                                    style={{ backgroundColor: `${mainColor}30` }}
                                                >
                                                    <challenge.icon size={24} style={{ color: mainColor }} />
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-xl font-bold mb-2" style={{ color: mainColor }}>
                                                        {challenge.title}
                                                    </h3>
                                                    <p className="text-white/80 leading-relaxed">
                                                        {challenge.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Solution Highlight */}
                            <div
                                className="backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20"
                            >
                                <h3 className="text-3xl font-bold mb-6" style={{ color: mainColor }}>
                                    The Solution
                                </h3>
                                <p className="text-white/90 leading-relaxed text-lg mb-6">
                                    This comprehensive e-commerce platform provides a complete digital transformation for flower shops.
                                    The solution includes:
                                </p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        'Professional online storefront with product catalog',
                                        'Secure user authentication and account management',
                                        'Shopping cart and checkout functionality',
                                        'Real-time inventory management',
                                        'Order tracking and processing system',
                                        'Customer database management',
                                        'Mobile-responsive design for all devices',
                                        'Intuitive admin dashboard for complete control'
                                    ].map((solution, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-start p-4 bg-black/50 rounded-lg border border-white/10 hover:border-white/30 transition-all duration-300 hover:translate-x-2"
                                        >
                                            <CheckCircle2 className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" style={{ color: mainColor }} />
                                            <span className="text-white/90">{solution}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Features Tab */}
                    {activeTab === 'features' && (
                        <div className="backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20 animate-fadeIn">
                            <h2 className="text-4xl font-bold mb-8" style={{ color: mainColor }}>
                                Key Features
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {coreFeatures.map((feature, idx) => (
                                    <div
                                        key={idx}
                                        className="group p-6 rounded-xl backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105"
                                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                                    >
                                        <div className="flex items-start gap-4">
                                            <div
                                                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                                                style={{ backgroundColor: `${mainColor}30` }}
                                            >
                                                <feature.icon size={24} style={{ color: mainColor }} />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-lg font-bold mb-2 text-white">
                                                    {feature.title}
                                                </h3>
                                                <p className="text-white/70 leading-relaxed mb-3">
                                                    {feature.description}
                                                </p>
                                                <div className="space-y-1">
                                                    {feature.highlights.map((highlight, hidx) => (
                                                        <div key={hidx} className="flex items-start text-sm text-gray-400">
                                                            <CheckCircle2 className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" style={{ color: mainColor }} />
                                                            <span>{highlight}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Admin Panel Tab */}
                    {activeTab === 'admin' && (
                        <div className="space-y-8 animate-fadeIn">
                            <div
                                className="backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20"
                            >
                                <h2 className="text-4xl font-bold mb-8" style={{ color: mainColor }}>
                                    Admin Panel Features
                                </h2>
                                <p className="text-white/90 leading-relaxed text-lg mb-8">
                                    The admin panel provides complete control over the flower shop website. With an intuitive dashboard
                                    and powerful management tools, administrators can efficiently handle all aspects of the online business
                                    from a single interface.
                                </p>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {adminFeatures.map((feature, idx) => (
                                        <div
                                            key={idx}
                                            className="group p-6 rounded-xl backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105"
                                            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                                        >
                                            <feature.icon
                                                className="w-10 h-10 mb-4 group-hover:scale-110 transition-transform"
                                                style={{ color: mainColor }}
                                            />
                                            <h4 className="font-bold mb-2 text-white group-hover:text-opacity-90">
                                                {feature.title}
                                            </h4>
                                            <p className="text-white/70 text-sm leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Security Features */}
                            <div
                                className="backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <Shield size={32} style={{ color: mainColor }} />
                                    <h3 className="text-3xl font-bold" style={{ color: mainColor }}>
                                        Security Features
                                    </h3>
                                </div>
                                <p className="text-white/90 leading-relaxed text-lg mb-6">
                                    Security is paramount in e-commerce applications. This project implements multiple layers of security
                                    to protect user data and prevent unauthorized access.
                                </p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {securityFeatures.map((feature, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-start p-4 bg-black/50 rounded-lg border border-white/10 hover:border-white/30 transition-all duration-300 hover:translate-x-2"
                                        >
                                            <Lock className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" style={{ color: mainColor }} />
                                            <span className="text-white/90">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Technologies Tab */}
                    {activeTab === 'tech' && (
                        <div className="space-y-8 animate-fadeIn">
                            <div
                                className="backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20"
                            >
                                <h2 className="text-4xl font-bold mb-8" style={{ color: mainColor }}>
                                    Technologies Used
                                </h2>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {technologies.map((tech, idx) => (
                                        <div
                                            key={idx}
                                            className="group p-6 rounded-xl backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105"
                                            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                                        >
                                            <div className="flex items-center gap-4 mb-3">
                                                <div
                                                    className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                                                    style={{ backgroundColor: `${mainColor}30` }}
                                                >
                                                    <tech.icon size={24} style={{ color: mainColor }} />
                                                </div>
                                                <div>
                                                    <div className="text-lg font-bold text-white">{tech.name}</div>
                                                    <div className="text-gray-400 text-sm">{tech.category}</div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Technical Highlights */}
                            <div
                                className="backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20"
                            >
                                <h3 className="text-3xl font-bold mb-6" style={{ color: mainColor }}>
                                    Technical Highlights
                                </h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-3">
                                        <h4 className="font-bold flex items-center gap-2" style={{ color: mainColor }}>
                                            <Globe size={20} />
                                            Frontend Development
                                        </h4>
                                        <p className="text-white/80 leading-relaxed">
                                            Built with HTML5, CSS3, and JavaScript for a clean, modern, and fully responsive design.
                                            The interface adapts seamlessly to desktop, tablet, and mobile devices.
                                        </p>
                                    </div>
                                    <div className="space-y-3">
                                        <h4 className="font-bold flex items-center gap-2" style={{ color: mainColor }}>
                                            <Database size={20} />
                                            Backend & Database
                                        </h4>
                                        <p className="text-white/80 leading-relaxed">
                                            PHP handles server-side logic and MySQL provides reliable data storage. The system supports
                                            full CRUD operations for products, orders, and users.
                                        </p>
                                    </div>
                                    <div className="space-y-3">
                                        <h4 className="font-bold flex items-center gap-2" style={{ color: mainColor }}>
                                            <Shield size={20} />
                                            Security Implementation
                                        </h4>
                                        <p className="text-white/80 leading-relaxed">
                                            Password hashing ensures credentials are stored securely. SQL injection prevention and input
                                            validation protect against common vulnerabilities.
                                        </p>
                                    </div>
                                    <div className="space-y-3">
                                        <h4 className="font-bold flex items-center gap-2" style={{ color: mainColor }}>
                                            <Smartphone size={20} />
                                            Responsive Design
                                        </h4>
                                        <p className="text-white/80 leading-relaxed">
                                            Mobile-first approach ensures the website looks great and functions perfectly on all screen
                                            sizes, providing excellent user experience everywhere.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Key Achievements */}
                            <div
                                className="backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20"
                            >
                                <h3 className="text-3xl font-bold mb-6" style={{ color: mainColor }}>
                                    Key Achievements
                                </h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {keyHighlights.map((highlight, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-start p-4 bg-black/50 rounded-lg border border-white/10 hover:border-white/30 transition-all duration-300 hover:translate-x-2"
                                        >
                                            <CheckCircle2 className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" style={{ color: mainColor }} />
                                            <span className="text-white/90">{highlight}</span>
                                        </div>
                                    ))}
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
        
        @keyframes pulseSlow {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
        
        .animate-slideDown {
          animation: slideDown 0.6s ease-out;
        }
        
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float;
      }
          .animate-pulse-slow {
      animation: pulseSlow 15s ease-in-out infinite;
    }
  `}
            </style>
        </div>
    )
}