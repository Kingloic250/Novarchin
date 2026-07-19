/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Deep wine primary ramp
        wine: {
          50: '#FBF3F4',
          100: '#F7E6E8',
          200: '#EFC6CB',
          300: '#E09DA6',
          400: '#C96878',
          500: '#A93949',
          600: '#7A1F2B',
          700: '#6B1220',
          800: '#530E1A',
          900: '#3A0912',
          950: '#24050B',
        },
        // Warm amber/gold secondary accent ramp
        amber: {
          50: '#FDF8EE',
          100: '#FBF0D4',
          200: '#F7E0A8',
          300: '#F2CB72',
          400: '#EDB241',
          500: '#E59923',
          600: '#C97617',
          700: '#A45516',
          800: '#84431A',
          900: '#6D3818',
          950: '#3E1E0B',
        },
        // Warm neutral surface ramp (light-mode-first)
        sand: {
          50: '#FCFBF8',
          100: '#FAFAF7',
          200: '#F5F4F0',
          300: '#EDEBE4',
          400: '#DEDBD0',
          500: '#C6C2B4',
          600: '#A8A394',
          700: '#837E6F',
          800: '#5C584C',
          900: '#3A3730',
          950: '#1F1D18',
        },
        ink: {
          DEFAULT: '#1A1814',
          soft: '#3A3730',
          muted: '#6B6657',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(2.75rem, 6vw, 6rem)', { lineHeight: '1.02', letterSpacing: '-0.03em' }],
        'display': ['clamp(2rem, 4.5vw, 3.75rem)', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'soft': '0 1px 2px rgba(26,24,20,0.04), 0 8px 24px -8px rgba(26,24,20,0.08)',
        'card': '0 1px 2px rgba(26,24,20,0.04), 0 12px 32px -12px rgba(26,24,20,0.12)',
        'lift': '0 24px 48px -16px rgba(122,31,43,0.18)',
        'glow': '0 0 0 1px rgba(122,31,43,0.08), 0 8px 32px -8px rgba(122,31,43,0.22)',
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
        'mesh': 'radial-gradient(at 18% 20%, rgba(122,31,43,0.10) 0px, transparent 50%), radial-gradient(at 82% 12%, rgba(237,178,65,0.10) 0px, transparent 50%), radial-gradient(at 75% 78%, rgba(122,31,43,0.08) 0px, transparent 50%), radial-gradient(at 22% 85%, rgba(237,178,65,0.06) 0px, transparent 50%)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'gradient-pan': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        marquee: 'marquee 38s linear infinite',
        'gradient-pan': 'gradient-pan 8s ease infinite',
        float: 'float 6s ease-in-out infinite',
        'spin-slow': 'spin-slow 28s linear infinite',
      },
    },
  },
  plugins: [],
};
