
    
<template>
  <v-container fluid fill-height id="inspire" v-if="searched">
    <v-layout>
      <v-flex text-center>
        <v-layout row mt-0>
          <v-flex xs12 sm4 mr-4 justify-center align-center>
            <albumdetails/>
            <lovecalc/>
            <concerts/>
          </v-flex>
          <v-flex xs12 sm8 order-lg2>
            <youtubeVideo/>
            <lyrics/>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import AlbumDetails from "./AlbumDetails";
import YoutubeVideo from "./YoutubeVideo.vue";
import Lyrics from "./Lyrics.vue";
import LoveCalculator from "./LoveCalculator.vue";
import ConcertsInfo from "./ConcertsInfo.vue";

export default {
  data: () => ({
    drawer: null
  }),
  components: {
    albumdetails: AlbumDetails,
    youtubeVideo: YoutubeVideo,
    lyrics: Lyrics,
    lovecalc: LoveCalculator,
    concerts: ConcertsInfo
  },
  name: "Results",
  computed: { ...mapState(["songDetails", "searched"]) },
  props: {
    source: String
  }
};
</script>

