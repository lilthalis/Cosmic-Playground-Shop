 
        const cartButton = document.getElementById('cart-button');
        const addToCartButtons = document.querySelectorAll('.add-to-cart');
        let cartCount = 0;

        addToCartButtons.forEach((button) => {
            button.addEventListener('click', () => {
                cartCount += 1;
                cartButton.textContent = `Cart (${cartCount})`;
            });
        });

        const cookieBanner = document.getElementById('cookie-banner');
        const cookieAccept = document.getElementById('cookie-accept');
        const cookiePreferences = document.getElementById('cookie-preferences');
        const cookiePrefText = document.getElementById('cookie-pref-text');
        const cookieConsentKey = 'cpg-cookie-consent';

        const canUseStorage = (() => {
            try {
                const key = '__storage_test__';
                localStorage.setItem(key, '1');
                localStorage.removeItem(key);
                return true;
            } catch (error) {
                return false;
            }
        })();

        if (canUseStorage && localStorage.getItem(cookieConsentKey) === 'accepted') {
            cookieBanner.classList.add('cookie-hidden');
        }

        cookieAccept.addEventListener('click', () => {
            if (canUseStorage) {
                localStorage.setItem(cookieConsentKey, 'accepted');
            }
            cookieBanner.classList.add('cookie-hidden');
        });

        cookiePreferences.addEventListener('click', () => {
            cookiePrefText.classList.toggle('cookie-hidden');
        });

        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 11);
        const ids = {
            days: document.getElementById('days'),
            hours: document.getElementById('hours'),
            minutes: document.getElementById('minutes'),
            seconds: document.getElementById('seconds')
        };

        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = targetDate.getTime() - now;

            if (distance <= 0) {
                Object.values(ids).forEach((node) => {
                    node.textContent = '00';
                });
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            ids.days.textContent = String(days).padStart(2, '0');
            ids.hours.textContent = String(hours).padStart(2, '0');
            ids.minutes.textContent = String(minutes).padStart(2, '0');
            ids.seconds.textContent = String(seconds).padStart(2, '0');
        };

        updateCountdown();
        setInterval(updateCountdown, 1000);
    