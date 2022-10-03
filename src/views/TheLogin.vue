<template>
    <div class="container">
        <the-header/>
        <login-form/>
    </div>
</template>
<script>
import { defineComponent } from "vue"
import LoginForm from '../modules/login/components/LoginForm.vue'
export default defineComponent({
    components: { LoginForm }
})
</script>
<style lang="">
    
</style>