<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Rapid</span>
        <span class="font-weight-light">Shazam</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
<<<<<<< HEAD
      <v-btn
        flat
        href="https://github.com/rapid-music-finder/rapid-shazam"
        target="_blank"
      >
        <span class="mr-2">Github</span>
=======
      <v-btn flat href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
        <span class="mr-2">Latest Release</span>
>>>>>>> results_page
      </v-btn>
    </v-toolbar>

    <v-content>
<<<<<<< HEAD
      <Search/>
=======
      <Results/>
>>>>>>> results_page
    </v-content>
  </v-app>
</template>

<script>
<<<<<<< HEAD
import Search from './components/Search'
=======
import Results from "./components/Results";
>>>>>>> results_page

export default {
  name: "App",
  components: {
<<<<<<< HEAD
    Search
=======
    Results
>>>>>>> results_page
  },
  data() {
    return {
      //
<<<<<<< HEAD
    }
  },
}
=======
    };
  }
};
>>>>>>> results_page
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

