// const h1 = document.getElementById("id1")
const h1El = document.getElementsByTagName('h1')[0] // returns all the elements of h1(an array)
h1El.style.fontSize = "100px"
console.dir(h1El) // dir pringts in the form of object and log prints as string

const divArr = document.getElementsByClassName('myClass');
	
[...divArr].forEach((div) => {
    div.style.backgroundColor = "black";
    div.style.width = "200px";
    div.style.height = "200px";
    div.style.margin = "20px";
});
