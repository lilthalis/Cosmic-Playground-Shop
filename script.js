// Database of content for each section
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
        <div style="margin-top: 100px;">
            <h1 style="font-size: 4rem; line-height: 0.9;">ETERNAL<br>THALIS 2</h1>
            <p style="color: #8b5cf6; font-weight: bold; margin-top: 20px;">OUT NOW ON ALL PLATFORMS</p>
        </div>`,
    tour: `
        <p class="section-label">WORLD TOUR</p>
        <div style="margin-top: 100px;">
            <h2 style="color: #ccc;">NO DATES SCHEDULED AT THE MOMENT.</h2>
        </div>`,
    email: `
        <p class="section-label">NEWSLETTER</p>
        <div style="margin-top: 100px;">
            <input type="email" placeholder="ENTER YOUR EMAIL" class="email-input">
        </div>`
};

// Function to handle page transitions
function navigate(page) {
    const contentArea = document.getElementById('content-area');
    
    // Smooth Fade-out
    contentArea.style.opacity = '0';
    
    setTimeout(() => {
        // Inject new HTML
        contentArea.innerHTML = pageData[page] || "<h2>CONTENT NOT AVAILABLE</h2>";
        
        // Smooth Fade-in
        contentArea.style.opacity = '1';

        // Update active link styling
        const links = document.querySelectorAll('.uzi-link');
        links.forEach(link => {
            link.classList.remove('active');
            if (link.innerText.toLowerCase() === page) {
                link.classList.add('active');
            }
        });
    }, 350);
}

// Set default view to 'merch' on load
window.onload = () => {
    navigate('merch');
};