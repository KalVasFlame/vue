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
    
.radio-container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.radio-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #fff;
  border: 1px solid var(--color-blue);
  border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.radio-container:hover input ~ .checkmark {
  background-color: #fff;
}

/* When the radio button is checked, add a blue background */
.radio-container input:checked ~ .checkmark {
  background-color:#fff;
  border:1px solid var(--color-blue);
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.radio-container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.radio-container .checkmark:after {
  top: 7px;
  left: 8px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-blue);
}
</style>