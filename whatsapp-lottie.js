// js/lottie-whatsapp.js
document.addEventListener("DOMContentLoaded", () => {
    const whatsappContainer = document.getElementById('lottie-whatsapp');
    const whatsappLink = document.getElementById('whatsapp-link');

    // Si no hay contenedor, salir
    if (!whatsappContainer) return;

    // Configurar animación Lottie
    lottie.loadAnimation({
        container: whatsappContainer,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'material/whatsapp-icon.json' // Ajusta la ruta según tu estructura
    });

    // Opcional: Actualizar enlace (reemplaza con tu número real)
    if (whatsappLink) {
        whatsappLink.href = ""; 
    }
});