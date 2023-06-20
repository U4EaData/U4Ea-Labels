import { useLocation } from 'react-router-dom';

function NutritionLabel() {
    const location = useLocation();
    const { result, song, artist } = location.state || {};

    if (!result) {
        return <div>Error: No data available</div>;
    }

    return (
        <div className="nutrition-label">
            <h2>Song: {song}</h2>
            <h2>Artist: {artist}</h2>
            <h2>Total words: {result.totalWords}</h2>
            <h2>Score: {result.sentimentScore}</h2>
            <h2>Unity Score: {result.unityScore}</h2>
            <h2>Intuition Score: {result.intuitionScore}</h2>
            <h2>Resolve Score: {result.resolveScore}</h2>
            <h2>Harmony Score: {result.harmonyScore}</h2>
            <h2>Miracles Score: {result.miraclesScore}</h2>
            <h2>Cleanse Score: {result.cleanseScore}</h2>
            <h2>Liberate Score: {result.liberateScore}</h2>
            <h2>Most frequent words:</h2>
            <ul>
                {result.topWords.map((word, index) => (
                    <li key={index}>
                        {word.word} ({word.frequency})
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default NutritionLabel;