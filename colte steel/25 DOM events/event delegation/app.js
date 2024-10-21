const inp = document.querySelector('input')
const ul = document.querySelector('ul')
const lis = document.querySelectorAll('li')
const btn = document.querySelector('button')

btn.addEventListener('click', (e) => {
	e.preventDefault()
	const newLi = document.createElement('li')
	newLi.innerText = `${inp.value}`
	ul.insertAdjacentElement('afterbegin', newLi)
	inp.value = ""
})

// lis.forEach((li) => {
// 	li.addEventListener('click', () => {
// 		li.remove()
// 	})
// })
// this deletes the li when it is clicked but if we add new li's using form the event listerns are not added for those 
// so we instead add event listener to parent element (which is called event delegation) which applies the upcoming lis also

ul.addEventListener('click', (e) => {
	// and as we just want to remove the element if target is li not else(here para)
	console.dir(e.target)
	if (e.target.tagName === 'LI')// as target is an object and printing that object, I can see that tagname attribute
		e.target.remove()
})

