<template>
  <v-flex xs12>
    <v-card class="secondary white--text">
      <v-layout>
        <v-flex xs5>
          <v-img :src="concert.images[0].url" height="125px" contain></v-img>
        </v-flex>
        <v-flex xs7>
          <v-card-title primary-title>
            <div>{{concert.name}}</div>
            <div>{{concert.dates.start.dateTime}}</div>
            <v-card-actions>
              <v-btn :href="concert.url" target="_blank" flat dark>Check details here</v-btn>
            </v-card-actions>
          </v-card-title>
        </v-flex>
      </v-layout>
    </v-card>
  </v-flex>
</template>

<script>
import { mapState } from "vuex";

export default {
  data: () => ({
    drawer: null
  }),
  name: "Concert",
  computed: { ...mapState(["concertDetails"]) },
  props: ["concert", "key"]
};
</script>

<style>
div.v-responsive__content {
  height: 100%;
}
</style>