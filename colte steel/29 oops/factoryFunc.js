// factory functions are the functions that create and return object
function createPerson(name, age) {
	return {
		name: name,
		age: age,
		greet() {
			console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
		}
	}
}

const person1 = createPerson('person1', 19);
console.log(person1)
const person2 = createPerson('person2', 19);

// each gets it's own copy leading to higher memory usage