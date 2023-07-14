import { useLocation } from 'react-router-dom';

function Label() {
    const location = useLocation();
    const { result, song, artist } = location.state || {};

    if (!result) {
        return <div>Error: No data available</div>;
    }

    const u4eaScores = [
        { name: "Unity", value: result.unityScore },
        { name: "Intuition", value: result.intuitionScore },
        { name: "Resolve", value: result.resolveScore },
        { name: "Harmony", value: result.harmonyScore },
        { name: "Miracles", value: result.miraclesScore },
        { name: "Cleanse", value: result.cleanseScore },
        { name: "Liberate", value: result.liberateScore }
    ];

    // sort scores
    const sortedScores = u4eaScores.sort((a, b) => b.value - a.value);
    const topScores = sortedScores.slice(0, 3);

    const topWords = result.topSentimentWords.slice(0, 3);
    // const colors = ['red', 'green', 'blue'];


    return (
        <div className="home flex flex-col items-center justify-center h-screen bg-gray-300">
            <div className="mx-auto my-4 p-2 border-2 w-1/5 bg-white">
                <div className="m-auto pt-3 px-3 pb-1 border-2 border-black">
                    <h2 className="text-center font-black mb-1 text-3xl">{song}</h2>
                    <hr className="border-black" />
                    <h2 className="text-center text-lg">{artist}</h2>
                    <div className="border-b-8 border-black w-full"></div>
                    <div className="flex justify-between my-2 text-3xl font-bold">
                        <h2>Words</h2>
                        <h2>{result.totalWords}</h2>
                    </div>
                    <div className="border-b-4 border-black w-full"></div>
                    <h2 className="text-right my-1">% Daily Value*</h2>
                    <hr className="border-black mb-1" />
                    {topScores.map((score, index) => (

                        <div key={index}>
                            <div className="flex justify-between text-xl font-semibold">
                                <h2>{score.name}</h2>
                                {/*<div className="border-b-2" style={{ borderColor: colors[index] }}></div>*/}
                                <h2>{score.value}%</h2>
                            </div>
                            <hr className="border-black my-1" />
                        </div>
                    ))}
                    <div className="flex justify-between text-xl font-semibold">
                        <h2>Mood</h2>
                        <h2>{result.sentimentScore}</h2>
                    </div>
                    {topWords.map((word, index) => (
                        <div key={index}>
                            <hr className="border-black my-1" />
                            <div className="flex justify-between text-xl font-semibold">
                                <h2>{word.word} ({word.frequency})</h2>
                                <h2>{word.contribution}</h2>
                            </div>
                        </div>
                    ))}
                    <div className="border-b-8 border-black w-full my-1"></div>
                    <div className="flex justify-between text-xl">
                        <h2 className="font-semibold">Released</h2>
                        <h2>...</h2>
                    </div>
                    <hr className="border-black my-1" />
                    <div className="flex justify-between text-xl">
                        <h2 className="font-semibold">Genre</h2>
                        <h2>...</h2>
                    </div>
                    <hr className="border-black my-1" />
                    <div className="flex justify-between text-xl">
                        <h2 className="font-semibold">Design by</h2>
                        <h2>...</h2>
                    </div>
                    <div className="border-b-4 border-black w-full"></div>
                    <p className="font-light text-xs">*Percent daily values are based...Your daily values might be higher or lower depending...</p>

                </div>
            </div>
        </div>

    );
}

export default Label;