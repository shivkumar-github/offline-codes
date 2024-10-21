const btn = document.querySelector('button')
const div = document.querySelector('div')

const randColor = function () {
	return `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
}

// if I don't want div to be hidden when I click button I will add a stop in button event listener
btn.addEventListener('click', (e) => {
	div.style.backgroundColor = randColor()
	e.stopPropagation()
})
div.addEventListener('click', () => {
	div.style.display = "none"
})
// here event of child is first displayed and it goes on till uppermost parent i.e. bubbles up