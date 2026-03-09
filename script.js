// 1. O BANCO DE DADOS ESPACIAL (O que aparece em cada tela)
const dimensionData = {
    // A Tela Inicial (O Buraco Negro)
    home: `
        <div class="black-hole-container">
            <div class="accretion-disk"></div>
            <div class="black-hole"></div>
        </div>
        <h1 class="astroworld-title">CosmicPlayGround</h1>
        <p class="sub-title">ENTER IN THIS FESTIVAL</p>
    `,
    // A Tela de Merch
    merch: `
        <h1 class="astroworld-title" style="font-size: 2rem;">DROP 01: THE VOID</h1>
        <p class="sub-title" style="margin-bottom: 40px;">UPLOADING ARTIFACTS...</p>
        
        <img src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
             style="border-radius: 10px; filter: drop-shadow(0 0 20px rgba(139,92,246,0.3)); max-width: 300px; transition: transform 0.3s;"
             onmouseover="this.style.transform='scale(1.05)'" 
             onmouseout="this.style.transform='scale(1)'">
             
        <p class="sub-title" style="color: #fff; margin-top: 20px;">STARGAZER 1 - $120.00</p>
    `,
    // A Tela de Tour
    tour: `
        <h1 class="astroworld-title" style="font-size: 2.5rem; color: #fff;">NO DATES IN THIS DIMENSION</h1>
        <p class="sub-title">SYSTEM STILL CALIBRATING...</p>
    `
};

// 2. FUNÇÃO DE SALTO (WARP)
function warpTo(dimension) {
    const core = document.getElementById('astroworld-core');

    if (!core) return;

    // Efeito de saída (engolido pelo buraco negro)
    core.style.opacity = '0';
    core.style.transform = 'scale(0.9)';

    // Espera a animação terminar para trocar o conteúdo
    setTimeout(() => {
        core.innerHTML = dimensionData[dimension];
        
        // Efeito de entrada (surgindo do buraco negro)
        core.style.opacity = '1';
        core.style.transform = 'scale(1)';
    }, 400); // 400 milissegundos de escuridão
}

// 3. IGNIÇÃO (O que roda quando o site abre)
window.onload = () => {
    // Começa sempre na tela do Buraco Negro
    warpTo('home');
};
