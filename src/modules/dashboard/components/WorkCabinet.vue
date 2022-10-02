<template>
  <div class="work-cabinet-container d-flex jc-sb ai-c">
<div>
  <p class="h4">
    Patient waiting process 
  </p>
</div>
<div>
  <p class="dot-l"></p>
  <p class="dot-l"></p>
  <p class="dot-l"></p>
</div>
</div>
<BaseModal v-if="isModalOpen">
  <div class="d-flex jc-c ai-c">  
    <button class="btn primary">Accept</button>
    <button class="btn delete">Cancel</button>
  </div>
</BaseModal>
</template>
<script>
import { defineComponent, ref } from 'vue';
import BaseModal from '@/components/base/BaseModal.vue';
export default defineComponent({
  components: [BaseModal],
    setup() {
      let isModalOpen = ref(false)
      return { isModalOpen };
    },
})
</script>
<style lang="scss">
.work-cabinet-container {
    color: var(--color-blue);
    width: 50%;
    text-align: center;
    margin: 40px auto 0;
    border: 5px solid var(--color-blue);
    border-radius: 40px;
    padding: 50px;
  }

</style>