<template>
<div id="app">
  <LoginForm/>
</div>
  <!-- <AlertMessage ref="alertMessage"></AlertMessage> -->
</template>

<script>
import {defineComponent} from "vue";
import LoginForm from "./components/LoginForm.vue"
//  import AlertMessage from "./components/AlertMessage.vue"

export default defineComponent({

  components: {
    LoginForm,
    // AlertMessage
  },
   setup() {
    //  const AlertMessage = ref({})
    
    //  provide('AlertMessage', AlertMessage)

    //  return { AlertMessage }
   }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 50px;
  margin-left: 50px;
}
</style>

