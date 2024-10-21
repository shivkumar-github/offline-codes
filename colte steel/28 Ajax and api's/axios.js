// axios.get('https://icanhazdadjoke.com/', {
// 	headers: {
// 		'Accept': 'application/json'
// 	}
// 	})
// 	.then((data) => {
// 	console.log(data.data.joke);
// 	})
// 	.catch(() => {
// 		console.log("Error!! ", e);
// 	})

// it directly returns parsed object
const btn = document.querySelector('button');
const jokeList = document.querySelector('ul');

const giveMeJoke = async() => {
	try {
		const config = {
			headers: {
				'Accept': 'application/json'
			}
		};
		const response = await axios.get('https://icanhazdadjoke.com/',config)
		return response.data.joke;
	}
	catch (e) {
		return e;
	}
}

btn.addEventListener('click', async() => {
	const newLI = document.createElement('li');
	newLI.textContent = await giveMeJoke();
	jokeList.insertAdjacentElement('afterbegin', newLI);
})