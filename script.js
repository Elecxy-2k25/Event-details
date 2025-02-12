document.addEventListener("DOMContentLoaded", function () {
    const rocket = document.querySelector(".rocket");
    const blastEffect = document.getElementById("blast-effect");

    setTimeout(() => {
        if (rocket) {
            rocket.style.display = "none"; // Hide rocket after animation
        }

        // Trigger Blast Effect
        if (blastEffect) {
            blastEffect.style.opacity = "1";
            setTimeout(() => {
                blastEffect.style.opacity = "0"; // Fade out explosion
            }, 1000);
        }
    }, 4000);
});

function updateCountdown() {
    const eventDate = new Date("March 6, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Pad numbers with leading zeros
    document.getElementById("hours").textContent = String(Math.floor(hours)).padStart(2, '0');
    document.getElementById("minutes").textContent = String(Math.floor(minutes)).padStart(2, '0');
    document.getElementById("seconds").textContent = String(Math.floor(seconds)).padStart(2, '0');

    if (timeLeft < 0) {
        clearInterval(countdownInterval);
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);
