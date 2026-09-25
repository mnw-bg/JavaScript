let piirtaja = kangas.getContext("2d");

function piirra() {
    //Tyhjennetään ruutu
    piirtaja.clearRext(0, 0, 800, 600);


    // Pyydetään selainta piirtämään samat asiat kohta uudestaan
        requestAnimationFrame(piirra);
}
requestAnimationFrame(piirra) 