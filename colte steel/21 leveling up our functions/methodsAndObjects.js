// methods are the functions declared in object
const math = {
	multliply: function (x, y) {
		return x*y
	},
	"add": function (x, y) {
		return x+y
	},
	"square": function (x) {
		return x*x
	},
	divide(x, y) {
		if (y === 0) {
			console.log("can not divide by 0!")
		}
		else {
			console.log(x/y)
		}
	}
}

console.log(math["multliply"](2, 3))
console.log(math.add(7, 8))
math.divide(6,4)