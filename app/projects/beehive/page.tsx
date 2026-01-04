"use client";

import React, { useState } from 'react';
import { ExternalLink, Github, ArrowLeft, CheckCircle2, Users, Calendar, Baby, Heart, Shield, Activity, MapPin, Bell, BarChart3, Languages } from 'lucide-react';

export default function BeeHivePage() {
    const [activeTab, setActiveTab] = useState('overview');

    const colors = {
        pink: '#FFC4C4',
        navy: '#1D4069',
        cyan: '#97E7FF'
    };

    const technologies = [
        'PHP',
        'MySQL',
        'JavaScript',
        'HTML',
        'CSS',
        'MVC Architecture'
    ];

    const targetUsers = [
        {
            icon: Heart,
            title: 'Midwives',
            description: 'Manage child profiles, vaccinations, growth charts, and community health events',
            features: ['Child profile management', 'Vaccination tracking', 'Growth monitoring', 'Event coordination']
        },
        {
            icon: Activity,
            title: 'Doctors',
            description: 'Monitor child health, review comprehensive reports, and handle appointments',
            features: ['Health monitoring', 'Medical reports', 'Appointment management', 'Clinical insights']
        },
        {
            icon: Users,
            title: 'Parents',
            description: 'Access health records, schedule appointments, and receive timely reminders',
            features: ['Health record access', 'Appointment booking', 'Bilingual reminders', 'Child progress tracking']
        },
        {
            icon: Shield,
            title: 'Administrators',
            description: 'Oversee system operations, manage users, and coordinate nutrition programs',
            features: ['User management', 'Vaccine inventory', 'Triposha coordination', 'System analytics']
        }
    ];

    const keyFeatures = [
        {
            icon: MapPin,
            title: 'Region-Based Access Control',
            description: 'Role-specific dashboards with geographic access management for healthcare professionals'
        },
        {
            icon: Baby,
            title: 'Immunization Tracking',
            description: 'Age-based eligibility logic ensuring timely vaccination scheduling and monitoring'
        },
        {
            icon: BarChart3,
            title: 'Growth Monitoring',
            description: 'Interactive charts tracking height, weight, and BMI with visual analytics'
        },
        {
            icon: Calendar,
            title: 'Appointment System',
            description: 'Seamless scheduling between parents and doctors with conflict management'
        },
        {
            icon: Bell,
            title: 'Automated Reminders',
            description: 'Smart notifications for upcoming appointments and vaccination schedules'
        },
        {
            icon: Languages,
            title: 'Bilingual Support',
            description: 'Complete interface in both Sinhala and English for accessibility'
        }
    ];

    const achievements = [
        'End-to-end healthcare management system',
        'Built from scratch with clean MVC architecture',
        'Real-time analytics and visual reporting',
        'Bulk notification system for vaccination events',
        'Comprehensive growth tracking with BMI calculations',
        'Multi-role access control system'
    ];

    const teamMembers = [
        'Shani Gamage',
        'Sasha Sawindi',
        'Himesh Kaveesha'
    ];

    const TabButton = ({ id, label }: any) => (
        <button
            onClick={() => setActiveTab(id)}
            className={`px-6 py-3 font-bold transition-all duration-300 relative rounded-t-xl ${activeTab === id ? 'text-white scale-105' : 'text-gray-600 hover:text-gray-800'
                }`}
            style={{
                backgroundColor: activeTab === id ? colors.navy : 'transparent'
            }}
        >
            {label}
            {activeTab === id && (
                <div
                    className="absolute -bottom-1 left-0 right-0 h-1 rounded-t-full"
                    style={{ backgroundColor: colors.cyan }}
                />
            )}
        </button>
    );

    return (
        <div className="min-h-screen" style={{ backgroundColor: 'black' }}>
            {/* Animated Background Pattern */}
            <div className="fixed inset-0 opacity-20 pointer-events-none overflow-hidden">
                <div
                    className="absolute top-20 -left-20 w-96 h-96 rounded-full blur-3xl animate-float"
                    style={{ backgroundColor: colors.pink }}
                />
                <div
                    className="absolute bottom-40 right-20 w-[500px] h-[500px] rounded-full blur-3xl animate-float-delayed"
                    style={{ backgroundColor: colors.cyan }}
                />
                <div
                    className="absolute top-1/2 left-1/3 w-80 h-80 rounded-full blur-3xl animate-pulse-slow"
                    style={{ backgroundColor: colors.navy, opacity: 0.3 }}
                />

                {/* Hexagon Pattern */}
                <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
                            <polygon points="24.8,22 37.3,29.2 37.3,43.7 24.8,50.9 12.3,43.7 12.3,29.2"
                                fill="none"
                                stroke={colors.navy}
                                strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#hexagons)" />
                </svg>
            </div>

            {/* Hero Section */}
            <div className="relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
                    <button
                        className="flex items-center gap-2 text-gray-100 hover:text-gray-900 transition-all duration-300 mb-8 group font-semibold"
                        onClick={() => window.history.back()}
                    >
                        <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform duration-300" />
                        <span>Back to Projects</span>
                    </button>

                    <div className="flex items-center gap-3 mb-6 animate-slideDown">
                        <span
                            className="px-5 py-2 rounded-full text-sm font-black uppercase tracking-wide shadow-lg"
                            style={{
                                backgroundColor: colors.pink,
                                color: colors.navy
                            }}
                        >
                            2nd Year Group Project
                        </span>
                        <span
                            className="px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide"
                            style={{
                                backgroundColor: colors.cyan,
                                color: colors.navy
                            }}
                        >
                            Healthcare System
                        </span>
                    </div>

                    <div className="mb-8 animate-slideDown" style={{ animationDelay: '0.1s' }}>
                        <h1
                            className="text-6xl md:text-8xl font-bold mb-4 tracking-tight"
                            style={{
                                color: colors.cyan,
                                // textShadow: `4px 4px 0px ${colors.navy}, 8px 8px 0px ${colors.cyan}`
                            }}
                        >
                            Beehive
                        </h1>
                        <div className="flex items-center gap-3">
                            <div
                                className="h-2 rounded-full"
                                style={{
                                    width: '120px',
                                    backgroundColor: colors.pink
                                }}
                            />
                            <Baby size={32} style={{ color: 'white' }} />
                            <div
                                className="h-2 rounded-full"
                                style={{
                                    width: '120px',
                                    backgroundColor: colors.cyan
                                }}
                            />
                        </div>
                    </div>

                    <p
                        className="text-sm md:text-lg max-w-4xl leading-relaxed mb-10 animate-fadeIn "
                        style={{
                            color: 'white',
                            animationDelay: '0.2s'
                        }}
                    >
                        A comprehensive child healthcare management system designed to support midwives, doctors,
                        and regional health centers across Sri Lanka. Empowering healthcare professionals and parents
                        with accessible, efficient, and bilingual child health monitoring.
                    </p>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                        {[
                            { label: 'User Roles', value: '4' },
                            { label: 'Languages', value: '2' },
                            { label: 'Key Features', value: '15+' },
                            { label: 'Team Size', value: '4' }
                        ].map((stat, idx) => (
                            <div
                                key={idx}
                                className="p-6 rounded-2xl shadow-lg border-4 hover:scale-105 transition-transform duration-300"
                                style={{
                                    backgroundColor: 'white',
                                    borderColor: idx % 2 === 0 ? colors.pink : colors.cyan
                                }}
                            >
                                <div
                                    className="text-4xl font-black mb-2"
                                    style={{ color: colors.navy }}
                                >
                                    {stat.value}
                                </div>
                                <div
                                    className="text-sm font-bold uppercase tracking-wide"
                                    style={{ color: colors.navy }}
                                >
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
                        <button
                            className="flex items-center gap-3 px-6 py-2 rounded-full font-black text-sm transition-all duration-300 hover:scale-110 hover:shadow-2xl shadow-lg group border-4 font-bold"
                            style={{
                                backgroundColor: colors.navy,
                                color: 'white',
                                borderColor: colors.cyan
                            }}
                        >
                            <ExternalLink size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                            Interfaces
                        </button>
                        <button
                            className="flex items-center gap-3 px-8 py-4 rounded-full font-black text-sm transition-all duration-300 hover:scale-110 shadow-lg border-4 group font-bold"
                            style={{
                                backgroundColor: 'white',
                                color: colors.navy,
                                borderColor: colors.pink
                            }}
                            onClick={()=>window.open('https://github.com/vishwani014/Beehive-PHP')}
                        >
                            <Github size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                            Github Repo
                        </button>
                    </div>
                </div>

                {/* Decorative Wave */}
                <div className="relative h-32 overflow-hidden">
                    <svg
                        className="absolute bottom-0 w-full h-32"
                        viewBox="0 0 1440 120"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0,64 C360,100 720,20 1080,64 C1260,90 1380,90 1440,64 L1440,120 L0,120 Z"
                            fill={colors.pink}
                            opacity="0.3"
                        />
                        <path
                            d="M0,80 C360,40 720,100 1080,80 C1260,70 1380,70 1440,80 L1440,120 L0,120 Z"
                            fill={colors.cyan}
                            opacity="0.4"
                        />
                    </svg>
                </div>
            </div>

            {/* Content Section */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Tab Navigation */}
                <div
                    className="rounded-2xl p-2 mb-12 shadow-xl border-4"
                    style={{
                        backgroundColor: 'white',
                        borderColor: colors.pink
                    }}
                >
                    <div className="flex flex-wrap gap-2">
                        <TabButton id="overview" label="Overview" />
                        <TabButton id="users" label="Target Users" />
                        <TabButton id="features" label="Key Features" />
                        <TabButton id="tech" label="Technology" />
                    </div>
                </div>

                {/* Tab Content */}
                <div className="space-y-8">
                    {/* Overview Tab */}
                    {activeTab === 'overview' && (
                        <div className="space-y-8 animate-fadeIn">
                            {/* Main Description */}
                            <div
                                className="rounded-3xl p-10 shadow-2xl border-4 hover:scale-[1.02] transition-all duration-500"
                                style={{
                                    backgroundColor: 'white',
                                    borderColor: colors.navy
                                }}
                            >
                                <div className="flex items-start gap-4 mb-6">
                                    <div
                                        className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                                        style={{ backgroundColor: colors.pink }}
                                    >
                                        <Baby size={32} style={{ color: colors.navy }} />
                                    </div>
                                    <h2
                                        className="text-4xl font-black font-bold"
                                        style={{ color: colors.navy }}
                                    >
                                        What is Beehive?
                                    </h2>
                                </div>
                                <p
                                    className="text-sm leading-relaxed font-medium"
                                    style={{ color: colors.navy }}
                                >
                                    Beehive is a robust, end-to-end web application that revolutionizes child healthcare management
                                    in Sri Lanka. Our platform seamlessly connects midwives, doctors, regional health centers, and
                                    parents in a unified ecosystem designed to ensure every child receives optimal healthcare monitoring
                                    and timely medical interventions.
                                </p>
                            </div>

                            {/* Achievements Grid */}
                            <div
                                className="rounded-3xl p-10 shadow-2xl border-4"
                                style={{
                                    backgroundColor: 'white',
                                    borderColor: colors.cyan
                                }}
                            >
                                <h2
                                    className="text-4xl font-black mb-8 flex items-center gap-3 font-bold"
                                    style={{ color: colors.navy }}
                                >
                                    <CheckCircle2 size={40} style={{ color: colors.cyan }} />
                                    Key Achievements
                                </h2>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {achievements.map((achievement, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-start gap-4 p-5 rounded-xl border-2 hover:scale-105 transition-all duration-300 group "
                                            style={{
                                                backgroundColor: idx % 2 === 0 ? `${colors.pink}20` : `${colors.cyan}20`,
                                                borderColor: idx % 2 === 0 ? colors.pink : colors.cyan
                                            }}
                                        >
                                            <CheckCircle2
                                                size={24}
                                                className="flex-shrink-0 mt-1 group-hover:scale-125 transition-transform duration-300"
                                                style={{ color: colors.navy }}
                                            />
                                            <p
                                                className="text-sm font-bold"
                                                style={{ color: colors.navy }}
                                            >
                                                {achievement}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Target Users Tab */}
                    {activeTab === 'users' && (
                        <div className="grid md:grid-cols-2 gap-6 animate-fadeIn">
                            {targetUsers.map((user, idx) => (
                                <div
                                    key={idx}
                                    className="group rounded-3xl p-8 shadow-2xl border-4 hover:scale-105 transition-all duration-500"
                                    style={{
                                        backgroundColor: 'white',
                                        borderColor: [colors.pink, colors.cyan, colors.navy, colors.pink][idx % 4]
                                    }}
                                >
                                    <div
                                        className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300"
                                        style={{
                                            backgroundColor: [colors.pink, colors.cyan, `${colors.navy}20`, colors.pink][idx % 4]
                                        }}
                                    >
                                        <user.icon size={40} style={{ color: colors.navy }} />
                                    </div>
                                    <h3
                                        className="text-3xl font-bold mb-4"
                                        style={{ color: colors.navy }}
                                    >
                                        {user.title}
                                    </h3>
                                    <p
                                        className=" mb-6 font-bold"
                                        style={{ color: colors.navy }}
                                    >
                                        {user.description}
                                    </p>
                                    <div className="space-y-3">
                                        {user.features.map((feature, fIdx) => (
                                            <div
                                                key={fIdx}
                                                className="flex items-center gap-3 p-3 rounded-lg border-2"
                                                style={{
                                                    backgroundColor: `${colors.cyan}15`,
                                                    borderColor: colors.cyan
                                                }}
                                            >
                                                <div
                                                    className="w-2 h-2 rounded-full"
                                                    style={{ backgroundColor: colors.navy }}
                                                />
                                                <span
                                                    className="font-bold"
                                                    style={{ color: colors.navy }}
                                                >
                                                    {feature}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Key Features Tab */}
                    {activeTab === 'features' && (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
                            {keyFeatures.map((feature, idx) => (
                                <div
                                    key={idx}
                                    className="group p-8 rounded-3xl shadow-2xl border-4 hover:scale-105 hover:rotate-1 transition-all duration-500"
                                    style={{
                                        backgroundColor: 'white',
                                        borderColor: idx % 3 === 0 ? colors.pink : idx % 3 === 1 ? colors.cyan : colors.navy
                                    }}
                                >
                                    <div
                                        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300"
                                        style={{
                                            backgroundColor: idx % 3 === 0 ? colors.pink : idx % 3 === 1 ? colors.cyan : `${colors.navy}20`
                                        }}
                                    >
                                        <feature.icon size={32} style={{ color: colors.navy }} />
                                    </div>
                                    <h3
                                        className="text-2xl  mb-4"
                                        style={{ color: colors.navy }}
                                    >
                                        {feature.title}
                                    </h3>
                                    <p
                                        className="text-sm font-semibold leading-relaxed"
                                        style={{ color: colors.navy }}
                                    >
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Technology Tab */}
                    {activeTab === 'tech' && (
                        <div className="space-y-8 animate-fadeIn">
                            <div
                                className="rounded-3xl p-10 shadow-2xl border-4"
                                style={{
                                    backgroundColor: 'white',
                                    borderColor: colors.navy
                                }}
                            >
                                <h2
                                    className="text-4xl font-bold mb-8"
                                    style={{ color: colors.navy }}
                                >
                                    Technology Stack
                                </h2>
                                <div className="flex flex-wrap gap-4 mb-10">
                                    {technologies.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="group px-6 py-2 rounded-full text-sl font-bold border-4 hover:scale-110 hover:rotate-3 transition-all duration-300 cursor-pointer shadow-lg"
                                            style={{
                                                backgroundColor: idx % 3 === 0 ? colors.pink : idx % 3 === 1 ? colors.cyan : 'white',
                                                borderColor: colors.navy,
                                                color: colors.navy
                                            }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div
                                    className="p-8 rounded-2xl border-4"
                                    style={{
                                        backgroundColor: `${colors.cyan}20`,
                                        borderColor: colors.cyan
                                    }}
                                >
                                    <h3
                                        className="text-3xl font-bold mb-4"
                                        style={{ color: colors.navy }}
                                    >
                                        Architecture Highlights
                                    </h3>
                                    <ul className="space-y-3 ">
                                        {[
                                            'Clean MVC Architecture built from scratch',
                                            'No frameworks - Pure PHP implementation',
                                            'Scalable MySQL database design',
                                            'Responsive JavaScript-powered interfaces',
                                            'Custom CSS styling system'
                                        ].map((point, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-start gap-3 text-sl"
                                                style={{ color: colors.navy }}
                                            >
                                                <span
                                                    className="text-2xl"
                                                    style={{ color: colors.pink }}
                                                >
                                                    ▸
                                                </span>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
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
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
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
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        
        @keyframes floatDelayed {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(-30px, 30px) scale(1.1);
          }
          66% {
            transform: translate(20px, -20px) scale(0.9);
          }
        }
        
        @keyframes pulseSlow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animate-slideDown {
          animation: slideDown 0.8s ease-out forwards;
        }
        
        .animate-float {
          animation: float 25s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: floatDelayed 30s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulseSlow 18s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
        </div>
    );
}