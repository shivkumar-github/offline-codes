function arrived(inp) {
	if (inp === "greet") {
		return function (name) {
			console.log("!hello " + name)
		}
	}
	if (inp === "hate") {
		return function (name) {
			console.log("go away! " + name)
		}
	}
}

arrived("hate")("shivkumar")