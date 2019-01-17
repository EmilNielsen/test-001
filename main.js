document.addEventListener('DOMContentLoaded', function () {
    //Variabel til at tage fat i knap
    //-Knap fjernet, variabel kommenteret-
    //var button = document.querySelector("button");
    var tal = document.querySelector(".tal");
    var preview = document.querySelector(".preview");
    var previewTal = document.querySelector(".previewTal");

    function RNG(max) {
        return Math.floor(Math.random() * Math.floor(max) + 1);
    }

    function bgChange() {
        preview.style.backgroundColor = document.body.style.backgroundColor;
        previewTal.innerHTML = document.body.style.backgroundColor;
        //Opretter variabler med tilfældig farvekode
        var R = RNG(255);
        var G = RNG(255);
        var B = RNG(255);
        //sætter body bgfarve til tilfældig kombination af farvekoderne
        document.body.style.backgroundColor = "rgb(" + R + ", " + G + ", " + B + ")";
        //console.log(document.body.style.backgroundColor);
        tal.innerHTML = "R: " + R + "<br>" + "G: " + G + "<br>" + "B: " + B;
    };

    //Gentager bgChange function hvert sekund
    setInterval(bgChange, 1000);
});
