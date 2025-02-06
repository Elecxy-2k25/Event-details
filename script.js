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
function getAIResponse(userMessage) {
    const lowerCaseMessage = userMessage.toLowerCase();

    // Define keywords and their corresponding responses
    const keywords = [
        { keyword: "event details", response: "ELECXY-2K25 is a National level symposium conducted by the Department of Electronics and Communication Engineering (ECE). The event is themed around the vast Galaxy, symbolizing infinite possibilities in electronics and innovation." },
        { keyword: "technical events", response: "Technical events include Paper Way Galaxy, Star Tech Expo, Signal Sync, and GalaxIQ." },
        { keyword: "non-technical events", response: "Non-technical events include Stellar Frames, Zero Gravity Games, Galactic Detective, and Nebula Recall." },
        { keyword: "date", response: "The event will take place on [Insert Event Date Here]." },
        { keyword: "contact", response: "For inquiries, contact us at elecxy2k25@gmail.com." },
    ];

    // Check if the user's message contains any of the keywords
    for (const { keyword, response } of keywords) {
        if (lowerCaseMessage.includes(keyword)) {
            return response;
        }
    }

    // If no keyword is found, search the passage for relevant information
    const relevantSentences = passage.split('. ').filter(sentence => 
        sentence.toLowerCase().includes(lowerCaseMessage)
    );

    if (relevantSentences.length > 0) {
        return relevantSentences.join('. ');
    }

    // Default response if no relevant information is found
    return "I'm here to help! Ask me about event details, technical events, non-technical events, or contact information.";
}
const passage = `
ELECXY-2K25 is a National level symposium conducted by the Department of Electronics and Communication Engineering (ECE). 
The event is themed around the vast Galaxy, symbolizing infinite possibilities in electronics and innovation. 
Technical events include Paper Way Galaxy, Star Tech Expo, Signal Sync, and GalaxIQ. 
Non-technical events include Stellar Frames, Zero Gravity Games, Galactic Detective, and Nebula Recall. 
The event will take place on [Insert Event Date Here]. 
For inquiries, contact us at elecxy2k25@gmail.com.
`;
