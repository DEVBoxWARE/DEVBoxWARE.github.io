// JavaScript (app.js)
async function sendMessage() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value.trim();

    if (message === '') {
        return;
    }

    // Reemplaza 'tu_clave_de_api' con tu propia clave API
    const apiKey = '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';

    // Enviar solicitud a la API de OpenAI
    const response = await fetch('https://api.openai.com/v1/engines/gpt-3.5-turbo/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
            prompt: message,
            max_tokens: 150,
        }),
    });

    const data = await response.json();

    // Agregar el mensaje del usuario al chat
    appendMessage(message, 'user-message');

    // Agregar la respuesta del asistente al chat
    appendMessage(data.choices[0].text.trim(), 'assistant-message');

    // Limpiar el campo de entrada
    userInput.value = '';
}

function appendMessage(message, messageType) {
    const chatMessages = document.getElementById('chat-messages');

    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    messageDiv.classList.add('message', messageType);

    chatMessages.appendChild(messageDiv);

    // Scroll hasta el final de los mensajes del chat
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
