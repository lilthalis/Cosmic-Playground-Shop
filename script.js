// 1. BANCO DE DADOS DE CONTEÚDO (Cosmic PlayGround Edition)
// Aqui a gente injeta a vibe nas páginas
const pageData = {
    merch: `
        <p class="section-label" style="text-align: center; letter-spacing: 4px; color: #8b5cf6;">OFFICIAL STORE</p>
        <div class="merch-galaxy">
            <div class="merch-item">
                <img src="Roupasimg/voidhoodie.png" alt="Void Hoodie">
                <div class="product-info">
                    <h3>Void Hoodie - Drop 01</h3>
                    <p>$85.00</p>
                </div>
            </div>
            <div class="merch-item">
                <img src="Roupasimg/orbit-sweat.png" alt="Orbit Sweatshirt">
                <div class="product-info">
                    <h3>Orbit Sweatshirt</h3>
                    <p>$90.00</p>
                </div>
            </div>
        </div>`,
        
    music: `
        <p class="section-label" style="text-align: center; letter-spacing: 4px;">DISCOGRAPHY</p>
        <div class="cosmic-content" style="margin-top: 100px; text-align: center;">
            <h1 style="font-family: 'Orbitron', sans-serif; font-size: 4rem; line-height: 0.9;">COSMIC<br>PLAYGROUND</h1>
            <p style="color: #8b5cf6; font-weight: bold; margin-top: 20px; letter-spacing: 3px; text-shadow: 0 0 10px rgba(138, 43, 226, 0.5);">AVAILABLE ON ALL GALAXIES</p>
        </div>`,
        
    tour: `
        <p class="section-label" style="text-align: center; letter-spacing: 4px;">WORLD TOUR</p>
        <div style="margin-top: 100px; text-align: center;">
            <h2 style="color: #ccc; font-family: 'Orbitron', sans-serif; animation: pulse 2s infinite;">SYSTEM CALIBRATING... NO DATES YET.</h2>
        </div>`,
        
    about: `
        <p class="section-label" style="text-align: center; letter-spacing: 4px;">THE ARCHITECT</p>
        <div style="margin-top: 50px; text-align: center; max-width: 600px; margin-left: auto; margin-right: auto;">
            <p style="line-height: 1.8; color: #aaa;">LIL THALIS não é apenas música. É uma frequência. Uma transmissão vinda de uma órbita distante, misturando as dores do underground com a grandiosidade dos sintetizadores espaciais.</p>
        </div>`,
        
    email: `
        <p class="section-label" style="text-align: center; letter-spacing: 4px;">NEWSLETTER</p>
        <div style="margin-top: 100px; text-align: center;">
            <input type="email" placeholder="ENTER YOUR SPACE-MAIL" class="email-input" style="padding: 10px; width: 300px; background: transparent; border: 1px solid #8b5cf6; color: white;">
            <button class="btn-subscribe" style="margin-top:20px; padding: 10px 20px; background-color: #8b5cf6; color: white; border:none; cursor:pointer;">SUBSCRIBE</button>
        </div>`
};

// 2. FUNÇÃO DE NAVEGAÇÃO COM ANIMAÇÃO CÓSMICA
function navigate(page) {
    const area = document.getElementById('content-area');
    const links = document.querySelectorAll('.uzi-link');

    if (!area) return;

    // Efeito de Saída Corrigido (Distorção Espacial)
    area.style.transition = 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)';
    area.style.opacity = '0';
    area.style.transform = 'scale(0.98) translateY(10px)'; // Transform separado
    area.style.filter = 'blur(5px)'; // Filter separado (Erro Corrigido!)

    setTimeout(() => {
        // Troca o conteúdo (se não achar, joga o erro astral)
        area.innerHTML = pageData[page] || "<h2 style='text-align: center; margin-top: 100px;'>STARDUST NOT FOUND. ERROR 404.</h2>";
        
        // Efeito de Entrada (Expansão Cósmica)
        area.style.opacity = '1';
        area.style.transform = 'scale(1) translateY(0px)';
        area.style.filter = 'blur(0px)';

        // Atualiza estilo do link ativo no menu lateral
        links.forEach(link => {
            link.classList.remove('active');
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
    }, 400); // Esse tempo tem que sincronizar com a transição do CSS
}

// 3. CONTROLE DA SPLASH SCREEN (JANELA DE ENTRADA)
function closeSplash() {
    const splash = document.getElementById('splash-screen');
    if (splash) {
        splash.style.transition = 'opacity 0.5s ease';
        splash.style.opacity = '0';
        splash.style.pointerEvents = 'none';
        setTimeout(() => {
            splash.style.display = 'none';
        }, 500);
    }
}

// 4. INICIALIZAÇÃO DO SITE
window.onload = () => {
    // Garante que o site comece na loja flutuante
    navigate('merch');
    
    // Procura o botão de entrar pelo ID (muito mais seguro que classe)
    const enterBtn = document.getElementById('enter-splash-btn'); 
    if (enterBtn && document.getElementById('splash-screen')) {
        enterBtn.addEventListener('click', (e) => {
            e.preventDefault();
            closeSplash();
        });
    }
};