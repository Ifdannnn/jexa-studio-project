import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';
import CTASection from '../components/home/CTASection';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div className="h-screen flex flex-col items-center justify-center">
                <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
                <Link to="/portfolio" className="text-primary hover:underline">
                    Back to Portfolio
                </Link>
            </div>
        );
    }

    const currentIndex = projects.findIndex(p => p.id === project.id);
    const nextProject = projects[(currentIndex + 1) % projects.length];
    const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];

    /* ================= NAVIGATION COMPONENT ================= */
    const ProjectNavigation = ({ className = '' }) => (
        <div className={`flex items-center justify-between gap-4 ${className}`}>

            {/* Arrow Left */}
            <Link
                to={`/portfolio/${prevProject.id}`}
                className=" group flex items-center gap-3 text-gray-400 hover:text-primary transition"
                aria-label="Previous Project"
            >
                <ArrowLeft size={22} />
                <span className="hidden md:inline text-sm font-medium transition-colors group-hover:text-primary">{prevProject.title}</span>
            </Link>

            {/* CTA Button */}
            <Link
                to="/portfolio"
                className="
      px-8 py-2
      rounded-full
      border border-gray-200
      bg-white
      text-gray-500
      text-sm font-medium
      transition-all
      hover:border-primary hover:text-primary
    "
            >
                View All Projects
            </Link>

            {/* Arrow Right */}
            <Link
                to={`/portfolio/${nextProject.id}`}
                className="group flex items-center gap-3 text-gray-400 hover:text-primary transition"
                aria-label="Next Project"
            >
                <span className="hidden md:inline text-sm font-medium transition-colors group-hover:text-primary">{nextProject.title}</span>
                <ArrowRight size={22} />
            </Link>

        </div>
    );

    return (
        <>
            <Helmet>
                <title>{project.title} | Jexa Studio Portfolio</title>
                <meta name="description" content={project.description} />
            </Helmet>

            {/* ================= HERO ================= */}
            <div className="w-full h-[60vh] relative bg-dark">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
                    <span className="text-white/80 uppercase tracking-[0.2em] mb-4 text-sm font-medium border border-white/30 px-4 py-1 rounded-full">
                        {project.category}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 max-w-4xl">
                        {project.title}
                    </h1>
                    <p className="text-lg text-white/90">{project.location}</p>
                </div>
            </div>

            {/* ================= CONTENT ================= */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-8">

                    <div className="flex flex-col lg:flex-row gap-16">

                        <div className="w-full lg:w-2/3">
                            <h2 className="text-3xl font-bold mb-6">About the Project</h2>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                {project.description}
                            </p>
                        </div>

                        {/* Desktop Gallery */}
                        <div className="hidden lg:block w-full lg:w-1/3">
                            <div className="bg-accent/20 p-8 rounded-sm border-l-4 border-primary">
                                <h3 className="text-xl font-bold mb-6">Project Gallery</h3>
                                <div className="grid grid-cols-1 gap-4">
                                    {project.gallery.map((img, idx) => (
                                        <img
                                            key={idx}
                                            src={img}
                                            alt=""
                                            className="w-full h-48 object-cover rounded-sm"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ================= MOBILE SLIDER + NAV ================= */}
            <section className="lg:hidden py-12 bg-gradient-to-b from-white to-gray-50">
                <div className="container mx-auto px-4">

                    <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6">
                        {project.gallery.map((img, idx) => (
                            <div
                                key={idx}
                                className="relative min-w-[85%] snap-center flex-shrink-0
                                rounded-lg overflow-hidden border border-primary/20"
                            >
                                <img src={img} alt="" className="w-full h-64 object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                            </div>
                        ))}
                    </div>

                    <div className="mt-6">
                        <ProjectNavigation />
                    </div>

                </div>
            </section>

            {/* ================= DESKTOP NAV ================= */}
            <section className="hidden lg:block py-12 border-t border-gray-100">
                <div className="container mx-auto px-4 md:px-8">
                    <ProjectNavigation />
                </div>
            </section>

            <CTASection />
        </>
    );
};

export default ProjectDetail;
