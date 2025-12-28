import CTASection from '../components/home/CTASection';
import PageHero from '../components/common/PageHero';
import ServiceList from '../components/services/ServiceList';
import ProcessTimeline from '../components/services/ProcessTimeline';
import { Helmet } from 'react-helmet-async';

const Services = () => {
    return (
        <>
            <Helmet>
                <title>Services | Jexa Studio</title>
            </Helmet>

            <PageHero
                title="Our Services"
                subtitle="What We Do"
                bgClass="bg-primary"
            />

            <ServiceList />

            <ProcessTimeline />

            <CTASection />
        </>
    );
};

export default Services;
