class Person{
	constructor(name, age) { // constructor
		this.name = name;
		this.age = age;
	}
	greet() { // method
		const {age} = this;
		console.log(`Hello! My name is ${this.name} and I am ${age} years old.`);
	}
	bonjour() {
		console.log("bonjour!!, calling greet for further.");
		this.greet();
	}
}

class Doctor extends Person{
	constructor(name, age, speciality) {
		super(name, age); // in js we have to call the parent class constructor explicitely unlike of cpp
		this.speciality = speciality;
	}
	greet() {
		console.log(`Hello! My name is ${this.name} and I am ${this.age} years old. And I am a specialist in ${this.speciality} treatment.`);
	}
}

const person1 = new Person("shivkumar", 19);
person1.greet();


const doctor1 = new Doctor("drname1", 49, "nose");
doctor1.bonjour();