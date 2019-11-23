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
      <googly-eyes v-bind:x="pupil_x" v-bind:y="pupil_y" width="48">
        <u class="fallbabk-eyes">(0)(0)</u>
      </googly-eyes>
      <googly-eyes v-bind:x="pupil_x" v-bind:y="pupil_y" width="48" />
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
  data: function() {
    return {
      pupil_x: 0.5,
      pupil_y: 0.5
    };
  },
  methods: {
    onTouchMove: function(event) {
      this.pupil_x = event.changedTouches[0].clientX / window.innerWidth;
      this.pupil_y = event.changedTouches[0].clientY / window.innerHeight;
    },
    onMouseMove: function(event) {
      this.pupil_x = event.clientX / window.innerWidth;
      this.pupil_y = event.clientY / window.innerHeight;
    }
  },
  mounted: function handleMount() {
    let a = window.addEventListener("touchmove", this.onTouchMove);
    let b = window.addEventListener("mousemove", this.onMouseMove);
    return function handleUnmount() {
      window.addEventListener(a);
      window.addEventListener(b);
    };
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
