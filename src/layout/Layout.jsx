import { HelmetProvider } from 'react-helmet-async';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { ScrollToTop } from '../hooks/useScrollToTop'; // We'll create this helper

const Layout = ({ children }) => {
    return (
        <HelmetProvider>
            <div className="flex flex-col min-h-screen font-body text-dark bg-white">
                <ScrollToTop />
                <Navbar />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
            </div>
        </HelmetProvider>
    );
};

export default Layout;
