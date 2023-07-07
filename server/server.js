const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/lyrics', async (req, res) => {
    try {
        const { song, artist } = req.query;
        const response = await axios.get(`https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?q_track=${song}&q_artist=${artist}&apikey=ab89c427a0372c78b0864aad6a31c69f`);
        res.send(response.data);
    } catch (error) {
        res.status(500).send({ error: error.toString() });
    }
});

// app.get('/track', async (req, res) => {
//     try {
//         const { song, artist } = req.query;
//         const response = await axios.get(`https://api.musixmatch.com/ws/1.1/matcher.track.get?q_track=${song}&q_artist=${artist}&apikey=ab89c427a0372c78b0864aad6a31c69f`);
//         res.send(response.data);
//     } catch (error) {
//         res.status(500).send({ error: error.toString() });
//     }
// });

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));