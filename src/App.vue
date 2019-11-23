<template>
  <div class="app">
    <div>
      This is a Vue.js app that uses:
      <li>
        a web component
        created with Svelte.js for the googly eyes.
      </li>
      <li>a nose imported and bundled Vue component</li>
      <li>a goat-tee Vanilla JS goat-tee component</li>
    </div>
    <div class="face">
      <img alt="Vue logo" src="./assets/logo.png" width="100" />
      <br />
      <googly-eyes v-bind:x="pupil_x" v-bind:y="pupil_y" width="48">
        <u class="fallbabk-eyes">(0)(0)</u>
      </googly-eyes>
      <googly-eyes v-bind:x="pupil_x" v-bind:y="pupil_y" width="52" />
      <br />
      <GooglyNose />
      <!-- <googly-mouth /> -->
      <googly-goat-tee />
    </div>
  </div>
</template>

<script>
import GooglyNose from "./components/GooglyNose.vue";
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
    GooglyNose
  }
};
</script>

<style>
body {
  background: #f0f8fe;
}
.app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.face {
  text-align: center;
}
</style>
