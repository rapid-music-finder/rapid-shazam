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
    setSongList(vuexContext, payload) {
      vuexContext.songDetails.albumTitle = payload[0].albumTitle;
      vuexContext.songDetails.artist = payload[0].artist;
      vuexContext.songDetails.songName = payload[0].songName;
      vuexContext.songDetails.genre = payload[0].genre.join(" ");
      vuexContext.songDetails.thumbnails =
        payload[0].thumbnails["high-quality"];
      vuexContext.songDetails.releaseDate = payload[0].releaseDate;
      vuexContext.songDetails.artist = payload[0].artist;
      vuexContext.songDetails.ytVideo = `https://www.youtube.com/embed/${
        payload[0].ytVideo
      }`;
      vuexContext.songDetails.lyrics = payload[0].lyrics;
      vuexContext.searched = true;
    },
    backToSearch(vuexContext) {
      vuexContext.searched = !vuexContext.searched
    }
  },
  getters: {
    songList(state) {
      return state.songList;
    }
  }
});

export default store;
