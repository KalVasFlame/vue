<template>
<div class="d-flex">
<div class="xm">
    <div class="container" >
    <p class="h3">
        Registration
    </p>
     
     <div class=" d-flex f-wrap jc-sb section-wrapper pt-30 pb-30">
        <input class="input m" placeholder="Name" type="text" id="name"
        v-model="form.name"
        >

        <input class="input xs" placeholder="Mid" type="text" id="mid" 
        v-model="form.mid"
        >

        <input class="input m" placeholder="Last Name" type="text" id="last"
        v-model="form.last"
         >
     </div>
     <p class="h5 mt-25">Address</p>
        <div class=" d-flex f-wrap jc-sb section-wrapper pt-30 pb-30">
           
            <Select2 class="select2 l"  
        :options="countries" 
        :settings="{ placeholder: 'Countries' }"
        v-model="form.country"
        />

        <input class="input m mt-20" placeholder="City" type="text" id="city"
        v-model="form.city"
         >

        <input class="input m mt-20" placeholder="State" type="text" id="state"
        v-model="form.state"
         >

        <input class="input xs mt-20" placeholder="Zip Code" type="text" id="zip"
        onkeyup="this.value = this.value.replace(/[^\d]/g,'');"
        v-model="form.zip"
         >

        <input class="input l mt-20" placeholder="Street Address" type="text" id="street"
        v-model="form.street"
         >


        <div class="d-flex ">
            <input class="input m mt-20" placeholder="Building" type="text" id="building"
        v-model="form.building"
         >
        <input class="input mt-20 xs" style="margin-left: 30px" placeholder="Apartments" type="text" id="apartments"
        onkeyup="this.value = this.value.replace(/[^\d]/g,'');"
        v-model="form.apartments"
         ></div>
        </div>
        
        <p class="h5 mt-25">Date of Birth</p>

        <div class=" d-flex section-wrapper pt-30 pb-30">
           <Select2 class="select2 m"  
        :options="months" 
        :settings="{ placeholder: 'Month' }"
        v-model="form.month"
        />

        <input class="input xs" style="margin-left: 30px" placeholder="Day" type="text" id="day"
        onkeyup="this.value = this.value.replace(/[^\d]/g,'');"
        v-model="form.day"
         >

        <input class="input xs" style="margin-left: 30px" placeholder="Year" type="text" id="year"
        onkeyup="this.value = this.value.replace(/[^\d]/g,'');"
        v-model="form.year"
         >
        </div>

        

    </div>
</div>
<div class="img-container ml-100">
<img src="../../../assets/images/registration-form-img.jpg" alt="">
</div>
</div>
      <button  class="btn mt-50 primary xs" type="button" @click="formSubmit">Submit</button>
</template>
<script>
import { computed, defineComponent, reactive, ref } from "vue";
import Select2 from 'vue3-select2-component';
import useValidate from '@vuelidate/core';
import { helpers, required, minLength, minValue, maxValue } from "@vuelidate/validators";
import countries from '../services/countries-list'
import months from '../services/months-list'

export default defineComponent({
components: {Select2},
setup() {
    console.log('');
    const form = reactive({
        name: '',
        mid: '',
        last: '',
        country: '',
        city: '',
        state: '',
        zip: '',
        street: '',
        building: '',
        apartments: '',
        month: '',
        day: '',
        year: '',
    })

    const rules = computed(()=> {
        return {
            name: {
                required: helpers.withMessage("Please enter your name", required), 
                minLength: minLength(2)
            },
            mid: { required: helpers.withMessage("Please enter your mid name", required), 
                minLength: minLength(2) 
            },
            last: {
               required: helpers.withMessage("Please enter your last name", required), 
                minLength: minLength(2)
            },
            country: {
               required: helpers.withMessage("Please chose your country", required)
            },
            city: {
               required: helpers.withMessage("Please enter your city", required),
               minLength: minLength(2)
            },
            state: {
               required: helpers.withMessage("Please enter your state", required),
               minLength: minLength(2)
            },
            zip: {
               required: helpers.withMessage("Please enter your zip code", required),
               minLength: minLength(2)
            },
            street: {
               required: helpers.withMessage("Please enter your street", required),
               minLength: minLength(2)
            },
            building: {
               required: helpers.withMessage("Please enter your building number", required),
            },
            apartments: {
               required: helpers.withMessage("Please enter your apartments number", required),
            },
            months: { required },
            day: {
                 required, minLength: minLength(1), minValue: minValue(1), maxValue: maxValue(31) 
            },
            year: { 
                required, minLength: minLength(4), minValue: minValue(1920), maxValue: maxValue(new Date().getFullYear()) 
            },
        }
    })

    const v$ = useValidate(rules, form)
    let isValid = ref(false)
    const formSubmit = async () => {
        isValid =  await v$.value.$validate()
     }

    return { form, v$, formSubmit, isValid, countries, months }
}    
})
</script>

<style lang="scss">


.xxs {
        width: calc(10% - 20px);
}
.xs {
        width: calc(20% - 20px);
}
.s {
        width: calc(30% - 20px);
}
.m { 
        width: calc(40% - 20px);
}
.xm { 
        width: calc(60% - 20px);
}

.l { 
        width: calc(100%);
}

.section-wrapper {
    border-bottom: 1px solid var(--color-gray);
}

.img-container {
    overflow: hidden;
    border-top-left-radius: 100px;
    border-bottom-right-radius: 100px;
    
 }

 img {
    width: 100%;
    height: 100%;
    object-fit:fill;	
}

</style>
