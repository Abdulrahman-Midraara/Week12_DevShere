/** @type {import('tailwindcss').Config} */
// This annotation helps with IntelliSense support in some editors

module.exports = {
  // Paths to all of your HTML and JS/JSX/TS/TSX files
  // This allows Tailwind to "purge" (remove) unused styles in production
  content: [
    "./index.html", // Main HTML entry point (if using Vite)
    "./src/**/*.{js,jsx,ts,tsx}", // All JS-based source files inside /src
  ],

  // Extend or customize the default Tailwind theme if needed
  theme: {
    extend: {},
  },

  // Add any Tailwind plugins here (e.g., forms, typography)
  plugins: [],
};
