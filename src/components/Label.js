import { useLocation } from 'react-router-dom';

function Label() {
    const location = useLocation();
    const { result } = location.state || {};

    if (!result) {
        return <div>Error: No data available</div>;
    }
    return (
        <div>
            {/*<p>Total Words: {result.totalWords}</p>*/}
            {/*<p>Sentiment Score: {result.sentimentScore}</p>*/}
            {/*<p>Top Sentiment Words: {result.topSentimentWords.map(word => word.word).join(", ")}</p>*/}
            <div className="w-[341.17px] h-[706px] bg-white shadow-lg">
                <div className="w-[320.16px] h-[685px] bg-white border-3 border-black box-border">
                    <h1 className="font-roboto font-black text-[35px] leading-[41px] text-black">Words</h1>
                    <h2 className="font-roboto font-black text-[35px] leading-[41px] text-black">word_count</h2>
                </div>
            </div>


        </div>

    )
}

export default Label;