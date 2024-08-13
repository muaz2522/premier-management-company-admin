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
                'nav-color': "#0F0F0F",
                'text-color': '#858697',
                'ground': "#E5E7F8",
                'ground-color': '#F7F8FF',
                'footer-color': "#DEEFFF",
                'core-color': "#F1F2FF",
                'special-color': "#ABADC1",
                'dashboard-para': "#9D9D9D",
                'dashboard-color': "#E0E1F4",

            },
        },
    },
    plugins: [],
}