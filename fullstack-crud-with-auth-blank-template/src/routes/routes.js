import {createRouter, createWebHistory} from "vue-router";
import AppLogin from "@/components/AppLogin"
import AppLayout from "@/components/AppLayout"
import AboutPage from "@/components/AboutPage"
import ContactList from "@/components/ContactList"
import CreateContact from "@/components/CreateContact"
import UserProfile from "@/components/UserProfile"

const routes = [
    {path: '/Login', component: AppLogin},
    {
        path: '/',
        component: AppLayout,
        children: [
            {
                path: '/About',
                name: 'About',
                component: AboutPage
            },
            {
                path: '/ContactList',
                name: 'ContactList',
                component: ContactList
            },
            {
                path: '/CreateContact',
                name: 'CreateContact',
                component: CreateContact
            },
            {
                path: '/UserProfile',
                name: 'UserProfile',
                component: UserProfile
            },
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})


export default router