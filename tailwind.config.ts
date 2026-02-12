import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        sway: {
          '0%, 100%': { transform: 'rotate(-4deg) translateY(0px)' },
          '50%': { transform: 'rotate(4deg) translateY(2px)' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        sway: 'sway 2.8s ease-in-out infinite',
        floaty: 'floaty 3.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
