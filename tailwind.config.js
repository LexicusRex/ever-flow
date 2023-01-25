/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            width: {
                "screen-1/2": "50vw",
            },
            colors: {
                "full-accent": "var(--accent-color)",
                "mild-accent": "var(--accent-mild-color)",
                "focus-accent": "var(--accent-focus-color)",
                "semi-accent": "var(--accent-semi-color)",
            },
        },
    },
    plugins: [],
};
