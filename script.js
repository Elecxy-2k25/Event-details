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
document.addEventListener("DOMContentLoaded", function () {
    const chatbotLogo = document.getElementById("chatbot-logo");
    const chatbotContainer = document.getElementById("chatbot-container");
    const chatbotCloseBtn = document.getElementById("chatbot-close-btn");
    const chatbotSendBtn = document.getElementById("chatbot-send-btn");
    const chatbotInput = document.getElementById("chatbot-input");
    const chatbotMessages = document.getElementById("chatbot-messages");

    // Event details passage (used for answering questions)
    const eventDetails = `
        ELECXY-2K25 is a National level symposium conducted by the Department of Electronics and Communication Engineering (ECE).
        The event is themed around the vast Galaxy, symbolizing infinite possibilities in electronics and innovation.
        Technical events include Paper Way Galaxy, Star Tech Expo, Signal Sync, and GalaxIQ.
        Non-technical events include Stellar Frames, Zero Gravity Games, Galactic Detective, and Nebula Recall.
        The event is organized by Kamaraj College of Engineering and Technology.
        The chief guests include the Director of ISRO Satellite Center and the CTO of Tesla India.
        Contact us at elecxy2k25@gmail.com for more details.
    `;

    // Toggle chatbot visibility
    chatbotLogo.addEventListener("click", () => {
        chatbotContainer.classList.toggle("active");
    });

    // Close chatbot
    chatbotCloseBtn.addEventListener("click", () => {
        chatbotContainer.classList.remove("active");
    });

    // Send message
    chatbotSendBtn.addEventListener("click", sendMessage);
    chatbotInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            sendMessage();
        }
    });

    // Function to send a message
    function sendMessage() {
        const userMessage = chatbotInput.value.trim();
        if (userMessage === "") return;

        addMessage("user", userMessage);
        chatbotInput.value = "";

        setTimeout(() => {
            const aiResponse = getAIResponse(userMessage);
            addMessage("ai", aiResponse);
        }, 500);
    }

    // Function to add a message to the chat
    function addMessage(sender, message) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message", sender);
        messageElement.textContent = message;
        chatbotMessages.appendChild(messageElement);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    // Function to generate AI response based on passage
    function getAIResponse(userMessage) {
        const lowerCaseMessage = userMessage.toLowerCase();

        if (lowerCaseMessage.includes("event") || lowerCaseMessage.includes("about elecxy")) {
            return "ELECXY-2K25 is a National level symposium conducted by the ECE Department, themed around the vast Galaxy, symbolizing infinite possibilities.";
        } else if (lowerCaseMessage.includes("technical event")) {
            return "The technical events include Paper Way Galaxy, Star Tech Expo, Signal Sync, and GalaxIQ.";
        } else if (lowerCaseMessage.includes("non-technical event")) {
            return "The non-technical events include Stellar Frames, Zero Gravity Games, Galactic Detective, and Nebula Recall.";
        } else if (lowerCaseMessage.includes("chief guest")) {
            return "The chief guests are the Director of ISRO Satellite Center and the CTO of Tesla India.";
        } else if (lowerCaseMessage.includes("contact")) {
            return "You can reach out at elecxy2k25@gmail.com for inquiries.";
        } else if (lowerCaseMessage.includes("where") || lowerCaseMessage.includes("college")) {
            return "ELECXY-2K25 is organized by Kamaraj College of Engineering and Technology.";
        } else {
            return "I can help you with event details! Ask me about technical events, non-technical events, chief guests, or contact information.";
        }
    }
});
