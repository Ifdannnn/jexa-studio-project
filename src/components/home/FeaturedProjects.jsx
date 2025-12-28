import { Link } from 'react-router-dom';
import Button from '../common/Button';
import { projects } from '../../data/projects';

const FeaturedProjects = () => {
    // Take only the first 4 projects for the home page
    const displayedProjects = projects.slice(0, 4);

    return (
        <section className="py-20 md:py-32">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <span className="text-secondary text-sm font-bold tracking-widest uppercase mb-2 block">Our Portfolio</span>
                        <h2 className="text-4xl font-bold font-sans text-dark">Latest Masterpieces</h2>
                    </div>
                    <Button to="/portfolio" variant="secondary" className="hidden md:inline-flex mt-4 md:mt-0">
                        View All Projects
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {displayedProjects.map((project) => (
                        <Link to={`/portfolio/${project.id}`} key={project.id} className="group cursor-pointer relative overflow-hidden block">
                            <div className="overflow-hidden rounded-sm">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                <span className="text-primary text-xs font-bold tracking-widest uppercase mb-2">{project.category}</span>
                                <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                                <p className="text-gray-300 text-sm">{project.location}</p>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="text-center mt-12 md:hidden">
                    <Button to="/portfolio" variant="secondary">
                        View All Projects
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;
