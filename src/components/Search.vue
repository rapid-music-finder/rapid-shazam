<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome Rapid Music Search
        </h1>
      </v-flex>

      <v-flex
        mb-5
        xs12
      >
        <v-form @submit.prevent="fetchSongList">
          <v-container>
            <v-layout row wrap justify-center>
              <v-flex xs12 sm6 md30>
                <v-text-field
                  label="Song Title"
                  append-icon="search"
                  solo
                  v-model="searchTerm"
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-form>

        <v-layout justify-center>
          Just insert songtitle and press enter to get song info!
        </v-layout>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import axios from "axios"
  export default {
    data: () => ({
      searchTerm: ""
    }),
    methods: {
    fetchSongList(){
      const data = {key:"free",id:"9m9c8U4f",data:{search:this.searchTerm}};
      const headers = { 
          "X-RapidAPI-Host": "macgyverapi-music-graph-v1.p.rapidapi.com",
          "Content-Type": "application/json",
          "X-RapidAPI-Key": "173c4655f1mshb630819376b0c16p1f3c16jsnd176b234b6eb"
        };
      axios.post("https://macgyverapi-music-graph-v1.p.rapidapi.com/", data, {headers: headers})
        .then(result => {
        this.$store.commit("setSongList", result.data.result);
        })
      }
    },
  }
</script>

<style>

</style>
