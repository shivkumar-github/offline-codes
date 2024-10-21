// async function hello() {
	
// }
// // async returns the promise forcefully 

// the promist is resolved with the value that we are returning in that function
const sing = async() => {
	// to throw an error(reject the promise)
	// throw "My vocal is damaged."
	return "I am singing!";
}

sing()
	.then((data) => {
		console.log("PROMISE RESOLVED WITH : ", data);
	})
	.catch((err) => {
		console.log("PROMISE REJECTED : ", err);
	})

	