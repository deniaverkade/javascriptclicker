
var klik = document.getElementById("getal")
var getal = 0

function clicker() {
    if (getal == 10) {
        getal = 0
        klik.innerHTML = getal
    }
    else if (getal <= 9); {
        getal = getal +1
        klik.innerHTML = getal
    }
}