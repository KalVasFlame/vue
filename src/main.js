import { createApp } from "vue"
import "vue3-tel-input/dist/vue3-tel-input.css"
import Vue3TouchEvents from "vue3-touch-events"
import VueTelInput from "vue3-tel-input";
import router from "./router/index.js"
import App from "./App.vue"
import "./assets/scss/index.scss"
import TheHeader from "@/components/TheHeader.vue"
import BaseModal from "@/components/base/BaseModal.vue"

 const telInputOptions = {
   autoDefaultCountry: true,
   defaultCountry: 'US',
   ignoredCountries: ["RU"],
   inputOptions: {
     autofocus: true,
     showDialCode: false,
   },
   dropdownOptions: {
     showDialCodeInSelection: true,
     showSearchBox: true,
   },
   preferredCountries: ["US"],
   validCharactersOnly: true,
 }
const app = createApp(App)

app.use(router)
app.component('TheHeader', TheHeader)
app.component('BaseModal', BaseModal)
app.use(VueTelInput, telInputOptions)
app.use(Vue3TouchEvents)
app.mount("#app")

