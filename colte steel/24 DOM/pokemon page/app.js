const main = document.querySelector('main')
main.classList.add('mainClass')
const heading = document.createElement('h1')
heading.textContent = "Look at my pokemon!"
heading.style.margin = '5px'
main.insertAdjacentElement('beforebegin', heading)
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png
for (let i = 1; i <= 100; i++) {
	const div = document.createElement('div')
	div.classList.add('pokediv')

	const newImg = document.createElement('img')
	newImg.setAttribute('src', `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`)
	newImg.classList.add('pokeImg')

	div.insertAdjacentElement('afterbegin', newImg)
	div.innerHTML += i

	main.insertAdjacentElement('beforeend', div)
}
