import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import CTASection from '../components/common/CTASection';
import PageHero from '../components/common/PageHero';
import ScrollReveal from '../components/common/ScrollReveal';
import { projects } from '../data/projects';

const Portfolio = () => {
    const [filter, setFilter] = useState('All');

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <>
            <Helmet>
                <title>Portfolio | Jexa Studio</title>
            </Helmet>

            <ScrollReveal animation="fade-in">
                <PageHero
                    title="Portfolio"
                    subtitle="Our Work"
                    bgClass="bg-dark"
                />
            </ScrollReveal>

            <section className="py-20">
                <div className="container mx-auto px-4 md:px-8">

                    {/* Filter Section */}
                    <ScrollReveal animation="fade-up" delay={0.1}>
                        <div className="flex justify-center flex-wrap gap-4 mb-16">
                            {['All', 'Residential', 'Commercial'].map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setFilter(cat)}
                                    className={`px-8 py-2 rounded-full text-sm font-medium transition-all ${filter === cat
                                        ? 'bg-primary text-white shadow-lg'
                                        : 'bg-white text-gray-500 border border-gray-200 hover:border-primary hover:text-primary'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </ScrollReveal>

                    {/* Grid Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project) => (
                            <ScrollReveal key={project.id} animation="fade-up" delay={0.1}>
                                <Link to={`/portfolio/${project.id}`} className="group relative overflow-hidden shadow-lg cursor-pointer block">
                                    <div className="aspect-[4/5] overflow-hidden bg-gray-200">
                                        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    </div>
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-6 bg-opacity-90">
                                        <span className="text-primary text-xs font-bold tracking-widest uppercase mb-2">{project.category}</span>
                                        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                                        <p className="text-gray-300 text-sm mb-6">{project.location}</p>
                                        <span className="text-white border border-white px-6 py-2 group-hover:border-white group-hover:opacity-100 hover:bg-white hover:text-dark transition-colors text-sm uppercase tracking-wider inline-block">
                                            View Details
                                        </span>
                                    </div>
                                </Link>
                            </ScrollReveal>
                        ))}
                    </div>

                </div>
            </section>

            <ScrollReveal animation="fade-up" delay={0.1}>
                <CTASection />
            </ScrollReveal>
        </>
    );
};

export default Portfolio;
