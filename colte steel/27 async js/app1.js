console.log('request sent to dataBase')
setTimeout(() => {
	console.log('request proccessed succesfully!')
}, 3000)
console.log('after request')
// js removes the function out of callstack automatically and then after 3s the function is added to callstack automatically