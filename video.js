// =========================
// VÍDEO FINAL
// =========================

const video = document.getElementById("video");

video.addEventListener("ended", () => {

    document.querySelector(".final-message").innerHTML = `
        ❤️<br><br>
        Obrigado por assistir até aqui.<br><br>
        Feliz aniversário, Geiziane! 🎉<br><br>
        Espero que esse presentinho tenha conseguido arrancar um sorriso seu. 💖<br><br>
        Com carinho,<br>
        <strong>Diogo ❤️</strong>
    `;

    if (typeof confetti === "function") {
        confetti({
            particleCount: 250,
            spread: 180,
            origin: { y: 0.6 }
        });
    }

});