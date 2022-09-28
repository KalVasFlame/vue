<template lang="">
    <div>
        {{props.title}}
    </div>
</template>
<script>
import {defineComponent} from 'vue'
export default defineComponent({
props: {
  title: String,
},
setup(props) {
  return { props}  
}
    
})
</script>
<style lang="">
    
</style>