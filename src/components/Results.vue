
    
<template>
  <v-app id="inspire" v-if="searched">
    <v-content>
      <v-container fluid fill-height>
        <v-layout mt-5 justify-center>
          <v-flex text-center>
            <v-layout row mt-0>
              <v-flex xs4 mr-4>
                <albumdetails/>
              </v-flex>
              <v-flex xs8 order-lg2>
                <youtubeVideo/>
                <lyrics/>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
import AlbumDetails from "./AlbumDetails";
import YoutubeVideo from "./YoutubeVideo.vue";
import Lyrics from "./Lyrics.vue";
export default {
  data: () => ({
    drawer: null
  }),
  components: {
    albumdetails: AlbumDetails,
    youtubeVideo: YoutubeVideo,
    lyrics: Lyrics
  },
  name: "Results",
  computed: { ...mapState(["songDetails", "searched"]) },
  props: {
    source: String
  }
};
</script>

