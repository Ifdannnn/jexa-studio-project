const PageHero = ({ title, subtitle, bgClass = "bg-secondary", textClass = "text-white" }) => {
    return (
        <section className={`pt-32 pb-20 ${bgClass} ${textClass}`}>
            <div className="container mx-auto px-4 text-center">
                {subtitle && (
                    <span className="block text-accent uppercase tracking-[0.2em] mb-4 font-medium">
                        {subtitle}
                    </span>
                )}
                <h1 className="text-5xl font-bold font-sans">{title}</h1>
            </div>
        </section>
    );
};

export default PageHero;
