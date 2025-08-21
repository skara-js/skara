/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{sjs,ssx,js,jsx,ts,tsx}',
    './packages/skara-js/src/**/*.{sjs,ssx,js,jsx,ts,tsx}',
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        skara: {
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
        ancient: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
        }
      }
    }
  },
  safelist: [
    'from-skara-50', 'from-skara-100', 'from-skara-200', 'from-skara-300', 'from-skara-400', 'from-skara-500', 'from-skara-600', 'from-skara-700', 'from-skara-800', 'from-skara-900',
    'via-skara-50', 'via-skara-100', 'via-skara-200', 'via-skara-300', 'via-skara-400', 'via-skara-500', 'via-skara-600', 'via-skara-700', 'via-skara-800', 'via-skara-900',
    'to-skara-50', 'to-skara-100', 'to-skara-200', 'to-skara-300', 'to-skara-400', 'to-skara-500', 'to-skara-600', 'to-skara-700', 'to-skara-800', 'to-skara-900',
    'from-ancient-50', 'from-ancient-100', 'from-ancient-200', 'from-ancient-300', 'from-ancient-400', 'from-ancient-500', 'from-ancient-600', 'from-ancient-700', 'from-ancient-800', 'from-ancient-900',
    'via-ancient-50', 'via-ancient-100', 'via-ancient-200', 'via-ancient-300', 'via-ancient-400', 'via-ancient-500', 'via-ancient-600', 'via-ancient-700', 'via-ancient-800', 'via-ancient-900',
    'to-ancient-50', 'to-ancient-100', 'to-ancient-200', 'to-ancient-300', 'to-ancient-400', 'to-ancient-500', 'to-ancient-600', 'to-ancient-700', 'to-ancient-800', 'to-ancient-900'
  ],
  plugins: [],
}
