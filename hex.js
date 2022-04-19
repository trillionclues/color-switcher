const hexColors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
const btn = document.getElementById('btn')
const color = document.getElementById('.color')

btn.addEventListener('click', () => {
  let newHexColor = '#'

  for (let i = 0; i < 6; i++) {
    newHexColor += hexColors[getrandomHex()]
  }

  document.body.style.backgroundColor = newHexColor
  color.textContent = newHexColor
})

getrandomHex = () => {
  return Math.floor(Math.random() * hexColors.length)
}
