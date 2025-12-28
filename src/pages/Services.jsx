import CTASection from '../components/common/CTASection';
import PageHero from '../components/common/PageHero';
import { PenTool, Armchair, Building2, CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import ScrollReveal from '../components/common/ScrollReveal';

const processSteps = [
    {
        title: 'Discovery',
        icon: <PenTool size={32} />
    },
    {
        title: 'Concept',
        icon: <Armchair size={32} />
    },
    {
        title: 'Development',
        icon: <Building2 size={32} />
    },
    {
        title: 'Execution',
        icon: <CheckCircle size={32} />
    }
];


const Services = () => {
    return (
        <>
            <Helmet>
                <title>Services | Jexa Studio</title>
            </Helmet>

            <ScrollReveal animation="fade-in">
                <PageHero
                    title="Our Services"
                    subtitle="What We Do"
                    bgClass="bg-primary"
                />
            </ScrollReveal>

            {/* ServiceList Section */}
            <ScrollReveal animation="fade-up" delay={0.1}>
                <section className="py-20">
                    <div className="container mx-auto px-4 md:px-8">
                        <div className="grid grid-cols-1 gap-12">
                            {[
                                {
                                    image: "../images/hero-living.jpg",
                                    title: "Interior Design",
                                    desc: "From concept to completion, we offer full-service interior design for new builds and renovations. Our service includes space planning, 3D visualization, material selection, and lighting design.",
                                    features: ["Space Planning & Layout", "3D Rendering & Visualization", "Color & Material Consultation", "Lighting Design"]
                                },
                                {
                                    image: "../images/office-glass.jpg",
                                    title: "Custom Furniture",
                                    desc: "We design and craft bespoke furniture pieces that fit your space perfectly. Using high-quality wood, metals, and fabrics, we create functional art that stands the test of time.",
                                    features: ["Custom Cabinetry", "Bespoke Seating & Tables", "Built-in Storage Solutions", "Premium Material Sourcing"]
                                },
                                {
                                    image: "../images/bedroom-zen.jpg",
                                    title: "Residential Projects",
                                    desc: "We help businesses create impactful environments. Whether it's a corporate office, a boutique hotel, or a retail store, we design spaces that enhance brand identity and productivity.",
                                    features: ["Office Space Planning", "Retail Design", "Hospitality Interiors", "Brand Integration"]
                                },
                                {
                                    image: "../images/office-open.jpg",
                                    title: "Commercial Projects",
                                    desc: "We help businesses create impactful environments. Whether it's a corporate office, a boutique hotel, or a retail store, we design spaces that enhance brand identity and productivity.",
                                    features: ["Office Space Planning", "Retail Design", "Hospitality Interiors", "Brand Integration"]
                                }
                            ].map((service, idx) => (
                                <div key={idx} className="flex flex-col md:flex-row gap-8 md:gap-16 border-b border-gray-100 pb-16 last:border-0 last:pb-0">
                                    <div className="w-full md:w-1/3">
                                        <h2 className="text-2xl font-bold text-dark mb-4 md:hidden">
                                            {service.title}
                                        </h2>

                                        <div className="w-full md:max-w-[420px] aspect-[4/5] overflow-hidden rounded-lg shadow-md border border-gray-100">
                                            <img
                                                src={service.image}
                                                alt={`${service.title} service by Jexa Studio`}
                                                loading="lazy"
                                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full md:w-2/3 flex flex-col justify-center">
                                        <h2 className="hidden md:block text-3xl font-bold font-sans text-dark mb-6">{service.title}</h2>
                                        <p className="text-gray-600 text-lg leading-relaxed mb-8">{service.desc}</p>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {service.features.map((feature, fIdx) => (
                                                <div key={fIdx} className="flex items-center text-dark font-medium">
                                                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                                                    {feature}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* ProcessTimeline Section */}
            <ScrollReveal animation="fade-up" delay={0.1}>
                <section className="py-20 bg-accent/30">
                    <div className="container mx-auto px-4 md:px-8 text-center">
                        <h2 className="text-3xl font-bold font-sans text-dark mb-12">Our Design Process</h2>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {processSteps.map((step, idx) => (
                                <div key={idx} className="relative text-center">

                                    {/* NUMBER */}
                                    <div className="text-6xl font-black text-gray-200 absolute -top-6 left-1/2 -translate-x-1/2 -z-10">
                                        {idx + 1}
                                    </div>

                                    {/* ICON */}
                                    <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                                        {step.icon}
                                    </div>

                                    {/* TITLE */}
                                    <h3 className="text-xl font-bold text-dark mb-2">
                                        {step.title}
                                    </h3>

                                    {/* LINE */}
                                    <div className="w-12 h-1 bg-primary mx-auto"></div>
                                </div>
                            ))}
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

export default Services;
