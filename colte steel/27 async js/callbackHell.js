// setTimeout(() => {
// 	console.log('first wait complete')
// 	setTimeout(() => {
// 		console.log('second wait complete')
// 		setTimeout(() => {
// 			console.log('third wait complete')
// 			setTimeout(() => {
// 				console.log('fourth wait complete')
// 				setTimeout(() => {
// 					console.log('fifth wait complete')
// 				}, 3000);
// 			}, 3000);
// 		}, 3000);
// 	}, 3000);
// }, 3000);

// callbacks are the functions passed to another function as an arguement
// callback hell : nested callbacks


const delayedRespones = (responseNo, delay, nextResponse) => {
	setTimeout(() => {
		console.log(`${responseNo} response fetched`);
		nextResponse && nextResponse(); // if any nextRespone is passed execute it.
	}, delay);
}

delayedRespones("first", 2000, () => {
	delayedRespones("second", 2000, () => {
		delayedRespones("third", 2000, () => {
			delayedRespones("fourth", 2000,);
		})
	})
})

// while countering asynchronous feature (where we need js to be synchrounous) we use callback hells and while using them this callback hell thing happens
// also we pass two functions(callbacks) while calling a request 1st is executed if request is fullfilled else second is executed(resovle, reject)