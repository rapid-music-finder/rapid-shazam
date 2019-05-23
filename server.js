const express = require('express');
const serveStatic = require("serve-static")
const path = require('path');
const app = express();
const axios = require('axios');
const unirest = require('unirest');
require('dotenv').config();

const MUSIC_GRAPH_KEY = process.env.MUSIC_GRAPH_KEY;
const MUSIC_GRAPH_ID = process.env.MUSIC_GRAPH_ID;
const X_RAPIDAPI_KEY = process.env.X_RAPIDAPI_KEY;
const TICKET_MASTER_API = process.env.TICKET_MASTER_API;

app.get('/api/songs/:title', async (req, res, next) => {
  const { title } = req.params
  const musicGraphdata = { key: MUSIC_GRAPH_KEY, id: MUSIC_GRAPH_ID, data: {search: title} };
  const musicGraphHeaders = { 
      "X-RapidAPI-Host": "macgyverapi-music-graph-v1.p.rapidapi.com",
      "Content-Type": "application/json",
      "X-RapidAPI-Key": X_RAPIDAPI_KEY
    };


  // TODO: Figure out how to get more than one artist if they share song title 
  const songInfo = await axios.post("https://macgyverapi-music-graph-v1.p.rapidapi.com/", musicGraphdata, {headers: musicGraphHeaders})
  

  // TODO: Change this to promis all after we know how to get more than one song frmo music graph
  const artist = songInfo.data.result[0].artist;
  const songName = songInfo.data.result[0].songName;
  const trackList = await unirest.post("https://ptwebsolution-song-and-lyric-database-in-the-world-v1.p.rapidapi.com/music/searchtrack")
  .header("X-RapidAPI-Host", "ptwebsolution-song-and-lyric-database-in-the-world-v1.p.rapidapi.com")
  .header("X-RapidAPI-Key", X_RAPIDAPI_KEY)
  .header("Content-Type", "application/x-www-form-urlencoded")
  .send("q="+artist + " " + songName);
  
  const targetSongId = trackList.body.results.itemlist[0].songid;
  
  const lyric = await unirest.post("https://ptwebsolution-song-and-lyric-database-in-the-world-v1.p.rapidapi.com/music/getlyric")
    .header("X-RapidAPI-Host", "ptwebsolution-song-and-lyric-database-in-the-world-v1.p.rapidapi.com")
    .header("X-RapidAPI-Key", X_RAPIDAPI_KEY)
    .header("Content-Type", "application/x-www-form-urlencoded")
    .send("id=" + targetSongId);

  const ticketMasterSearchTerm = artist;
  const ticketMasterData = await unirest.get(`https://chrysalis.p.rapidapi.com/discovery/v2/events.json?keyword=${ticketMasterSearchTerm}&apikey=${TICKET_MASTER_API}`)
    .header("X-RapidAPI-Host", "chrysalis.p.rapidapi.com")
    .header("X-RapidAPI-Key", "41b9ff1090mshafbe28520892ff6p102ca7jsn01cb4317a885")

  const musicInfo = [
    {
      ...songInfo.data.result[0], 
      lyrics: lyric.body.results,
      events: ticketMasterData.body._embedded.events
    }
  ];

  res.send(musicInfo);


    // .catch(() => {
    //   res.status(500).send('Could not fetch data from Music Graph')
    // })
})

app.get('/api/love',async function(req, res) {
  let { fname, sname } = req.query;
  let loveScore = await unirest.get(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${fname}&sname=${sname}`)
        .header("X-RapidAPI-Host", "love-calculator.p.rapidapi.com")
        .header("X-RapidAPI-Key", X_RAPIDAPI_KEY);
  res.send(loveScore.raw_body);
});

app.use(serveStatic(path.join(__dirname, 'dist')));
const port = process.env.PORT || 8000;
app.listen(port);