const marks = [66, 78, 98, 99]
// prev starts with marks[0] and current with marks[1]
const total = marks.reduce((prev, curr) => prev + curr)
console.log(total)

// creating number from digits array
const digits = [3, 4, 7, 1]
const number = digits.reduce((prev, curr) => prev * 10 + curr)
console.log(number)

const pricesOfLaptops = [23000, 45000, 125000, 78000]
const affordable = pricesOfLaptops.reduce((prv, cr) => {
	if (prv < cr) return prv
	else return cr
})
console.log(affordable)