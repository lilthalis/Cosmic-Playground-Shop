// Efeito de fade-in ao carregar
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 1.5s ease";
    
    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 100);
});

// Interação simples de som (opcional)
const links = document.querySelectorAll('.uzi-link');
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        console.log("Exploring Cosmic sector: " + link.innerText);
    });
});