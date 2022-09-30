<template>
<div id="app">
  <TheLogin/>
  <!-- <AlertMessage ref="alertMessage"></AlertMessage> -->
</div>
</template>

<script>
import {defineComponent} from "vue";
import TheLogin from "./views/TheLogin.vue"
// import RegistrationForm from "./components/RegistrationForm.vue"
//  import AlertMessage from "./components/AlertMessage.vue"

export default defineComponent({

  components: {
    // RegistrationForm
     TheLogin,
    // AlertMessage
  },
   setup() {
    console.log(process.env.BASE_URL);
    //  const AlertMessage = ref({})
    
    //  provide('AlertMessage', AlertMessage)

      return {  }
   }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

