<template>
  <div>
    <div class="modal-window d-flex jc-c ai-c">
      <div class="modal-content-container">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
.modal-window {
    height: 100%;
    width: 100%;   
  position: absolute;
     top: 0; 
     left: 0; 
     background-color:rgba(7, 5, 5, 0.407);
}

.modal-content-container { 
  padding: 20px;
    border-radius: 40px;
      background-color: var(--color-white);
}

</style>