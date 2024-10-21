const req = new XMLHttpRequest();

req.onload = function () {
	console.log(this.responseText)
}

req.onerror = function () {
	console.log("error!!");
	console.log(this);
}

req.open('GET', 'https://icanhazdadjoke.com/')
req.setRequestHeader('Accept', 'text/plain')
req.send();