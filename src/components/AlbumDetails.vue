<template>
  <v-layout>
    <v-flex>
      <v-card>
        <v-img :src="songDetails.thumbnails" height="215px" contain/>
        <v-card-title justify-center align-center>
          <div>
            <span class="headline">Title:</span>
            <span class="headline">{{songDetails.songName}}</span>
            <br>
            <span class="text">Album:{{songDetails.albumTitle}}</span>
            <br>
            <span class="text">Release Date:{{songDetails.releaseDate}}</span>
            <br>
            <span class="text">Artist:{{songDetails.artist}}</span>
            <br>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
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
span {
  font-family: "Roboto", sans-serif !important;
}

.text {
  font-size: 18px;
  font-weight: 300;
}

.headline {
  font-size: 25px;
}

span {
  font-weight: bold;
}

div.v-card__title {
  justify-content: center !important;
  align-items: center !important;
}
</style>