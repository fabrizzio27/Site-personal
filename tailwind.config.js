/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        burgundy: {
          DEFAULT: "#800020",
          dark: "#5a0015",
          light: "#a0002a",
        },
        emerald: {
          DEFAULT: "#014751",
          dark: "#003338",
          light: "#026b7a",
        },
        bronze: {
          DEFAULT: "#cd7f32",
          light: "#d4a574",
        },
        gold: {
          DEFAULT: "#d4af37",
          light: "#e5c158",
        },
        navy: {
          DEFAULT: "#0a1929",
          light: "#1a2f4a",
        },
        leather: "#3d2817",
        mahogany: "#4a1f1f",
        cream: "#f5f1e8",
        paper: "#f9f7f3",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "serif"],
        display: ["Playfair Display", "serif"],
        elegant: ["Cinzel", "serif"],
      },
      backgroundImage: {
        "leather-texture":
          'url(\'data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3Cpattern id="leather" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"%3E%3Ccircle cx="10" cy="10" r="1" fill="%233d2817" opacity="0.3"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width="100" height="100" fill="%233d2817"/%3E%3Crect width="100" height="100" fill="url(%23leather)"/%3E%3C/svg%3E\')',
        "mahogany-texture":
          'url(\'data:image/svg+xml,%3Csvg width="60" height="60" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3Cpattern id="wood" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"%3E%3Cpath d="M0 10h20" stroke="%234a1f1f" stroke-width="1" opacity="0.2"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width="60" height="60" fill="%234a1f1f"/%3E%3Crect width="60" height="60" fill="url(%23wood)"/%3E%3C/svg%3E\')',
      },
      boxShadow: {
        luxury:
          "0 10px 40px rgba(0, 0, 0, 0.15), 0 5px 15px rgba(138, 104, 80, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
        "luxury-lg":
          "0 20px 60px rgba(0, 0, 0, 0.25), 0 10px 30px rgba(138, 104, 80, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 0 30px rgba(212, 175, 55, 0.3)",
      },
    },
  },
  plugins: [],
};
