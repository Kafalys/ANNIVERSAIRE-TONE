const sounds = [
    'sons/son1.mp3',
    'sons/son2.mp3',
    'sons/son3.mp3',
    // Ajoute autant de sons que tu veux...
];

let currentAudio = null;

function playRandomSound() {
    // Arrêter le son en cours si il y en a un
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    const randomIndex = Math.floor(Math.random() * sounds.length);
    currentAudio = new Audio(sounds[randomIndex]);
    currentAudio.play();
}