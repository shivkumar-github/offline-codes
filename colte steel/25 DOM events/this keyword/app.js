const randRGB = () => `rgb(${parseInt(Math.random() * 255)}, ${parseInt(Math.random() * 255)}, ${parseInt(Math.random() * 255)}`

// here we want that whenever I click a div or p a random backgroundColor
// rather than doing separately for div and para we will use this keyword
const changeColor = function () {
	this.style.backgroundColor = randRGB()
}
// have to use normal function as using arrow function will change the this keyword behaviour

const divs = document.querySelectorAll('div')
const ps = document.querySelectorAll('p')

divs.forEach((e) => {
	e.addEventListener('click', changeColor)
})

ps.forEach((e) => {
	e.addEventListener('click', changeColor)
})

