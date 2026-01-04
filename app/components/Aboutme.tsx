import { Briefcase, Code, Globe, GraduationCap, PaintBucket, Smartphone } from 'lucide-react';
import React, { useState } from 'react'
import { colors } from '../constants/colors';

export default function Aboutme() {
    const skills = [
        { icon: <PaintBucket className="inline mr-2" size={20} />, title: 'UI/UX', desc: 'Designing Web/App interfaces' },
        { icon: <Globe className="inline mr-2" size={20} />, title: 'Web Development', desc: 'Web App Development' },
        { icon: <Smartphone className="inline mr-2" size={20} />, title: 'App Development', desc: 'Building Android/iOS Apps' }
    ];

    const experience = [
        { icon: <Briefcase className="inline mr-2" size={20} />, year: '2025 July-Present', title: 'Software Engineer', desc: 'Fortude Pvt Ltd' }
    ];

    const education = [
        { icon: <GraduationCap className="inline mr-2" size={20} />, year: '2023-Present', title: 'BSc.Computer Science (Honors in SE)', desc: 'University of Colombo School of Computing' },
        { icon: <GraduationCap className="inline mr-2" size={20} />, year: '2021', title: 'GCE Advanced Level', desc: 'Ananda Sastralaya National School Matugama' }
    ];

    const [activeTab, setActiveTab] = useState('skills');
    return (
        <div>
            <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-5 gap-12 items-start">
                        {/* Left Column - Image */}
                        <div className="md:col-span-2 fade-in-left">
                            <img
                                src="my.jpeg"
                                alt="Shani Gamage"
                                className="w-full rounded-2xl hover:scale-105 transition-transform duration-300"
                                style={{ boxShadow: `0 20px 40px ${colors.pink}40` }}
                            />
                        </div>

                        {/* Right Column - Content */}
                        <div className="md:col-span-3 fade-in-right">
                            <h2 className="text-5xl md:text-6xl font-bold mb-2 relative inline-block" style={{ color: colors.pink }}>
                                About Me
                                <div className="absolute -bottom-3 left-0 w-12 h-1 rounded-full" style={{ backgroundColor: colors.pink }}></div>
                            </h2>

                            <p className="text-gray-400 text-sl mt-8 mb-8 leading-relaxed">
                                Hello! I'm Shani Gamage, a third-year undergraduate at the University of Colombo School of Computing from Matugama, Sri Lanka. I completed my A/Ls at Ananda Sastralaya National School, where I built a strong foundation in science and technology.
I am passionate about Machine Learning and Artificial Intelligence, and I enjoy building projects across web applications, mobile apps, and UI/UX design. Beyond coding, I participate in hackathons, explore new technologies, and draw inspiration from traveling and experiencing new cultures.
My goal is to grow as a developer and contribute to projects that combine technology and creativity to solve meaningful problems.
</p>

                            {/* Tab Navigation */}
                            <div className="flex gap-4 mb-10 flex-wrap">
                                {[
                                    { id: 'skills', label: 'Skills', icon: <Code size={18} /> },
                                    { id: 'experience', label: 'Experience', icon: <Briefcase size={18} /> },
                                    { id: 'education', label: 'Education', icon: <GraduationCap size={18} /> }
                                ].map(tab => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 backdrop-blur-lg ${activeTab === tab.id
                                            ? 'scale-105'
                                            : 'opacity-60 hover:opacity-100 hover:-translate-y-1'
                                            }`}
                                        style={{
                                            backgroundColor: activeTab === tab.id ? `${colors.pink}50` : 'rgba(255, 255, 255, 0.1)',
                                            color: activeTab === tab.id ? colors.pink : 'white',
                                            border: activeTab === tab.id ? `2px solid ${colors.pink}` : '2px solid transparent'
                                        }}
                                    >
                                        {tab.icon}
                                        {tab.label}
                                    </button>
                                ))}
                            </div>

                            {/* Tab Content */}
                            <div className="min-h-[300px]">
                                {/* Skills Tab */}
                                {activeTab === 'skills' && (
                                    <div className="animate-fade-in space-y-4">
                                        {skills.map((skill, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-start gap-4 p-4 rounded-lg border-b border-gray-800 hover:pl-6 hover:bg-gray-800/50 transition-all duration-300"
                                            >
                                                <div style={{ color: colors.pink }} className="text-xl font-bold flex items-center">
                                                    {skill.icon}
                                                    {skill.title}
                                                </div>
                                                <div className="flex-1 pt-1">
                                                    <p className="text-gray-400">{skill.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Experience Tab */}
                                {activeTab === 'experience' && (
                                    <div className="animate-fade-in space-y-4">
                                        {experience.map((exp, idx) => (
                                            <div
                                                key={idx}
                                                className="p-4 rounded-lg border-b border-gray-800 hover:pl-6 hover:bg-gray-800/50 transition-all duration-300"
                                            >
                                                <div style={{ color: colors.pink }} className="text-sm font-semibold mb-2 flex items-center">
                                                    {exp.icon}
                                                    {exp.year}
                                                </div>
                                                <div className="text-xl font-bold mb-1">{exp.title}</div>
                                                <p className="text-gray-400">{exp.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Education Tab */}
                                {activeTab === 'education' && (
                                    <div className="animate-fade-in space-y-4">
                                        {education.map((edu, idx) => (
                                            <div
                                                key={idx}
                                                className="p-4 rounded-lg border-b border-gray-800 hover:pl-6 hover:bg-gray-800/50 transition-all duration-300"
                                            >
                                                <div style={{ color: colors.pink }} className="text-sm font-semibold mb-2 flex items-center">
                                                    {edu.icon}
                                                    {edu.year}
                                                </div>
                                                <div className="text-xl font-bold mb-1">{edu.title}</div>
                                                <p className="text-gray-400">{edu.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
