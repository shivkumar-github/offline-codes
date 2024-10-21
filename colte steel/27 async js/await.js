const body = document.querySelector('body')
const changeColour = (newColor) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			body.style.backgroundColor = newColor;
			resolve('changed colour to ' + newColor);
		}, 2000);
	})
}

async function rainbowColor() {
	await changeColour("red");
	await changeColour("magenta");
	await changeColour("pink")
	await changeColour("aqua");
	return "change successful"
}

rainbowColor().then(() => {
	console.log("all color changes were successful.");
})