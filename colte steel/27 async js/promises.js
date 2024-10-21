// rather than passing 
const fakeRequestPromise = (URL) => {
	return new Promise((resolve, reject) => {
		const delay = Math.floor(Math.random() * 4500 + 500);
		setTimeout(() => {
			if (delay > 2500) {
				reject('Connection Timeout :('); // this arguement will be passed to catch function
			}
			else {
				resolve(`Here is your data from ${URL}`); // this will be passed to try function
			}
		}, delay)
	});
}

// let response = fakeRequestPromise("URL1");
// response.
// 	then(() => {
// 		console.log("Request Succesful. (page1)");
// 		fakeRequestPromise("URL2").
// 			then(() => {
// 				console.log("Request Succesful. (page2)");
// 				fakeRequestPromise("URL3").
// 					then(() => {
// 						console.log("Request Succesful. (page3)");
// 					})
// 					.catch(() => {
// 						console.log("ERROR!!");
// 					})
// 			})
// 			.catch(() => {
// 				console.log("ERROR!!");
// 			})
// 	}).
// 	catch(() => {
// 		console.log("ERROR!!")
// 	})
// While both snippets may look similar in terms of clutter, promises are far better in terms of scalability, error handling, and maintaining readability in larger codebases. Using promises reduces the problems of deep nesting and allows for easier handling of errors and asynchronous flows.

// rather than doing this if we need to continue requesting if previous request is Succesful and stop if any is rejected 
// using .then and .catch we can just add 1 .catch for mutliple fakeRequestPromise

let respone = fakeRequestPromise("URL1");
respone
	.then(() => {
		console.log("fetched page1")
		return fakeRequestPromise("URL2");
	})
	.then(() => {
		console.log("fetched page2")
		return fakeRequestPromise("URL3");
	})
	.then(() => {
		console.log("fetched page3");
	})
	.catch(() => {
		console.log("ERROR! A request failed");
	})
// better than callback hells