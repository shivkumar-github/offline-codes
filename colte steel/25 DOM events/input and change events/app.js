const inp = document.querySelector('input')
const h1 = document.querySelector('h1')

// inp.addEventListener('change', (e) => {
// 	console.log('change')
// }) // it is invoked when focus is removed from input

// for change we need
inp.addEventListener('input', (e) => {
	h1.innerText = inp.value
})