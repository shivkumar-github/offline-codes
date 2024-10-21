const ul = document.querySelector('ul');
const btn = document.querySelector('button');
const movieName = document.querySelector('input');

const getImages = async () => {
	try {
		let response = await axios.get(`https://api.tvmaze.com/search/shows?q=${movieName.value}`);
		return response.data;
	}
	catch (e) {
		return "unable to get images!!";
	}
}

const createLI = (imageSection) => {
	const newLi = document.createElement('li');
	const img1 = document.createElement('img');
	img1.src = imageSection.medium;
	newLi.insertAdjacentElement('beforeend', img1);
	return newLi;
}

const addImages = async () => {
	let responseData = await getImages();
	for (i of responseData) {
		if (i.show.image) {
			const newLi = createLI(i.show.image);
			ul.insertAdjacentElement('afterbegin', newLi);
		}
	}
}

btn.addEventListener('click', (e) => {
	e.preventDefault();
	ul.innerHTML = "";
	addImages();
});