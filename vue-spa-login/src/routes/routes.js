import {createRouter, createWebHistory} from "vue-router";
import AppLogin from "@/components/AppLogin"

const routes = [
    {
        path: '/login',
        component: AppLogin
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;