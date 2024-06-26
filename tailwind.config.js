/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            animation: {
                "scale-in":
                    "scale-in 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                "scroll-down":
                    "scroll-down 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            },
            keyframes: {
                "scale-in": {
                    "0%": {
                        transform: "scale(0)",
                    },
                    "100%": {
                        transform: "scale(1)",
                    },
                },
                "scroll-down": {
                    "0%": {
                        transform: "translateY(-100%)",
                    },
                    "100%": {
                        transform: "translateY(0)",
                    },
                },
            },
            boxShadow: {
                "pixel-lg": "16px 16px 0 0",
                "pixel-sm": "8px 8px 0 0",
            },
            fontFamily: {
                "open-sans": ["Open Sans", "sans-serif"],
            },
            colors: {
                "dog-blue": "#190c2f",
            }
        },
    },
    darkMode: "class",
    plugins: [],
};
