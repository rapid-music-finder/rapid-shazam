<template>
  <v-card>
    <v-layout row>
      <v-flex xs6 pt-0 pb-0>
        <v-img :src="songDetails.thumbnails" height="315px" contain/>
      </v-flex>
      <v-flex xs6>
        <v-card-title primary-title text-xs-center>
          <div>
            <div class="headline">
              <span>Title:</span>
              {{songDetails.songName}}
            </div>
            <div class="text">
              <span>Album:</span>
              {{songDetails.albumTitle}}
            </div>
            <div class="text">
              <span>Release Date:</span>
              {{songDetails.releaseDate}}
            </div>
            <div class="text">
              <span>Artist:</span>
              {{songDetails.artist}}
            </div>
          </div>
        </v-card-title>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
import Vuex, { mapState } from "vuex";
export default {
  data: () => ({
    drawer: null
  }),
  name: "AlbumDetails",
  computed: { ...mapState(["songDetails"]) },
  props: {
    source: String
  }
};
</script>

<style>
.text {
  font-size: 20px;
}

.headline {
  font-size: 40px;
}

span {
  font-weight: bold;
}
</style>