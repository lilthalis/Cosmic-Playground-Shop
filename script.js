// 1. BANCO DE DADOS DO DROP (Cactus Jack Vibe)
const pageData = {
    shop: `
        <div class="product-showcase">
            <img src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Produto" class="hero-item" style="filter: drop-shadow(0 0 30px rgba(139, 92, 246, 0.4));">
            
            <p class="item-name">STARGAZER 1 X LIL THALIS</p>
            
            <div class="spin-logo-container">
                <img src="Icon Cosmic/Cosmic.png" alt="Logo" class="spin-logo">
            </div>
        </div>
    `,
    tour: `
        <div class="product-showcase" style="height: 60vh; justify-content: center;">
            <h2 style="font-family: 'Oswald', sans-serif; font-size: 4rem; letter-spacing: 10px; color: #fff; text-transform: uppercase; margin-bottom: 20px;">TOUR</h2>
            <p style="color: #555; font-family: 'Inter', sans-serif; letter-spacing: 3px; font-weight: bold;">SYSTEM CALIBRATING... NO DATES YET.</p>
        </div>
    `
};

// 2. FUNÇÃO DE NAVEGAÇÃO STEALTH
function navigate(page) {
    const area = document.getElementById('content-area');

    if (!area) return;

    // Efeito de Saída (Apaga a luz)
    area.style.transition = 'all 0.3s ease-in-out';
    area.style.opacity = '0';
    area.style.transform = 'scale(0.98)';

    setTimeout(() => {
        // Troca o conteúdo
        area.innerHTML = pageData[page] || "<h2 style='color: white; font-family: Oswald; letter-spacing: 5px;'>404 NOT FOUND</h2>";
        
        // Efeito de Entrada (Acende a luz)
        area.style.opacity = '1';
        area.style.transform = 'scale(1)';
    }, 300);
}

// 3. INICIALIZAÇÃO
window.onload = () => {
    // Garante que o site inicie sempre na loja (Single View)
    navigate('shop');
};