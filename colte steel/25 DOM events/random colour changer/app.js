const btn = document.querySelector('#btn')
const body = document.querySelector('body')
const clrnm = document.querySelector('#clrnm')

const randRGB = () => [parseInt(Math.random() * 255), parseInt(Math.random() * 255), parseInt(Math.random() * 255)]

btn.addEventListener('click', () => {
	const [r, g, b] = randRGB()
	body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
	clrnm.textContent = `rgb(${r}, ${g}, ${b})`;
	clrnm.style.color = `rgb(${250-r}, ${250-g}, ${250-b})`
})