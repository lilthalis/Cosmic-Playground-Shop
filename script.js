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

const contentData = {
    home: `
        <div class="flex justify-center items-center h-full opacity-20">
            <h2 class="text-4xl font-bold">SELECT A SECTOR</h2>
        </div>`,
    
    music: `
        <h2 class="text-xs font-bold mb-10 tracking-widest text-gray-400">DISCOGRAPHY</h2>
        <div class="grid grid-cols-2 gap-10">
            <div class="album-card">
                <img src="Roupasimg/album-cover.jpg" class="w-64 h-64 bg-gray-100 mb-4 shadow-sm">
                <p class="text-[11px] font-bold uppercase">Eternal Thalis (Standard)</p>
            </div>
        </div>`,

    merch: `
        <h2 class="text-xs font-bold mb-10 tracking-widest text-gray-400">OFFICIAL STORE</h2>
        <div class="grid grid-cols-3 gap-x-8 gap-y-12">
            <div class="product-item">
                <img src="Roupasimg/voidhoodie.png" class="w-full aspect-square object-contain bg-gray-50 mb-4">
                <p class="text-[10px] font-bold uppercase text-gray-500">Void Hoodie - Drop 01</p>
                <p class="text-[10px] font-bold mt-1">$85.00</p>
            </div>
            <div class="product-item">
                <img src="Roupasimg/orbithuman.png" class="w-full aspect-square object-contain bg-gray-50 mb-4">
                <p class="text-[10px] font-bold uppercase text-gray-500">Orbit Sweatshirt</p>
                <p class="text-[10px] font-bold mt-1">$90.00</p>
            </div>
        </div>`,

    tour: `
        <h2 class="text-xs font-bold mb-10 tracking-widest text-gray-400">WORLD TOUR DATES</h2>
        <div class="space-y-6">
            <div class="flex justify-between border-b border-gray-100 pb-4">
                <span class="text-[11px] font-bold">JUL 13 - NEW YORK, NY</span>
                <span class="text-[11px] text-gray-400 uppercase">Tickets</span>
            </div>
            <div class="flex justify-between border-b border-gray-100 pb-4">
                <span class="text-[11px] font-bold">JUL 20 - HOUSTON, TX</span>
                <span class="text-[11px] text-red-500 uppercase font-bold">Sold Out</span>
            </div>
        </div>`
};

function showContent(section) {
    const container = document.getElementById('dynamic-content');
    
    // Adiciona uma animação suave de fade out
    container.style.opacity = 0;
    
    setTimeout(() => {
        container.innerHTML = contentData[section] || contentData.home;
        container.style.opacity = 1;
    }, 200);
}

// Inicia com a Merch aberta (igual ao site do Uzi em alguns momentos)
window.onload = () => showContent('merch');

function closePopup() {
    const popup = document.getElementById('launch-popup');
    if (popup) {
        // Adiciona efeito de desaparecer suavemente
        popup.style.opacity = '0';
        popup.style.visibility = 'hidden';
        
        // Remove do layout após a animação
        setTimeout(() => {
            popup.style.display = 'none';
        }, 400);
    }
}

// Opcional: Fechar ao clicar fora da caixa branca
window.onclick = function(event) {
    const popup = document.getElementById('launch-popup');
    if (event.target == popup) {
        closePopup();
    }
}