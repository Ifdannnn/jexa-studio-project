import { Helmet } from 'react-helmet-async';
import PageHero from '../components/common/PageHero';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';
import { MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Contact Us | Jexa Studio</title>
            </Helmet>

            <PageHero
                title="Contact Us"
                subtitle="Get In Touch"
                bgClass="bg-gray-100"
                textClass="text-dark"
            />

            <section className="py-20">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="flex flex-col lg:flex-row gap-16">
                        <ContactInfo />
                        <ContactForm />
                    </div>
                </div>
            </section>

            {/* Map Embed (Placeholder) */}
            <div className="h-[400px] w-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 font-medium flex items-center">
                    <MapPin className="mr-2" /> Google Map Embed Area
                </span>
            </div>
        </>
    );
};

export default Contact;
