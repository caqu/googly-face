<template>
  <div id="app">
    <div>
      This is a Vue.js app that uses a web component
      created with Svelte.js for the googly eyes.
    </div>
    <div>
      <img alt="Vue logo" src="./assets/logo.png" width="100" />
      <br />
      <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
      <googly-eyes>
        <u class="fallbabk-eyes">(0)(0)</u>
      </googly-eyes>
      <googly-eyes />
    </div>
    <!-- <googly-nose /> -->
    <!-- <googly-mouth /> -->
    <br />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
export default {
  name: "googly-face",
  methods: {
    log(args) {
      window.console.log(...args);
    }
  },
  components: {
    // HelloWorld,
  }
};
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
