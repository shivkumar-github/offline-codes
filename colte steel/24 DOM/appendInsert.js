const exampleDiv = document.querySelector('#example')
const newPara = document.createElement('p')
newPara.textContent = 'this is newly inserted para'
newPara.classList.add('bg-red')
newPara.append('this is newly added text using append')
newPara.append('this is 2nd append text')
newPara.prepend('this is first prepend text')
exampleDiv.appendChild(newPara)

const insertDiv = document.querySelector('#insert')
insertDiv.classList.add('bg-red')
const beforeBeginDiv = document.createElement('div')
beforeBeginDiv.textContent = 'this is before begin div'
const afterBeginDiv = document.createElement('div')
afterBeginDiv.textContent = 'this is after begin div'
const beforeEndDiv = document.createElement('div')
beforeEndDiv.textContent = 'this is before end div'
const afterEndDiv = document.createElement('div')
afterEndDiv.textContent = 'this is after end div'
insertDiv.insertAdjacentElement('beforebegin', beforeBeginDiv)
insertDiv.insertAdjacentElement('afterend', afterEndDiv)
insertDiv.insertAdjacentElement('afterbegin', afterBeginDiv)
insertDiv.insertAdjacentElement('beforeend', beforeEndDiv)