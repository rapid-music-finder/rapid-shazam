<template>
  <v-card>
    <v-layout row>
      <v-flex xs12 text-xs-center>
        <v-card-text class="text" v-for="(lyric,index) in lyrics" :key="index">
          <div>{{lyric}}</div>
        </v-card-text>
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
  name: "Lyrics",
  computed: { ...mapState(["lyrics"]) },
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



