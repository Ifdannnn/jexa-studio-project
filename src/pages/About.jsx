
import CTASection from '../components/common/CTASection';
import PageHero from '../components/common/PageHero';
import { Helmet } from 'react-helmet-async';
import ScrollReveal from '../components/common/ScrollReveal';

const About = () => {
    return (
        <>
            <Helmet>
                <title>About Us | Jexa Studio</title>
            </Helmet>

            <ScrollReveal animation="fade-in">
                <PageHero
                    title="About Jexa Studio"
                    subtitle="Who We Are"
                    bgClass="bg-secondary" // Or handle via props logic
                />
            </ScrollReveal>

            {/* AboutStory Section */}
            <ScrollReveal animation="fade-up" delay={0.1}>
                <section className="py-20">
                    <div className="container mx-auto px-4 md:px-8">
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="w-full md:w-1/2">
                                <img src="/images/office-glass.jpg" alt="Our Studio" className="w-full h-[600px] object-cover rounded-sm shadow-xl" />
                            </div>
                            <div className="w-full md:w-1/2">
                                <h2 className="text-3xl font-bold font-sans text-dark mb-6">Our Story</h2>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Founded in 2014, Jexa Studio began with a simple vision: to create interiors that are not just beautiful, but deeply functional and reflective of the people who inhabit them.
                                </p>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    What started as a small boutique studio in Jakarta has grown into a full-service interior design firm with a portfolio spanning across Indonesia. We believe that good design is about solving problems with elegance and creativity.
                                </p>

                                <h3 className="text-xl font-bold font-sans text-dark mt-8 mb-4">Our Mission</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    To deliver exceptional interior solutions that enhance the quality of life for our clients through innovative design, sustainable practices, and master craftsmanship.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* Team Section */}
            <ScrollReveal animation="fade-up" delay={0.1}>
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4 md:px-8 text-center">
                        <span className="text-secondary text-sm font-bold tracking-widest uppercase mb-2 block">Our Team</span>
                        <h2 className="text-4xl font-bold font-sans text-dark mb-12">Meet The Creative Minds</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { name: "Ahmad Fadli", role: "Principal Architect", img: "https://i.pravatar.cc/400?img=11" },
                                { name: "Maya Sari", role: "Lead Interior Designer", img: "https://i.pravatar.cc/400?img=5" },
                                { name: "David Chen", role: "Furniture Specialist", img: "https://i.pravatar.cc/400?img=3" },
                            ].map((member, idx) => (
                                <div key={idx} className="bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                                    <img src={member.img} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-6 object-cover grayscale hover:grayscale-0 transition-all duration-300" />
                                    <h3 className="text-xl font-bold text-dark">{member.name}</h3>
                                    <p className="text-primary text-sm uppercase tracking-wide mt-2">{member.role}</p>
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

export default About;
