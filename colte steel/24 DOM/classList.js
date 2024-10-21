// as setting style using style object is not efficient way, we do it using classes to add style"
// for example for making backgroundColor white we create a class in css and give it white backgroundColor
// and to set bgcolor of any element to that we just add that class to that element
// we can do this using setAttribute but it's difficult to maintain previous classes of that element
// hence for more convinience we use classList object and directly append that class

const exampleDiv = document.querySelector('#example')
exampleDiv.classList.add('border-black', 'bg-red')
exampleDiv.classList.remove('border-black')

// you can alternately add and remove class using toggle
exampleDiv.classList.toggle('border-black')