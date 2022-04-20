// A side project from John Smilga's JS course
// ...for a SIMPLE javascript switcher

// Author: Excel Nwachukwu

const colors = [
  // an array of colors from which
  '#5e001f',
  '#00e1d9',
  'red',
  'hsl(209, 61%, 16%)',
  '#rgb(172, 154, 154)',
  '#030e4f',
  '#F49F1c'
]

// pull the target elements to the DOM
const btn = document.getElementById('btn')
const textColor = document.querySelector('.color')

// add eventlistener
btn.addEventListener('click', () => {
  const randomNumber = getRandomNumber()

  // the callback gets assigned to the respective DOM element
  document.body.style.backgroundColor = colors[randomNumber]
  textColor.textContent = colors[randomNumber]
})

// callback function to generate rounded up position size for the the colors
getRandomNumber = () => {
  return Math.floor(Math.random() * colors.length)
}
