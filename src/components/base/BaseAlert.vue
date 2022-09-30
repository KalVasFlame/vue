<template>
  <div v-touch:swipe="hideAlert" @click="hideAlert" class="message-popup"
       :class="[message.active ? 'active' : '', message.size === 'small' ? 'small' : 'big']">
    <div class="message text-center" :class="message.type">
      <svg v-if="message.type === 'info'" class="icon-info" viewBox="-2 -2 16 16" xmlns="http://www.w3.org/2000/svg">
        <path
              d="M6 1.2C8.6466 1.2 10.8 3.3534 10.8 6C10.8 8.6466 8.6466 10.8 6 10.8C3.3534 10.8 1.2 8.6466 1.2 6C1.2 3.3534 3.3534 1.2 6 1.2ZM6 0C2.6862 0 0 2.6862 0 6C0 9.3138 2.6862 12 6 12C9.3138 12 12 9.3138 12 6C12 2.6862 9.3138 0 6 0ZM6.6 7.8H5.4V9H6.6V7.8ZM5.4 6.6H6.6L6.9 3H5.1L5.4 6.6Z" />
      </svg>
      <svg v-if="message.type === 'danger'" class="icon-danger" viewBox="0 0 24 24">
        <path
              d="M8.27,3L3,8.27V15.73L8.27,21H15.73C17.5,19.24 21,15.73 21,15.73V8.27L15.73,3M9.1,5H14.9L19,9.1V14.9L14.9,19H9.1L5,14.9V9.1M11,15H13V17H11V15M11,7H13V13H11V7" />
      </svg>
      <svg v-if="message.type === 'success'" class="icon-success" viewBox="-1 -1 26 26">
        <path
              d="M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2,4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z" />
      </svg>
      <div class="text">{{ message.text }}</div>
    </div>
  </div>
</template>

<script>

import { defineComponent, ref } from "vue"

export default defineComponent({
  expose: ['show', 'hideAlert'],
  setup() {
    const message = ref({
      active: false,
      text: '',
      type: 'success',
      size: 'small'
    });

    function show(text = '', type = 'info', size = 'small', timeout = 6000) {

      message.value = {
        active: true,
        text: text,
        type: type,
        size: size
      }
      setTimeout(() => {
        message.value.active = false
      }, timeout)
    }

    function hideAlert() {
      message.value.active = false
    }

    return { show, hideAlert, message }
  },
  emits: ['close'],
})
</script>

<style>
.message-popup {
  opacity: 0;
  visibility: hidden;
  position: fixed;
  z-index: 999999;
  top: 0;
  transform: translate(0, -100px);
  transition: all .35s ease-in-out;
  border-radius: 0 0 var(--radius) var(--radius);
  box-shadow: 0px 1px 4px rgb(0 0 0 / 40%);
  /* height: 200px; */
  width: 98%;
  margin: 0 auto;
  left: 0;
  right: 0;
  background: var(--color-white);
}

#message .img-wrapper svg.icon-info {
  color: var(--color-primary);
}

#message .img-wrapper svg.icon-danger {
  color: var(--color-red);
}

#message .img-wrapper svg.icon-success {
  color: var(--color-green);
}

.icon-success,
.icon-danger,
.icon-info {
  width: 24px;
  height: 24px;
}

.message .icon-danger {
  fill: var(--color-red);
}

.message .icon-success {
  fill: var(--color-green);
}

.message .icon-info {
  fill: var(--color-primary);
}


.message-popup.active {
  opacity: 1;
  visibility: visible;
  transform: translate(0, 0);
}

.message-popup.big:before {
  content: '';
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(21, 21, 21, 0.7);
  backdrop-filter: blur(5px);
  transition: 0s;
}

.message {
  /* position: absolute; */
  /* top: 80px; */
  /* left: 50%; */
  /* width: 85%; */
  /* transform: translate(-50%, 0); */
  /* background: linear-gradient(86.18deg, #979797 4.98%, #6CABBF 51.62%, #5FA785 99.05%); */

  /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
  /* backdrop-filter: blur(40px); */

  /* border-radius: 12px; */
}

.message svg {
  position: absolute;
  left: 20px;
}

.message-popup.small .message {
  text-align: center;
  padding: 60px 15px 15px;
}

.message-popup.big .message img {
  margin: auto;
  margin-bottom: 10px;
}

.message-popup.small .message img {
  position: absolute;
  left: 15px;
  top: 50%;
  margin-top: -12px;
}

.message .text {
  font-weight: 400;
  font-size: 17px;
  line-height: 28px;
}

@media (max-width: 400px) {
  .message .text {
    font-weight: 400;
    font-size: 15px;
    line-height: 24px;
  }
}

.message-popup.big .message {
  padding: 30px;
}

/* .message.success {
    background: linear-gradient(86.18deg, #979797 4.98%, #6CABBF 51.62%, #5FA785 99.05%);
  }
  .message.danger {
    background: linear-gradient(88.08deg, #979797 3.6%, #C089BA 49.28%, #FB6767 104.16%);
  } */
</style>