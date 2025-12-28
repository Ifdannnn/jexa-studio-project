import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-secondary text-white pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <Link to="/" className="text-2xl font-bold font-sans tracking-tighter block mb-6">
                            JEXA<span className="font-light">STUDIO</span>
                        </Link>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Crafting premium interiors and custom furniture that inspire living. We transform visions into reality.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            <li><Link to="/" className="text-gray-300 hover:text-primary transition-colors">Home</Link></li>
                            <li><Link to="/about" className="text-gray-300 hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link to="/services" className="text-gray-300 hover:text-primary transition-colors">Services</Link></li>
                            <li><Link to="/portfolio" className="text-gray-300 hover:text-primary transition-colors">Portfolio</Link></li>
                            <li><Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Our Services</h3>
                        <ul className="space-y-4">
                            <li className="text-gray-300">Interior Design</li>
                            <li className="text-gray-300">Custom Furniture</li>
                            <li className="text-gray-300">Commercial Projects</li>
                            <li className="text-gray-300">Residential Styling</li>
                            <li className="text-gray-300">Space Planning</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <MapPin size={20} className="mr-3 text-primary shrink-0 mt-1" />
                                <span className="text-gray-300">Jl. Sudirman No. 123, Jakarta Selatan 12190, Indonesia</span>
                            </li>
                            <li className="flex items-center">
                                <Mail size={20} className="mr-3 text-primary shrink-0" />
                                <a href="mailto:hello@jexastudio.com" className="text-gray-300 hover:text-primary">hello@jexastudio.com</a>
                            </li>
                            <li className="flex items-center">
                                <Phone size={20} className="mr-3 text-primary shrink-0" />
                                <a href="tel:+622112345678" className="text-gray-300 hover:text-primary">+62 21 1234 5678</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} Jexa Studio. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
