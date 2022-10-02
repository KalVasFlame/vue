<template>
    <div class="work-start-container">
      <p class="h4"> Welcome <br/>Press the button to start work</p>
      <button class="btn outlined-primary center">Start Work</button>
    </div>
</template>
<script>
  import { defineComponent } from "vue";
export default defineComponent({
  
})
</script>
<style lang="scss">
  .work-start-container {
  color: var(--color-blue);
  text-align: center;
  padding: 50px;
    width: 50%;
    margin: 40px auto 0;
    border: 5px solid var(--color-blue);
    border-radius: 40px;
  }
</style>