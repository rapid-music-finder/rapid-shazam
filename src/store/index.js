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
    searched: false
  },
  mutations: {
    setSongList(vuexContext, payload) {
      const lyricsString = [];
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

      vuexContext.songDetails.lyrics = lyricText;
      vuexContext.searched = true;
    },
    backToSearch(vuexContext) {
      vuexContext.searched = !vuexContext.searched;
    }
  },
  getters: {
    songList(state) {
      return state.songList;
    }
  }
});

export default store;
