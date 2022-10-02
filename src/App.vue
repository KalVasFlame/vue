<template>
<div id="app">
  <TheLoginVue />
</div>
</template>

<script>
import { defineComponent } from "vue";
import TheLoginVue from "./views/TheLogin.vue"
export default defineComponent({
  components: {
    TheLoginVue,
},
})
</script>

