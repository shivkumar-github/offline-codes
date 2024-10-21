const sqaure = (x) => {
	return x * x
}

// arrow functions can be declared without func key word and usefull in cases where we don't need a named function
// they are compact ways of writing functions in js
const rollDie = () => {
	return Math.floor(Math.random()*6+1)
}

console.log(rollDie())