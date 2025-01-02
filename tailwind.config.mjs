/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'slide-up': 'slideUp 1s ease-out', // Custom animation for sliding up
        'slide-in': 'slideIn 1s ease-in',
        'slideFromRight': 'slideFromRightToLeft 1s ease-in',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(-50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideFromRightToLeft: {
          '0%': {
            clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)', // Clip the element from right
            opacity: '0',
          },
          '100%': {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', // Reveal the element fully
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [],
};
