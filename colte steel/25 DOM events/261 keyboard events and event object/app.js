const btn = document.querySelector('#btn')
btn.addEventListener('click', (e) => {
	console.log(e)
})

const input = document.querySelector('input')
input.addEventListener('keydown', function (e) {
	// console.log('keydown')
	console.log(e.key)
	console.log(e.code)
})

input.addEventListener('keyup', function () {
	console.log('keyup')
})