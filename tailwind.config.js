/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1A1A1A",
        backgroundSecondary: "#2C2C2C",
        primary: "#FFD700",
        secondary: "#FF4500",
        text: "#FFFFFF",
        textSecondary: "#C0C0C0",
      },
    },
  },
  plugins: [],
};
