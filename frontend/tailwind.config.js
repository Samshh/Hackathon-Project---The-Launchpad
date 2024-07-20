/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'black': '#000',
      'white': '#FFF',
      'accent': '#5872FF',
      'gray': {
        '50': '#f9fafb',
        '100': '#f3f4f6',
        '200': '#e5e7eb',
        '300': '#d1d5db',
        '400': '#9ca3af',
        '500': '#6b7280',
        '600': '#4b5563',
        '700': '#374151',
        '800': '#1f2937',
        '900': '#111827'
       }
    },
    extend: {
      fontSize: {
        'display': ['4.5rem', {
          fontWeight: 700,
          lineHeight: 1,
        }],
      }
    },
  },
  plugins: [],
}