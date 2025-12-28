import { MapPin, Mail, Phone, Instagram, Facebook, Linkedin } from 'lucide-react';

const ContactInfo = () => {
    return (
        <div className="w-full lg:w-1/3">
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
        </div>
    );
};

export default ContactInfo;
