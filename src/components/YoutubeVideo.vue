<template>
  <v-card>
    <v-layout row>
      <v-flex xs12 text-xs-center mt-2 mb-2>
        <iframe width="640" height="360" :src="songDetails.ytVideo"></iframe>
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
  name: "YoutubeVideo",
  computed: { ...mapState(["songDetails"]) },
  props: {
    source: String
  }
};
</script>