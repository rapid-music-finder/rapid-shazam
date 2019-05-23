<template>
  <v-layout>
    <v-flex>
      <v-card>
        <v-img pt-3 :src="songDetails.thumbnails" height="150px" contain/>
        <v-card-title justify-center align-center>
          <div>
            <span class="songTitle">Title:</span>
            <span class="songTitle font-weight-bold">{{songDetails.songName}}</span>
            <br>
            <span class="albumDetails">Album:</span>
            <span class="albumDetails font-weight-bold">{{songDetails.albumTitle}}</span>
            <br>
            <span class="albumDetails">Release Date:</span>
            <span class="albumDetails font-weight-bold">{{songDetails.releaseDate}}</span>
            <br>
            <span class="albumDetails">Artist:</span>
            <span class="albumDetails font-weight-bold">{{songDetails.artist}}</span>
            <br>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from "vuex";
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

.albumDetails {
  font-size: 17px;
}

.songTitle {
  font-size: 20px;
}

div.v-card__title {
  justify-content: center !important;
  align-items: center !important;
}

.v-image__image.v-image__image--contain {
  margin-top: 15px;
}
</style>