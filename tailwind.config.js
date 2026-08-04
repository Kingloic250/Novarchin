/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        wine: {
          50: 'var(--wine-50)',
          100: 'var(--wine-100)',
          200: 'var(--wine-200)',
          300: 'var(--wine-300)',
          400: 'var(--wine-400)',
          500: 'var(--wine-500)',
          600: 'var(--wine-600)',
          700: 'var(--wine-700)',
          800: 'var(--wine-800)',
          900: 'var(--wine-900)',
          950: 'var(--wine-950)',
        },
        amber: {
          50: 'var(--amber-50)',
          100: 'var(--amber-100)',
          200: 'var(--amber-200)',
          300: 'var(--amber-300)',
          400: 'var(--amber-400)',
          500: 'var(--amber-500)',
          600: 'var(--amber-600)',
          700: 'var(--amber-700)',
          800: 'var(--amber-800)',
          900: 'var(--amber-900)',
          950: 'var(--amber-950)',
        },
        sand: {
          50: 'var(--sand-50)',
          100: 'var(--sand-100)',
          200: 'var(--sand-200)',
          300: 'var(--sand-300)',
          400: 'var(--sand-400)',
          500: 'var(--sand-500)',
          600: 'var(--sand-600)',
          700: 'var(--sand-700)',
          800: 'var(--sand-800)',
          900: 'var(--sand-900)',
          950: 'var(--sand-950)',
        },
        ink: {
          DEFAULT: 'var(--ink)',
          soft: 'var(--ink-soft)',
          muted: 'var(--ink-muted)',
        },
        orb: 'var(--decorative-orb)',
        base: 'var(--bg-base)',
        panel: 'var(--bg-panel)',
        glow: 'var(--bg-glow)',
        'border-subtle': 'var(--border-subtle)',
        accent: {
          DEFAULT: 'var(--accent)',
          light: 'var(--accent-light)',
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
        'soft': '0 1px 2px rgba(var(--ink-rgb), 0.04), 0 8px 24px -8px rgba(var(--ink-rgb), 0.08)',
        'card': '0 1px 2px rgba(var(--ink-rgb), 0.04), 0 12px 32px -12px rgba(var(--ink-rgb), 0.12)',
        'lift': '0 24px 48px -16px rgba(var(--wine-600-rgb), 0.18)',
        'glow': '0 0 0 1px rgba(var(--wine-600-rgb), 0.08), 0 8px 32px -8px rgba(var(--wine-600-rgb), 0.22)',
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
        'mesh': 'radial-gradient(at 18% 20%, rgba(var(--wine-600-rgb), 0.10) 0px, transparent 50%), radial-gradient(at 82% 12%, rgba(var(--amber-400-rgb), 0.10) 0px, transparent 50%), radial-gradient(at 75% 78%, rgba(var(--wine-600-rgb), 0.08) 0px, transparent 50%), radial-gradient(at 22% 85%, rgba(var(--amber-400-rgb), 0.06) 0px, transparent 50%)',
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
