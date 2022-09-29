<template>
    <form class="card" @submit.prevent="formSubmit">
     
        <input class="input" placeholder="Name" type="text" id="name"
        v-model="form.name"
        >

        <input class="input" placeholder="Mid" type="text" id="mid" 
        v-model="form.mid"
        >

        <input class="input error" placeholder="Last Name" type="text" id="last"
        v-model="form.last"
         >

        <Select2 class="select2"  
        :options="countries" 
        :settings="{ placeholder: 'Countries' }"
        v-model="form.country"
        />

        <!-- <input class="input" placeholder="City" type="text" id="city"
        v-model="form.city"
         >

        <input class="input" placeholder="State" type="text" id="state"
        v-model="form.state"
         >

        <input class="input" placeholder="Zip Code" type="text" id="zip"
        onkeyup="this.value = this.value.replace(/[^\d]/g,'');"
        v-model="form.zip"
         >

        <input class="input" placeholder="Street Address" type="text" id="street"
        v-model="form.street"
         >

        <input class="input" placeholder="Building" type="text" id="building"
        onkeyup="this.value = this.value.replace(/[^\d]/g,'');"
        v-model="form.building"
         >

        <input class="input" placeholder="Apartments" type="text" id="apartments"
        onkeyup="this.value = this.value.replace(/[^\d]/g,'');"
        v-model="form.apartments"
         >

        <input class="input" placeholder="Day" type="text" id="day"
        onkeyup="this.value = this.value.replace(/[^\d]/g,'');"
        v-model="form.day"
         >

        <input class="input" placeholder="Year" type="text" id="year"
        onkeyup="this.value = this.value.replace(/[^\d]/g,'');"
        v-model="form.year"
         > -->

      <button :disabled="isValid.value" class="btn delete" type="submit">Submit</button>
    </form>
</template>
<script>
import { computed, defineComponent, reactive, ref } from "vue";
import Select2 from 'vue3-select2-component';
import useValidate from '@vuelidate/core';
import { helpers, required, minLength, minValue, maxValue } from "@vuelidate/validators";
import countries from '../assets/countries-list'

export default defineComponent({
components: {Select2},
setup() {
    console.log(countries);
    const form = reactive({
        name: 'Jaco',
        mid: 'matumbaman',
        last: 'Lasso',
        country: 'Ukraine',
        city: 'Lviv',
        state: 'sad',
        zip: '123123',
        street: 'seqwe',
        building: '1234',
        apartments: '123123',
        month: 'wqqwqwe',
        day: '12',
        year: '1941',
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

    return { form, v$, formSubmit, isValid, countries }
}    
})
</script>
