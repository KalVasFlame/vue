<template lang="">
    <input class="input" 
    :type="type"
    :placeholder="placeholder" /> 
</template>
<script>
import theme from '../../assets/theme/colors.js'
console.log(theme.red)
export default {
name: "HRAFormInput",
props: {
    type: {
        type: String,
        default: "input"
    },
    placeholder: {
        type: String,
        default: "placeholder"
    },
}
    
}
</script>
<style scoped lang="scss">
.input {
background-color: #F1F1F1;
border-radius: 0.75rem;
color: #A1A1A1;
height: 3.5rem;
padding: 0.9375rem;
    &::placeholder {
    color: #A1A1A1;
    }
}
</style>