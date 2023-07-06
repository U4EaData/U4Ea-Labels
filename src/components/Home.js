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
        navigate('/figma', { state: { result, song, artist } });
    };

    return (
        <div className="home flex flex-col items-center justify-center h-screen bg-gray-100">
            <textarea
                className="mb-2 p-2 w-1/2 h-2/5 border-2 border-gray-200 rounded-lg shadow-lg resize-none"
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text"
            />
            <div className="flex mb-2">
                <input
                    type="text"
                    className="mr-2 p-2 w-32 h-8 border-2 border-gray-200 rounded-lg shadow-lg"
                    onChange={(e) => setSong(e.target.value)}
                    placeholder="Enter song"
                />
                <input
                    type="text"
                    className="p-2 w-32 h-8 border-2 border-gray-200 rounded-lg shadow-lg"
                    onChange={(e) => setArtist(e.target.value)}
                    placeholder="Enter artist"
                />
            </div>
            <button
                className="mb-2 bg-blue-600 hover:bg-blue-900 text-white font-semibold w-32 h-10 rounded-lg shadow-md focus:outline-none focus:shadow-outline"
                onClick={handleAnalyzeText}
            >
                Analyze
            </button>
            <button
                className="bg-blue-600 hover:bg-blue-900 text-white font-semibold w-32 h-10 rounded-lg shadow-md focus:outline-none focus:shadow-outline"
                onClick={goToLabel}
            >
                Nutrition Facts
            </button>
        </div>
    );
}

export default Home;
