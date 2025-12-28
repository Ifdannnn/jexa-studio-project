import { Link } from 'react-router-dom';
import clsx from 'clsx';

const Button = ({
    children,
    to,
    variant = 'primary',
    className,
    onClick,
    type = 'button'
}) => {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-none transition-all duration-300 font-medium text-sm tracking-wide uppercase";

    const variants = {
        primary: "bg-primary text-white hover:bg-secondary border border-transparent",
        secondary: "bg-transparent text-primary border border-primary hover:bg-primary hover:text-white",
        ghost: "bg-transparent text-primary hover:text-secondary",
        white: "bg-white text-primary hover:bg-gray-100",
        outlineWhite: "bg-transparent text-white border border-white hover:bg-white hover:text-primary"
    };

    const combinedClasses = clsx(baseStyles, variants[variant], className);

    if (to) {
        return (
            <Link to={to} className={combinedClasses}>
                {children}
            </Link>
        );
    }

    return (
        <button
            type={type}
            className={combinedClasses}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
