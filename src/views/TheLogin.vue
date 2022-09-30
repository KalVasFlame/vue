<template>
    <div>
        <TheHeader/>
        <LoginForm/>
    </div>
</template>
<script>
import {defineComponent} from "vue"
import TheHeader from '../components/TheHeader.vue'
import LoginForm from '../modules/login/components/LoginForm.vue'
export default defineComponent({
    components: {TheHeader, LoginForm}
})
</script>
<style lang="">
    
</style>