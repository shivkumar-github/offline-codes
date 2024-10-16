let greet = function () {
	console.log("Hello!")
}

function callTwice(func) {
	func()
	func()
}

// higher order functions are functions which take another functions as an arguement

callTwice(greet)

