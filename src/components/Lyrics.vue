<template>
  <v-card>
    <v-layout row>
      <v-flex xs12 text-xs-center>
        <div>
          <v-layout column justify-center align-center>
            <h1>{{songDetails.songName}}</h1>
          </v-layout>
          <v-container id="scroll-target" style="max-height: 400px" class="scroll-y">
            <v-layout
              v-scroll:#scroll-target="onScroll"
              column
              align-center
              justify-center
              style="height: 1000px"
            >
              <div>{{lyric}}</div>
            </v-layout>
          </v-container>
        </div>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    drawer: null
  }),
  name: "Lyrics",
  computed: { ...mapState(["lyrics", "songDetails"]) },
  props: {
    source: String
  }
};
</script>

<style>
.text {
  font-size: 20px;
}
</style>



