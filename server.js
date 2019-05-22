const express = require('express');
const serveStatic = require("serve-static")
const path = require('path');
const app = express();
const axios = require('axios');
require('dotenv').config();

const MUSIC_GRAPH_KEY = process.env.MUSIC_GRAPH_KEY;
const MUSIC_GRAPH_ID = process.env.MUSIC_GRAPH_ID;
const X_RAPIDAPI_KEY = process.env.X_RAPIDAPI_KEY;

app.get('/api/songs/:title', async (req, res, next) => {
  const { title } = req.params
  const musicGraphdata = { key: MUSIC_GRAPH_KEY, id: MUSIC_GRAPH_ID, data: {search: title} };
  const musicGraphHeaders = { 
      "X-RapidAPI-Host": "macgyverapi-music-graph-v1.p.rapidapi.com",
      "Content-Type": "application/json",
      "X-RapidAPI-Key": X_RAPIDAPI_KEY
    };

  const lyricsDatavbaseHeader = {
    "X-RapidAPI-Host": "ptwebsolution-song-and-lyric-database-in-the-world-v1.p.rapidapi.com",
    "X-RapidAPI-Key": X_RAPIDAPI_KEY,
    "Content-Type": "application/x-www-form-urlencode"
  }

    // X-RapidAPI-Host: ptwebsolution-song-and-lyric-database-in-the-world-v1.p.rapidapi.com

    // X-RapidAPI-Key: 173c4655f1mshb630819376b0c16p1f3c16jsnd176b234b6eb
    // unirest.post(“https://ptwebsolution-song-and-lyric-database-in-the-world-v1.p.rapidapi.com/music/gettopchart“)
    //done  .header(“X-RapidAPI-Host”, “ptwebsolution-song-and-lyric-database-in-the-world-v1.p.rapidapi.com”)
    //done  .header(“X-RapidAPI-Key”, “173c4655f1mshb630819376b0c16p1f3c16jsnd176b234b6eb”)
    //done  .header(“Content-Type”, “application/x-www-form-urlencoded”)
    // .end(function (result) {
    //  console.log(result.status, result.headers, result.body);
    // });
  // TODO: Figure out how to get more than one artist if they share song title 
  const songInfo = await axios.post("https://macgyverapi-music-graph-v1.p.rapidapi.com/", musicGraphdata, {headers: musicGraphHeaders})
  
  // TODO: Change this to promis all after we know how to get more than one song frmo music graph
  // const lyrics = await axios.get(https://ptwebsolution-song-and-lyric-database-in-the-world-v1.p.rapidapi.com/music/gettopchart)
  
  res.send(songInfo.data.result);


    // .catch(() => {
    //   res.status(500).send('Could not fetch data from Music Graph')
    // })
})

app.use(serveStatic(path.join(__dirname, 'dist')));
const port = process.env.PORT || 8000;
app.listen(port);