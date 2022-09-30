import { createRouter, createWebHistory } from "vue-router";
import RegistrationForm from "../modules/login/components/RegistrationForm.vue"


const routes = [
// { path: "/:catchAll(.*)", redirect: '/foo'},

  { path: '/foo', component: RegistrationForm },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router