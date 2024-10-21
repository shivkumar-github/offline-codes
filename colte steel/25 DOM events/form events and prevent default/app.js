const loginForm = document.querySelector('#loginForm')
const registeredUsers = document.querySelector('#registeredUsers')

loginForm.addEventListener('submit', function (e) {
	e.preventDefault(); // prevent default behaviour of form submission
	const userName = document.querySelector('#userName')
	const userPass = document.querySelector('#password')
	addNewUser(userName, userPass)
	userName.value = userPass.value = "";
});

function addNewUser(userName, userPass) {
	const newUser = document.createElement('li')
	newUser.textContent = `user name : ${userName.value}, password: ${userPass.value}`
	registeredUsers.insertAdjacentElement('beforeend', newUser)
}