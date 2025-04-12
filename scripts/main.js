// Ancient Technology Activation
document.addEventListener('DOMContentLoaded', () => {
    // Add ripple effect to portal cards
    const portals = document.querySelectorAll('.portal-card');
    
    portals.forEach(portal => {
        portal.addEventListener('click', (e) => {
            if(e.target.tagName === 'A') return;
            
            const ripple = document.createElement('div');
            ripple.className = 'ripple-effect';
            ripple.style.background = portal.dataset.glow === 'blue' ? '#00a8ff80' : 
                                    portal.dataset.glow === 'purple' ? '#9c27b080' : '#00bcd480';
            
            portal.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 1000);
        });
    });

    // Ancient console message
    console.log('%c⚠ WARNING: You have entered the Nexus Gate ⚠', 
               'color: #00f7ff; font-size: 18px; font-weight: bold;');
    console.log('%cAll knowledge comes at a price...', 'color: #d4af37;');
});
