const content = {
    home: `
        <div class="portal-core"></div>
        <h1 class="big-title">COSMIC<br><span style="color:#8b5cf6">PLAYGROUND</span></h1>
        <p style="letter-spacing:10px; color:#444; margin-top:20px">INITIATING SEQUENCE</p>
    `,
    merch: `
        <div class="drop-container">
            <div class="item-card">
                <img src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500">
                <h3 style="margin-top:15px">STARGAZER 1</h3>
                <p style="color:var(--accent)">$120.00</p>
            </div>
            <div class="item-card">
                <img src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500">
                <h3 style="margin-top:15px">VOID HOODIE</h3>
                <p style="color:var(--accent)">$85.00</p>
            </div>
            <div class="item-card">
                <img src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500">
                <h3 style="margin-top:15px">ORBIT TEE</h3>
                <p style="color:var(--accent)">$45.00</p>
            </div>
        </div>
    `,
    tour: `
        <h1 class="big-title" style="font-size:3rem">WORLD<br>VOID TOUR</h1>
        <p style="margin-top:30px; color:#555">SIGNAL LOST... NO DATES FOUND.</p>
    `
};

function warp(page) {
    const stage = document.getElementById('stage');
    stage.style.opacity = '0';
    stage.style.filter = 'blur(20px)';
    
    setTimeout(() => {
        stage.innerHTML = content[page];
        stage.style.opacity = '1';
        stage.style.filter = 'blur(0)';
    }, 400);
}

// Start
window.onload = () => warp('home');