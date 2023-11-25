function sendMessage() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value.trim();

    if (message === '') {
        return;
    }

    // Append user message to the chat
    appendMessage(message, 'user-message');

    // Simulate a response from the assistant (replace this with API call)
    setTimeout(() => {
        const assistantMessage = 'This is a response from the assistant.';
        appendMessage(assistantMessage, 'assistant-message');
    }, 500);

    // Clear the input field
    userInput.value = '';
}

function appendMessage(message, messageType) {
    const chatMessages = document.getElementById('chat-messages');

    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    messageDiv.classList.add('message', messageType);

    chatMessages.appendChild(messageDiv);

    // Scroll to the bottom of the chat messages
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
