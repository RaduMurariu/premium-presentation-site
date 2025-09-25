/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // SimplifyWeb Urban-Modern Color Palette
        background: '#121212',           // Main background
        'background-alt': '#1C1C1C',    // Alternative sections
        card: '#2B2B2B',                // Cards and sections
        'text-primary': '#F5F5F5',       // Primary text
        'text-secondary': '#E0E0E0',     // Secondary text
        'text-muted': '#B0B0B0',         // Muted text
        'accent-red': '#FF7B7B',         // CTA and primary buttons
        'accent-turquoise': '#50DDD5',   // Links and icons
        'accent-yellow': '#FFE066',      // Highlights and badges
        
        // Legacy urban colors for compatibility
        urban: {
          'bg-primary': '#121212',
          'bg-secondary': '#2B2B2B',
          'bg-tertiary': '#1C1C1C',
          'bg-quaternary': '#333333',
          'text-primary': '#F5F5F5',
          'text-secondary': '#E0E0E0',
          'text-muted': '#B0B0B0',
          'accent-red': '#FF7B7B',
          'accent-red-hover': '#FF6B6B',
          'accent-teal': '#50DDD5',
          'accent-yellow': '#FFE066',
          'hover-red': '#FF6B6B',
          'hover-teal': '#3BB5AD',
          'hover-yellow': '#E6C235',
        },
        // Keep original colors for compatibility
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'Roboto', 'system-ui', 'sans-serif'],
      },
      spacing: {
        'section': '6rem',        // py-24 equivalent
        'section-mobile': '4rem', // py-16 equivalent
      },
      backgroundImage: {
        'simplify-gradient': 'linear-gradient(135deg, #121212 0%, #1C1C1C 100%)',
        'card-gradient': 'linear-gradient(135deg, #2B2B2B 0%, #333333 100%)',
        'accent-gradient': 'linear-gradient(135deg, #FF7B7B 0%, #FF6B6B 100%)',
        'turquoise-gradient': 'linear-gradient(135deg, #50DDD5 0%, #3BB5AD 100%)',
        'yellow-gradient': 'linear-gradient(135deg, #FFE066 0%, #E6C235 100%)',
      },
      boxShadow: {
        'simplify': '0 4px 20px rgba(0, 0, 0, 0.2)',
        'simplify-lg': '0 8px 30px rgba(0, 0, 0, 0.3)',
        'card': '0 2px 10px rgba(0, 0, 0, 0.15)',
        'card-hover': '0 8px 25px rgba(0, 0, 0, 0.25)',
        'accent': '0 4px 15px rgba(255, 123, 123, 0.25)',
        'turquoise': '0 4px 15px rgba(80, 221, 213, 0.25)',
        'yellow': '0 4px 15px rgba(255, 224, 102, 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(78, 205, 196, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(78, 205, 196, 0.8)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
