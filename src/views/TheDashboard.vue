<template >
  <div>
      <TheHeader />
      <WorkStartVue />
    </div>
</template>
<script>
import { defineComponent } from "vue";
import WorkStartVue from "@/modules/dashboard/components/WorkStart.vue";
export default defineComponent({
  components: [WorkStartVue]
})
</script>