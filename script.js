console.log("🚀 SISTEMA COSMIC ATIVADO!");

document.addEventListener('DOMContentLoaded', () => {
    const cartBtn = document.querySelector('#cart-button');
    const addBtns = document.querySelectorAll('.add-to-cart');
    let count = 0;

    console.log("Botões encontrados:", addBtns.length);

    addBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            count++;
            cartBtn.innerText = `Cart (${count})`;
            btn.innerText = "ADDED!";
            setTimeout(() => btn.innerText = "ADD TO BAG", 1000);
            console.log("🛒 Item adicionado! Total:", count);
        });
    });
});
    document.addEventListener('DOMContentLoaded', () => {
    const banner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('cookie-accept');

    // 1. Verifica se o usuário já aceitou antes
    if (!localStorage.getItem('cookiesAccepted')) {
        // 2. Mostra o banner com um leve atraso (mais elegante)
        setTimeout(() => {
            banner.classList.add('show');
        }, 2000);
    } else {
        banner.style.display = 'none';
    }

    // 3. Ao clicar em aceitar
    acceptBtn.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true'); // Salva no navegador
        banner.classList.remove('show'); // Tira a classe de animação
        setTimeout(() => banner.style.display = 'none', 500); // Remove do HTML
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Lógica do Carrinho (com verificação)
    const cartButton = document.getElementById('cart-button');
    const addButtons = document.querySelectorAll('.add-to-cart');
    
    if (cartButton && addButtons.length > 0) {
        addButtons.forEach(btn => {
            btn.onclick = () => {
                let count = parseInt(cartButton.innerText.match(/\d+/)) || 0;
                cartButton.innerText = `Cart (${count + 1})`;
                console.log("🛒 Item adicionado!");
            };
        });
    }

    // Lógica do Banner de Cookies (Igual ao que fizemos antes)
    const banner = document.getElementById('cookie-banner');
    if (banner && !localStorage.getItem('cookiesAccepted')) {
        setTimeout(() => banner.classList.add('show'), 2000);
    }
});

// Navegação Suave (Smooth Scroll)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});