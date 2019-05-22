<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Rapid</span>
        <span class="font-weight-light">Shazam</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/rapid-music-finder/rapid-shazam"
        target="_blank"
      >
        <span class="mr-2">Github</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <Search/>
    </v-content>
  </v-app>
</template>

<script>
import Search from './components/Search'
import axios from "axios";

export default {
  name: 'App',
  components: {
    Search
  },
  data () {
    return {
      //
    }
  },
  mounted() {
    const data = {key:"free",id:"9m9c8U4f",data:{search:"hello"}};
    const headers = { 
        "X-RapidAPI-Host": "macgyverapi-music-graph-v1.p.rapidapi.com",
        "Content-Type": "application/json",
        "X-RapidAPI-Key": "173c4655f1mshb630819376b0c16p1f3c16jsnd176b234b6eb"
      };
    axios.post("https://macgyverapi-music-graph-v1.p.rapidapi.com/", data, {headers: headers})
      .then(result => {
       this.$store.commit("setSongList", result.data.result);
      })
  },
  computed: {
    songList() {
      return this.$store.getters.songList;
    }
  }

}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

