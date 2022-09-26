<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <MainButton outlined @click="increment">Click Me</MainButton>
    <StarRating :rating="7" :starLimit="10" />
  </div>
</template>

<script>
import MainButton from "./components/MainButton.vue"
import StarRating from "./components/StarRating.vue"

export default {
  name: "App",
  components: {
    MainButton,
    StarRating,
  },
  data() {
    return { amountOfClicks: 1 }
  },
  computed: {
    title() {
      return `Amount of clicks: ${this.amountOfClicks}`
    },
  },
  methods: {
    increment() {
      this.amountOfClicks++
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
