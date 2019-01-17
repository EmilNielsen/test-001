var button = document.querySelector("button");

function RNG(max) {
    return Math.floor(Math.random() * Math.floor(max) + 1);
}

function bgChange() {
    //Opretter variabler med tilfældig farvekode
    var R = RNG(255);
    var G = RNG(255);
    var B = RNG(255);
    //sætter body bgfarve til tilfældig kombination af farvekoderne
    document.body.style.backgroundColor = "rgb(" + R + ", " + G + ", " + B + ")";
    //console.log(document.body.style.backgroundColor);
};

//Gentager bgChange function hvert sekund
setInterval(bgChange, 1000);