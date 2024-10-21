const body = document.querySelector('body')

const changeColour = (newColor) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			body.style.backgroundColor = newColor;
			resolve('changed colour to ' + newColor);
		}, 2000);
	})
}

const response = changeColour("red")
response
	.then((msg) => {
		console.log(msg)
		return changeColour("pink")
	})
	.then((msg) => {
		console.log(msg)
		return changeColour("magenta");
	})
	.then((msg) => {
		console.log(msg);
		return changeColour("aqua");
	})
	.then((msg) => {
		console.log(msg)
	})
	.catch(() => {
		console.log("Failed to change colour");
	})
	// this is different type of nesting(instead applying try to promise directly we are returning the promist and applying try to it.)