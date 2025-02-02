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