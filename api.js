const fetchChatbotResponse = async () => {
    const url = 'https://api.perplexity.ai/chat/completions';
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer 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` // Your API key
    };
    const body = {
        "model": "pplx-7b-online",
        "stream": false,
        "max_tokens": 1024,
        "frequency_penalty": 1,
        "temperature": 0.0,
        "messages": [
            {
                "role": "system",
                "content": "Be precise and concise in your responses."
            },
            {
                "role": "user",
                "content": "How many stars are there in our galaxy?"
            }
        ]
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body)
        });
        const data = await response.json();
        document.getElementById('chatbot-response').innerText = data.choices[0].message.content;
    } catch (error) {
        console.error('Error:', error);
    }
};
