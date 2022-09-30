import { createApp  } from "vue"
import VueTelInput from 'vue3-tel-input'
import 'vue3-tel-input/dist/vue3-tel-input.css'
import Vue3TouchEvents from "vue3-touch-events";
import router from './router/index'
import App from "./App.vue"
import "./assets/scss/index.scss"


const telInputOptions = {
    autoDefaultCountry: true,
    // defaultCountry: 'US',
    ignoredCountries: ['RU'],
    inputOptions: {
        autofocus: true,
        showDialCode: false
    },
    dropdownOptions: {
        showDialCodeInSelection: true,
        showSearchBox: true
    },
    preferredCountries: ['US'],
    validCharactersOnly: true
}

const app = createApp(App);
app.use(VueTelInput, telInputOptions);
app.use(Vue3TouchEvents);
app.use(router);
app.mount("#app");
