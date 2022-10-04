<template>
    <div class="work-start-container">
      <p class="h4"> Welcome <br/>Press the button to start work</p>
      <button class="btn primary center" @click="modalToggle">Start Work</button>
    </div>
<base-modal v-if="isModalOpen">
  <p class="h4 blue">Do you really want to  start working?
</p>
<div class="d-flex jc-sb ai-c">
  <button class="btn primary" @click="onAcceptBtnClick">Accept</button>
  <button class="btn error" @click="modalToggle">Cancel</button>
</div>
</base-modal>
</template>
<script>
  import { defineComponent, onBeforeMount, ref } from "vue";
  import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {

    onBeforeMount(()=> {
      const userData = JSON.parse(localStorage.getItem('user_data'))
      console.log(userData);
      if (userData.confirmed !== "5") {
        router.push({name: 'AccessDenied'})
      }
    })

    const router = useRouter()
    let isModalOpen = ref(false)

    const modalToggle = () => {
      isModalOpen.value = !isModalOpen.value
    }
    const onAcceptBtnClick = () => {
      router.push({name: "WorkCabinet"})
    }
    return { isModalOpen, modalToggle, onAcceptBtnClick }
  }
  
})
</script>
<style lang="scss">
  .work-start-container {
  color: var(--color-blue);
  text-align: center;
  padding: 50px;
    max-width: 50%;
    margin: 40px auto 0;
    border: 1px solid var(--color-blue);
    border-radius: 40px;
  }
</style>