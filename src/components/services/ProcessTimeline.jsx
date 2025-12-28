const ProcessTimeline = () => {
    return (
        <section className="py-20 bg-accent/30">
            <div className="container mx-auto px-4 md:px-8 text-center">
                <h2 className="text-3xl font-bold font-sans text-dark mb-12">Our Design Process</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {['Discovery', 'Concept', 'Development', 'Execution'].map((step, idx) => (
                        <div key={idx} className="relative">
                            <div className="text-6xl font-black text-gray-200 absolute top-0 left-1/2 -translate-x-1/2 -z-10">{idx + 1}</div>
                            <h3 className="text-xl font-bold text-dark mt-8 mb-2">{step}</h3>
                            <div className="w-12 h-1 bg-primary mx-auto"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessTimeline;
