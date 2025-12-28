import Button from '../common/Button';

const AboutMini = () => {
    return (
        <section className="py-20 md:py-32 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Image Side */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative z-10">
                            <img
                                src="/images/bedroom-zen.jpg"
                                alt="Zen Bedroom Design"
                                className="w-full h-[500px] object-cover rounded-sm shadow-2xl"
                            />
                        </div>
                        {/* Minimal decoration */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/10 -z-0"></div>
                        <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-primary/20 -z-0"></div>
                    </div>

                    {/* Text Side */}
                    <div className="w-full lg:w-1/2">
                        <span className="inline-block py-1 px-3 border border-secondary/30 rounded-full text-secondary text-xs tracking-widest uppercase mb-6">
                            About Jexa Studio
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-dark mb-8 font-sans leading-tight">
                            We transform ordinary spaces into <span className="text-primary font-family: 'Poppins', sans-serif">extraordinary experiences</span>.
                        </h2>
                        <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                            With over a decade of expertise in interior design and custom furniture craftsmanship, Jexa Studio stands at the intersection of functionality and artistry.
                        </p>
                        <p className="text-gray-600 mb-10 leading-relaxed text-lg">
                            Our philosophy is simple: your space should tell your story. We don't just design rooms; we curate environments that reflect your personality and enhance your lifestyle.
                        </p>

                        <ul className="space-y-4 mb-10">
                            {['Personalized Design Approach', 'Premium Quality Materials', 'End-to-End Project Management'].map((item, idx) => (
                                <li key={idx} className="flex items-center text-dark font-medium">
                                    <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center mr-3 text-xs">✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <Button to="/about" variant="ghost" className="pl-0 text-primary text-lg hover:translate-x-2 transition-transform">
                            Discover Our Story &rarr;
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMini;
