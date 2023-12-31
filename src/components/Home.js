// Home page: displays text box for lyrics, song box, artist box, buttons
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { analyzeText } from "../utils/textAnalyzer";
import axios from "axios";

function Home() {
    const [text, setText] = useState('');
    const [song, setSong] = useState('');
    const [artist, setArtist] = useState('');
    const [lyrics, setLyrics] = useState('');
    const [trackId, setTrackId] = useState('');
    const navigate = useNavigate();

    // makes request to server
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

    // useEffect(() => {
    //     const fetchTrackId = async () => {
    //         if (song !== '' && artist !== '') {
    //             const res = await axios.get(`http://localhost:5000/track?song=${song}&artist=${artist}`);
    //             if (res.data && res.data.message && res.data.message.body && res.data.message.body.track && res.data.message.body.track.track_id && res.data.message.body.track.track_name && res.data.message.body.track.artist_name) {
    //                 setTrackId(res.data.message.body.track.track_id);
    //                 setSong(res.data.message.body.track.track_name);
    //                 setArtist(res.data.message.body.track.artist_name);
    //             } else {
    //                 console.error('Unexpected API response', res.data);
    //             }
    //         }
    //     }
    //     fetchTrackId();
    // }, [song, artist]);

    // executed after 'analyze' is pressed
    const handleAnalyzeText = () => {
        let result = analyzeText(text, lyrics);
        navigate('/data', { state: { result, song, artist } });
    };

    // executed after 'nutrition facts' is pressed
    const goToLabel =() => {
        let result = analyzeText(text, lyrics);
        navigate('/label', { state: { result, song, artist } });
    };

    return (
        <div className="home flex flex-col items-center justify-center h-screen bg-gray-300">
            {/*text box for lyrics*/}
            <textarea
                className="mb-2 p-2 w-1/2 h-2/5 border-2 border-gray-200 rounded-lg shadow-lg resize-none"
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text..."
            />
            <div className="flex mb-2">
                {/*text box for song name*/}
                <input
                    type="text"
                    className="mr-2 p-2 w-32 h-8 border-2 border-gray-200 rounded-lg shadow-lg"
                    onChange={(e) => setSong(e.target.value)}
                    placeholder="Enter song..."
                />
                {/*text box for artist name*/}
                <input
                    type="text"
                    className="p-2 w-32 h-8 border-2 border-gray-200 rounded-lg shadow-lg"
                    onChange={(e) => setArtist(e.target.value)}
                    placeholder="Enter artist..."
                />
            </div>
            {/*Analyze button*/}
            <button
                className="mb-2 bg-blue-600 hover:bg-blue-900 text-white font-semibold w-32 h-10 rounded-lg shadow-md focus:outline-none focus:shadow-outline"
                onClick={handleAnalyzeText}
            >
                Analyze
            </button>
            {/*Nutrition Facts button*/}
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
