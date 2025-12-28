import { Helmet } from 'react-helmet-async';
import ScrollReveal from '../components/common/ScrollReveal';
import PageHero from '../components/common/PageHero';
import { MapPin, Mail, Phone, Instagram, Facebook, Linkedin } from 'lucide-react';
import Button from '../components/common/Button';

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Contact Us | Jexa Studio</title>
            </Helmet>

            <ScrollReveal animation="fade-in">
                <PageHero
                    title="Contact Us"
                    subtitle="Get In Touch"
                    bgClass="bg-primary"
                    textClass="text-white"
                />
            </ScrollReveal>

            <section className="py-20">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="flex flex-col lg:flex-row gap-16">
                        <ScrollReveal className="w-full lg:w-1/3" animation="slide-in-left">
                            <h2 className="text-2xl font-bold font-sans text-dark mb-8">Contact Information</h2>

                            <div className="space-y-6 mb-12">
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-sm shrink-0 mr-4">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-dark mb-1">Visit Us</h4>
                                        <p className="text-gray-600">Jl. Sudirman No. 123<br />Jakarta Selatan 12190<br />Indonesia</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-sm shrink-0 mr-4">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-dark mb-1">Email Us</h4>
                                        <p className="text-gray-600">hello@jexastudio.com<br />support@jexastudio.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-sm shrink-0 mr-4">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-dark mb-1">Call Us</h4>
                                        <p className="text-gray-600">+62 21 1234 5678<br />+62 812 3456 7890</p>
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-2xl font-bold font-sans text-dark mb-6">Follow Us</h2>
                            <div className="flex space-x-4">
                                {[Instagram, Facebook, Linkedin].map((Icon, idx) => (
                                    <a key={idx} href="#" className="w-10 h-10 border border-gray-200 flex items-center justify-center text-dark hover:bg-primary hover:text-white hover:border-primary transition-all">
                                        <Icon size={20} />
                                    </a>
                                ))}
                            </div>
                        </ScrollReveal>

                        <ScrollReveal className="w-full lg:w-2/3 bg-white p-8 md:p-12 shadow-xl rounded-sm" animation="slide-in-right" delay={0.2}>
                            <h2 className="text-2xl font-bold font-sans text-dark mb-8">Send Us a Message</h2>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                        <input type="text" className="w-full px-4 py-3 border border-gray-300 focus:border-primary focus:outline-none transition-colors" placeholder="John" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                        <input type="text" className="w-full px-4 py-3 border border-gray-300 focus:border-primary focus:outline-none transition-colors" placeholder="Doe" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                        <input type="email" className="w-full px-4 py-3 border border-gray-300 focus:border-primary focus:outline-none transition-colors" placeholder="john@example.com" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                        <input type="tel" className="w-full px-4 py-3 border border-gray-300 focus:border-primary focus:outline-none transition-colors" placeholder="+62..." />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Interested In</label>
                                    <select className="w-full px-4 py-3 border border-gray-300 focus:border-primary focus:outline-none transition-colors bg-white">
                                        <option>Interior Design</option>
                                        <option>Custom Furniture</option>
                                        <option>Commercial Project</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea rows="4" className="w-full px-4 py-3 border border-gray-300 focus:border-primary focus:outline-none transition-colors" placeholder="Tell us about your project..."></textarea>
                                </div>

                                <Button variant="primary" className="w-full md:w-auto px-12">
                                    Send Message
                                </Button>
                            </form>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Map Embed (Placeholder) */}
            <ScrollReveal animation="fade-up" delay={0.1}>
                <section className="w-full">
                    <div className="relative w-full h-[400px] overflow-hidden">
                        <iframe
                            title="Jexa Studio Location"
                            src="https://www.google.com/maps?q=Jl.%20Sudirman%20No.%20123%20Jakarta%20Selatan&output=embed"
                            className="absolute inset-0 w-full h-full border-0"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </section>
            </ScrollReveal>
        </>
    );
};

export default Contact;
