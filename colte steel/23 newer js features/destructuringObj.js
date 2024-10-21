obj1 = {
	name: "shivkumar",
	age: 19,
	born: 2005,
	die: 2005
}

// we can not give different name to variable here
const { name, age } = obj1
console.log(name, age)

// but in we can give different name as well as assign default value if the property is not present
const { name: userName, age: userAge,userNation = "india"} = obj1
console.log(userName, userAge, userNation)

console.log( "destructing params")

function printUserInfo({ name: userName, age: userAge }) {
	console.log(name, age)
}


printUserInfo(obj1)