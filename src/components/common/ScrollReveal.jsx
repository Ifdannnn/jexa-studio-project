import React from 'react';
import { motion } from 'framer-motion';

const variants = {
    'fade-up': {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    },
    'fade-in': {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },
    'slide-in-left': {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    },
    'slide-in-right': {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
    },
};

const ScrollReveal = ({
    children,
    animation = 'fade-up',
    duration = 0.6,
    delay = 0,
    className = '',
    viewport = { once: true, margin: "-10%" }
}) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={{ duration, delay, ease: "easeOut" }}
            custom={animation}
            variants={variants[animation] || variants['fade-up']}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
