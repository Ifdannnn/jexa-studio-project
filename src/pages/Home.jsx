import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Button from '../components/common/Button';
import { PenTool, Armchair, Home as HomeIcon, Building2, Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import CTASection from '../components/common/CTASection';
import ScrollReveal from '../components/common/ScrollReveal';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Jexa Studio | Premium Interior Design & Furniture</title>
                <meta name="description" content="Jexa Studio offers premium interior design and custom furniture solutions. Crafting spaces that inspire living." />
            </Helmet>

            {/* Hero Section */}
            <ScrollReveal animation="fade-in">
                <section className="relative min-h-screen w-full overflow-hidden">
                    {/* Background */}
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: "url('/images/hero-living.jpg')" }}
                    >
                        <div className="absolute inset-0 bg-black/50" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 container mx-auto px-6 pt-32 pb-24 flex items-center min-h-screen">
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="max-w-2xl"
                        >
                            {/* Badge */}
                            <span className="inline-block mb-5 text-xs tracking-widest uppercase text-accent font-medium">
                                Jexa Studio Interior & Furniture
                            </span>

                            {/* Headline */}
                            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                                Interior & Custom Furniture <br />
                                <span className="italic text-primary font-family: 'Plus Jakarta Sans', sans-serif">
                                    Designed for Modern Living
                                </span>
                            </h1>

                            {/* Description */}
                            <p className="text-base md:text-lg text-gray-200 mb-10 leading-relaxed max-w-xl">
                                Premium interior design & bespoke furniture solutions that elevate
                                comfort, aesthetics, and functionality in every space.
                            </p>

                            {/* CTA */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button to="/contact" variant="primary">
                                    Free Consultation
                                </Button>
                                <Button to="/portfolio" variant="outlineWhite">
                                    View Projects
                                </Button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Scroll Indicator (Desktop only) */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 text-white flex-col items-center gap-2"
                    >
                        <span className="text-xs tracking-widest uppercase">Scroll</span>
                        <div className="w-px h-12 bg-white/40 relative overflow-hidden">
                            <motion.div
                                animate={{ y: [0, 48] }}
                                transition={{ repeat: Infinity, duration: 1.4, ease: "linear" }}
                                className="absolute top-0 left-0 w-full h-1/2 bg-white"
                            />
                        </div>
                    </motion.div>
                </section>
            </ScrollReveal>

            {/* Stats Section */}
            <ScrollReveal animation="fade-up" delay={0.1}>
                <section className="bg-primary py-14 text-white relative z-20 -mt-10 mx-4 md:mx-8 xl:mx-auto max-w-7xl rounded-sm shadow-xl">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20">
                            {[
                                { value: "150+", label: "Projects Completed" },
                                { value: "50+", label: "Happy Clients" },
                                { value: "10+", label: "Years Experience" },
                                { value: "15+", label: "Design Awards" },
                            ].map((stat, index) => (
                                <div key={index} className="text-center py-6">
                                    <h3 className="text-4xl md:text-5xl font-bold mb-3">
                                        {stat.value}
                                    </h3>
                                    <p className="text-xs md:text-sm uppercase tracking-widest text-white/80">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* AboutMini Section */}
            <ScrollReveal animation="fade-up" delay={0.1}>
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
            </ScrollReveal>

            {/* ServicesOverview Section */}
            <ScrollReveal animation="fade-up" delay={0.1}>
                <section className="py-20 bg-accent/30">
                    <div className="container mx-auto px-4 md:px-8 text-center">
                        <div className="max-w-3xl mx-auto mb-16">
                            <span className="text-secondary text-sm font-bold tracking-widest uppercase mb-2 block">Our Expertise</span>
                            <h2 className="text-4xl font-bold font-sans text-dark mb-4">What We Create For You</h2>
                            <p className="text-gray-600">Comprehensive design solutions tailored to every scale and style.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                {
                                    icon: <PenTool size={32} />,
                                    title: "Interior Design",
                                    desc: "Transform your space with expert planning, 3D visualization, and curated material selection.",
                                },
                                {
                                    icon: <Armchair size={32} />,
                                    title: "Custom Furniture",
                                    desc: "Handcrafted pieces designed specifically for your space and needs, using premium materials.",
                                },
                                {
                                    icon: <HomeIcon size={32} />,
                                    title: "Residential Projects",
                                    desc: "Creating homes that reflect your lifestyle, from cozy apartments to luxury villas.",
                                },
                                {
                                    icon: <Building2 size={32} />,
                                    title: "Commercial Projects",
                                    desc: "Optimizing workspaces, showrooms, and retail environments for productivity and brand impact.",
                                },
                            ].map((service, idx) => (
                                <div key={idx} className="bg-white p-8 rounded-sm shadow-sm hover:shadow-xl transition-shadow duration-300 text-left group border-t-2 border-transparent hover:border-primary">
                                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-dark">{service.title}</h3>
                                    <p className="text-gray-500 mb-6 text-sm leading-relaxed">{service.desc}</p>
                                    <Link to="/services" className="text-primary font-medium hover:text-secondary inline-flex items-center text-sm">
                                        Learn More <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* FeaturedProjects Section */}
            <ScrollReveal animation="fade-up" delay={0.1}>
                <section className="py-20 md:py-32">
                    <div className="container mx-auto px-4 md:px-8">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                            <div>
                                <span className="text-secondary text-sm font-bold tracking-widest uppercase mb-2 block">Our Portfolio</span>
                                <h2 className="text-4xl font-bold font-sans text-dark">Latest Masterpieces</h2>
                            </div>
                            <Button to="/portfolio" variant="secondary" className="hidden md:inline-flex mt-4 md:mt-0">
                                View All Projects
                            </Button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {projects.slice(0, 4).map((project) => (
                                <Link to={`/portfolio/${project.id}`} key={project.id} className="group cursor-pointer relative overflow-hidden block">
                                    <div className="overflow-hidden rounded-sm">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                        <span className="text-primary text-xs font-bold tracking-widest uppercase mb-2">{project.category}</span>
                                        <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                                        <p className="text-gray-300 text-sm">{project.location}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        <div className="text-center mt-12 md:hidden">
                            <Button to="/portfolio" variant="secondary">
                                View All Projects
                            </Button>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* Testimonials Section */}
            <ScrollReveal animation="fade-up" delay={0.1}>
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
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={0.1}>
                <CTASection />
            </ScrollReveal>
        </>
    );
};

export default Home;
