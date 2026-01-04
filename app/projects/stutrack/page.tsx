"use client";

import React, { useState } from 'react';
import {
    ExternalLink,
    Github,
    ArrowLeft,
    Database,
    Upload,
    Zap,
    Users,
    Terminal,
    Globe,
    Lock,
    MessageSquare,
    FileSpreadsheet,
    Trash2,
    Edit,
    CheckSquare,
    Bell,
    Activity,
    Layers,
    Radio,
    Ticket
} from 'lucide-react';
import { Donegal_One } from 'next/font/google';

export default function StudentManagementPage() {
    const [activeTab, setActiveTab] = useState('overview');

    const colors = {
        purple: '#7c3aed',
        purpleDark: '#5b21b6',
        purpleLight: '#a78bfa',
        black: '#0a0a0a',
        darkGray: '#1a1a1a',
        mediumGray: '#2a2a2a'
    };

    const technologies = [
        { name: 'Angular', icon: Globe, category: 'Frontend' },
        { name: 'Go', icon: Terminal, category: 'Backend' },
        { name: 'Kafka', icon: Activity, category: 'Message Broker' },
        { name: 'WebSockets', icon: Radio, category: 'Real-time' },
        { name: 'Keycloak', icon: Lock, category: 'Auth' },
        { name: 'Redis', icon: Database, category: 'Cache' },
        { name: 'Bootstrap', icon: Layers, category: 'UI' },
        { name: 'Ng-Zorro', icon: Layers, category: 'UI' }
    ];

    const coreFeatures = [
        {
            icon: Users,
            title: 'Student CRUD Operations',
            description: 'Complete lifecycle management with create, read, update, and delete operations',
            details: [
                'Student records with First Name, Last Name, Address, DOB',
                'Server-side pagination for optimal performance',
                'Column-based sorting for easy navigation',
                'Row-level and bulk delete operations'
            ]
        },
        {
            icon: Upload,
            title: 'Bulk CSV Upload',
            description: 'Asynchronous file processing with real-time status updates',
            details: [
                'Background processing using Go goroutines',
                'Instant upload confirmation',
                'Progress tracking and notifications',
                'Error handling and validation'
            ]
        },
        {
            icon: Bell,
            title: 'Real-time WebSocket Notifications',
            description: 'Live updates for asynchronous operations and system events',
            details: [
                'Instant notification when CSV processing completes',
                'Toast messages for user feedback',
                'Notification panel for event history',
                'Bidirectional communication'
            ]
        },
        {
            icon: Layers,
            title: 'Microservices Architecture',
            description: 'Scalable, distributed system design with independent services',
            details: [
                'Service isolation for maintainability',
                'Kafka-based event streaming',
                'Redis caching layer',
                'API Gateway pattern'
            ]
        }
    ];

    const architectureComponents = [
        {
            icon: Globe,
            title: 'Frontend Layer',
            tech: 'Angular + Ng-Zorro',
            description: 'Responsive SPA with component-based architecture'
        },
        {
            icon: Terminal,
            title: 'API Gateway',
            tech: 'Go',
            description: 'RESTful endpoints with WebSocket support'
        },
        {
            icon: Activity,
            title: 'Message Broker',
            tech: 'Kafka',
            description: 'Event streaming for async operations'
        },
        {
            icon: Database,
            title: 'Data Layer',
            tech: 'SQL + Redis',
            description: 'Persistent storage with caching'
        },
        {
            icon: Lock,
            title: 'Authentication',
            tech: 'Keycloak',
            description: 'Identity and access management'
        },
        {
            icon: Radio,
            title: 'Real-time Engine',
            tech: 'WebSockets',
            description: 'Live bidirectional communication'
        }
    ];

    const implementationHighlights = [
        {
            title: 'Go Concurrency',
            description: 'Goroutines for parallel CSV processing',
            icon: Zap
        },
        {
            title: 'Smart Bulk Actions',
            description: 'Checkbox-based selection with conditional UI',
            icon: CheckSquare
        },
        {
            title: 'CSV Download',
            description: 'Export student data to CSV format',
            icon: FileSpreadsheet
        },
        {
            title: 'Server-side Pagination',
            description: 'Efficient data loading for large datasets',
            icon: Database
        },
        {
            title: 'Row-level Actions',
            description: 'Edit and delete from table rows',
            icon: Edit
        },
        {
            title: 'Event-Driven Updates',
            description: 'Kafka events trigger real-time UI changes',
            icon: MessageSquare
        }
    ];

    const TabButton = ({ id, label, icon: Icon }: any) => (
        <button
            onClick={() => setActiveTab(id)}
            className={`group flex items-center gap-2 px-6 py-3 font-bold transition-all duration-300 relative ${activeTab === id ? 'text-white' : 'text-gray-400 hover:text-gray-200'
                }`}
        >
            <Icon size={20} className="transition-transform group-hover:scale-110" />
            {label}
            {activeTab === id && (
                <div
                    className="absolute bottom-0 left-0 right-0 h-1 rounded-t-full"
                    style={{
                        backgroundColor: colors.purple,
                        boxShadow: `0 0 20px ${colors.purple}`
                    }}
                />
            )}
        </button>
    );

    return (
        <div className="min-h-screen" style={{ backgroundColor: colors.black }}>
            {/* Animated Background Grid */}
            <div className="fixed inset-0 opacity-20 pointer-events-none">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
              linear-gradient(${colors.purple}40 1px, transparent 1px),
              linear-gradient(90deg, ${colors.purple}40 1px, transparent 1px)
            `,
                        backgroundSize: '50px 50px',
                        animation: 'gridMove 20s linear infinite'
                    }}
                />
            </div>

            {/* Glowing Orbs */}
            <div className="fixed inset-0 opacity-30 pointer-events-none overflow-hidden">
                <div
                    className="absolute top-20 -left-40 w-96 h-96 rounded-full blur-3xl animate-pulse-glow"
                    style={{ backgroundColor: colors.purple }}
                />
                <div
                    className="absolute bottom-20 -right-40 w-[600px] h-[600px] rounded-full blur-3xl animate-pulse-glow-delayed"
                    style={{ backgroundColor: colors.purpleDark }}
                />
                <div
                    className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full blur-3xl animate-float"
                    style={{ backgroundColor: colors.purpleLight }}
                />
            </div>

            {/* Hero Section */}
            <div className="relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
                    <button
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300 mb-8 group"
                        onClick={() => window.history.back()}
                    >
                        <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform duration-300" />
                        <span className="font-semibold text-gray-100">Back to Projects</span>
                    </button>

                    {/* Status Badges */}
                    <div className="flex items-center gap-3 mb-6 animate-slideDown">
                        <span
                            className="px-5 py-2 rounded-full text-sm font-black uppercase tracking-wide border-2"
                            style={{
                                backgroundColor: `${colors.purple}30`,
                                color: colors.purpleLight,
                                borderColor: colors.purple,
                                boxShadow: `0 0 0px ${colors.purple}50`
                            }}
                        >
                            <Activity size={14} className="inline mr-2" />
                            Completed
                        </span>
                        <span
                            className="px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide"
                            style={{
                                backgroundColor: colors.darkGray,
                                color: colors.purpleLight
                            }}
                        >
                            Full-stack web app
                        </span>
                    </div>

                    {/* Title */}
                    <div className="mb-8 animate-slideDown" style={{ animationDelay: '0.1s' }}>
                        <h1
                            className="text-6xl md:text-8xl font-bold mb-4 tracking-tight leading-none"
                            style={{
                                color: colors.purple,
                                textShadow: `0 0 10px ${colors.purple}80, 0 0 80px ${colors.purple}40`
                            }}
                        >
                            stuTrack
                        </h1>
                        <div className="flex items-center gap-4 mt-6">
                            <div
                                className="h-1 rounded-full animate-pulse-slow"
                                style={{
                                    width: '150px',
                                    backgroundColor: colors.purple,
                                    boxShadow: `0 0 10px ${colors.purple}`
                                }}
                            />
                            <Terminal size={32} style={{ color: colors.purpleLight }} />
                            <div
                                className="h-1 rounded-full animate-pulse-slow"
                                style={{
                                    width: '150px',
                                    backgroundColor: colors.purple,
                                    boxShadow: `0 0 10px ${colors.purple}`
                                }}
                            />
                        </div>
                    </div>

                    {/* Description */}
                    <p
                        className=" md:text-lg max-w-4xl leading-relaxed mb-10 animate-fadeIn font-medium"
                        style={{
                            color: colors.purpleLight,
                            animationDelay: '0.2s'
                        }}
                    >
                        A sophisticated full-stack application leveraging microservices architecture, real-time WebSocket
                        communication, and event-driven design. Features async CSV processing with Go goroutines, Kafka
                        message streaming, and responsive Angular frontend with Ng-Zorro components.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex mb-10 flex-wrap gap-4 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
                        <button
                            className="group flex items-center gap-3 px-6 py-2 rounded-full font-bold transition-all duration-300 hover:scale-110 shadow-lg border-2"
                            style={{
                                backgroundColor: colors.purple,
                                color: 'white',
                                borderColor: colors.purpleLight,
                                boxShadow: `0 10px 40px ${colors.purple}50`
                            }}
                        >
                            <ExternalLink size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                            Live Demo
                        </button>
                        <button
                            className="group flex items-center gap-3 px-8 py-4 rounded-full font-bo;d text- transition-all duration-300 hover:scale-110 shadow-lg border-2"
                            style={{
                                backgroundColor: colors.darkGray,
                                color: colors.purpleLight,
                                borderColor: colors.purple
                            }}
                        >
                            <Github size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                            Github Repo
                        </button>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                        {[
                            { label: 'Technologies', value: '8+', icon: Layers },
                            { label: 'Features', value: '12+', icon: CheckSquare },
                            { label: 'Services', value: '6', icon: Database },
                            { label: 'Real-time', value: 'Yes', icon: Radio }
                        ].map((stat, idx) => (
                            <div
                                key={idx}
                                className="group p-6 rounded-2xl border-2 hover:scale-105 transition-all duration-300"
                                style={{
                                    backgroundColor: colors.darkGray,
                                    borderColor: colors.purple,
                                    boxShadow: `0 0 20px ${colors.purple}20`
                                }}
                            >
                                <stat.icon
                                    size={32}
                                    className="mb-3 group-hover:scale-110 transition-transform duration-300"
                                    style={{ color: colors.purple }}
                                />
                                <div
                                    className="text-4xl font-black mb-2"
                                    style={{ color: colors.purpleLight }}
                                >
                                    {stat.value}
                                </div>
                                <div
                                    className="text-sm font-bold uppercase tracking-wide"
                                    style={{ color: colors.purpleLight }}
                                >
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Divider with Glow Effect */}
                <div className="relative h-24">
                    <div
                        className="absolute bottom-0 left-0 right-0 h-px"
                        style={{
                            background: `linear-gradient(90deg, transparent, ${colors.purple}, transparent)`,
                            boxShadow: `0 0 20px ${colors.purple}`
                        }}
                    />
                </div>
            </div>

            {/* Content Section */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Tab Navigation */}
                <div
                    className="rounded-2xl p-2 mb-12 border-2"
                    style={{
                        backgroundColor: colors.darkGray,
                        borderColor: colors.purple,
                        boxShadow: `0 0 30px ${colors.purple}30`
                    }}
                >
                    <div className="flex flex-wrap gap-2">
                        <TabButton id="overview" label="Overview" icon={Activity} />
                        <TabButton id="features" label="Features" icon={CheckSquare} />
                        <TabButton id="architecture" label="Architecture" icon={Layers} />
                        <TabButton id="tech" label="Tech Stack" icon={Terminal} />
                    </div>
                </div>

                {/* Tab Content */}
                <div className="space-y-8">
                    {/* Overview Tab */}
                    {activeTab === 'overview' && (
                        <div className="space-y-8 animate-fadeIn">
                            {/* Project Description */}
                            <div
                                className="rounded-3xl p-10 border-2 hover:scale-[1.02] transition-all duration-500"
                                style={{
                                    backgroundColor: colors.darkGray,
                                    borderColor: colors.purple,
                                    boxShadow: `0 0 40px ${colors.purple}20`
                                }}
                            >
                                <div className="flex items-start gap-4 mb-6">
                                    <div
                                        className="w-16 h-16 rounded-2xl flex items-center justify-center border-2"
                                        style={{
                                            backgroundColor: `${colors.purple}20`,
                                            borderColor: colors.purple
                                        }}
                                    >
                                        <Users size={32} style={{ color: colors.purpleLight }} />
                                    </div>
                                    <h2
                                        className="text-4xl font-black"
                                        style={{ color: colors.purpleLight }}
                                    >
                                        Project Overview
                                    </h2>
                                </div>
                                <p
                                    className=" leading-relaxed mb-6"
                                    style={{ color: colors.purpleLight }}
                                >
                                    A production-grade student management system built with modern microservices architecture.
                                    The application demonstrates enterprise-level design patterns including event-driven communication,
                                    real-time notifications via WebSockets, and efficient concurrent processing using Go goroutines.
                                </p>
                                <p
                                    className="leading-relaxed "
                                    style={{ color: colors.purpleLight }}
                                >
                                    Key differentiators include asynchronous CSV bulk upload with background processing, Kafka-based
                                    message streaming for service communication, Redis caching for performance optimization, and
                                    Keycloak integration for authentication (though login is not required for this demo).
                                </p>
                            </div>

                            {/* Implementation Highlights */}
                            <div
                                className="rounded-3xl p-10 border-2"
                                style={{
                                    backgroundColor: colors.darkGray,
                                    borderColor: colors.purple,
                                    boxShadow: `0 0 40px ${colors.purple}20`
                                }}
                            >
                                <h2
                                    className="text-4xl font-black mb-8"
                                    style={{ color: colors.purpleLight }}
                                >
                                    Implementation Highlights
                                </h2>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {implementationHighlights.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="group p-6 rounded-xl border-2 hover:scale-105 transition-all duration-300"
                                            style={{
                                                backgroundColor: colors.mediumGray,
                                                borderColor: `${colors.purple}60`
                                            }}
                                        >
                                            <item.icon
                                                size={28}
                                                className="mb-4 group-hover:scale-110 transition-transform duration-300"
                                                style={{ color: colors.purple }}
                                            />
                                            <h3
                                                className="text-xl font-bold mb-2"
                                                style={{ color: colors.purpleLight }}
                                            >
                                                {item.title}
                                            </h3>
                                            <p
                                                className="text-sm font-medium"
                                                style={{ color: '#9ca3af' }}
                                            >
                                                {item.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Features Tab */}
                    {activeTab === 'features' && (
                        <div className="space-y-8 animate-fadeIn">
                            {coreFeatures.map((feature, idx) => (
                                <div
                                    key={idx}
                                    className="group rounded-3xl p-10 border-2 hover:scale-[1.02] transition-all duration-500"
                                    style={{
                                        backgroundColor: colors.darkGray,
                                        borderColor: colors.purple,
                                        boxShadow: `0 0 40px ${colors.purple}20`
                                    }}
                                >
                                    <div className="flex items-start gap-6 mb-6">
                                        <div
                                            className="w-15 h-15 rounded-2xl flex items-center justify-center border-2 group-hover:scale-110 transition-transform duration-300"
                                            style={{
                                                backgroundColor: `${colors.purple}20`,
                                                borderColor: colors.purple,
                                                boxShadow: `0 0 20px ${colors.purple}40`
                                            }}
                                        >
                                            <feature.icon size={40} style={{ color: colors.purpleLight }} />
                                        </div>
                                        <div className="flex-1">
                                            <h3
                                                className="text-4xl font-black mb-3"
                                                style={{ color: colors.purpleLight }}
                                            >
                                                {feature.title}
                                            </h3>
                                            <p
                                                className=" font-semibold mb-6"
                                                style={{ color: '#9ca3af' }}
                                            >
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        {feature.details.map((detail, dIdx) => (
                                            <div
                                                key={dIdx}
                                                className="flex items-start gap-3 p-4 rounded-lg border"
                                                style={{
                                                    backgroundColor: colors.mediumGray,
                                                    borderColor: `${colors.purple}40`
                                                }}
                                            >
                                                <div
                                                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                                                    style={{
                                                        backgroundColor: colors.purple,
                                                        boxShadow: `0 0 10px ${colors.purple}`
                                                    }}
                                                />
                                                <p
                                                    style={{ color: colors.purpleLight }}
                                                >
                                                    {detail}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Architecture Tab */}
                    {activeTab === 'architecture' && (
                        <div className="space-y-8 animate-fadeIn">
                            <div
                                className="rounded-3xl p-10 border-2"
                                style={{
                                    backgroundColor: colors.darkGray,
                                    borderColor: colors.purple,
                                    boxShadow: `0 0 40px ${colors.purple}20`
                                }}
                            >
                                <h2
                                    className="text-4xl font-black mb-8 flex items-center gap-4"
                                    style={{ color: colors.purpleLight }}
                                >
                                    <Layers size={48} style={{ color: colors.purple }} />
                                    Microservices Architecture
                                </h2>

                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {architectureComponents.map((component, idx) => (
                                        <div
                                            key={idx}
                                            className="group p-6 rounded-2xl border-2 hover:scale-105 hover:rotate-1 transition-all duration-500"
                                            style={{
                                                backgroundColor: colors.mediumGray,
                                                borderColor: colors.purple,
                                                boxShadow: `0 0 20px ${colors.purple}20`
                                            }}
                                        >
                                            <div
                                                className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 border-2 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300"
                                                style={{
                                                    backgroundColor: `${colors.purple}20`,
                                                    borderColor: colors.purple,
                                                    boxShadow: `0 0 15px ${colors.purple}40`
                                                }}
                                            >
                                                <component.icon size={32} style={{ color: colors.purpleLight }} />
                                            </div>
                                            <h3
                                                className="text-xl mb-2"
                                                style={{ color: colors.purpleLight }}
                                            >
                                                {component.title}
                                            </h3>
                                            <div
                                                className="text-sm font-bold uppercase tracking-wide mb-4 px-3 py-1 rounded-full inline-block"
                                                style={{
                                                    color: colors.purple,
                                                    backgroundColor: `${colors.purple}20`
                                                }}
                                            >
                                                {component.tech}
                                            </div>
                                            <p
                                                className="text-base font-semibold leading-relaxed"
                                                style={{ color: '#9ca3af' }}
                                            >
                                                {component.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Architecture Flow */}
                            <div
                                className="rounded-3xl p-10 border-2"
                                style={{
                                    backgroundColor: colors.darkGray,
                                    borderColor: colors.purple,
                                    boxShadow: `0 0 40px ${colors.purple}20`
                                }}
                            >
                                <h3
                                    className="text-4xl font-black mb-8"
                                    style={{ color: colors.purpleLight }}
                                >
                                    Data Flow & Communication
                                </h3>
                                <div className="space-y-4">
                                    {[
                                        { step: '1', text: 'Angular frontend sends HTTP requests to Go API Gateway' },
                                        { step: '2', text: 'API Gateway validates with Keycloak and checks Redis cache' },
                                        { step: '3', text: 'For CSV uploads, Kafka publishes events to processing service' },
                                        { step: '4', text: 'Go goroutines process CSV rows concurrently' },
                                        { step: '5', text: 'Completion events trigger WebSocket notifications to frontend' },
                                        { step: '6', text: 'Real-time updates reflect in Angular components via Ng-Zorro' }
                                    ].map((flow, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-start gap-4 p-5 rounded-xl border-2 hover:translate-x-2 transition-all duration-300"
                                            style={{
                                                backgroundColor: colors.mediumGray,
                                                borderColor: `${colors.purple}60`
                                            }}
                                        >
                                            <div
                                                className="w-10 h-10 rounded-full flex items-center justify-center font-black text-lg flex-shrink-0"
                                                style={{
                                                    backgroundColor: colors.purple,
                                                    color: 'white',
                                                    boxShadow: `0 0 15px ${colors.purple}`
                                                }}
                                            >
                                                {flow.step}
                                            </div>
                                            <p
                                                className="pt-1"
                                                style={{ color: colors.purpleLight }}
                                            >
                                                {flow.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Tech Stack Tab */}
                    {activeTab === 'tech' && (
                        <div className="space-y-8 animate-fadeIn">
                            <div
                                className="rounded-3xl p-10 border-2"
                                style={{
                                    backgroundColor: colors.darkGray,
                                    borderColor: colors.purple,
                                    boxShadow: `0 0 40px ${colors.purple}20`
                                }}
                            >
                                <h2
                                    className="text-4xl font-black mb-8"
                                    style={{ color: colors.purpleLight }}
                                >
                                    Technology Stack
                                </h2>

                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {technologies.map((tech, idx) => (
                                        <div
                                            key={idx}
                                            className="group p-4 rounded-2xl border-2 hover:scale-110 transition-all duration-300"
                                            style={{
                                                backgroundColor: colors.mediumGray,
                                                borderColor: colors.purple,
                                                boxShadow: `0 0 20px ${colors.purple}20`
                                            }}
                                        >
                                            <tech.icon
                                                size={40}
                                                className="mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300"
                                                style={{ color: colors.purple }}
                                            />
                                            <h3
                                                className="text-lg mb-2"
                                                style={{ color: colors.purpleLight }}
                                            >
                                                {tech.name}
                                            </h3>
                                            <span
                                                className="text-sm font-bold uppercase tracking-wide px-3 py-1 rounded-full inline-block"
                                                style={{
                                                    color: colors.purple,
                                                    backgroundColor: `${colors.purple}20`
                                                }}
                                            >
                                                {tech.category}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Key Technologies Details */}
                            <div className="grid md:grid-cols-2 gap-6">
                                {[
                                    {
                                        title: 'Frontend Excellence',
                                        items: [
                                            'Angular 15+ with TypeScript',
                                            'Ng-Zorro (Ant Design) components',
                                            'Bootstrap responsive grid',
                                            'RxJS for reactive programming',
                                            'WebSocket client integration'
                                        ]
                                    },
                                    {
                                        title: 'Backend Power',
                                        items: [
                                            'Go with Gorilla WebSocket',
                                            'Goroutines for concurrency',
                                            'RESTful API design',
                                            'Kafka producer/consumer',
                                            'Redis caching layer'
                                        ]
                                    }
                                ].map((section, idx) => (
                                    <div
                                        key={idx}
                                        className="p-8 rounded-2xl border-2"
                                        style={{
                                            backgroundColor: colors.darkGray,
                                            borderColor: colors.purple,
                                            boxShadow: `0 0 30px ${colors.purple}20`
                                        }}
                                    >
                                        <h3
                                            className="text-3xl font-black mb-6"
                                            style={{ color: colors.purpleLight }}
                                        >
                                            {section.title}
                                        </h3>
                                        <ul className="space-y-3">
                                            {section.items.map((item, iIdx) => (
                                                <li
                                                    key={iIdx}
                                                    className="flex items-start gap-3 "
                                                    style={{ color: colors.purpleLight }}
                                                >
                                                    <span
                                                        className="text-xl mt-1"
                                                        style={{ color: colors.purple }}
                                                    >
                                                        →
                                                    </span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
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
        
        @keyframes pulseGlow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }
        
        @keyframes pulseGlowDelayed {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.15);
          }
        }
        
        @keyframes pulseSlow {
          0%, 100% {
            opacity: 1;
            transform: scaleX(1);
          }
          50% {
            opacity: 0.7;
            transform: scaleX(1.1);
          }
        }
        
        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
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
        
        .animate-pulse-glow {
          animation: pulseGlow 8s ease-in-out infinite;
        }
        
        .animate-pulse-glow-delayed {
          animation: pulseGlowDelayed 10s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulseSlow 3s ease-in-out infinite;
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