import { motion } from 'framer-motion';

const stats = [
    { value: "150+", label: "Projects Completed" },
    { value: "50+", label: "Happy Clients" },
    { value: "10+", label: "Years Experience" },
    { value: "15+", label: "Design Awards" },
];

const Stats = () => {
    return (
        <section className="bg-primary py-14 text-white relative z-20 -mt-10 mx-4 md:mx-8 xl:mx-auto max-w-7xl rounded-sm shadow-xl">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center py-6">
                            <h3 className="text-4xl md:text-5xl font-bold mb-3">
                                {stat.value}
                            </h3>
                            <p className="text-xs md:text-sm uppercase tracking-widest text-white/80">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default Stats;
