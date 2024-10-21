// style object does not contain styles from an external stylesheet instead it only has inline styling
// but we can change those stylings using style
const h1 = document.querySelector('h1')
h1.style.backgroundColor = "#3daa22"
// though setting styles in this way adds inline styles which is not considered good way and also we need to set each property which increases the code
// to get style in browser
window.getComputedStyle(h1).fontFamily // returns final computed style