import {createRouter, createWebHistory} from "vue-router";
import AppLogin from "@/components/AppLogin"
import AppHome from "@/components/AppHome"

const routes = [
    {name: 'Home', path: '/', component: AppHome},
    {name: 'Login', path: '/login', component: AppLogin},

]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router