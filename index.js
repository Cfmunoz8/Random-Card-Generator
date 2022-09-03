let valorCarta = ["1","2","3","4","5","6","7","8","9","J","Q","K"];
let pintas = ["♦", "♥", "♠", "♣"]

let numero = document.querySelector("#numero");
let random = Math.floor(Math.random() * valorCarta.length);
let numeroCarta = (valorCarta[random]);
numero.innerHTML = (numeroCarta);

let pinta = document.querySelector("#pinta");
let pinta2 = document.querySelector("#pinta2");
let random2 =  Math.floor(Math.random() * pintas.length);
let pintaCarta = (pintas[random2]);
if (pintas[random2] == "♦") pinta.style.color = "red", pinta2.style.color = "red"; 
if (pintas[random2] == "♥") pinta.style.color = "red", pinta2.style.color = "red"; 
pinta.innerHTML = (pintaCarta);
pinta2.innerHTML = (pintaCarta);

let boton = document.querySelector("button");
boton.addEventListener('click', _ => {
    location.reload();
})

let reload = () => {
    location.reload();
};
setTimeout (reload, );

