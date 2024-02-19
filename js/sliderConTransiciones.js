let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");

    for (let i = 0; i < slides.length; i++) {
    slides[i].style.opacity = "0"; //Oculta todas las imágenes
    }

    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0; // Reiniciar al principio cuando se llega al final
    }


    slides[slideIndex].style.opacity = "1"; // Mostrar la siguiente imagen
}

// Iniciar el slideshow
showSlides();
setInterval(showSlides, 3000); // Cambiar la imagen cada 3 segundos

