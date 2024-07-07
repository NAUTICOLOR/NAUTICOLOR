document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.gallery .image-container img');
    const prevBtn = document.querySelector('.gallery .controls .prev');
    const nextBtn = document.querySelector('.gallery .controls .next');
    let currentIndex = 0;

    // Función para mostrar la imagen actual
    function showImage(index) {
        images.forEach((img, i) => {
            if (i === index) {
                img.style.display = 'block';
            } else {
                img.style.display = 'none';
            }
        });
    }

    // Mostrar la primera imagen al cargar la página
    showImage(currentIndex);

    // Botón siguiente
    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });

    // Botón anterior
    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });

    // Expandir imagen al hacer clic
    images.forEach(img => {
        img.addEventListener('click', function() {
            this.classList.toggle('expanded');
        });
    });
});
