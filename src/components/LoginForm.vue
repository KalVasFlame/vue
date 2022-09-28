<template lang="">

  <div class="login-form-wrapper">
    <h1 class="login-form-tittle">Login or Registration</h1>
  <div class="login-type-btns">
  <a class="login-type-btn" @click="mode_email = false, codeSent = false" :class="{active: !mode_email }" >Phone</a> 
   <span>or</span>
   <a class="login-type-btn" @click="mode_email = true, codeSent = false" :class="{active: mode_email }">Email</a>
  </div>
  <vue-tel-input type="tel" v-if="!mode_email"  @input="onInput"  class="input login" :value="state.phone"></vue-tel-input>
  <input type="email" v-if="mode_email" v-model="state.email" class="input login" placeholder="Enter Email"/>
  <input type="tel" placeholder="Code from SMS" v-if="codeSent" v-model="state.code" class="input login"/>

  <label class="container">
    <input type="checkbox" v-model="state.agree">
    <span class="checkmark"></span>
  </label>
  <div class="policy-text-wrapper">
    <span class="policy-text">I agree to receive SMS/text massages. SMS data rates may apply. I agree with <a class="policy-URL">Privacy Policy</a></span>

  </div>
  <button class="btn primary" @click="submitForm">{{codeSent ? "Log In" : "Get SMS"}}</button>
  </div>
  <RadioBtn :title="'Male'" :id="'sex-m'" :value="'male'" :name="'sex'"/>
  <RadioBtn :title="'Female'" :id="'sex-f'" :value="'female'" :name="'sex'"/>

</template>


<script>
import { ref, defineComponent, computed} from "vue";
import useValidate from '@vuelidate/core';
 import { required, minLength, email, helpers, sameAs, maxLength } from '@vuelidate/validators';
 import axios from "axios";
import qs from "qs";
import RadioBtn from './RadioBtn.vue'

export default defineComponent({
  components: {RadioBtn},
  setup() {
    //  const AlertMessage = inject('AlertMessage');
    // console.log("AlertMessage -------");
    // console.log(AlertMessage);
    const state = ref({
      phone: '',
      email: '',
      agree: false,
      code: '',
      sex: ''
    });
    
    const mode_email = ref(false)
    const codeSent = ref(false)
    const resend = ref({
      status: 0,
      counter: 60
    })
    const rules = computed(() => { 
      return {
            phone: { required: helpers.withMessage('Please enter your phone number', required), minLength: minLength(10) },
            email: {
               required: helpers.withMessage('Please enter valid email', required),
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

    let interval = null
    function countDown() {
      resend.value.status = 2
      resend.value.counter = 60

      if (interval === null) {
        interval = setInterval(() => {
          if (resend.value.counter <= 0) {
            resend.value.status = 1
            clearInterval(interval)
            interval = null
          } else {
            resend.value.counter--
          }
        }, 1000)
      }
    }

    function onInput(tel, phoneObject) {
          if (phoneObject?.number)
            state.value.phone = phoneObject.number
    }

    const v$ = useValidate(rules, state)
  
    
    function sendCode() {
      if (resend.value.status !== 2) {

        let data = {}
        if (!mode_email.value) {
          data = {
            phone: state.value.phone
          }
        } else {
          data = {
            email: state.value.email
          }
        }

        axios.post('https://test-lab.labworq.com/api/' + 'my/login', qs.stringify(
          data),
          { headers: { 'content-type': 'application/x-www-form-urlencoded;charset=utf-8', 'app-version': process.env.VUE_APP_VERSION } })
          .then((res) => {

            if (res.data.status === 'success') {
              countDown()

              //  AlertMessage.value.show(res.data.title, 'success')
              codeSent.value = true
            } else {
              //  AlertMessage.value.show(res.data.title, 'success')
            }

          })
          .catch((err) => {
            console.log('err', err);
            // if (err.response.status === 401)
            //   userLogout();
          });
      }
    }

     function checkCode(mode) {
      if (state.value.code && state.value.code.toString().length === 4) {
        //  AlertMessage.value.hideAlert()

        // loader_active.value = true

        let data = {}
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

        axios.post('https://test-lab.labworq.com/api/' + 'my/check-code', qs.stringify(
          data),
          { headers: { 'content-type': 'application/x-www-form-urlencoded;charset=utf-8', 'app-version': process.env.VUE_APP_VERSION } })
          .then((res) => {
            // loader_active.value = false
            console.log('res.data');
            console.log(res.data);
            if (res.data.status === 'success') {

              localStorage.setItem('user_data', JSON.stringify(res.data.user))
              localStorage.setItem('token', res.data.user.token)

              if (res.data.user.status === "confirmed") {
                // redirect
                alert('redirected')
                // this.$router.push({ path: "/dashboard" });
              } else {
                alert('not redirected')
                // this.$router.push({ path: "/signup" });
              }


              //  AlertMessage.value.show(res.data.title, 'success')
              
              codeSent.value = true
            } else {
              // AlertMessage.value.show(res.data.title, 'danger')
            }

          })
          .catch((err) => {
            // loader_active.value = false

            if (err.response.status === 401)
              alert(err.response)
              // userLogout()
          });

      } else {
        if (mode !== 'on-input') {

          // alertMessage.value.show('Enter the code you received in SMS', 'danger')
        }
      }
    }


    function submitForm() {
// AlertMessage.show('Enter the code you received in SMS', 'danger')

      this.v$.$validate().then(() => {
        if (!codeSent.value) { // send code
          if (!mode_email.value && !this.v$.$validationGroups['phone'].$error) { // if phone is valid
            sendCode()
          } else if (mode_email.value && !this.v$.$validationGroups['email'].$error) { // if email is valid
            sendCode()
          }
        } else { // check code
          if (!this.v$.$validationGroups['code'].$error) {
            checkCode()
          } else {
            // AlertMessage.value.show('Enter the code you received in SMS', 'danger')
            alert('Enter the code you received in SMS', 'danger')
          }
        }
      })
    }
    return {mode_email, state, v$, submitForm, onInput, codeSent, sendCode, checkCode}
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
    color: var(--color-lightGray);
  border-bottom: 1px solid var(--color-lightGray);
  &.active{
    color: var(--color-black);
    border-bottom: 1px solid var(--color-green);
  }
}

.login-type-btns {
  margin-bottom: 45px;
}

.loginTypeBtns span {
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