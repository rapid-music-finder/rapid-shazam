<template>
  <v-layout mt-3>
    <v-flex>
      <v-card>
        <v-form @submit.prevent="fetchLoveCalculator">
          <v-text-field label="Check your love compatibility!" solo v-model="name"></v-text-field>
        </v-form>
        <div class="text-xs-center">
          <v-progress-circular
            :size="100"
            :width="15"
            :value="loveCalculatorResult.percentage"
            color="pink"
          >{{ loveCalculatorResult.percentage }}</v-progress-circular>
        </div>
        <v-card-title
          class="result-message"
          justify-center
          align-center
        >{{loveCalculatorResult.result}}</v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";

export default {
  data: () => ({
    drawer: null,
    name: "",
    value: 46,
    message: "Can choose someone better."
  }),
  name: "LoveCalculator",
  computed: { ...mapState(["songDetails", "loveCalculatorResult"]) },
  methods: {
    fetchLoveCalculator() {
      axios
        .get(
          `/api/love?fname=${this.name}&sname=${this.songDetails.artist
            .split(" ")
            .join("_")}`
        )
        .then(result => {
          this.$store.commit("loveCalculator", result.data);
        })
        .catch(err => {
          this.$store.commit("loveCalculator", err.data);
        });
    }
  }
};
</script>

<style>
.result-message {
  font-size: 16px;
}
</style>