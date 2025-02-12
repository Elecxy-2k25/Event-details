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

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = 
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (timeLeft < 0) {
        document.getElementById("countdown").innerHTML = "Event Started!";
        document.getElementById("countdown").classList.remove("animate-countdown");
    }
}

setInterval(updateCountdown, 1000);
