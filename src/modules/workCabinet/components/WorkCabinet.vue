<template>
  <div class="work-cabinet-container d-flex jc-sb ai-c w-60">
  <p class="h4">
    Patient waiting process 
  </p>
<div>
  <p class="dot-l"></p>
  <p class="dot-l"></p>
  <p class="dot-l"></p>
</div>
</div>
<base-modal v-if="isPatient">
  <p>yo yo</p>
  <button class="btn primary" @click="onAcceptParientBtnClick"> Accept</button>
  <button class="btn error" @click="onCancelParientBtnClick"> Cancel</button>
</base-modal>
</template>
<script>
import { defineComponent, ref } from 'vue';
import BaseModal from '@/components/base/BaseModal.vue';
import { useRouter } from 'vue-router'

export default defineComponent({
  components: [BaseModal],
    setup() {
      const router = useRouter()
      let isPatient = ref(true)

      const onAcceptParientBtnClick = () => {
        router.push({ name: "HRAForm" });
      }

      const onCancelParientBtnClick = () => {
        router.push({ name: "TheDashboard" });
      }

      return { isPatient, onAcceptParientBtnClick, onCancelParientBtnClick };
    },
})
</script>
<style lang="scss">
.work-cabinet-container {
    color: var(--color-blue);
    text-align: center;
    margin: 40px auto 0;
    border: 5px solid var(--color-blue);
    border-radius: 40px;
    padding: 50px;
  }

</style>