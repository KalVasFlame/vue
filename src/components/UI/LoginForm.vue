<template lang="">

  <div class="loginFormWrapper">
    <h1 class="loginFormTitle">Login or Registration</h1>
  <div class="loginTypeBtns">
  <a class="loginTypeBtn">Phone</a>  <span>or</span> <a class="loginTypeBtn">Email</a></div>
  <vue-tel-input class="loginInput" v-model="phone"></vue-tel-input>
  <label class="container">
    <span class="policyText">I agree to receive SMS/text massages. SMS data rates may apply. I agree with <a class="policyURL">Privacy Policy</a></span>
    <input type="checkbox">
    <span class="checkmark"></span>
  </label>
  <button class="getSMSBtn">Get SMS</button>
  </div>
</template>


<script>

export default {
  name: "LoginForm",
  data() {
    return { 
      phone: '',
      agree: false
     }
  },
}
</script>
<style scoped lang="scss">
  
.loginFormWrapper {
  width: 480px;
  padding: 0 10px;
}

.loginFormTitle {
  font-weight: 300;
  font-size: 48px;
  line-height: 201px;
}

.loginTypeBtn {
  font-weight: 400;
  font-size: 18px;
  line-height: 12px;
  padding:0 68px 10px;
  border-bottom: 1px solid #20B472;
  margin-bottom: 40px;
}

.loginTypeBtns {
  margin-bottom: 40px;
}

.loginTypeBtns span {
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
}

.loginInput { 
  background-color: #F1F1F1;
  border-radius: 12px;
    height: 56px;
  width: 387px;
  border: none;
  margin-bottom: 45px;
}


.policyText {
  font-weight: 400;
  font-size: 14px;
  line-height: 15px;
}
.policyURL {
  color: #29ABE2;
  cursor: pointer;
}

.getSMSBtn {
  display: block;
  background-color: #29ABE2;
  color: #fff;
  text-align: center;
  width:190px;
  margin-top: 35px;
  font-weight: 400;
  font-size: 16px;
  line-height: 12px;
  border-radius: 12px;
  padding: 22px;
}

.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
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
</style>