// unlike to traditional functions this keyword in arrow functions refers to object in the scope 
const obj = {
	name: "name1",
	objFunc: function tell() {
		console.log(this.name);
	},
	arrFun: () => {
		console.log(this.name)
		console.log(this)
	}
}
obj.objFunc()
obj.arrFun()