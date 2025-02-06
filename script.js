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

        // Add user message to chat
        addMessage("user", userMessage);
        chatbotInput.value = "";

        // Simulate AI response
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

    // Function to generate AI response
    function getAIResponse(userMessage) {
        const lowerCaseMessage = userMessage.toLowerCase();

        if (lowerCaseMessage.includes("event details") || lowerCaseMessage.includes("about")) {
            return "ELECXY-2K25 is a National level symposium conducted by the Department of Electronics and Communication Engineering (ECE). The event is themed around the vast Galaxy, symbolizing infinite possibilities in electronics and innovation.";
        } else if (lowerCaseMessage.includes("technical events")) {
            return "Technical events include Paper Way Galaxy, Star Tech Expo, Signal Sync, and GalaxIQ.";
        } else if (lowerCaseMessage.includes("non-technical events")) {
            return "Non-technical events include Stellar Frames, Zero Gravity Games, Galactic Detective, and Nebula Recall.";
        } else if (lowerCaseMessage.includes("date") || lowerCaseMessage.includes("when")) {
            return "The event will take place on [Insert Event Date Here].";
        } else if (lowerCaseMessage.includes("contact")) {
            return "For inquiries, contact us at elecxy2k25@gmail.com.";
        } else {
            return "I'm here to help! Ask me about event details, technical events, non-technical events, or contact information.";
        }
    }
});
