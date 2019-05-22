<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import axios from "axios";
import qs from 'qs';

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  mounted() {
    const data = {key:"free",id:"9m9c8U4f",data:{search:"hello"}};
    const headers = { 
        "X-RapidAPI-Host": "macgyverapi-music-graph-v1.p.rapidapi.com",
        "Content-Type": "application/json",
        "X-RapidAPI-Key": "173c4655f1mshb630819376b0c16p1f3c16jsnd176b234b6eb"

      };
    axios.post("https://macgyverapi-music-graph-v1.p.rapidapi.com/", data, {headers: headers})
      .then(result => {
        console.log(result);
      })
      
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
