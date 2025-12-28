const AboutStory = () => {
    return (
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
    );
};

export default AboutStory;
