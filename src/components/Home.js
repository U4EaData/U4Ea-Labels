import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { analyzeText } from "../utils/textAnalyzer";

function Home() {
    const [text, setText] = useState('');
    const [song, setSong] = useState('');
    const [artist, setArtist] = useState('');
    const navigate = useNavigate();

    const handleAnalyzeText = () => {
        let result = analyzeText(text);
        navigate('/label', { state: { result, song, artist } });
    };

    return (
        <div className="home">
            <input type="text" onChange={(e) => setText(e.target.value)} placeholder="Enter text" />
            <input type="text" onChange={(e) => setSong(e.target.value)} placeholder="Enter song name" />
            <input type="text" onChange={(e) => setArtist(e.target.value)} placeholder="Enter artist name" />
            <button onClick={handleAnalyzeText}>Analyze</button>
        </div>
    );
}

export default Home;
