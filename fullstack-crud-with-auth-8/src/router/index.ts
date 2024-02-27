import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AppLogin from "../views/AppLogin.vue"
import ContactList from "../views/ContactList.vue"
import CreateContact from "../views/CreateContact.vue"
import UpdateContact from "../views/UpdateContact.vue"
import {authMiddleware, guestMiddleware} from "@/middleware/auth.middleware";

const routes: Array<RouteRecordRaw> = [
    {name: 'Login', path: '/Login', component: AppLogin, beforeEnter: guestMiddleware},
    {
        path: '/',
        beforeEnter: authMiddleware,
        children: [
            {name: 'ContactList', path: '/ContactList', component: ContactList},
            {name: 'CreateContact', path: '/CreateContact', component: CreateContact},
            {name: 'UpdateContact', path: '/UpdateContact/:id', component: UpdateContact},
        ]
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
