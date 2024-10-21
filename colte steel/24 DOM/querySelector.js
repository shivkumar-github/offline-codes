const google = document.querySelector('a[href="https://www.google.com"]')
// select a tag with attribute href = "https://www.google.com"

google.setAttribute('target', '_blank')

// const mydivs = document.querySelectorAll('.myClass')
// for (let i of mydivs) {
// 	i.style.backgroundColor = "black"
// 	i.style.height = "200px"
// 	i.style.width = "200px"
// 	i.style.margin = "20px"
// }

const divps = document.querySelectorAll('div .pclass') // decedent selecting
for (let i of divps) {
	i.style.backgroundColor = "black"
	i.style.height = "200px"
	i.style.width = "200px"
	i.style.margin = "20px"
}