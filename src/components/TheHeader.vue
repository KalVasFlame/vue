<template>
<div class="container d-flex jc-sb ai-c">
    <div class="logo-container mt-35">
        <img :src="LogoSvg" alt="Logo" />
    </div>
    <div class="mt-35">
        <img :src="AndroidIos" alt="Android-Ios" />
    </div>
    <div class="img-container mt-35 mr-100">
        <img :src="MyAccSvg" alt="My Accaunt" />
    </div>
</div>
</template>
<script>
import {defineComponent} from 'vue'
import LogoSvg from '../assets/images/svg/logo.svg'
import AndroidIos from '../assets/images/svg/android-ios.svg'
import MyAccSvg from '../assets/images/svg/my-acc-cross.svg'
export default defineComponent({
    setup() {
        
        return { LogoSvg, AndroidIos, MyAccSvg }
    }
})
</script>
<style lang="scss">

.logo-container {
    width: 115px;
    height: 105px;
}
.img-container {
    width: 55px;
    height: 55px;
    padding: 17px;
    border: 1px solid var(--color-gray);
    border-radius: 50%;
}
</style>