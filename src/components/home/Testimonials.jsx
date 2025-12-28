import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
    return (
        <section className="py-20 bg-dark text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 p-12 opacity-10 text-white pointer-events-none">
                <Quote size={200} />
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="flex justify-center mb-8 text-primary">
                        {[1, 2, 3, 4, 5].map((s) => <Star key={s} fill="currentColor" size={24} />)}
                    </div>

                    <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-10 font-body italic">
                        "Jexa Studio transformed our office into a space that truly reflects our brand's values. The attention to detail, premium materials, and professionalism exceeded all our expectations. It's not just an office; it's a statement."
                    </blockquote>

                    <div>
                        <h4 className="text-xl font-bold font-sans">Sarah Anderson</h4>
                        <p className="text-gray-400 text-sm uppercase tracking-widest mt-1">CEO, TechVenture Indonesia</p>
                    </div>

                    {/* Navigation Dots (Visual Only for MVP) */}
                    <div className="flex justify-center gap-3 mt-12">
                        <button className="w-3 h-3 rounded-full bg-primary"></button>
                        <button className="w-3 h-3 rounded-full bg-white/20 hover:bg-white/40"></button>
                        <button className="w-3 h-3 rounded-full bg-white/20 hover:bg-white/40"></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
