// -------- CARRUSEL --------
const imagesContainer = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
let currentIndex = 0;

function showImage(index) {
    const width = images[0].clientWidth;
    imagesContainer.style.transition = 'transform 0.5s ease-in-out';
    imagesContainer.style.transform = `translateX(-${index * width}px)`;
}

setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}, 3000);

// -------- CONFETI --------
function launchConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
    });
}
setInterval(() => {
    launchConfetti();
}, 3000);

// -------- ANIMACIÓN DE ROSAS --------
const showRosesButton = document.getElementById('show-roses');
const rosesContainer = document.getElementById('roses-container');

showRosesButton.addEventListener('click', () => {
    // Si las rosas están ocultas, las mostramos
    if (rosesContainer.classList.contains('hidden')) {
        rosesContainer.classList.remove('hidden');
        rosesContainer.classList.add('animate__animated', 'animate__fadeIn');
    } else {
        // Si las rosas están visibles, las ocultamos
        rosesContainer.classList.add('hidden');
        rosesContainer.classList.remove('animate__animated', 'animate__fadeIn');
    }
});

window.onload = function() {
    var audio = document.getElementById("audio");
    // Intentar reproducir el audio, pero con un pequeño retraso para evitar restricciones
    setTimeout(() => {
        audio.play();  // Intentar reproducir el audio
    }, 1000);
};