// if the request is rejected then the code execution will stop further, to avoid this we use try catch block
// try {
// 	l; skdjf.log('ehol');
// }
// catch (e) {
// 	console.log("error happened but it's okay");
// }

const fakereq = () => {
	return new Promise((resolve, reject) => {
		const rand = Math.random();
		setTimeout(() => {
			if (rand < 0.3) {
				resolve("data fetched succesfully.");
			}
			else {
				reject("error data can not be fetched")
			}
		}, 2000);
	})
}

async function sendReq() {
	try {
		let result = await fakereq();
		console.log(result);
	}
	catch (e) {
		console.log("error occured is : ", e);
	}
	console.log("handling rejections :( and handled succesfully.");
}

sendReq();