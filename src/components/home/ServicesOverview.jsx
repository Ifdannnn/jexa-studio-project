import { PenTool, Armchair, Home, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
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
        icon: <Home size={32} />,
        title: "Residential Projects",
        desc: "Creating homes that reflect your lifestyle, from cozy apartments to luxury villas.",
    },
    {
        icon: <Building2 size={32} />,
        title: "Commercial Projects",
        desc: "Optimizing workspaces, showrooms, and retail environments for productivity and brand impact.",
    },
];

const ServicesOverview = () => {
    return (
        <section className="py-20 bg-accent/30">
            <div className="container mx-auto px-4 md:px-8 text-center">
                <div className="max-w-3xl mx-auto mb-16">
                    <span className="text-secondary text-sm font-bold tracking-widest uppercase mb-2 block">Our Expertise</span>
                    <h2 className="text-4xl font-bold font-sans text-dark mb-4">What We Create For You</h2>
                    <p className="text-gray-600">Comprehensive design solutions tailored to every scale and style.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, idx) => (
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
    );
};

export default ServicesOverview;
