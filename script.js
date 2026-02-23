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
    