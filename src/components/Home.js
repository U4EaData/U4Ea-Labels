import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { analyzeText } from "../utils/textAnalyzer";
import axios from "axios";

function Home() {
    const [text, setText] = useState('');
    const [song, setSong] = useState('');
    const [artist, setArtist] = useState('');
    const [lyrics, setLyrics] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchLyrics = async () => {
            if (song !== '' && artist !== '') {
                const res = await axios.get(`http://localhost:5000/lyrics?song=${song}&artist=${artist}`);
                if (res.data && res.data.message && res.data.message.body && res.data.message.body.lyrics) {
                    setLyrics(res.data.message.body.lyrics.lyrics_body);
                } else {
                    console.error('Unexpected API response', res.data);
                }
            }
        }
        fetchLyrics();
    }, [song, artist]);

    const handleAnalyzeText = () => {
        let result = analyzeText(text, lyrics);
        navigate('/label', { state: { result, song, artist } });
    };

    const goToLabel =() => {
        let result = analyzeText(text, lyrics);
        navigate('/figma', { state: { result } });
    };

    return (
        <div className="home">
            <input type="text" onChange={(e) => setText(e.target.value)} placeholder="Enter text" />
            <input type="text" onChange={(e) => setSong(e.target.value)} placeholder="Enter song name" />
            <input type="text" onChange={(e) => setArtist(e.target.value)} placeholder="Enter artist name" />
            <button onClick={handleAnalyzeText}>Analyze</button>
            <button onClick={goToLabel}>Test Label</button>
        </div>
    );
}

export default Home;
