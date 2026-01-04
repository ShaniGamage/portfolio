'use client';

import dynamic from 'next/dynamic';

const Technologies = dynamic(
  () => import('./components/Technologies'),
  { ssr: false }
);

import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Mail, Github, Linkedin, ExternalLink, ChevronDown, Code, Briefcase, GraduationCap, PaintBucket, Globe, Smartphone } from 'lucide-react';
import Form from './components/Form';
import Testimonials from './components/Testimonials';
import Projects from './components/Project';
import Aboutme from './components/Aboutme';
import { technologies } from './constants/technologies';
import { colors } from './constants/colors';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [fallingIcons, setFallingIcons] = useState<any[]>([]);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [nameComplete, setNameComplete] = useState(false);


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
    "Science/Maths Tuitioner"
  ];
  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedTitle.length < currentTitle.length) {
          setDisplayedTitle(currentTitle.slice(0, displayedTitle.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
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
      <nav className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-xl font-bold">Shani Gamage</div>

            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Technologies', 'Gallery', 'Projects', 'Contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="hover:opacity-80 transition-opacity text-sm font-medium"
                  style={{ color: colors.peach }}
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-gray-800/95 backdrop-blur-sm border-b border-gray-700">
            {['Home', 'About', 'Technologies', 'Testimonials', 'Projects', 'Contact'].map(item => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left px-4 py-3 hover:bg-gray-700"
                style={{ color: colors.peach }}
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
        <div className="absolute top-20 right-10 w-96 h-96 rounded-full opacity-20 blur-3xl" style={{ background: `radial-gradient(circle, ${colors.pink}, transparent)` }}></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full opacity-20 blur-3xl" style={{ background: `radial-gradient(circle, ${colors.purple}, transparent)` }}></div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                  Hello.
                </h1>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-1 rounded-full" style={{ backgroundColor: colors.pink }}></div>
                  <div>
                    <h2 className="text-3xl sm:text-4xl font-medium" style={{ color: colors.peach }}>
                      I'm Shani Gamage                    </h2>
                    <h3 className="text-2xl sm:text-3xl font-bold mt-2 min-h-[2.5rem]">
                      {displayedTitle}
                      {nameComplete && (
                        <span className="animate-pulse" style={{ color: colors.pink }}>|</span>
                      )}
                    </h3>

                  </div>
                </div>
              </div>

              <p className="text-gray-400 text-lg max-w-xl">
                A passionate Software Engineer from Matugama, Sri Lanka. Currently pursuing BSc. Computer Science at University of Colombo School of Computing, specializing in Software Engineering.
              </p>

              <div className="flex gap-4 flex-wrap">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-4 py-2 rounded-lg font-semibold hover:scale-105 transition-transform shadow-lg text-white"
                  style={{ backgroundColor: colors.pink }}
                >
                  VIEW PROJECTS
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-4 py-3 rounded-lg font-semibold border-2 hover:scale-105 transition-transform"
                  style={{ borderColor: colors.pink, color: colors.pink }}
                >
                  CONTACT ME NOW
                </button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                <a href="#" className="p-3 rounded-full hover:scale-110 transition-transform bg-gray-800 hover:bg-gray-700">
                  <Github size={20} />
                </a>
                <a href="#" className="p-3 rounded-full hover:scale-110 transition-transform bg-gray-800 hover:bg-gray-700">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="p-3 rounded-full hover:scale-110 transition-transform bg-gray-800 hover:bg-gray-700">
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Right Side - Profile Image with Circle */}
            <div className="relative flex justify-center items-center">
              {/* Decorative Circles */}
              <div className="absolute w-80 h-80 sm:w-96 sm:h-96 rounded-full border-4 opacity-30 animate-pulse" style={{ borderColor: colors.pink }}></div>
              <div className="absolute w-96 h-96 sm:w-[28rem] sm:h-[28rem] rounded-full border-2 opacity-20" style={{ borderColor: colors.purple }}></div>

              {/* Main Circle Background */}
              <div
                className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden shadow-2xl"
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
      </section>

      {/* About Me Section */}
      <section>
        <Aboutme />
      </section>

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
      <section>
        <Technologies />
      </section>

      <section>
        <Projects />
      </section>

      {/* Testimonials Slider */}
      <section>
        <Testimonials />
      </section>

      <section>
        <Form />
      </section>

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

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-in-out forwards;
          opacity: 0;
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }

        .fade-in-left {
          animation: fadeInLeft 0.8s ease-out;
        }

        .fade-in-right {
          animation: fadeInRight 0.8s ease-out;
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}