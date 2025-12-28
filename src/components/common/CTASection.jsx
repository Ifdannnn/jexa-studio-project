import Button from '../common/Button';

const CTASection = () => {
    return (
        <section className="py-24 bg-gradient-to-r from-accent to-white">
            <div className="container mx-auto px-4 md:px-8 text-center">
                <h2 className="text-4xl md:text-5xl font-bold font-sans text-dark mb-6">
                    Ready to Transform Your Space?
                </h2>
                <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                    Let's discuss how we can bring your vision to life. Schedule a free consultation with our design experts today.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button to="/contact" variant="primary" className="shadow-lg shadow-primary/30">
                        Schedule Free Consultation
                    </Button>
                    <a
                        href="#"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-none transition-all duration-300 font-medium text-sm tracking-wide uppercase bg-transparent text-dark border border-dark hover:bg-dark hover:text-white"
                    >
                        Chat on WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
