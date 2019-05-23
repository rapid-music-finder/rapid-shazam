<template>
  <v-layout mt-3>
    <v-flex>
      <v-card>
        <v-text-field label="Check your love compatibility!" solo v-model="name"></v-text-field>
        <div class="text-xs-center">
          <v-progress-circular :size="100" :width="15" :value="value" color="pink">{{ value }}</v-progress-circular>
        </div>
        <v-card-title class="result-message" justify-center align-center>{{message}}</v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    drawer: null,
    name: "",
    value: 46,
    message: "Can choose someone better."
  }),
  name: "LoveCalculator",
  computed: { ...mapState(["songDetails"]) }
};
</script>

<style>
.result-message {
  font-size: 16px;
}
</style>