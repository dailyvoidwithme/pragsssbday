// Page switching
function goTo(pageId) {
    document.querySelectorAll(".page").forEach(p => p.style.display = "none");
    document.getElementById(pageId).style.display = "block";
}

// Music play/pause
let currentAudio = null;

function playMusic(file) {
    if (currentAudio) {
        currentAudio.pause();
    }
    currentAudio = new Audio(file);
    currentAudio.play();
}

function stopMusic() {
    if (currentAudio) currentAudio.pause();
}

// Reply button logic
function sendReply(answer) {
    alert("Reply recorded: " + answer + "\n(But actual notification system GitHub Pages par allowed nahi hota)");
}
