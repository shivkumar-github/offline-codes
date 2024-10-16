const obj = {
	age: 19,
	name: "shivkumar",
	printInfo() {
		console.log(this)
		console.log(`${this.name} ${this.age}`)
	}
}

// console.log(obj.name)
obj.printInfo()

const person = obj.printInfo
person()// now 'this' will refer to obj object instead it will refer to window object(top level object)

