import CTASection from '../components/home/CTASection';
import AboutStory from '../components/about/AboutStory';
import Team from '../components/about/Team';
import PageHero from '../components/common/PageHero';
import { Helmet } from 'react-helmet-async';

const About = () => {
    return (
        <>
            <Helmet>
                <title>About Us | Jexa Studio</title>
            </Helmet>

            <PageHero
                title="About Jexa Studio"
                subtitle="Who We Are"
                bgClass="bg-secondary" // Or handle via props logic
            />

            <AboutStory />

            <Team />

            <CTASection />
        </>
    );
};

export default About;
