"use client";
import React, { useState } from 'react';
import { ExternalLink, Github, ArrowLeft, CheckCircle2, Users, FileText, DollarSign, MessageSquare, Package, Building2, Shield, TrendingUp, Code, Database, Layout } from 'lucide-react';
import { SiBackbone, SiBackendless } from 'react-icons/si';

const colors = {
    primary: '#eab308', // yellow-500
    dark: '',
    darker: 'black',
    accent: '#fbbf24' // yellow-400
};

export default function StructuraXProject() {
    const [activeTab, setActiveTab] = useState('overview');

    const technologies = [
        'React.js',
        'Spring Boot',
        'MySQL',
        'Flutter',
        'RESTful APIs',
        'Hibernate'
    ];

    const keyObjectives = [
        'Create centralized platform for multiple construction projects',
        'Implement role-based access control for 12 user types',
        'Develop automated workflow systems for approvals',
        'Establish real-time communication channels',
        'Integrate financial tracking and budget management',
        'Provide comprehensive reporting and analytics',
        'Ensure compliance tracking and document management',
        'Create mobile-responsive interfaces for site personnel'
    ];

    const coreFeatures = [
        {
            icon: Building2,
            title: 'Project Management',
            description: 'Centralized platform for managing multiple construction projects simultaneously'
        },
        {
            icon: Shield,
            title: 'Role-Based Access',
            description: '12 different user types with specialized functionalities and permissions'
        },
        {
            icon: FileText,
            title: 'Document Management',
            description: 'Blueprint versioning, contract storage, and secure file sharing'
        },
        {
            icon: DollarSign,
            title: 'Financial Tracking',
            description: 'Budget planning, cost tracking, and payment management'
        },
        {
            icon: MessageSquare,
            title: 'Communication Hub',
            description: 'Real-time messaging between all project stakeholders'
        },
        {
            icon: Package,
            title: 'Procurement System',
            description: 'Material requests, supplier quotations, and inventory management'
        }
    ];

    const systemModules = [
        {
            title: 'Project Management',
            features: [
                'Work breakdown structure management',
                'Task management and scheduling',
                'Calendar and milestone planning',
                'Progress tracking and reporting'
            ]
        },
        {
            title: 'Financial Management',
            features: [
                'Budget planning and approval',
                'Cost tracking and analysis',
                'Payment management system',
                'Financial reporting dashboards'
            ]
        },
        {
            title: 'Operations',
            features: [
                'Daily progress tracking',
                'Worker and subcontractor coordination',
                'Document and contract management',
                'Legal compliance documentation'
            ]
        }
    ];

    const userRoles = [
        {
            title: 'Quantity Survey Officer',
            responsibilities: [
                'Review design drawings and create BOQ',
                'Estimate project value and create work breakdown',
                'Manage material lists and update costings',
                'Create site visit logs and reports',
                'View project progress and financial status',
                'Approve material requests and quotations'
            ]
        },
        {
            title: 'Senior QS Officer',
            responsibilities: [
                'All QS Officer functions',
                'Assign QS officers to projects',
                'Create customer logins',
                'Confirm and edit estimated values'
            ]
        },
        {
            title: 'Project Manager',
            responsibilities: [
                'View project progress and financial status',
                'Monitor material amounts and requests',
                'Create site visit logs',
                'Chat with project owners',
                'Review daily supervisor updates'
            ]
        },
        {
            title: 'Site Supervisor',
            responsibilities: [
                'View project plans and drawings',
                'Update daily work progress',
                'Request materials and tools',
                'Manage site inventory',
                'Upload site photos and videos',
                'Site visits',
                'Get labour(Direct/third-party) attendance',
                'Maintain petty cash records'
            ]
        },
        {
            title: 'Finantial Officer',
            responsibilities: [
                'Create payment plans',
                'Add cash payment reports',
                'Approve confirmed payments',
                'View payment history',
                'Calculate labour charges based on their attendance'
            ]
        },
        {
            title: 'Project Owner',
            responsibilities: [
                'View project progress and contracts',
                'Track payments and materials used',
                'Request site visits',
                'Submit payment confirmations',
                'Chat with project team'
            ]
        },
        {
            title: 'Director',
            responsibilities: [
                'View all projects and assign staff',
                'Change project status',
                'Review system reports',
                'Monitor resource inventories',
                'Update site visit logs'
            ]
        }
    ];

    const techStack = [
        {
            icon: Layout,
            category: 'Frontend Stack',
            technology: 'React.js',
            description: 'React is chosen for building interactive user interfaces with reusable components, efficient state management, and dynamic rendering using virtual DOM. Strong community support and compatibility with RESTful APIs.'
        },
        {
            icon: Code,
            category: 'Backend Stack',
            technology: 'Spring Boot',
            description: 'Spring Boot provides a robust, scalable backend with built-in security, dependency injection, and RESTful API support. Integrates well with relational databases and supports microservices architecture.'
        },
        {
            icon: Database,
            category: 'Database',
            technology: 'MySQL',
            description: 'MySQL is a reliable relational database for structured data storage, complex queries, and transactions. Supports ACID properties, indexing, and scalability for handling large datasets typical in construction projects.'
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
            <div className="fixed inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl animate-float"
                    style={{ backgroundColor: colors.accent }} />
                <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-float-delayed"
                    style={{ backgroundColor: colors.accent }} />
                <div className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full blur-3xl animate-pulse-slow"
                    style={{ backgroundColor: colors.accent }} />
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
                            Web Application
                        </span>
                    </div>

                    <h1
                        className="text-6xl md:text-7xl font-bold mb-4 animate-slideDown"
                        style={{
                            color: colors.primary,
                            textShadow: `0 4px 30px ${colors.primary}40`
                        }}
                    >
                        StructuraX
                    </h1>

                    <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 animate-slideDown">
                        Smart Construction Project Management System
                    </h2>

                    <p className="text-xl text-gray-300 max-w-4xl leading-relaxed mb-10 animate-fadeIn">
                        A comprehensive web-based construction management platform that facilitates effective coordination,
                        monitoring, and decision-making among all stakeholders from design to completion.
                    </p>

                    {/* Quick Action Buttons */}
                    <div className="flex flex-wrap gap-4 animate-fadeIn">
                        <button
                            className="flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg group text-gray-900"
                            style={{ backgroundColor: colors.primary }}
                            onClick={() => window.open('https://drive.google.com/drive/folders/1NORnbv-Ihoak20tNWnoqM3BDJ7sLrY-d?usp=drive_link')}
                        >
                            <ExternalLink size={20} className="group-hover:rotate-12 transition-transform" />
                            Interfaces
                        </button>
                        <button
                            className="flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg border-2 group"
                            style={{
                                borderColor: colors.primary,
                                color: colors.primary,
                                backgroundColor: `${colors.primary}10`
                            }}
                            onClick={()=> window.open('https://github.com/DilshaniNK/StructureX-Frontend')}
                        >
                            <Github size={20} className="group-hover:rotate-12 transition-transform" />
                            Frontend Repo
                        </button>
                        <button
                            className="flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg border-2 group"
                            style={{
                                borderColor: colors.primary,
                                color: colors.primary,
                                backgroundColor: `${colors.primary}10`
                            }}
                            onClick={()=> window.open('https://github.com/ShashiniMadhu/StructuraX-Backend')}
                        >
                            <SiBackbone size={20} className="group-hover:rotate-12 transition-transform" />
                            Backend Repo
                        </button>
                        <button
                            className="flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg border-2 group"
                            style={{
                                borderColor: colors.primary,
                                color: colors.primary,
                                backgroundColor: `${colors.primary}10`
                            }}
                            onClick={()=> window.open('/projects/structurax_report.pdf')}
                        >
                            <FileText size={20} className="group-hover:rotate-12 transition-transform" />
                            Project Report
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
                        <TabButton id="features" label="Features" />
                        <TabButton id="roles" label="User Roles" />
                        <TabButton id="modules" label="System Modules" />
                        <TabButton id="tech" label="Technical Details" />
                        <TabButton id="contribution" label="Contribution" />
                    </div>
                </div>

                {/* Tab Content */}
                <div className="space-y-8">
                    {/* Overview Tab */}
                    {activeTab === 'overview' && (
                        <div className="space-y-8 animate-fadeIn">
                            {/* Project Goal */}
                            <div className="rounded-2xl p-8 shadow-2xl border hover:border-opacity-60 transition-all duration-500 transform hover:scale-[1.01]"
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
                                        <TrendingUp size={24} style={{ color: colors.primary }} />
                                    </div>
                                    Project Goal
                                </h2>
                                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                                    To develop a centralized, web-based construction site management system that facilitates effective
                                    coordination, monitoring, and decision-making among all stakeholders involved in a construction
                                    project—from design to completion.
                                </p>
                                <p className="text-gray-400 leading-relaxed text-lg">
                                    The system addresses critical inefficiencies in construction projects caused by manual communication,
                                    isolated tools, and lack of real-time visibility across stakeholders.
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

                            {/* Problem Statement */}
                            <div className="rounded-2xl p-8 shadow-2xl border"
                                style={{
                                    backgroundColor: colors.dark,
                                    borderColor: `${colors.primary}30`
                                }}>
                                <h2 className="text-4xl font-bold mb-4" style={{ color: colors.primary }}>
                                    Problem Statement
                                </h2>
                                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                                    Construction projects typically involve multiple stakeholders such as architects, engineers, site supervisors,
                                    managers, and property owners. Currently, many construction sites rely heavily on manual communication (phone calls,
                                    emails, paper-based approvals) and isolated tools (Excel sheets, CAD files, messaging apps) that do not integrate well.
                                </p>
                                <p className="text-gray-300 leading-relaxed text-lg">
                                    This causes inefficiencies like delays, miscommunication, lack of transparency, and cost overruns. Moreover,
                                    real-time updates from the site are often not visible to stakeholders such as owners or financial managers,
                                    creating information gaps.
                                </p>
                            </div>

                            {/* Solution Approach */}
                            <div className="rounded-2xl p-8 shadow-2xl border"
                                style={{
                                    backgroundColor: `${colors.primary}10`,
                                    borderColor: `${colors.primary}40`
                                }}>
                                <h2 className="text-4xl font-bold mb-4" style={{ color: colors.primary }}>
                                    Solution Approach
                                </h2>
                                <p className="text-gray-200 leading-relaxed text-lg font-medium">
                                    StructuraX creates a centralized platform where all construction-related processes—from design approvals
                                    to daily progress tracking—can be managed in one integrated environment with role-specific access and automation.
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Features Tab */}
                    {activeTab === 'features' && (
                        <div className="space-y-8 animate-fadeIn">
                            <div className="rounded-2xl p-8 shadow-2xl border"
                                style={{
                                    backgroundColor: colors.dark,
                                    borderColor: `${colors.primary}30`
                                }}>
                                <h2 className="text-4xl font-bold mb-8" style={{ color: colors.primary }}>
                                    Core Features
                                </h2>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {coreFeatures.map((feature, idx) => (
                                        <div
                                            key={idx}
                                            className="group p-6 rounded-xl border transition-all duration-500 hover:scale-105 hover:shadow-xl"
                                            style={{
                                                backgroundColor: `${colors.primary}05`,
                                                borderColor: `${colors.primary}30`
                                            }}
                                        >
                                            <div className="mb-4 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                                                style={{ backgroundColor: `${colors.primary}20` }}>
                                                <feature.icon size={28} style={{ color: colors.primary }} />
                                            </div>
                                            <h3 className="text-xl font-bold mb-3 text-white">
                                                {feature.title}
                                            </h3>
                                            <p className="text-gray-400 leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* User Roles Tab */}
                    {activeTab === 'roles' && (
                        <div className="space-y-6 animate-fadeIn">
                            <div className="rounded-2xl p-8 shadow-2xl border mb-8"
                                style={{
                                    backgroundColor: colors.dark,
                                    borderColor: `${colors.primary}30`
                                }}>
                                <h2 className="text-4xl font-bold mb-3" style={{ color: colors.primary }}>
                                    User Roles & Responsibilities
                                </h2>
                                <p className="text-gray-400 text-lg">
                                    12 specialized user types with role-based access control
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                {userRoles.map((role, idx) => (
                                    <div
                                        key={idx}
                                        className="rounded-xl p-6 border transition-all duration-300 hover:scale-[1.02]"
                                        style={{
                                            backgroundColor: colors.dark,
                                            borderColor: `${colors.primary}30`
                                        }}
                                    >
                                        <h3 className="text-2xl font-bold mb-4" style={{ color: colors.primary }}>
                                            {role.title}
                                        </h3>
                                        <ul className="space-y-2">
                                            {role.responsibilities.map((resp, i) => (
                                                <li key={i} className="flex items-start gap-2 text-gray-300">
                                                    <span style={{ color: colors.primary }}>•</span>
                                                    <span>{resp}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* System Modules Tab */}
                    {activeTab === 'modules' && (
                        <div className="space-y-8 animate-fadeIn">
                            <div className="rounded-2xl p-8 shadow-2xl border"
                                style={{
                                    backgroundColor: colors.dark,
                                    borderColor: `${colors.primary}30`
                                }}>
                                <h2 className="text-4xl font-bold mb-8" style={{ color: colors.primary }}>
                                    Main System Functionalities
                                </h2>
                                <div className="grid md:grid-cols-3 gap-8">
                                    {systemModules.map((module, idx) => (
                                        <div
                                            key={idx}
                                            className="p-6 rounded-xl border transition-all duration-300 hover:translate-y-[-4px]"
                                            style={{
                                                backgroundColor: `${colors.primary}05`,
                                                borderColor: `${colors.primary}30`
                                            }}
                                        >
                                            <h3 className="text-2xl font-bold mb-4" style={{ color: colors.primary }}>
                                                {module.title}
                                            </h3>
                                            <ul className="space-y-3">
                                                {module.features.map((feature, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-gray-300">
                                                        <span className="text-lg" style={{ color: colors.primary }}>•</span>
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Technical Details Tab */}
                    {activeTab === 'tech' && (
                        <div className="space-y-8 animate-fadeIn">
                            <div className="rounded-2xl p-8 shadow-2xl border mb-8"
                                style={{
                                    backgroundColor: colors.dark,
                                    borderColor: `${colors.primary}30`
                                }}>
                                <h2 className="text-4xl font-bold mb-3" style={{ color: colors.primary }}>
                                    Technical Architecture
                                </h2>
                                <p className="text-gray-400 text-lg">
                                    Modern, scalable technology stack for enterprise construction management
                                </p>
                            </div>

                            {/* Tech Stack Details */}
                            <div className="space-y-6">
                                {techStack.map((tech, idx) => (
                                    <div
                                        key={idx}
                                        className="rounded-xl p-8 border transition-all duration-500 hover:scale-[1.02]"
                                        style={{
                                            backgroundColor: colors.dark,
                                            borderColor: `${colors.primary}30`
                                        }}
                                    >
                                        <div className="flex items-start gap-6">
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
                                                <h3 className="text-3xl font-bold mb-4 text-white">
                                                    {tech.technology}
                                                </h3>
                                                <p className="text-gray-300 leading-relaxed text-lg">
                                                    {tech.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Technologies Used */}
                            <div className="rounded-2xl p-8 shadow-2xl border"
                                style={{
                                    backgroundColor: colors.dark,
                                    borderColor: `${colors.primary}30`
                                }}>
                                <h2 className="text-3xl font-bold mb-6" style={{ color: colors.primary }}>
                                    Technologies Used
                                </h2>
                                <div className="flex flex-wrap gap-4">
                                    {technologies.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-4 py-2 rounded-full text-lg font-semibold border-2 transition-all duration-300 hover:scale-110 cursor-pointer"
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

                    {activeTab === 'contribution' && (
                        <div className="rounded-2xl p-8 shadow-2xl border"
                                style={{
                                    backgroundColor: colors.dark,
                                    borderColor: `${colors.primary}30`
                                }}>
                                <h2 className="text-3xl font-bold mb-6" style={{ color: colors.primary }}>
                                    My Contribution
                                </h2>
                                <div className="flex flex-wrap gap-4">
                                    <p>Fully functional mobile-responsive web app for Financial Officer and Site Supervisor with All CRUD operations </p>
                                    <p>Authentication</p>
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
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
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
          animation: floatDelayed 25s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulseSlow 15s ease-in-out infinite;
        }
      `}</style>
        </div>
    );
}