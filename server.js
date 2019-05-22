const express = require('express');
const serveStatic = require("serve-static")
const path = require('path');
const app = express();
const axios = require('axios');
require('dotenv').config();

const MUSIC_GRAPH_KEY = process.env.MUSIC_GRAPH_KEY;
const MUSIC_GRAPH_ID = process.env.MUSIC_GRAPH_ID;
const X_RAPIDAPI_KEY = process.env.X_RAPIDAPI_KEY;

app.get('/api/songs/:title', (req, res, next) => {
  const { title } = req.params
  const data = { key: MUSIC_GRAPH_KEY, id: MUSIC_GRAPH_ID, data: {search: title} };
  const headers = { 
      "X-RapidAPI-Host": "macgyverapi-music-graph-v1.p.rapidapi.com",
      "Content-Type": "application/json",
      "X-RapidAPI-Key": X_RAPIDAPI_KEY
    };
  
  axios.post("https://macgyverapi-music-graph-v1.p.rapidapi.com/", data, {headers: headers})
    .then(result => {
      res.send(result.data.result);
    })
})

app.use(serveStatic(path.join(__dirname, 'dist')));
const port = process.env.PORT || 8000;
app.listen(port);