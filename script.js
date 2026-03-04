// Smooth Scroll
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
    });
}

// Cart Logic Simple
let cartCount = 0;
const cartBtn = document.getElementById('cart-btn');

document.querySelectorAll('.add-btn').forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        cartBtn.innerText = `Cart (${cartCount})`;
        button.innerText = "Added!";
        button.style.borderColor = "#00d4ff";
        
        setTimeout(() => {
            button.innerText = "Add to Bag";
            button.style.borderColor = "";
        }, 2000);
    });
});

// Parallax effect for the Saturn
window.addEventListener('mousemove', (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.02;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.02;
    document.querySelector('.saturn-gif').style.transform = `translate(${moveX}px, ${moveY}px)`;
});