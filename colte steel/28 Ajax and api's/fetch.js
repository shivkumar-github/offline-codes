// fetch('https://icanhazdadjoke.com/', {
// 	headers: {
// 		'Accept': 'application/json'
// 	}
// })
// 	.then((res) => {
// 		console.log('Response waiting to parse ', res);
// 		return res.json();
// 	})
// 	.then((data) => {
// 		console.log('data parsed, ', data);
// 	})
// 	.catch(e => {
// 		console.log('unable to fetch, error : ', e);
// 	})

const tellMeJoke = async () => {
	try {
		let res = await fetch('https://icanhazdadjoke.com/', {
			headers: {
				'Accept': 'application/json'
			}
		});
		console.log(jokeData.joke)
		const jokeData = await res.json(); // fetch returns a json object and JSON.parse() converts json string to js and hence to convert this Response object 
	}
	catch (e) {
		console.log("SOMETHING WENT WRONG!!", e);
	}		
}

tellMeJoke();