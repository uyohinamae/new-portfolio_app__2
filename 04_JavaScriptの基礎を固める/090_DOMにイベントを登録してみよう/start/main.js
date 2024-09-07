const btn = document.querySelector('#btn');
const h1 = document.querySelector('#btn');


function changeColor() {
    h1.style.color = 'red';
};
function changeBgColor() {
    h1.style.backgroundcolor = 'green';
};
// btn.addEventListener('click', changeColor);
// btn.addEventListener('click', changeBgColor);

btn.onclick = changeColor
btn.onclick = changeBgColor
// btn.removeEventListener('click', hello);