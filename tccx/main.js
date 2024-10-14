document.addEventListener("DOMContentLoaded", function() {
    const mainContent = document.querySelector("main");
    mainContent.classList.add("visible");
});


const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');


hamburger.addEventListener('click', () => {
 
    hamburger.classList.toggle('active');

    // Alterna a classe 'show' no menu
    navMenu.classList.toggle('show');
});

/* ------ Scroll Automático ------ */
const slider = document.querySelector('.themes-wrapper');
let isDown = false;
let startX;
let scrollLeft;
let scrollSpeed = window.innerWidth < 768 ? 0.8 : 0.8; 
let scrollPos = 0;


window.addEventListener('resize', () => {
    scrollSpeed = window.innerWidth < 768 ? 0.8 : 1.1;
});


slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1; // Velocidade de arrasto manual
    slider.scrollLeft = scrollLeft - walk;
});

// Função para scroll automático
function autoScroll() {
    if (!isDown && slider.scrollWidth > slider.clientWidth) {
        scrollPos += scrollSpeed;
        slider.scrollLeft = scrollPos;

        // Verifica se chegou ao final do conteúdo e reinicia o scroll
        if (scrollPos >= slider.scrollWidth / 2) {
            scrollPos = 0; // Reinicia a posição
        }
    }
    requestAnimationFrame(autoScroll); // Mantém o loop
}

// Inicia o scroll automático
autoScroll();
