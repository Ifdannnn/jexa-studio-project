import Button from '../common/Button';

const ContactForm = () => {
    return (
        <div className="w-full lg:w-2/3 bg-white p-8 md:p-12 shadow-xl rounded-sm">
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
        </div>
    );
};

export default ContactForm;
