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