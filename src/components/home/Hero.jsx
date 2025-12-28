import { motion } from "framer-motion";
import Button from "../common/Button";

const Hero = () => {
    return (
        <section className="relative min-h-screen w-full overflow-hidden">

            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/hero-living.jpg')" }}
            >
                <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 pt-32 pb-24 flex items-center min-h-screen">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="max-w-2xl"
                >
                    {/* Badge */}
                    <span className="inline-block mb-5 text-xs tracking-widest uppercase text-accent font-medium">
                        Jexa Studio Interior & Furniture
                    </span>

                    {/* Headline */}
                    <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                        Interior & Custom Furniture <br />
                        <span className="italic text-primary font-family: 'Plus Jakarta Sans', sans-serif">
                            Designed for Modern Living
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="text-base md:text-lg text-gray-200 mb-10 leading-relaxed max-w-xl">
                        Premium interior design & bespoke furniture solutions that elevate
                        comfort, aesthetics, and functionality in every space.
                    </p>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button to="/contact" variant="primary">
                            Free Consultation
                        </Button>
                        <Button to="/portfolio" variant="outlineWhite">
                            View Projects
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator (Desktop only) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 text-white flex-col items-center gap-2"
            >
                <span className="text-xs tracking-widest uppercase">Scroll</span>
                <div className="w-px h-12 bg-white/40 relative overflow-hidden">
                    <motion.div
                        animate={{ y: [0, 48] }}
                        transition={{ repeat: Infinity, duration: 1.4, ease: "linear" }}
                        className="absolute top-0 left-0 w-full h-1/2 bg-white"
                    />
                </div>
            </motion.div>

        </section>
    );
};

export default Hero;
