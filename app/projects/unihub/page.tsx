"use client";

import React, { useState } from 'react';
import { ExternalLink, Github, ArrowLeft, CheckCircle2, Users, Calendar, Ticket, AlertCircle, Mail, BookOpen } from 'lucide-react';
import { colors } from '@/app/constants/colors';
import { SiBackbone } from 'react-icons/si';

export default function page() {
  const [activeTab, setActiveTab] = useState('overview');

  const technologies = [
    'ReactJS',
    'SpringBoot',
    'Tailwind CSS',
    'MySQL',
    'JWT Authentication'
  ];

  const challenges = [
    { 
      icon: Mail,
      title: 'Email Limitations',
      description: 'Poor structure, delayed responses, fragmented conversations, lack of prioritization'
    },
    {
      icon: BookOpen,
      title: 'LMS Deficiencies',
      description: 'Focus on content delivery over communication, clunky messaging systems'
    },
    {
      icon: AlertCircle,
      title: 'Communication Fragmentation',
      description: 'Multiple platforms creating confusion and missed communications'
    }
  ];

  const studentChallenges = [
    'Accessibility barriers for diverse backgrounds',
    'Communication anxiety with formal channels'
  ];

  const coreFeatures = [
    {
      icon: Ticket,
      title: 'Query Ticketing System',
      description: 'Streamlined issue tracking and resolution with priority management'
    },
    {
      icon: Calendar,
      title: 'Appointment Scheduling',
      description: 'Easy booking system for student-lecturer meetings'
    },
    {
      icon: Users,
      title: 'Unified Communication Hub',
      description: 'Centralized platform for all academic interactions'
    }
  ];

  const TabButton = ({ id, label }:any) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`px-6 py-3 font-semibold transition-all duration-300 relative ${
        activeTab === id ? 'text-white' : 'text-gray-300 hover:text-white'
      }`}
    >
      {label}
      {activeTab === id && (
        <div
          className="absolute bottom-0 left-0 right-0 h-1 rounded-t-full transition-all duration-300"
          style={{ backgroundColor: colors.peach }}
        />
      )}
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-900" >
      {/* Animated Background Pattern */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl animate-float" 
          style={{ backgroundColor: colors.peach }} />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-float-delayed" 
          style={{ backgroundColor: colors.purple }} />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full blur-3xl animate-pulse-slow" 
          style={{ backgroundColor: colors.purple }} />
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
                backgroundColor: `${colors.peach}40`,
                color: 'white',
                border: `2px solid ${colors.peach}`
              }}
            >
              Completed
            </span>
            <span className="text-white/80 text-sm uppercase tracking-wider">
              Web Application
            </span>
          </div>

          <h1
            className="text-6xl md:text-7xl font-bold mb-6 animate-slideDown"
            style={{ 
              color: colors.peach,
              textShadow: '0 4px 20px rgba(255, 180, 162, 0.3)'
            }}
          >
            UniHUB
          </h1>
          
          <p className="text-sl md:text-lg text-white/90 max-w-4xl leading-relaxed mb-10 animate-fadeIn">
            A revolutionary digital solution that transforms academic communication by integrating multiple channels, 
            administrative tools, and collaborative features into a unified, user-friendly interface.
          </p>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap gap-4 animate-fadeIn">
            <button
              className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg group"
              style={{ backgroundColor: colors.peach }}
              onClick={()=> window.open('https://drive.google.com/file/d/1SQ_mc_1ell6q1zyU23qjv6-ekvcpPllW/view?usp=sharing')}
            >
              <ExternalLink size={20} className="group-hover:rotate-12 transition-transform" />
              Live Demo
            </button>
            <button
              className="flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg border-2 backdrop-blur-sm group"
              style={{
                borderColor: colors.peach,
                color: colors.peach,
                backgroundColor: 'rgba(255, 255, 255, 0.1)'
              }}
              onClick={()=> window.open('https://github.com/Peshala84/uni-hub')}
            >
              <Github size={20} className="group-hover:rotate-12 transition-transform" />
              Frontend Repo
            </button>
            <button
              className="flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg border-2 backdrop-blur-sm group"
              style={{
                borderColor: colors.peach,
                color: colors.peach,
                backgroundColor: 'rgba(255, 255, 255, 0.1)'
              }}
              onClick={()=> window.open('https://github.com/ShashiniMadhu/UniHUB-Backend')}
            >
              <SiBackbone size={20} className="group-hover:rotate-12 transition-transform" />
              Backend Repo
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
        <div className="backdrop-blur-md rounded-2xl p-2 mb-12 border border-white/20" 
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
          <div className="flex flex-wrap gap-2">
            <TabButton id="overview" label="Overview" />
            <TabButton id="problem" label="Problem Statement" />
            <TabButton id="features" label="Features" />
            <TabButton id="tech" label="Technologies" />
          </div>
        </div>

        {/* Tab Content */}
        <div className="space-y-8">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-8 animate-fadeIn">
              <div className="backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:scale-[1.02]"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }}>
                <h2
                  className="text-4xl font-bold mb-6 flex items-center gap-3"
                  style={{ color: colors.peach }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" 
                    style={{ backgroundColor: `${colors.peach}100` }}>
                    <BookOpen size={24} style={{ color: colors.peach }} />
                  </div>
                  Project Overview
                </h2>
                <p className="text-white/90 leading-relaxed ">
                  UniHUB represents a revolutionary approach to academic communication, designed to transform how students 
                  and lecturers interact in higher education environments. Our platform serves as a unified communication hub 
                  that integrates multiple communication channels, administrative tools, and collaborative features into a single, 
                  user-friendly interface.
                </p>
              </div>

              {/* Core Features Grid */}
              <div className=" rounded-2xl p-8 shadow-2xl border border-white/20"
                >
                <h2 className="text-4xl font-bold mb-8" style={{ color: colors.peach }}>
                  Core Features
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {coreFeatures.map((feature, idx) => (
                    <div
                      key={idx}
                      className="group p-6 rounded-xl backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 hover:shadow-xl"
                      style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                    >
                      <div className="mb-4 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                        style={{ backgroundColor: `${colors.peach}30` }}>
                        <feature.icon size={28} style={{ color: colors.peach }} />
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-opacity-90 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-white/70 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Problem Statement Tab */}
          {activeTab === 'problem' && (
            <div className="space-y-8 animate-fadeIn">
              <div className="backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20"
               >
                <h2 className="text-4xl font-bold mb-8" style={{ color: colors.peach }}>
                  Problem Statement
                </h2>
                <div className="space-y-6">
                  {challenges.map((challenge, idx) => (
                    <div
                      key={idx}
                      className="group p-6 rounded-xl backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-500 hover:translate-x-2"
                      style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                          style={{ backgroundColor: `${colors.peach}30` }}>
                          <challenge.icon size={24} style={{ color: colors.peach }} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2" style={{ color: colors.peach }}>
                            {challenge.title}
                          </h3>
                          <p className="text-white/80 leading-relaxed text-sl">
                            {challenge.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Student Challenges */}
              <div className="backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20"
                >
                <h3 className="text-3xl font-bold mb-6" style={{ color: colors.peach }}>
                  Student Challenges
                </h3>
                <div className="space-y-4">
                  {studentChallenges.map((challenge, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 p-4 rounded-lg backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300 hover:translate-x-2"
                      style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                    >
                      <AlertCircle
                        size={20}
                        className="flex-shrink-0 mt-1"
                        style={{ color:colors.peach}}
                      />
                      <p className="text-white/90 text-sl">{challenge}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Features Tab */}
          {activeTab === 'features' && (
            <div className="backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20 animate-fadeIn"
             >
              <h2 className="text-4xl font-bold mb-8" style={{ color: colors.peach }}>
                Key Features
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {coreFeatures.map((feature, idx) => (
                  <div
                    key={idx}
                    className="group flex items-start gap-4 p-6 rounded-xl backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                  >
                    <CheckCircle2
                      size={28}
                      className="flex-shrink-0 mt-1 transition-transform duration-300 group-hover:scale-110"
                      style={{ color: colors.peach }}
                    />
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-white">
                        {feature.title}
                      </h3>
                      <p className="text-white/70 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies Tab */}
          {activeTab === 'tech' && (
            <div className="backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20 animate-fadeIn"
           >
              <h2 className="text-4xl font-bold mb-8" style={{ color: colors.peach }}>
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-4">
                {technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="group px-4 py-2 rounded-full text-sl font-semibold border-2 transition-all duration-300 hover:scale-110 hover:shadow-xl cursor-pointer"
                    style={{
                      borderColor: colors.peach,
                      color: 'white',
                      backgroundColor: `${colors.peach}30`,
                      backdropFilter: 'blur(8px)'
                    }}
                  >
                    {tech}
                  </span>
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
          animation: floatDelayed 25s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulseSlow 15s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}