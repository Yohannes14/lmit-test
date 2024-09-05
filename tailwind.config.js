/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#FFFFFF',
        'grey-1': '#333333',
        'blue-1': '#0575E6',
        'bg-1': "#0575E6",
        "bg-2": "#75A4FE",
        'border-1': '#DEE2E633'
      },
    },
  },
  plugins: [],
}