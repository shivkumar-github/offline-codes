const myDiv = document.querySelector('#example')
console.log("innerHTML", myDiv.innerHTML)
console.log("innerText", myDiv.innerText) // it doesn't gives hidden text
console.log("textConent", myDiv.textContent) // text content does not consider style and also gives hidden text

myDiv.innerHTML += "<p>this is newly inserted para</p>"