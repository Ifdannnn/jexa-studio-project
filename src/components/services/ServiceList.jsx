import { PenTool, Armchair, Building2 } from 'lucide-react';

const ServiceList = () => {
    const servicesList = [
        {
            icon: <PenTool size={48} />,
            title: "Interior Design",
            desc: "From concept to completion, we offer full-service interior design for new builds and renovations. Our service includes space planning, 3D visualization, material selection, and lighting design.",
            features: ["Space Planning & Layout", "3D Rendering & Visualization", "Color & Material Consultation", "Lighting Design"]
        },
        {
            icon: <Armchair size={48} />,
            title: "Custom Furniture",
            desc: "We design and craft bespoke furniture pieces that fit your space perfectly. Using high-quality wood, metals, and fabrics, we create functional art that stands the test of time.",
            features: ["Custom Cabinetry", "Bespoke Seating & Tables", "Built-in Storage Solutions", "Premium Material Sourcing"]
        },
        {
            icon: <Building2 size={48} />,
            title: "Commercial Projects",
            desc: "We help businesses create impactful environments. Whether it's a corporate office, a boutique hotel, or a retail store, we design spaces that enhance brand identity and productivity.",
            features: ["Office Space Planning", "Retail Design", "Hospitality Interiors", "Brand Integration"]
        }
    ];

    return (
        <section className="py-20">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 gap-12">
                    {servicesList.map((service, idx) => (
                        <div key={idx} className="flex flex-col md:flex-row gap-8 md:gap-16 border-b border-gray-100 pb-16 last:border-0 last:pb-0">
                            <div className="w-full md:w-1/3">
                                <div className="w-20 h-20 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mb-6">
                                    {service.icon}
                                </div>
                                <h2 className="text-3xl font-bold font-sans text-dark">{service.title}</h2>
                            </div>
                            <div className="w-full md:w-2/3">
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
    );
};

export default ServiceList;
