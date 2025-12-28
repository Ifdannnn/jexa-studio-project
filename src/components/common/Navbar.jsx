import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import clsx from 'clsx';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Contact', path: '/contact' },
    ];

    const updateNavbarStyle = scrolled || !isHome ? 'bg-white shadow-md py-4' : 'bg-transparent py-6';
    const textColor = scrolled || !isHome || isOpen ? 'text-dark' : 'text-white';
    const logoColor = scrolled || !isHome || isOpen ? 'text-primary' : 'text-white';

    return (
        <nav className={clsx('fixed top-0 left-0 w-full z-50 transition-all duration-300', updateNavbarStyle)}>
            <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className={clsx("text-2xl font-bold font-sans tracking-tighter", logoColor)}>
                    JEXA<span className="font-light">STUDIO</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={clsx(
                                "text-sm font-medium tracking-wide hover:text-primary transition-colors",
                                textColor,
                                location.pathname === link.path && "text-primary font-semibold"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button to="/contact" variant={scrolled || !isHome ? "primary" : "outlineWhite"} className="px-5 py-2">
                        Let's Talk
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className={clsx("md:hidden", textColor)}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={clsx(
                "fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 md:hidden",
                isOpen ? "translate-x-0" : "translate-x-full"
            )}>
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        to={link.path}
                        className="text-2xl font-medium text-dark hover:text-primary"
                        onClick={() => setIsOpen(false)}
                    >
                        {link.name}
                    </Link>
                ))}
                <Button to="/contact" variant="primary" onClick={() => setIsOpen(false)}>
                    Start Project
                </Button>
            </div>
        </nav>
    );
};

export default Navbar;
