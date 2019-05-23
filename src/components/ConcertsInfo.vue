<template>
  <v-layout mt-3 class="concert-card">
    <v-flex>
      <v-card>
        <v-card-title class="result-message" justify-center align-center>Upcomming Concerts</v-card-title>
        <v-container id="scroll-target" style="max-height: 234px" class="scroll-y" mt-0 pt-0>
          <div v-for="(concert, index) of events" :key="index">
            <concert :concert="concert"/>
          </div>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from "vuex";
import Concert from "./Concert.vue";

export default {
  data: () => ({
    drawer: null
  }),
  components: {
    concert: Concert
  },
  name: "ConcertsInfo",
  computed: { ...mapState(["events"]) }
};
</script>
