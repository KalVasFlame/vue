<template>
  <div class="login-form-wrapper">
    <h1 class="login-form-tittle">Login or Registration</h1>
  <div class="login-type-btns">
  <a class="login-type-btn" @click="mode_email = false, isCodeSent = false" :class="{active: !mode_email }" >Phone</a> 
   <span>or</span>
   <a class="login-type-btn" @click="mode_email = true, isCodeSent = false" :class="{active: mode_email }">Email</a>
  </div>
  <vue-tel-input placeholder="12 123 45 67" type="tel" v-if="!mode_email"  @input="onInput"  class="input login" :value="state.phone"></vue-tel-input>
  <input type="email" v-if="mode_email" v-model="state.email" class="input login" placeholder="Enter Email"/>
  <input type="tel" placeholder="Code from SMS" v-if="isCodeSent" v-model="state.code" class="input login"/>

  <label class="container">
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
//  import axios from "axios";
// import qs from "qs";

export default defineComponent({
  setup() {
    const state = ref({
      phone: '',
      email: '',
      agree: false,
      code: '',
    });
    
    const mode_email = ref(false)
    let isValid = ref(false)
    const isCodeSent = ref(false)
   
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

    const onInput = (tel, phoneObject) => {
          if (phoneObject?.number)
            state.value.phone = phoneObject.number
    }

    const v$ = useValidate(rules, state)
  
    const submitForm = () =>  {

    v$.value.$validate().then(() => {
        if (!isCodeSent.value) { // send code
          if (!mode_email.value && !v$.value.$error) { // if phone is valid
            sendCode()
          } else if (mode_email.value && !v$.value.$validationGroups['email'].$error) { // if email is valid
            sendCode()
          }
        } else { // check code
          if (!v$.value.$validationGroups['code'].$error) {
            checkCode()
          } else {
            alertMessage.value.show('Enter the code you received in SMS', 'danger')
          }
        }
      })

      console.log(v$.value);
    }
    return {mode_email, state, v$, submitForm, onInput, isCodeSent, isValid}
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

.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  margin-top: 45px;
}

.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
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


.container input:checked ~ .checkmark {
  background-color: #F5F5F5;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;  
}

.container input:checked ~ .checkmark:after {
  display: block;
}

.container .checkmark:after {
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
input.input {
  margin-top: 25px;
}
</style>