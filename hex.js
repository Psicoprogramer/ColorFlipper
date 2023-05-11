
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector('.color');
function getRandNumber(arr) {
    // funcion para tener un numero a la random redodenado, se multiplica por la candidad de tamaño del array para obtener un numero entre 0-4 
    return Math.floor(Math.random()*arr.length);
    
};
btn.addEventListener('click', function () {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        colorRand =  getRandNumber(hex)
        hexColor += hex[colorRand]
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});