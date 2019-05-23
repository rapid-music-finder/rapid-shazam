<template>
  <v-app>
    <v-toolbar app class="primary">
      <v-toolbar-title class="navbar display-1 text-uppercase" v-on:click="toggleView">
        <span>S</span>
        <span class="font-weight-light">4</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat href="https://github.com/rapid-music-finder/rapid-shazam" target="_blank">
        <span class="navbar mr-2">Github</span>
      </v-btn>
    </v-toolbar>

    <v-content id="main" mt-0>
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
  methods: {
    toggleView() {
      this.$store.commit("backToSearch");
    }
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

.navbar {
  color: white;
}

.v-content#main {
  padding: 0;
}

.display-1 {
  cursor: pointer;
}
#main {
  padding-top: 0 !important;
}
</style>

