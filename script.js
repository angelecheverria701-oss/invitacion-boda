const boton = document.getElementById("btn-musica");
const audio = document.getElementById("audio-boda");

if (boton && audio) {

    boton.addEventListener("click", () => {

        if (audio.paused) {
            audio.play();
            boton.innerHTML = "⏸ Pausar Canción";
        } else {
            audio.pause();
            boton.innerHTML = "▶ Nuestra Canción";
        }

    });

}