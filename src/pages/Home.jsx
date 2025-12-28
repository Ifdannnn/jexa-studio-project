import { Helmet } from 'react-helmet-async';
import Hero from '../components/home/Hero';
import Stats from '../components/home/Stats';
import AboutMini from '../components/home/AboutMini';
import ServicesOverview from '../components/home/ServicesOverview';
import FeaturedProjects from '../components/home/FeaturedProjects';
import Testimonials from '../components/home/Testimonials';
import CTASection from '../components/home/CTASection';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Jexa Studio | Premium Interior Design & Furniture</title>
                <meta name="description" content="Jexa Studio offers premium interior design and custom furniture solutions. Crafting spaces that inspire living." />
            </Helmet>

            <Hero />
            <Stats />
            <AboutMini />
            <ServicesOverview />
            <FeaturedProjects />
            <Testimonials />
            <CTASection />
        </>
    );
};

export default Home;
