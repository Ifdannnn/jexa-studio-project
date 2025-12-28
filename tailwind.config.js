/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#996515', // Gold Brown (60%)
                secondary: '#5C4033', // Old Brown (20%)
                accent: '#F5F5F0', // Cloud Dancer (20%)
                dark: '#1A1A1A',
                light: '#FFFFFF',
            },
            fontFamily: {
                sans: ['"Plus Jakarta Sans"', 'sans-serif'],
                body: ['Poppins', 'sans-serif'],
            },
            container: {
                center: true,
                padding: '1rem',
                screens: {
                    sm: '640px',
                    md: '768px',
                    lg: '1024px',
                    xl: '1280px',
                    '2xl': '1400px',
                },
            },
        },
    },
    plugins: [],
}
