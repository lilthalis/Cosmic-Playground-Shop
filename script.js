/**
 * SISTEMA DE DADOS GALÁCTICOS
 * Adicionamos novos itens e a lógica de botões de retorno.
 */
const dimensionData = {
    home: `
        <div class="black-hole-container">
            <div class="accretion-disk"></div>
            <div class="black-hole"></div>
        </div>
        <h1 class="astroworld-title">CosmicPlayGround</h1>
        <p class="sub-title">ENTER IN THIS FESTIVAL</p>
    `,
    
    merch: `
        <div class="navigation-header">
            <button class="back-pill" onclick="warpTo('home')">← RETURN TO VOID</button>
        </div>
        <h1 class="astroworld-title" style="font-size: 1.8rem;">DROP 01: THE VOID</h1>
        
        <div class="shop-grid">
            <div class="product-card">
                <div class="badge">SOLD OUT</div>
                <img src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400" alt="Stargazer 1">
                <p class="product-name">STARGAZER 1</p>
                <p class="price">$120.00</p>
            </div>
            
            <div class="product-card">
                <img src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400" alt="Void Hoodie">
                <p class="product-name">VOID HOODIE</p>
                <p class="price">$85.00</p>
            </div>

            <div class="product-card">
                <img src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400" alt="Orbit Tee">
                <p class="product-name">ORBIT TEE</p>
                <p class="price">$45.00</p>
            </div>

            <div class="product-card">
                <img src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=400" alt="Astro Cap">
                <p class="product-name">ASTRO CAP</p>
                <p class="price">$35.00</p>
            </div>
        </div>
    `,

    tour: `
        <div class="navigation-header">
            <button class="back-pill" onclick="warpTo('home')">← RETURN TO VOID</button>
        </div>
        <div class="tour-container">
            <h1 class="astroworld-title" style="font-size: 2rem;">WORLD TOUR</h1>
            <div class="tour-status">
                <div class="scanner-line"></div>
                <p>SCANNING SECTORS...</p>
                <p class="sub-title">NO DATES IN THIS DIMENSION YET.</p>
            </div>
        </div>
    `
};

/**
 * FUNÇÃO DE SALTO (WARP)
 * Transição suave com controle de opacidade e escala.
 */
function warpTo(dimension) {
    const core = document.getElementById('astroworld-core');
    if (!core) return;

    // Inicia desintegração (Fade-out)
    core.style.opacity = '0';
    core.style.transform = 'scale(0.95) translateY(10px)';

    setTimeout(() => {
        // Altera a matéria
        core.innerHTML = dimensionData[dimension];
        
        // Finaliza materialização (Fade-in)
        core.style.opacity = '1';
        core.style.transform = 'scale(1) translateY(0)';
        
        // Garante que o scroll volte ao topo em listas longas
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 350); 
}

// Inicialização
window.onload = () => warpTo('home');