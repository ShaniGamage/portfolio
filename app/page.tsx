'use client';

import dynamic from 'next/dynamic';

const Technologies = dynamic(
  () => import('./components/Technologies'),
  { ssr: false }
);

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Download, Mail, Github, Linkedin, ExternalLink, ChevronDown, Code, Briefcase, GraduationCap, PaintBucket, Globe, Smartphone } from 'lucide-react';
import Form from './components/Form';
import Testimonials from './components/Testimonials';
import Projects from './components/Project';
import Aboutme from './components/Aboutme';
import { technologies } from './constants/technologies';
import { colors } from './constants/colors';

// Intersection Observer Hook for scroll animations
const useInView = (options = {}) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
      }
    }, { threshold: 0.1, ...options });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isInView];
};

// Floating Balls Component
const FloatingBalls = () => {
  const balls = [
    { size: 60, delay: 0, duration: 3, x: 10 },
    { size: 40, delay: 0.5, duration: 4, x: 30 },
    { size: 80, delay: 1, duration: 3.5, x: 50 },
    { size: 50, delay: 1.5, duration: 4.5, x: 70 },
    { size: 45, delay: 2, duration: 3.8, x: 85 }
  ];

  return (
    <div className="absolute bottom-20 left-0 right-0 h-32 overflow-visible pointer-events-none">
      {balls.map((ball, index) => (
        <div
          key={index}
          className="absolute rounded-full opacity-30 blur-sm"
          style={{
            width: `${ball.size}px`,
            height: `${ball.size}px`,
            left: `${ball.x}%`,
            background: `radial-gradient(circle, ${index % 2 === 0 ? colors.pink : colors.purple}, transparent)`,
            animation: `float ${ball.duration}s ease-in-out infinite`,
            animationDelay: `${ball.delay}s`
          }}
        />
      ))}
    </div>
  );
};

