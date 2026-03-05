// 1. BANCO DE DADOS DE CONTEÚDO (Cosmic PlayGround Edition)
const pageData = {
    merch: `
        <p class="section-label">OFFICIAL STORE</p>
        <div class="product-grid">
            <div class="product-card">
                <img src="Roupasimg/voidhoodie.png" alt="Void Hoodie">
                <div class="product-info">
                    <h3>Void Hoodie - Drop 01</h3>
                    <p>$85.00</p>
                </div>
            </div>
            <div class="product-card">
                <img src="Roupasimg/orbit-sweat.png" alt="Orbit Sweatshirt">
                <div class="product-info">
                    <h3>Orbit Sweatshirt</h3>
                    <p>$90.00</p>
                </div>
            </div>
        </div>`,
    music: `
        <p class="section-label">DISCOGRAPHY</p>
        <div class="cosmic-content" style="margin-top: 100px;">
            <h1 style="font-family: 'Orbitron', sans-serif; font-size: 4rem; line-height: 0.9;">COSMIC<br>PLAYGROUND</h1>
            <p style="color: #8b5cf6; font-weight: bold; margin-top: 20px; letter-spacing: 3px;">AVAILABLE ON ALL GALAXIES</p>
        </div>`,
    tour: `
        <p class="section-label">WORLD TOUR</p>
        <div style="margin-top: 100px; text-align: center;">
            <h2 style="color: #ccc; font-family: 'Orbitron', sans-serif;">SYSTEM CALIBRATING... NO DATES YET.</h2>
        </div>`,
    email: `
        <p class="section-label">NEWSLETTER</p>
        <div style="margin-top: 100px;">
            <input type="email" placeholder="ENTER YOUR SPACE-MAIL" class="email-input">
            <button class="btn-primary" style="margin-top:20px; border:none; cursor:pointer;">SUBSCRIBE</button>
        </div>`
};

// 2. FUNÇÃO DE NAVEGAÇÃO COM ANIMAÇÃO CÓSMICA
function navigate(page) {
    const area = document.getElementById('content-area');
    const links = document.querySelectorAll('.uzi-link');

    if (!area) return;

    // Efeito de Saída (Distorção Espacial)
    area.style.transition = 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)';
    area.style.opacity = '0';
    area.style.transform = 'scale(0.98) translateY(10px) blur(5px)';

    setTimeout(() => {
        // Troca o conteúdo
        area.innerHTML = pageData[page] || "<h2>STARDUST NOT FOUND</h2>";
        
        // Efeito de Entrada (Expansão Cósmica)
        area.style.opacity = '1';
        area.style.transform = 'scale(1) translateY(0px) blur(0px)';

        // Atualiza estilo do link ativo
        links.forEach(link => {
            link.classList.remove('active');
            // Verifica se o texto do link corresponde à página
            if (link.innerText.toLowerCase().trim() === page.toLowerCase()) {
                link.classList.add('active');
            }
        });

        // Ajuste para Celular: Sobe a tela para o início do conteúdo
        if (window.innerWidth <= 1024) {
            const sidebarHeight = document.querySelector('.sidebar').offsetHeight;
            window.scrollTo({
                top: sidebarHeight - 20,
                behavior: 'smooth'
            });
        }
    }, 400);
}

// 3. CONTROLE DA SPLASH SCREEN (JANELA DE ENTRADA)
function closeSplash() {
    const splash = document.getElementById('splash-screen');
    if (splash) {
        splash.style.opacity = '0';
        splash.style.pointerEvents = 'none';
        setTimeout(() => {
            splash.style.display = 'none';
        }, 500);
    }
}

// 4. INICIALIZAÇÃO DO SITE
window.onload = () => {
    // Garante que o site comece na loja
    navigate('merch');
    
    // Adiciona o evento de fechar a splash se o botão existir
    const enterBtn = document.querySelector('.btn-primary');
    if (enterBtn && document.getElementById('splash-screen')) {
        enterBtn.addEventListener('click', (e) => {
            e.preventDefault();
            closeSplash();
        });
    }
};