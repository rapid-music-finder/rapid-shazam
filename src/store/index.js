import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    songDetails: {
      songName: "",
      albumTitle: "",
      thumbnails: "",
      genre: "",
      releaseDate: "",
      artist: "",
      ytVideo: ""
    },
    searched: false,
    loveCalculatorResult: {},
    concertDetails: false
  },
  mutations: {
    setSongList(state, payload) {
      state.songDetails.albumTitle = payload[0].albumTitle;
      state.songDetails.artist = payload[0].artist;
      state.songDetails.songName = payload[0].songName;
      state.songDetails.genre = payload[0].genre.join(" ");
      state.songDetails.thumbnails = payload[0].thumbnails["high-quality"];
      state.songDetails.releaseDate = payload[0].releaseDate;
      state.songDetails.artist = payload[0].artist;
      state.songDetails.ytVideo = `https://www.youtube.com/embed/${
        payload[0].ytVideo
      }`;

      let title = [];
      let lyricText = [];
      payload[0].lyrics.forEach(item => {
        if (item.timing === "0:00" || item.timing === "") {
          title.push(item.text);
        } else {
          lyricText.push(item.text);
        }
      });

      lyricText.unshift(title[title.length - 1]);

      state.songDetails.lyrics = lyricText;
      state.searched = true;
      if (payload[0].events) {
        state.events = payload[0].events;
        state.concertDetails = true;
      }
    },

    backToSearch(state) {
      state.searched = !state.searched;
      state.loveCalculatorResult = {};
    },

    loveCalculator(state, data) {
      state.loveCalculatorResult = data;
    }
  }
});

export default store;
