var button = `<button id="btn">Click Me!</button>`;


let btn = document.querySelector('#btn');
function display() {
    alert('It was clicked!');
}
btn.addEventListener('click',display);
