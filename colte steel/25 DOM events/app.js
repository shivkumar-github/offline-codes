const btn = document.querySelector('#btnV2')
// btn.onclick = function(){
// 	console.log('you clicked me!')
// }

btn.addEventListener('click', () => {
	console.log('you clicked me')
}, {once:true})// will execute addEventListener only once and then remove it

// why to use addEventListener

btn.onclick = func1
btn.onclick = func2 
// this will execute only fun2 when btn is clicked but if we do 
btn.addEventListener('onclick',func1)
btn.addEventListener('onclick', func2)
// both will be executed
// we can also add options