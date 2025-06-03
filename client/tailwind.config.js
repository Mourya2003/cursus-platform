// // tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       keyframes: {
//         fadeInDown: {
//           '0%': { opacity: 0, transform: 'translateY(-24px)' },
//           '100%': { opacity: 1, transform: 'translateY(0)' },
//         },
//       },
//       animation: {
//         fadeInDown: 'fadeInDown 0.5s ease-out',
//       },
//     },
//   },
//   // ...rest of config
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust as needed for your project structure
    './index.html'
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-24px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      },
      animation: {
        fadeInDown: 'fadeInDown 0.5s ease-out'
      }
    }
  },
  plugins: [
    require("tailwindcss-animate")
  ]
};
