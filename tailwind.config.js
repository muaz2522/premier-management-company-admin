/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                'custom-min': '320px',
                'custom-md': '468px',
            },
            colors: {
                'base-color': '#383C6C',
                'text-color': '#858697',
                'ground': "#E5E7F8",
                'ground-color': '#F7F8FF',
                'footer-color': "#DEEFFF",
                'core-color': "#F1F2FF",
                'special-color': "#ABADC1",

            },
            fontFamily: {
                'colona': ['"Colona MT"', 'sans-serif'],
            },
        },
    },
    plugins: [],
}