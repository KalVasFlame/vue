<template >
  <div class="container">
      <the-header />
      <work-start />
    </div>
</template>
<script>
import { defineComponent } from "vue";
import WorkStart from "@/modules/dashboard/components/WorkStart.vue";
export default defineComponent({
  components: { WorkStart },
})
</script>