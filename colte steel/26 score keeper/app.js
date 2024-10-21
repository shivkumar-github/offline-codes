const ip1btn = document.getElementById('ip1')
const ip2btn = document.getElementById('ip2')
const resetbtn = document.getElementById('reset')
const p1sc = document.getElementById('p1sc')
const p2sc = document.getElementById('p2sc')
const winScore = document.getElementById('winScore')

const endGame = function () {
	ip2btn.disabled = true;
	ip1btn.style.cursor = 'not-allowed'
	ip2btn.disabled = true;
	ip2btn.style.cursor = 'not-allowed'
}

ip1btn.addEventListener('click', () => {
	const cr = parseInt(p1sc.textContent);
	p1sc.textContent = `${cr + 1}`
	console.dir(ip1btn);

	if (parseInt(winScore.value) === cr + 1)
		endGame();
})

ip2btn.addEventListener('click', () => {
	const cr = parseInt(p2sc.textContent);
	p2sc.textContent = `${cr + 1}`
	console.dir(ip2btn);
	if (parseInt(winScore.value) === cr + 1)
		endGame();
})

resetbtn.addEventListener('click', () => {
	p1sc.textContent = "0"
	p2sc.textContent = "0"
	ip1btn.disabled = false
	ip2btn.disabled = false
	// ip1btn.setAttribute('disabled', false)
	// ip2btn.setAttribute('disabled', false) // can not set in this way
})
