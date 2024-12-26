const chatMessages = document.querySelector('.chat-messages');
const chatInput = document.querySelector('.chat-input input');
const sendButton = document.querySelector('.chat-input button');

const dummyResponses = [
    'Here are some content ideas for your niche...',
    'Based on current trends, I suggest focusing on...',
    'Your brand voice could be enhanced by...',
    'Looking at your content strategy, I recommend...',
    'Here\'s how you can improve engagement...',
];

function addMessage(text, isAI = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isAI ? 'ai' : 'user'}`;
    messageDiv.innerHTML = `<p>${text}</p>`;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getAIResponse(userInput) {
    if (userInput.toLowerCase().includes('content')) {
        return 'Based on your niche, here are some content ideas: 1) Behind-the-scenes video 2) Tutorial series 3) Q&A session';
    }
    if (userInput.toLowerCase().includes('trend')) {
        return 'Current trends in your area: Short-form video content, AI integration, and community building.';
    }
    if (userInput.toLowerCase().includes('brand')) {
        return 'To strengthen your brand, focus on consistent messaging and authentic storytelling.';
    }
    return dummyResponses[Math.floor(Math.random() * dummyResponses.length)];
}

function handleUserInput() {
    const userText = chatInput.value.trim();
    if (!userText) return;
    
    addMessage(userText, false);
    chatInput.value = '';
    
    setTimeout(() => {
        const aiResponse = getAIResponse(userText);
        addMessage(aiResponse, true);
    }, 1000);
}

sendButton.addEventListener('click', handleUserInput);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleUserInput();
});
