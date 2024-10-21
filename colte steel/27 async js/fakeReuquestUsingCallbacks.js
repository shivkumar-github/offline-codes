const fakeRequestCallback = (url, success, failure) => {
	const delay = Math.floor(Math.random() * 4500 + 500);
	setTimeout(() => {
		if (delay > 2000) {
			failure('Connection Timeout :( ');
		} else {
			success(`Here is your fake data from url ${url}`)
		}
	}, delay);
}

fakeRequestCallback("myUrl", (successMsg) => {
	console.log("data fetched succesfully." + successMsg);
	// 2nd one if first worked
	fakeRequestCallback("secondReqURL", (successMsg) => {
		console.log(successMsg)
		console.log("one more request succesfully execured.");
		// third request
		fakeRequestCallback("thirdURL", (successMsg) => {
			console.log(successMsg)
			console.log("third request fullfilled.");
		}, () => {
			console.log("third request failed!!!");
		})
	}, (failureMsg) => {
		console.log("ERROR!" + failureMsg);
	})
}, (failureMsg) => {
	console.log('ERROR!!!' + failureMsg);
});
// this is not readable and confusing code

