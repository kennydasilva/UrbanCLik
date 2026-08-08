import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Base ink / paper
        ink: {
          DEFAULT: "#0B0A06",
          50: "#F7F6F2",
          100: "#EDEBE3",
          200: "#3A362B",
          300: "#242116",
          400: "#171509",
          500: "#0B0A06",
          600: "#080704",
        },
        paper: {
          DEFAULT: "#FBF9F4",
          dark: "#F1EEE4",
        },
        // Warm gold accent, derived from the source design's glow
        gold: {
          50: "#FEFBEA",
          100: "#FDF6CE",
          200: "#FBEDA0",
          300: "#F6DE66",
          400: "#F1CE3D",
          500: "#E7B824",
          600: "#C6931A",
          700: "#9C6E17",
          800: "#7E5819",
          900: "#6A4A19",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "1.25rem",
        "2xl": "1.75rem",
        "3xl": "2.25rem",
      },
      backgroundImage: {
        "glow-gold":
          "radial-gradient(60% 60% at 50% 40%, rgba(241, 206, 61, 0.55) 0%, rgba(241, 206, 61, 0.08) 55%, rgba(11, 10, 6, 0) 80%)",
        "gold-gradient": "linear-gradient(135deg, #FBEDA0 0%, #E7B824 55%, #9C6E17 100%)",
        noise: "url('/images/noise.svg')",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "spin-slow": {
          "0%, 100%": { transform: "rotateY(-55deg)" },
          "50%": { transform: "rotateY(55deg)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.25s ease-out",
        "accordion-up": "accordion-up 0.25s ease-out",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin-slow 6s ease-in-out infinite",
        "fade-in": "fade-in 0.6s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
