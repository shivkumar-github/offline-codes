// just like default parameters and define default params always at last just like in cpp
const findMultiplier = (n, m = 1) => {
	return n*m
}

console.log(findMultiplier(4))
console.log(findMultiplier(4, 3))