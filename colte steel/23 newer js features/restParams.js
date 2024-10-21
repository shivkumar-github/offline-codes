// argument - can not be treated as array and can not be used in arrow function hence we use rest params
function sum1() {
	s = 0
	for (i of arguments) {
		s+= i
	}
	return s
}

// rest = looks like spread(spread spreads single to elements and this collects into one) and can be handled as array(converts all parameters into array)
function sum(...nums) {
	return nums.reduce((total, el)=>total+el)
}
console.log(sum(3, 4, 5, 6, 7))
console.log(sum1(3, 4, 5, 6, 7))

function raceResult(gold, silver, ...everyoneElse) {
	console.log(`Gold medal goes to ${gold}`)
	console.log(`Silver medal goes to ${silver}`)
	console.log(`And thanks to everyone else ${everyoneElse}`)
}

raceResult("goldie", "silvery", "other1", "other2", "other3")