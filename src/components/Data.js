import { useLocation } from 'react-router-dom';

function Data() {
    const location = useLocation();
    const { result, song, artist } = location.state || {};

    if (!result) {
        return <div>Error: No data available</div>;
    }

    return (
        <div className="flex flex-col md:flex-row justify-between">
            <div className="md:w-1/2 p-5 bg-gray-200">
                <div className="p-5 bg-gray-300 mb-5 rounded-lg">
                    <h2 className="mb-2">Song: {song}</h2>
                    <h2 className="mb-2">Artist: {artist}</h2>
                    <h2>Total words: {result.totalWords}</h2>
                </div>
                <div className="p-5 bg-gray-300 rounded-lg">
                    <h2 className="mb-2">Emotional Score: {result.sentimentScore}</h2>
                    <h2 className="mb-2">Unity Score: {result.unityScore}</h2>
                    <h2 className="mb-2">Intuition Score: {result.intuitionScore}</h2>
                    <h2 className="mb-2">Resolve Score: {result.resolveScore}</h2>
                    <h2 className="mb-2">Harmony Score: {result.harmonyScore}</h2>
                    <h2 className="mb-2">Miracles Score: {result.miraclesScore}</h2>
                    <h2 className="mb-2">Cleanse Score: {result.cleanseScore}</h2>
                    <h2>Liberate Score: {result.liberateScore}</h2>
                </div>
            </div>
            <div className="md:w-1/2 p-5 bg-gray-200">
                <div className="p-5 bg-gray-300 mb-5 overflow-auto rounded-lg">
                    <h2>Top sentiment words:</h2>
                    <ul>
                        {result.topSentimentWords.map((word, index) => (
                            <li key={index}>
                                {word.word} ({word.frequency}, Contribution: {word.contribution})
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="p-5 bg-gray-300 overflow-auto rounded-lg h-1/6">
                    <h2>Most frequent words:</h2>
                    <ul>
                        {result.topWords.map((word, index) => (
                            <li key={index}>
                                {word.word} ({word.frequency})
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Data;