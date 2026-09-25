let kangas = document.querySelector("canvas");
let piirtaja = kangas.getContext("2d");
//hahmo object
let Mato = {
    x: 100,
    y: 100,
    suunta: "oikea",
    hanta: [],
    aikaaKasvamiseen: 5
}
//function piirtää hahmo
function piirra() {
    //Tyhjennetään ruutu
    piirtaja.clearRect(0, 0, 800, 600);

    piirtaja.fillStyle = "green";
    for (const hannanOsa of Mato.hanta) {
        piirtaja.fillRect(
            hannanOsa.X,
            hannanOsa.Y,
            100,
            100
        );
    }
        piirtaja.fillRect(Mato.x, Mato.y, 100, 100)
    // Pyydetään selainta piirtämään samat asiat kohta uudestaan
    requestAnimationFrame(piirra);
}
requestAnimationFrame(piirra);
//control
document.addEventListener("keydown", (event) =>{
    if (event.key === "ArrowUp"){
        Mato.suunta = "ylös";
    }
    else if (event.key === "ArrowDown") {
        Mato.suunta = "alas"
    }
    else if (event.key === "ArrowLeft") {
        Mato.suunta = "vasen"
    }
    else if (event.key === "ArrowRight") {
        Mato.suunta = "oikea"
    }
    else {
        return;
    }
});
//liike
setInterval (() => {
    Mato.hanta.unshift({ X: Mato.x, Y: Mato.y }) 
    Mato.aikaaKasvamiseen -= 1;
 
    if (Mato.aikaaKasvamiseen === 0) {
        Mato.aikaaKasvamiseen = 5;
    } else {
        Mato.hanta.length -= 1;
    }
 
    if (Mato.suunta === "oikea") {
        Mato.x += 100;
    }
    else if (Mato.suunta === "vasen"){
        Mato.x -=100;
    }
    else if (Mato.suunta === "ylös") {
        Mato.y -= 100;
    }
    else {
        Mato.y += 100;
    }
    for (const hannanOsa of Mato.hanta) {
        if (
            Mato.x === hannanOsa.X &&
            Mato.y === hannanOsa.Y
        ) {
            Mato.hanta = [];
        }
    }
    if (
        Mato.x < 0 ||
        Mato.x > 800 ||
        Mato.y < 0 ||
        Mato.y > 600
    ) {
        Mato.hanta = [];
        Mato.x = 100;
        Mato.y = 100;
    }
}, 400)
