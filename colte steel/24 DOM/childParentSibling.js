const psdiv = document.querySelector('#psdiv')
const ps = psdiv.children
console.log(ps)

console.log(ps[0].parentElement)

console.log(psdiv.nextElementSibling)
// nextSibling is different, it returns node (browser created)