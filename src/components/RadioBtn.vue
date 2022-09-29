<template >
<label :for="props.id" class="radio-container">{{props.title}}
  <input  type="radio" :name="props.name" :id="props.id" :value="props.value">
  <span class="checkmark"></span>
</label>
</template>
<script>
import {defineComponent, ref} from "vue";

export default defineComponent({
props: {
    title: String,
    id: String,
    value: String,
    name:String,
},
setup(props) {
    const state = ref({})
   
    return {props, state}
}
})
</script>
<style lang="scss">
    
