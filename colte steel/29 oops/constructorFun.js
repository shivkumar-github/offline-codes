// we can make using factory function but in that way each object will have it's own method which is unneccessary.

function Color(r, g, b) {
	this.r = r;
	this.g = g;
	this.b = b;
	console.log(this)
}

const obj = new Color(3, 4, 4); // this keyword behaves different when called on new keyword

