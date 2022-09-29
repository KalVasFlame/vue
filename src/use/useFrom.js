import { reactive } from "vue";


const useForm = (init = {}) => {

    const form = reactive({init})


return form
}

export default useForm