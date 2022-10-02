<template>
  <div class="login-form-wrapper">
    <h1 class="login-form-tittle">Login or Registration</h1>
    <div class="login-type-btns">
      <a class="login-type-btn" @click="mode_email = false, isCodeSent = false" :class="{active: !mode_email }" >Phone</a> 
      <span>or</span>
      <a class="login-type-btn" @click="mode_email = true, isCodeSent = false" :class="{active: mode_email }">Email</a>
    </div>
    <vue-tel-input  v-if="!mode_email" v-model="state.phone"  @input="onVueTelInput" :value="state.phone"></vue-tel-input>
    <input type="text" v-if="mode_email" v-model="state.email" placeholder="Enter Email" class="input login">
    <input type="text" v-if="isCodeSent" v-model="state.code" placeholder="Enter Code" class="input">
  <label class="container-cbx">
    <input type="checkbox" v-model="state.agree">
    <span class="checkmark"></span>
  </label>
  <div class="policy-text-wrapper">
    <span class="policy-text">I agree to receive SMS/text massages. SMS data rates may apply. I agree with <a class="policy-URL">Privacy Policy</a></span>

  </div>
  <button class="btn primary" @click="submitForm">{{isCodeSent ? "Log In" : "Get SMS"}}</button>
  </div>

</template>


<script>
import { ref, defineComponent, computed} from "vue";
import useValidate from '@vuelidate/core';
import { required, minLength, email, helpers, sameAs, maxLength } from '@vuelidate/validators';
import axios from "axios";
import qs from "qs";
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const router = useRouter()
    const state = ref({
      phone: '',
      email: '',
      agree: false,
      code: '',
    });
    
    const mode_email = ref(false)
    let isValid = ref(false)
    const isCodeSent = ref(false)
    let data = {}
    
   
    const rules = computed(() => { 
      return {
            phone: { required: helpers.withMessage('Please enter your phone number', required), minLength: minLength(10) },
            email: {
               required: helpers.withMessage('Please enter email', required),
               email: helpers.withMessage('Please enter valid email', email) },
            agree: { required: helpers.withMessage('Agreement is required', sameAs(true)) },
            code: { required: helpers.withMessage('Enter code from SMS you received', required), minLength: minLength(4), maxLength: maxLength(4) },
            
            $validationGroups: {
              phone: ['phone', 'agree'],
              email: ['email', 'agree'],
              code: ['code']
            }
        }
      })
      
      const v$ = useValidate(rules, state)
      const onVueTelInput = (tel, phoneObject) => {
          if (phoneObject?.number)
            state.value.phone = phoneObject.number
    }

    const sendCode = () => {
      console.log('sendCode');
      if (!mode_email.value) {
        data = {
          phone: state.value.phone
        }
      } else {
        data = {
          email: state.value.email
        }
      }
      axios.post(process.env.VUE_APP_API_URL + 'my/login', qs.stringify(
        data),
        { headers: { 'content-type': 'application/x-www-form-urlencoded;charset=utf-8', 'app-version': process.env.VUE_APP_VERSION } })
        .then((res) => {
          console.log(res);
          if (res.data.status === 'success') {
            isCodeSent.value = true
          }
        })
}
    const checkCode = () => {
      console.log('checkCode');
      data = {}
      if (!mode_email.value) {
        data = {
          phone: state.value.phone,
          code: state.value.code
        }
      } else {
        data = {
          email: state.value.email,
          code: state.value.code
        }
      }
      if (state.value.code && state.value.code.toString().length === 4) {
        axios.post(process.env.VUE_APP_API_URL + 'my/check-code', qs.stringify(
          data),
          { headers: { 'content-type': 'application/x-www-form-urlencoded;charset=utf-8', 'app-version': process.env.VUE_APP_VERSION } })
          .then((res) => {
            console.log(res);
            if (res.data.status === 'success') {
              localStorage.setItem('user_data', JSON.stringify(res.data.user))
              localStorage.setItem('token', res.data.user.token)

              if (res.data.user.status === "creating") {
                router.push({ name: "TheDashboard" });
              }

            } 
            
          })
    }
  }
  
    const submitForm = () => {
      console.log('submitForm');
      v$.value.$validate().then(() => {
        if (!isCodeSent.value) {
          if (!mode_email.value && !v$.value.$validationGroups['phone'].$error || mode_email.value && !v$.value.$validationGroups['email'].$error) {
            sendCode() 
          }
        } else {
          if (!v$.value.$validationGroups['code'].$error) {
            checkCode()
          } else {
            alert('Enter the code you received in SMS', 'danger')
          }
        }
        
        
      
      })

    }
    return { mode_email, state, v$, submitForm, onVueTelInput, isCodeSent, isValid, data }
  }
})
</script>
<style scoped lang="scss">
.login-form-wrapper {
  width: 480px;
  padding: 0 10px;
}

.login-form-tittle {
  font-weight: 300;
  font-size: 48px;
  line-height: 201px;
}

.login-type-btn {
  cursor: pointer;
  font-weight: 400;
  font-size: 18px;
  line-height: 12px;
  padding:0 68px 10px;
  margin-bottom: 40px;
    color: var(--color-light-gray);
  border-bottom: 1px solid var(--color-light-gray);
  &.active{
    color: var(--color-black);
    border-bottom: 1px solid var(--color-green);
  }
}

.login-type-btns {
  margin-bottom: 45px;
}

.login-type-btns span {
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
}
.policy-text-wrapper {
  margin-left: 35px;
  margin-bottom: 5px;

}
.policy-text {
  font-weight: 400;
  font-size: 14px;
  line-height: 15px;
}

.policy-URL {
  color: #29ABE2;
  cursor: pointer;
}

.container-cbx {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  margin-top: 45px;
}



.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  border: 1px solid #E3E3E3;
  border-radius: 4px;
}


.container-cbx input:checked ~ .checkmark {
  background-color: #F5F5F5;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;  
}

.container-cbx input:checked ~ .checkmark:after {
  display: block;
}

.container-cbx .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid #29ABE2;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>