<template>
  <v-layout mt-3>
    <v-flex>
      <v-card>
        <v-card-title class="result-message" justify-center align-center>Upcomming Concerts</v-card-title>
        <div v-for="(concert, index) of concertDetails.events" :key="index">
          <concert :concert="concert"/>
        </div>
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
  computed: { ...mapState(["concertDetails"]) }
};
</script>
