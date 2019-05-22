import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import Vuex, { mapState } from "vuex";

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    songDetails: {
      songName: "Blank Space",
      albumTitle: "1989",
      thumbnails: "https://img.youtube.com/vi/e-ORhEE9VVg/hqdefault.jpg",
      genre: ["Electropop", "Pop"],
      releaseDate: "2015",
      artist: "Taylor Swift",
      ytVideo: "https://www.youtube.com/embed/e-ORhEE9VVg"
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
    ]
  },
  mutations: {}
});

new Vue({
  store,
  computed: mapState(["songDetails"]),
  render: (h) => h(App)
}).$mount("#app");
