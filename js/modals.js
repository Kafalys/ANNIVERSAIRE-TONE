// Charger la navigation depuis le template
fetch('templates/header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('nav-placeholder').innerHTML = data;
        
        // Attacher les événements après chargement
        const creditsLink = document.getElementById('credits-link');
        const logoLink = document.getElementById('logo-link');
        const creditsModal = document.getElementById('creditsModal');
        const videoModal = document.getElementById('videoModal');
        
        // Événements pour les boutons
        creditsLink.addEventListener('click', openCreditsModal);
        logoLink.addEventListener('click', openVideoModal);
        logoLink.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') openVideoModal();
        });
        
        // Événements pour les boutons de fermeture
        creditsModal.querySelector('.close-button').addEventListener('click', closeCreditsModal);
        creditsModal.querySelector('.modal-button').addEventListener('click', closeCreditsModal);
    });

// Fonctions pour le modal des crédits
function openCreditsModal() {
    document.getElementById('creditsModal').style.display = 'block';
}

function closeCreditsModal() {
    document.getElementById('creditsModal').style.display = 'none';
}

// Fonctions pour le modal vidéo
function openVideoModal() {
    const videoModal = document.getElementById('videoModal');
    videoModal.style.display = 'flex';
    const video = videoModal.querySelector('video');
    if (video) video.play();
}

function closeVideoModal() {
    const videoModal = document.getElementById('videoModal');
    videoModal.style.display = 'none';
    const video = videoModal.querySelector('video');
    if (video) {
        video.pause();
        video.currentTime = 0;
    }
}

// Fermer avec Échap
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const creditsModal = document.getElementById('creditsModal');
        const videoModal = document.getElementById('videoModal');
        
        if (creditsModal && creditsModal.style.display === 'block') {
            closeCreditsModal();
        }
        if (videoModal && videoModal.style.display === 'flex') {
            closeVideoModal();
        }
    }
});

// Fermer les modals en cliquant en dehors
window.addEventListener('click', function(event) {
    const creditsModal = document.getElementById('creditsModal');
    const videoModal = document.getElementById('videoModal');
    
    if (event.target === creditsModal) {
        closeCreditsModal();
    }
    if (event.target === videoModal) {
        closeVideoModal();
    }
});
