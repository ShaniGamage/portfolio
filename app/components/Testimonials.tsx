import React, { useEffect, useState } from 'react'
import { colors } from '../constants/colors';

export default function Testimonials() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const testimonials = [
        {
            image: '/testimonials/image1.jpg'
           
        },
        {
            image: '/testimonials/image2.jpg'
        },
        {
            image: '/testimonials/image3.jpg'
        },
        {
            image: '/testimonials/image4.jpg'
        },
        {
            image: '/testimonials/image5.jpg'
        },
        {
            image: '/testimonials/image6.jpeg'
        },
        {
            image: '/testimonials/image7.jpeg',
        }
    ];
    useEffect(() => {
        const slideInterval = setInterval(() => {
          setCurrentSlide(prev => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(slideInterval);
      }, [testimonials.length]);
    return (
        <div>
            <section id="testimonials" className="py-32 px-8 relative overflow-hidden">
                <h2 className="text-6xl font-bold text-center mb-4" style={{ color: colors.peach }}>Gallery</h2>
                <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">Here are some snapshots of special moments.</p>

                <div className="max-w-6xl mx-auto relative">
                    {/* Main Slider */}
                    <div className="relative h-[650px] rounded-2xl overflow-hidden">
                        {testimonials.map((testimonial, idx) => (
                            <div
                                key={idx}
                                className={`absolute inset-0 transition-all duration-700 ease-in-out ${idx === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0'
                                    }`}
                                style={{
                                    transform: idx < currentSlide ? 'translateX(-100%)' : idx === currentSlide ? 'translateX(0)' : 'translateX(100%)',
                                    transitionProperty: 'opacity, transform'
                                }}
                            >
                                <div className="relative h-full">
                                    {/* Image */}
                                    <div className="absolute inset-0">
                                        <img
                                            src={testimonial.image}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                                    </div>

                                    {/* Caption Content */}
                                    {/* <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
                                        <div className="max-w-3xl">
                                            <div className="text-6xl mb-4 opacity-50" style={{ color: colors.peach }}>"</div>
                                            <p className="text-xl mb-6 leading-relaxed ">{testimonial.caption}</p>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex justify-center gap-3 mt-8">
                        {testimonials.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentSlide(idx)}
                                className={`transition-all duration-300 rounded-full ${idx === currentSlide ? 'w-12 h-3' : 'w-3 h-3 opacity-50 hover:opacity-100'
                                    }`}
                                style={{ backgroundColor: colors.pink }}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={() => setCurrentSlide(prev => (prev - 1 + testimonials.length) % testimonials.length)}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full backdrop-blur-lg flex items-center justify-center hover:scale-110 transition-transform text-2xl"
                        style={{ backgroundColor: `${colors.purple}80`, color: 'white' }}
                        aria-label="Previous slide"
                    >
                        ‹
                    </button>
                    <button
                        onClick={() => setCurrentSlide(prev => (prev + 1) % testimonials.length)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full backdrop-blur-lg flex items-center justify-center hover:scale-110 transition-transform text-2xl"
                        style={{ backgroundColor: `${colors.purple}80`, color: 'white' }}
                        aria-label="Next slide"
                    >
                        ›
                    </button>
                </div>
            </section></div>
    )
}
