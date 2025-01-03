const chatMessages = document.querySelector('.chat-messages');
const chatInput = document.querySelector('.chat-input input');
const sendButton = document.querySelector('.chat-input button');

const dummyResponses = [
    'Here are some content ideas for your niche...',
    'Based on current trends, I suggest focusing on...',
    'Your brand voice could be enhanced by...',
    'Looking at your content strategy, I recommend...',
    'Here\'s how you can improve engagement...',
    'For Instagram, I recommend the following content strategy...',
];

// Add Instagram-specific responses
const instagramResponses = {
    content: [
        'For Instagram, try: 1) Carousel posts with tips 2) Reels with quick tutorials 3) Behind-the-scenes Stories',
        'Instagram best practices: 1) Use relevant hashtags 2) Post consistently 3) Engage with your audience',
        'Content mix suggestion: 40% educational, 30% entertaining, 20% promotional, 10% user-generated'
    ],
    timing: [
        'Best posting times: Tuesday to Friday, between 10 AM and 3 PM',
        'Post Stories during peak hours: 9 AM, 12 PM, and 6 PM'
    ],
    hashtags: [
        'Research trending hashtags in your niche using Instagram Insights',
        'Mix popular and niche-specific hashtags for better reach'
    ]
};

function addMessage(text, isAI = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isAI ? 'ai' : 'user'}`;
    messageDiv.innerHTML = `<p>${text}</p>`;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getAIResponse(userInput) {
    const input = userInput.toLowerCase();
    
    // Instagram-specific responses
    if (input.includes('instagram')) {
        if (input.includes('content')) {
            return instagramResponses.content[Math.floor(Math.random() * instagramResponses.content.length)];
        }
        if (input.includes('timing') || input.includes('when to post')) {
            return instagramResponses.timing[Math.floor(Math.random() * instagramResponses.timing.length)];
        }
        if (input.includes('hashtag')) {
            return instagramResponses.hashtags[Math.floor(Math.random() * instagramResponses.hashtags.length)];
        }
        // General Instagram query
        return 'For Instagram success, focus on: 1) Consistent visual style 2) Regular posting 3) Story engagement 4) Relevant hashtags';
    }

    // Existing response logic
    if (input.includes('content')) {
        return 'Based on your niche, here are some content ideas: 1) Behind-the-scenes video 2) Tutorial series 3) Q&A session';
    }
    if (input.toLowerCase().includes('trend')) {
        return 'Current trends in your area: Short-form video content, AI integration, and community building.';
    }
    if (input.toLowerCase().includes('brand')) {
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