// Animated Section Wrapper
const AnimatedSection = ({ children, className = '', delay = 0 }: any) => {
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref as React.Ref<HTMLDivElement>}
      className={`transition-all duration-1000 ${className} ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>

  );
};

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [fallingIcons, setFallingIcons] = useState<any[]>([]);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [nameComplete, setNameComplete] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Determine active section based on scroll position
      const sections = ['home', 'about', 'technologies', 'gallery', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const iconInterval = setInterval(() => {
      const randomTech = technologies[Math.floor(Math.random() * technologies.length)];
      const newIcon = {
        id: Date.now(),
        icon: randomTech.icon,
        left: Math.random() * 100,
        duration: 3 + Math.random() * 2
      };
      setFallingIcons(prev => [...prev, newIcon]);

      setTimeout(() => {
        setFallingIcons(prev => prev.filter(icon => icon.id !== newIcon.id));
      }, newIcon.duration * 1000);
    }, 500);
    return () => clearInterval(iconInterval);
  }, []);

  const titles = [
    "Software Engineer",
    "CS Undergraduate",
    "AI/ML Enthusiast",
    "Lifetime Learner",
  ];

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedTitle.length < currentTitle.length) {
          setDisplayedTitle(currentTitle.slice(0, displayedTitle.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 500);
        }
      } else {
        if (displayedTitle.length > 0) {
          setDisplayedTitle(currentTitle.slice(0, displayedTitle.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayedTitle, isDeleting, currentTitleIndex]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };


  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrollY > 50 ? 'bg-gray-900/95 backdrop-blur-lg shadow-lg' : 'bg-gray-900/80 backdrop-blur-md'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-xl font-bold">Shani Gamage</div>

            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Technologies', 'Gallery', 'Projects', 'Contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="relative hover:opacity-80 transition-all duration-300 text-sm font-medium group"
                  style={{ color: colors.peach }}
                >
                  {item}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-pink-500 transition-all duration-300 ${activeSection === item.toLowerCase() ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                  />
                </button>
              ))}
            </div>

            <button
              className="md:hidden transform hover:scale-110 transition-transform duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-gray-800/95 backdrop-blur-sm border-b border-gray-700 animate-slide-down">
            {['Home', 'About', 'Technologies', 'Testimonials', 'Projects', 'Contact'].map(item => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`block w-full text-left px-4 py-3 transition-colors duration-300 ${activeSection === item.toLowerCase() ? 'bg-gray-700 border-l-4' : 'hover:bg-gray-700'
                  }`}
                style={{
                  color: colors.peach,
                  borderColor: activeSection === item.toLowerCase() ? colors.pink : 'transparent'
                }}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-20 right-10 w-96 h-96 rounded-full opacity-20 blur-3xl animate-pulse-slow" style={{ background: `radial-gradient(circle, ${colors.pink}, transparent)` }}></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full opacity-20 blur-3xl animate-pulse-slow" style={{ background: `radial-gradient(circle, ${colors.purple}, transparent)`, animationDelay: '1s' }}></div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side */}
            <div className="space-y-8 animate-fade-in-left">
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight animate-slide-up">
                  Hello.
                </h1>
                <div className="flex items-center gap-4 animate-slide-up delay-200">
                  <div className="w-16 h-1 rounded-full animate-expand" style={{ backgroundColor: colors.pink }}></div>
                  <div>
                    <h2 className="text-3xl sm:text-4xl font-medium" style={{ color: colors.peach }}>
                      I'm Shani Gamage
                    </h2>
                    <h3 className="text-2xl sm:text-3xl font-bold mt-2 min-h-[2.5rem]">
                      {displayedTitle}
                      {nameComplete && (
                        <span className="animate-pulse" style={{ color: colors.pink }}>|</span>
                      )}
                    </h3>

                  </div>
                </div>
              </div>

              <p className="text-gray-400 text-lg max-w-xl animate-slide-up delay-400">
                A passionate Software Engineer from Matugama, Sri Lanka. Currently pursuing BSc. Computer Science at University of Colombo School of Computing, specializing in Software Engineering.
              </p>

              <div className="flex gap-4 flex-wrap animate-slide-up delay-600">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-4 py-2 rounded-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg text-white relative overflow-hidden group"
                  style={{ backgroundColor: colors.pink }}
                >
                  <span className="relative z-10">VIEW PROJECTS</span>
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-4 py-3 rounded-lg font-semibold border-2 hover:scale-105 hover:bg-pink-500/10 transition-all duration-300"
                  style={{ borderColor: colors.pink, color: colors.pink }}
                >
                  CONTACT ME NOW
                </button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-4 animate-slide-up delay-800">
                <a href="#" className="p-3 rounded-full hover:scale-110 transition-all duration-300 bg-gray-800 hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-500 group">
                  <Github size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                </a>
                <a href="#" className="p-3 rounded-full hover:scale-110 transition-all duration-300 bg-gray-800 hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-500 group">
                  <Linkedin size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                </a>
                <a href="#" className="p-3 rounded-full hover:scale-110 transition-all duration-300 bg-gray-800 hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-500 group">
                  <Mail size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                </a>
              </div>
            </div>

            {/* Right Side - Profile Image with Circle */}
            <div className="relative flex justify-center items-center animate-fade-in-right">
              {/* Decorative Circles */}
              <div className="absolute w-80 h-80 sm:w-96 sm:h-96 rounded-full border-4 opacity-30 animate-ping-slow" style={{ borderColor: colors.pink }}></div>
              <div className="absolute w-96 h-96 sm:w-[28rem] sm:h-[28rem] rounded-full border-2 opacity-20 animate-spin-slow" style={{ borderColor: colors.purple }}></div>

              {/* Main Circle Background */}
              <div
                className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-700"
                style={{
                  background: `linear-gradient(135deg, ${colors.pink}, ${colors.purple})`,
                  boxShadow: `0 0 80px ${colors.pink}40`
                }}
              >
                {/* Profile Image */}
                <img
                  src='hero2.jpeg'
                  alt="Shani Gamage"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} style={{ color: colors.pink }} />
          </div>
        </div>

        {/* Floating Balls */}
        <FloatingBalls />
      </section>

      {/* About Me Section */}
      <AnimatedSection>
        <Aboutme />
      </AnimatedSection>

      {fallingIcons.map(icon => {
        const IconComponent = icon.icon;
        return (
          <div
            key={icon.id}
            className="absolute text-4xl pointer-events-none z-0"
            style={{
              left: `${icon.left}%`,
              top: '-50px',
              animation: `fall ${icon.duration}s linear`,
            }}
          >
            <IconComponent />
          </div>
        );
      })}

      {/* Skills & Technologies Section */}
      <AnimatedSection delay={200}>
        <Technologies />
      </AnimatedSection>

      <AnimatedSection delay={300}>
        <Projects />
      </AnimatedSection>

      {/* Testimonials Slider */}
      <AnimatedSection delay={400}>
        <Testimonials />
      </AnimatedSection>

      <AnimatedSection delay={500}>
        <Form />
      </AnimatedSection>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-gray-800">
        <p className="text-gray-400">
          Made with <span style={{ color: colors.pink }}>❤️</span> by <span style={{ color: colors.peach }}>Shani</span>
        </p>
      </footer>

      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes expand {
          from {
            width: 0;
          }
          to {
            width: 4rem;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-30px);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.3;
          }
        }

        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.2;
          }
          100% {
            transform: scale(1);
            opacity: 0.3;
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-in-out forwards;
          opacity: 0;
        }

        .animate-fade-in-left {
          animation: fade-in-left 1s ease-out;
        }

        .animate-fade-in-right {
          animation: fade-in-right 1s ease-out;
        }

        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }

        .animate-expand {
          animation: expand 0.8s ease-out forwards;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-ping-slow {
          animation: ping-slow 3s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-800 { animation-delay: 0.8s; }
      `}</style>
    </div>
  );
}