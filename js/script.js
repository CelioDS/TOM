const musica = document.getElementById("musica");
const btn = document.getElementById("start");
const titulo = document.getElementById("titulo");

btn.addEventListener("click", () => {
  const num = Math.floor(Math.random() * 10) + 1;
  console.log("ss");

  musica.src = num === 4 ? "musica/musica2.mp3" : "musica/musica1.mp3";
  titulo.textContent =
    num === 4 ? "AIIIIII PAIII QUE GAMB" : "EAIII SE VAIIIII PAI";

  musica.currentTime = 15;
  musica.load();
  musica.play();
});


document.addEventListener("click", iniciarMusica, { once: true });
document.addEventListener("keydown", iniciarMusica, { once: true });
document.addEventListener("change", iniciarMusica, { once: true });

function iniciarMusica() {
  btn.click(); // dispara sua função normal
}
