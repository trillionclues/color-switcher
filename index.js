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
const color = document.querySelector('.color')
const btn = document.getElementById('btn')

// add event listener to the button
btn.addEventListener('click', () => {
  const switchNumbers = getNewNumber()
  console.log(switchNumbers) // displays random math position of the colors when getNewNumbers is called

  // change the background color on btn click
  document.body.style.backgroundColor = colors[switchNumbers]
  color.textContent = colors[switchNumbers]
})

// anonymours function to generate position for the colors
getNewNumber = () => {
  return Math.floor(Math.random() * colors.length)
}
