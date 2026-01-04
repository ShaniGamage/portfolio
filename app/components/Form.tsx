import React, { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { colors } from '../constants/colors';

export default function Form() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    useEffect(() => {
        emailjs.init('C5W1G4CnTmqy-bDRV');
    }, []);

    const handleSubmit = (e:any) => {
        e.preventDefault();

        emailjs.send(
            'service_6ta7qmc',
            'template_g53zcb8',
            {
                name: formData.name,
                email: formData.email,
                message: formData.message,
            },
            'C5W1G4CnTmqy-bDRV'
        )
            .then(() => {
                alert('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            })
            .catch((error) => {
                console.error(error);
                alert('Failed to send message');
            });
    };
    return (

        <div>
            {/* Contact */}
            <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16" style={{ color: colors.pink }}>
                        Let's Connect
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-semibold mb-6" style={{ color: colors.peach }}>Get in Touch</h3>
                            <p className="text-gray-400 mb-8">
                                Have a project in mind or just want to chat? Feel free to reach out!
                            </p>

                            <a href="/cv-new.pdf" download>
                                <button
                                    className="flex items-center gap-3 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform mb-6"
                                    style={{ backgroundColor: colors.purple }}
                                >
                                    <Download size={20} />
                                    Download CV
                                </button>
                            </a>


                            <div className="flex gap-4">
                                <a
                                    href="mailto:shanigamage.contact@gmail.com"
                                    className="p-3 rounded-full hover:scale-110 transition-transform"
                                    style={{ backgroundColor: colors.darkPurple }}
                                >
                                    <Mail size={24} />
                                </a>
                                <a href="https://github.com/ShaniGamage/ShaniGamage" className="p-3 rounded-full hover:scale-110 transition-transform" style={{ backgroundColor: colors.darkPurple }}>
                                    <Github size={24} />
                                </a>
                                <a href="www.linkedin.com/in/shani-gamage-4a20ab1a6" className="p-3 rounded-full hover:scale-110 transition-transform" style={{ backgroundColor: colors.darkPurple }}>
                                    <Linkedin size={24} />
                                </a>
                            </div>
                        </div>


                        <form onSubmit={handleSubmit} >
                            <div className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 bg-gray-800 rounded-lg border-2 border-gray-700 focus:outline-none focus:border-pink-500 transition-all"
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 bg-gray-800 rounded-lg border-2 border-gray-700 focus:outline-none focus:border-pink-500 transition-all"
                                />
                                <textarea
                                    placeholder="Your Message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-4 py-3 bg-gray-800 rounded-lg border-2 border-gray-700 focus:outline-none focus:border-pink-500 transition-all resize-none"
                                ></textarea>
                                <button
                                    type='submit'
                                    className="w-full py-3 rounded-lg font-semibold hover:scale-105 transition-transform"
                                    style={{ backgroundColor: colors.pink }}
                                >
                                    Send Message
                                </button>

                            </div>
                        </form>
                    </div>
                </div>
            </section >
        </div >
    )
}
