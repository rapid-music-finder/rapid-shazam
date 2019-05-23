<template>
  <v-container v-if="searched ===false">
    <v-layout text-xs-center wrap>
      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">Welcome to Rapid Music Search</h1>
      </v-flex>

      <v-flex mb-5 xs12>
        <v-form @submit.prevent="fetchSongList">
          <v-container>
            <v-layout row wrap justify-center>
              <v-flex xs12 sm6>
                <v-text-field label="Song Title" append-icon="search" solo v-model="searchTerm"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-form>

        <v-layout justify-center>Just insert songtitle and press enter to get song info!</v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
export default {
  data: () => ({
    searchTerm: ""
  }),
  computed: { ...mapState(["searched"]) },
  methods: {
    fetchSongList() {
      axios
        .get(`/api/songs/${this.searchTerm}`)
        .then(result => {
          this.$store.commit("setSongList", result.data);
        })
        .catch(err => {
          this.$store.commit("setSongList", err.data);
        });
    }
  }
};
</script>

<style>
</style>
