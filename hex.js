// array of numbers[0-9] and alphabet [A-z]
const hexColors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

const btn = document.getElementById('btn')
const color = document.querySelector('.color')

// add eventlistner to button
btn.addEventListener('click', () => {
  let randomHex = '#'

  // loop to run not more than 5 times and get added to randomHex
  for (let i = 0; i < 6; i++) {
    randomHex += hexColors[getRandomHex()]
  }

  // adding loop iteration result to DOM elements
  color.textContent = randomHex
  document.body.style.backgroundColor = randomHex
})

// callback to generate random numbers not more than 6 places
getRandomHex = () => {
  return Math.floor(Math.random() * hexColors.length)
}
