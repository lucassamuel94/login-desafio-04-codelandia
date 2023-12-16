/** @type {import('tailwindcss').Config} */

import type { Config } from 'tailwindcss'
const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '2rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      }
    },
    fontFamily: {
      sans: ['var(--font-sans)', 'sans-serif']
    },
    colors: {
      brand: {
        DEFAULT: '#1E9E6A',
        background: '#F3FFF2'
      },
      gray: {
        10: '#1A202C',
        20: '#656769',
        30: '#E8E8E8',
        40: '#F7FAFC',
        50: '#FFFFFF',
      },
      white: '#fff',
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: '0' },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: '0' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}

export default config