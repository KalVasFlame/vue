<template>
    <div class="container">
        <TheHeaderVue class=""/>
        <LoginForm/>
    </div>
</template>
<script>
import { defineComponent } from "vue"
import TheHeaderVue from "@/components/TheHeader.vue"
import LoginForm from '../modules/login/components/LoginForm.vue'
export default defineComponent({
    components: { LoginForm, TheHeaderVue }
})
</script>
<style lang="">
    
</style>