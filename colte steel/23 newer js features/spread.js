// // expands an iterable (array, string etc) into list of arguements - it will pass each element from iterable separately to function
// nums = [2, 3, 4, 5]
// console.log(...nums)

// console.log(Math.max(...nums))

// numscpy = [...nums]
// console.log(numscpy)

// // we can do the same with the objects
// const num1 = [1, 2, 3]
// const num2 = [4, 5, 6]
// const combine = [...num1, ...num2]
// console.log(combine)

// // spread works with objects in same way
// const obj = {
// 	name: "shivkumar",
// 	age:19
// }
// const obj1 = {
// 	name: "rajmane",
// 	age:19
// }

// const cpy = {
// 	...obj,
// 	...obj1
// }
// console.log(cpy)

const myObj = {
	...[2,4,6,8]
}

console.log(myObj)

const user = {
	email: 'shivkumarrajmane164@gmail.com',
	password: 'mypassword',
	username:'shivkumar'
}

// if  I am getting this data and want to add some in it
const storeUser = {
	...user,
	id:231080053
}