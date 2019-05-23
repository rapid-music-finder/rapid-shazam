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
    lyrics: [
      "Spent 24 hours I need more hours with you",
      "You spent the weekend getting even ooh",
      "Spent 24 hours I need more hours with you",
      "You spent the weekend getting even ooh",
      "Spent 24 hours I need more hours with you",
      "You spent the weekend getting even ooh",
      "Spent 24 hours I need more hours with you",
      "You spent the weekend getting even ooh",
      "Spent 24 hours I need more hours with you",
      "You spent the weekend getting even ooh",
      "Spent 24 hours I need more hours with you",
      "You spent the weekend getting even ooh",
      "Spent 24 hours I need more hours with you",
      "You spent the weekend getting even ooh"
    ],
    searched: false
  },
  mutations: {
    setSongList(state, payload) {
      state.songDetails.albumTitle = payload[0].albumTitle;
      state.songDetails.artist = payload[0].artist;
      state.songDetails.songName = payload[0].songName;
      state.songDetails.genre = payload[0].genre.join(" ");
      state.songDetails.thumbnails =
        payload[0].thumbnails["high-quality"];
      state.songDetails.releaseDate = payload[0].releaseDate;
      state.songDetails.artist = payload[0].artist;
      state.songDetails.ytVideo = `https://www.youtube.com/embed/${
        payload[0].ytVideo
      }`;
      state.songDetails.lyrics = payload[0].lyrics;
      state.events = payload[0].events
      state.searched = true;
    },
    backToSearch(state) {
      state.searched = !state.searched
    }
  },
  getters: {
    songList(state) {
      return state.songList;
    }
  }
});

export default store;
