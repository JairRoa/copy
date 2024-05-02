//menu hamburgueda
let MenuVisible = false;

function mostrarOcultarMenu(){
    if(MenuVisible){
        document.getElementById("nav").classList ="";
        MenuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        MenuVisible = true;
    }
}

function seleccionar(){
    document.getElementById("nav").classList ="";
    MenuVisible = false;
}

//ANIMACION BARRA HABILIDADES

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distanciaSkills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distanciaSkills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("edicion");
        habilidades[1].classList.add("javascript");
        habilidades[2].classList.add("copy");
        habilidades[3].classList.add("equipo");
        habilidades[4].classList.add("innovacion");
        habilidades[5].classList.add("atencion");
    }
}
window.onscroll = function (){
    efectoHabilidades();
} 

  

//navegar entre pestañas

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    window.scrollTo({
      top: target.offsetTop,
      behavior: "smooth", // Animación suave
    });
  });
});

var video = document.getElementById("video");
var playButton = document.querySelector(".play-button");

video.addEventListener("play", function () {
  playButton.style.opacity = 0; // Oculta el botón cuando el video se está reproduciendo
});

video.addEventListener("pause", function () {
  playButton.style.opacity = 1; // Muestra el botón cuando el video se pausa
});

playButton.addEventListener("click", function () {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});

//VIDEO
function toggleVideo(videoId) {
  var videos = document.querySelectorAll(".video");
  var playButtons = document.querySelectorAll(".play-button");

  for (var i = 0; i < videos.length; i++) {
    var video = videos[i];
    var playButton = playButtons[i];

    if (video.id === videoId) {
      if (video.paused) {
        video.play();
        playButton.style.opacity = 0; // Oculta el botón de reproducción cuando se reproduce el video
      } else {
        video.pause();
        playButton.style.opacity = 1; // Muestra el botón de reproducción cuando se pausa el video
      }
    } else {
      video.pause();
      playButton.style.opacity = 1; // Muestra el botón de reproducción cuando se pausa el video
    }
  }
}

