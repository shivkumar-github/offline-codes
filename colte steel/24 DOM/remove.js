const firstLi = document.querySelector('li')
const parent = firstLi.parentElement
parent.removeChild(firstLi)
// removes the child passed as argument

parent.remove()// removes the parent itself
