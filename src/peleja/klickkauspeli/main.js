//alustaa muuttuja
const target = document.getElementById("target");
const scoreText = document.getElementById("score");
const timeText = document.getElementById("time");

let score = 0;
let time = 30;
//liikkuu randommin paikkaa
function moveTarget() {
    const game = document.getElementById("game");

    const maxX = game.clientWidth - target.offsetWidth;
    const maxY = game.clientHeight - target.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    target.style.left = x + "px";
    target.style.top = y + "px";
}

// 🎯 SIIRTÄÄ NAPPIA AUTOMAATTISESTI
setInterval(moveTarget, 1000);
//kun clickkaa saa piste
target.addEventListener("click", function() {
    score++;
    scoreText.textContent = score;
});
// kello aika 30 sekennista
const timer = setInterval(function() {
    time--;
    timeText.textContent = time;

    if (time === 0) {
        clearInterval(timer);
        target.style.display = "none";
        alert("Peli loppui! Pisteesi: " + score);
    }
}, 1000);

moveTarget();