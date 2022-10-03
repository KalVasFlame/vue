<template>
<div class="container">

<the-header />
  <div class="start-work-container w-50">
    <p>You do not have access rights to the doctor's office. Please contact the administrator</p>
    <div class="contacts-container">
    <p>Email: doctor-who@gmail.com</p>
    <p>Tel: 093 123-45-67</p>
    </div>
  </div>
</div>
</template>
<script>
  import { defineComponent } from 'vue';
export default defineComponent({
  
})
</script>
<style lang="scss">
  .start-work-container {
    color: var(--color-blue);
    text-align: center;
    margin: 40px auto 0;
    border: 5px solid var(--color-blue);
    border-radius: 40px;
    padding: 50px;
  }

  .contacts-container {
    padding: 10px;
  }
</style>