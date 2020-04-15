import { without } from 'lodash';

console.log(without)
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("random");
var letters = '0123456789ABCDEF'
var color = "#"

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " 
    + color2.value +")";

    css.textContent = body.style.background + ";";
}

function randomize() {
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor((Math.random() * 16))]
    }
}

function randomColors() { 
    randomize();
    color1.value = color;
    color = "#";
    
    randomize();
    color2.value = color;
    color = "#";
    
    setGradient();
}

color1.addEventListener("input", setGradient); 

color2.addEventListener("input", setGradient); 

randomButton.addEventListener("click", randomColors)