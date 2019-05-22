<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Rapid</span>
        <span class="font-weight-light">Shazam</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat href="https://github.com/rapid-music-finder/rapid-shazam" target="_blank">
        <span class="mr-2">Github</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <Search/>
      <Results/>
    </v-content>

    <v-footer color="white" app>
      <span class="black--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import Search from "./components/Search";
import Results from "./components/Results";

export default {
  name: "App",
  components: {
    Search,
    Results
  },
  data() {
    return {
      //
    };
  }
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

