/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'scissors-gradient-from':'hsl(39, 89%, 49%)',
        'scissors-gradient-to': 'hsl(40, 84%, 53%)',
        'rock-gradient-from': 'hsl(349, 71%, 52%)',
        'rock-gradient-to': 'hsl(349, 70%, 56%)',
        'paper-gradient-from': 'hsl(230, 89%, 62%)',
        'paper-gradient-to': 'hsl(230, 89%, 65%)',
        'lizard-gradient-from':'hsl(261, 73%, 60%)',
        'lizard-gradient-to': 'hsl(261, 72%, 63%)',
        'cyan-gradient-from': 'hsl(189, 59%, 53%)',
        'cyan-gradient-to': 'hsl(189, 58%, 57%)',
        'dark-text': 'hsl(229, 25%, 31%)',
        'score-text': 'hsl(229, 64%, 46%)',
        'header-outline': 'hsl(217, 16%, 45%)',
        'radical-gradient-from': 'hsl(214, 47%, 23%)',
        'radical-gradient-to': 'hsl(237, 49%, 15%)',
      },
      fontFamily: {
        'barlow': ['Barlow Semi Condensed', 'sans-serif']
    },
  }
},
  plugins: [],
}
