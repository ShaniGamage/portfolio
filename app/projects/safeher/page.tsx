"use client"
import React, { useState, useEffect } from 'react';
import { Shield, MapPin, Phone, Bell, Map, Users, AlertTriangle, Camera, ChevronRight, Check, Smartphone, Zap, Lock, Globe, ExternalLink, Github, ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function SafeHerLanding() {
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

  const mainColor = '#b24bf3';

  const problems = [
    { 
      icon: AlertTriangle,
      title: 'Harassment in Public Transport',
      description: 'Women face daily harassment in buses, trains, streets, and tuk-tuks with no quick way to call for help'
    },
    {
      icon: Bell,
      title: 'No Reliable Safety Reporting',
      description: 'When incidents occur, there is no centralized system to report and track safety concerns'
    },
    {
      icon: MapPin,
      title: 'Location Sharing Difficulties',
      description: 'No quick way to share live location with trusted contacts during dangerous situations'
    },
    {
      icon: Map,
      title: 'Unsafe Night-time Routes',
      description: 'Women don\'t know which routes are safe, especially during nighttime travel'
    },
    {
      icon: Phone,
      title: 'Emergency Access Barriers',
      description: 'Emergency contacts are not easily accessible, and dialing during panic is difficult'
    }
  ];

  const coreFeatures = [
    {
      icon: Bell,
      title: 'One-Tap SOS Button',
      description: 'Instantly sends live location, optional photo, and emergency message to 3-5 trusted contacts',
      highlights: ['Internet & SMS fallback', 'Photo capture', 'Real-time alerts']
    },
    {
      icon: MapPin,
      title: 'Live Location Tracking',
      description: 'Trusted contacts can see real-time movement and track until safety is confirmed',
      highlights: [ 'Admin dashboard tracking', 'Continuous monitoring']
    },
    {
      icon: Phone,
      title: 'Fake Incoming Call',
      description: 'Escape uncomfortable situations with realistic fake call interface',
      highlights: [ 'Real ringtone', 'No internet required']
    },
    {
      icon: Map,
      title: 'Safe Route Finder',
      description: 'Color-coded map showing safe and unsafe areas with alternative route suggestions',
      highlights: ['Red: High risk', 'Orange: Low visibility', 'Green: Safe areas']
    },
    {
      icon: Camera,
      title: 'Report Harassment',
      description: 'Quick incident reporting with location, vehicle details, and optional photo evidence',
      highlights: ['Anonymous option', 'Photo evidence', 'Vehicle tracking']
    },
    // {
    //   icon: AlertTriangle,
    //   title: 'Danger Zone Heatmap',
    //   description: 'Community-powered map showing unsafe areas based on verified reports',
    //   highlights: ['Crowd-sourced data', 'Real-time updates', 'Pattern detection']
    // }
  ];

  const technologies = [
    { name: 'React Native', category: 'Mobile App', icon: Smartphone },
    { name: 'NestJS', category: 'Backend API', icon: Zap },
    { name: 'PostgreSQL', category: 'Database', icon: Globe },
    { name: 'Clerk Auth', category: 'Authentication', icon: Lock },
    { name: 'Socket.IO', category: 'Real-time', icon: Bell },
    { name: 'Google Maps API', category: 'Geolocation', icon: MapPin }
  ];

  const differentiators = [
    'Real-time SOS with photo capture',
    'Offline SMS fallback mode',
    'Multi-contact alert system',
    'AI-powered spam detection',
    'Community safety zones',
    'Personal safety tools (fake call)',
    'Modern, fast UI/UX',
    'Privacy-first design',
    'Community verification',
    'Cross-platform support'
  ];

  const futureFeatures = [
    { 
      title: 'Admin Dashboard', 
      description: 'Angular-based web dashboard for viewing reports, managing users, and generating analytics',
      icon: Users 
    },
    { 
      title: 'Voice-activated SOS', 
      description: 'Trigger emergency alerts by saying "help me" or other predefined phrases',
      icon: Bell 
    },
    { 
      title: 'Shake-to-SOS', 
      description: 'Physical shake detection automatically triggers emergency mode',
      icon: Smartphone 
    },
    { 
      title: 'AI Fall Detection', 
      description: 'Detects sudden falls or unusual running patterns and sends automatic alerts',
      icon: AlertTriangle 
    },
    { 
      title: 'Evidence Locker', 
      description: 'Encrypted storage for incident evidence with zero-knowledge architecture',
      icon: Lock 
    },
    { 
      title: 'Multi-language Support', 
      description: 'Interface available in Sinhala, Tamil, and English',
      icon: Globe 
    }
  ];

  const TabButton = ({ id, label }: any) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`px-4 md:px-6 py-3 font-semibold transition-all duration-300 relative text-sm md:text-base ${
        activeTab === id ? 'text-white' : 'text-gray-300 hover:text-white'
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
    <div className="min-h-screen bg-gray-900">
      {/* Animated Background Pattern */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div 
          className="absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl animate-float"
          style={{ backgroundColor: mainColor }}
        />
        <div 
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-float-delayed"
          style={{ backgroundColor: mainColor }}
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
              Mobile Application
            </span>
          </div>

          <h1
            className="text-6xl md:text-7xl font-bold mb-6 animate-slideDown"
            style={{ 
              color: mainColor,
              textShadow: `0 4px 20px ${mainColor}50`
            }}
          >
            SafeHer
          </h1>
          
          <p className="text-sl md:text-lg text-white/90 max-w-4xl leading-relaxed mb-10 animate-fadeIn">
            A comprehensive women's emergency SOS and safe route mobile application designed specifically for Sri Lankan women. 
            Real-time location tracking, instant alerts, and community-powered safety zones to ensure women's safety anytime, anywhere.
          </p>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap gap-4 animate-fadeIn">
            <button
              className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg group"
              style={{ backgroundColor: mainColor }}
              onClick={()=>window.open('https://drive.google.com/drive/folders/1PitKazb7v5c_FBqNyjUJSTpMPcJhEWCE?usp=drive_link')}
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
              onClick={()=>window.open('https://github.com/ShaniGamage/SafeHer')}
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
            <TabButton id="why" label="Why SafeHer" />
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
                    <Shield size={24} style={{ color: mainColor }} />
                  </div>
                  Project Overview
                </h2>
                <p className="text-white/90 leading-relaxed text-lg">
                  SafeHer is a revolutionary mobile application addressing the critical safety concerns faced by women in Sri Lanka. 
                  The platform combines emergency response systems, real-time location tracking, community-powered danger zone mapping, 
                  and personal safety tools into a unified, user-friendly mobile interface. Built with React Native for cross-platform 
                  support and powered by a robust NestJS backend, SafeHer ensures women can access help instantly, share their location 
                  with trusted contacts, and navigate safely through color-coded route guidance.
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
                            <Check className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" style={{ color: mainColor }} />
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
                  Women in Sri Lanka face significant safety challenges in their daily lives. The absence of reliable emergency 
                  response systems, lack of real-time communication with trusted contacts during dangerous situations, and no 
                  centralized platform for reporting and tracking safety concerns create a critical gap in women's safety infrastructure.
                </p>
                <div className="space-y-6">
                  {problems.map((problem, idx) => (
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
                          <problem.icon size={24} style={{ color: mainColor }} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2" style={{ color: mainColor }}>
                            {problem.title}
                          </h3>
                          <p className="text-white/80 leading-relaxed">
                            {problem.description}
                          </p>
                        </div>
                      </div>
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

          {/* Why SafeHer Tab */}
          {activeTab === 'why' && (
            <div className="space-y-8 animate-fadeIn">
              <div 
                className="backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20"
              >
                <h2 className="text-4xl font-bold mb-8" style={{ color: mainColor }}>
                  Why SafeHer is Different
                </h2>
                <p className="text-white/90 leading-relaxed text-lg mb-8">
                  While Sri Lanka has several women's safety apps including Women's Safety App (Police), 109 Emergency App, 
                  Suhuru, Yeheliya, and SheSafe, they all suffer from significant limitations. SafeHer addresses these gaps 
                  with innovative features and modern technology.
                </p>

                <h3 className="text-2xl font-bold mb-6" style={{ color: mainColor }}>
                  Key Differentiators
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {differentiators.map((point, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-start p-4 bg-black/50 rounded-lg border border-white/10 hover:border-white/30 transition-all duration-300 hover:translate-x-2"
                    >
                      <Check className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" style={{ color: mainColor }} />
                      <span className="text-white/90">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div 
                  className="text-center p-8 backdrop-blur-sm border border-white/20 rounded-xl hover:border-white/40 transition-all duration-500 hover:scale-105"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                >
                  <Smartphone className="w-12 h-12 mx-auto mb-4" style={{ color: mainColor }} />
                  <h3 className="text-xl font-bold mb-2 text-white">Modern UI/UX</h3>
                  <p className="text-white/70 text-sm">Clean, fast, and intuitive interface unlike outdated existing apps</p>
                </div>
                <div 
                  className="text-center p-8 backdrop-blur-sm border border-white/20 rounded-xl hover:border-white/40 transition-all duration-500 hover:scale-105"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                >
                  <Lock className="w-12 h-12 mx-auto mb-4" style={{ color: mainColor }} />
                  <h3 className="text-xl font-bold mb-2 text-white">Privacy First</h3>
                  <p className="text-white/70 text-sm">Encrypted data and user-controlled privacy settings</p>
                </div>
                <div 
                  className="text-center p-8 backdrop-blur-sm border border-white/20 rounded-xl hover:border-white/40 transition-all duration-500 hover:scale-105"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                >
                  <Users className="w-12 h-12 mx-auto mb-4" style={{ color: mainColor }} />
                  <h3 className="text-xl font-bold mb-2 text-white">Community Power</h3>
                  <p className="text-white/70 text-sm">Crowdsourced safety data and verification</p>
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
                      <Zap size={20} />
                      Real-time Communication
                    </h4>
                    <p className="text-white/80 leading-relaxed">
                      Socket.IO enables instant SOS alerts and live location updates every 5-10 seconds to trusted contacts and emergency services.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-bold flex items-center gap-2" style={{ color: mainColor }}>
                      <Lock size={20} />
                      Secure Authentication
                    </h4>
                    <p className="text-white/80 leading-relaxed">
                      Supabase Auth provides OAuth 2.0 Google authentication with optional phone auth for maximum security and easy onboarding.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-bold flex items-center gap-2" style={{ color: mainColor }}>
                      <MapPin size={20} />
                      Geolocation Services
                    </h4>
                    <p className="text-white/80 leading-relaxed">
                      Google Maps API powers safe route finding, danger zone mapping, and real-time location tracking with high accuracy.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-bold flex items-center gap-2" style={{ color: mainColor }}>
                      <Globe size={20} />
                      Offline Support
                    </h4>
                    <p className="text-white/80 leading-relaxed">
                      SMS fallback ensures emergency alerts reach contacts even without internet connectivity - a unique feature in SL apps.
                    </p>
                  </div>
                </div>
              </div>

              {/* Future Implementation */}
              <div 
                className="backdrop-blur-md rounded-2xl p-8 shadow-2xl border"
                style={{ borderColor: 'rgba(138, 43, 226, 0.3)', backgroundColor: 'rgba(138, 43, 226, 0.05)' }}
              >
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold mb-2" style={{ color: mainColor }}>
                    Future Implementation
                  </h3>
                  <p className="text-white/80">Planned features for upcoming releases</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {futureFeatures.map((feature, idx) => (
                    <div 
                      key={idx} 
                      className="p-6 backdrop-blur-sm border border-purple-500/20 rounded-xl hover:border-purple-500/50 transition-all duration-500 hover:scale-105 group"
                      style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
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