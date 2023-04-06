/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#0B0D17',
        'light-blue': '#D0D6F9',
      },
      backgroundImage: {
        'home-mobile': 'url(/home/background-home-mobile.jpg)',
        'home-tablet': 'url(/home/background-home-tablet.jpg)',
        'home-desktop': 'url(/home/background-home-desktop.jpg)',
        'crew-mobile': 'url(/crew/background-crew-mobile.jpg)',
        'crew-tablet': 'url(/crew/background-crew-tablet.jpg)',
        'crew-desktop': 'url(/crew/background-crew-desktop.jpg)',
        'technology-mobile': 'url(/technology/background-technology-mobile.jpg)',
        'technology-tablet': 'url(/technology/background-technology-tablet.jpg)',
        'technology-desktop': 'url(/technology/background-technology-desktop.jpg)',
        'destination-mobile': 'url(/destination/background-destination-mobile.jpg)',
        'destination-tablet': 'url(/destination/background-destination-tablet.jpg)',
        'destination-desktop': 'url(/destination/background-destination-desktop.jpg)',
      }
    },
    fontFamily: {
      'body': ['var(--font-barlow)', 'sans serif'],
      'display-1': ['var(--font-bellefair)', 'serif'],
      'display-2': ['var(--font-barlowCondensed)', 'sans serif']
    }
  },
  plugins: [],
}

