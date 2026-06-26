/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // For Next.js App Router
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // For Next.js Pages Router
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // For your global components
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // If you are using a /src directory
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
