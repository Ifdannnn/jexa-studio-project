import { useState } from "react";
import { Star, Quote } from "lucide-react";
import ScrollReveal from '../common/ScrollReveal';
import testimonials from "../../data/testimonials";

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const active = testimonials[activeIndex];

    return (
        <ScrollReveal animation="fade-up">
            <section className="py-24 bg-dark text-white relative overflow-hidden">
                {/* Decorative Quote */}
                <Quote
                    size={180}
                    className="absolute top-10 right-10 text-white/5 pointer-events-none"
                />

                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        {/* Rating */}
                        <div className="flex justify-center mb-8 text-primary">
                            {[...Array(active.rating)].map((_, i) => (
                                <Star key={i} size={22} fill="currentColor" />
                            ))}
                        </div>

                        {/* Card */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-8 md:px-12 py-12 transition-all duration-500">
                            <blockquote className="text-xl md:text-2xl font-light leading-relaxed italic mb-10">
                                “{active.message}”
                            </blockquote>

                            <div>
                                <h4 className="text-lg font-semibold">
                                    {active.name}
                                </h4>
                                <p className="text-sm text-gray-400 uppercase tracking-widest mt-1">
                                    {active.role}, {active.company}
                                </p>
                            </div>
                        </div>

                        {/* Navigation Dots */}
                        <div className="flex justify-center gap-3 mt-10">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === activeIndex
                                        ? "bg-primary scale-125"
                                        : "bg-white/20 hover:bg-white/40"
                                        }`}
                                    aria-label={`Testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </ScrollReveal>
    );
};

export default Testimonials;
