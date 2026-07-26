/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f4f6f8',
          100: '#e9edf1',
          200: '#ccd6e0',
          300: '#9fb1c4',
          400: '#6c86a3',
          500: '#1e3a5f', // Deep navy
          600: '#172e4d',
          700: '#11223b',
          800: '#0b1627',
          900: '#050a14',
        },
        accent: {
          50: '#fbf9f1',
          100: '#f5f0db',
          200: '#ebdcae',
          300: '#dfc27d',
          400: '#c59b27', // Rich gold
          500: '#b48c1e', // Premium gold
          600: '#947217',
          700: '#755811',
          800: '#56400c',
          900: '#392906',
        },
        charcoal: {
          50: '#f9f9f9',
          100: '#f1f1f1',
          200: '#e1e1e1',
          300: '#cccccc',
          400: '#999999',
          500: '#111111', // Very deep charcoal for text
          600: '#1c1c1c',
          700: '#2b2b2b',
          800: '#3c3c3c',
          900: '#4c4c4c',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'premium': '0 4px 30px rgba(0, 0, 0, 0.03)',
        'premium-hover': '0 10px 40px rgba(0, 0, 0, 0.08)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
}
