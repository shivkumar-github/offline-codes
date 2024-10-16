// special function to render out react element
function customRender(reactElement, container) {
	/*
	// creating html element according to requirements
	const domElement = document.createElement(reactElement.type)
	domElement.innerHTML = reactElement.children
	domElement.setAttribute('href', reactElement.props.href)
	domElement.setAttribute('target', reactElement.props.target)

	// appending the element in container provided
	container.appendChild(domElement)
	*/

	const domElement = document.createElement(reactElement.type)
	domElement.innerHTML = reactElement.children
	for (const prop in reactElement.props) {
		if (prop === 'children') continue;
		domElement.setAttribute(prop, reactElement.props[prop])
	}
	container.appendChild(domElement)
}

const reactElement = {
	type: 'a',
	props: {// props is an object
		href: 'https://google.com',
		target: '_blank'
	},
	children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer) // append the element containing following properties into the mainContainer which is root here