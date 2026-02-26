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