import Sentiment from 'sentiment';

const sentiment = new Sentiment();

export function analyzeText(inputText) {
    let wordFrequencies = {};
    let cleanedText = inputText.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}?"=\_`~()]/g, '');
    let words = cleanedText.split(' ');

    // const words = cleanedText.split(/\s+/).filter(Boolean);

    words.forEach((word) => {
        wordFrequencies[word] = (wordFrequencies[word] || 0) + 1;
    });

    let sentimentScore = sentiment.analyze(inputText).score;

    let sortedWords = Object.keys(wordFrequencies).sort((a, b) => wordFrequencies[b] - wordFrequencies[a]);

    let topWords = sortedWords.map(word => ({
        // let topWords = sortedWords.slice(0, 5).map(word => ({ (gets top 5 words)
        word,
        frequency: wordFrequencies[word],
    }));

    return {
        totalWords: words.length,
        topWords,
        sentimentScore
    };
}
