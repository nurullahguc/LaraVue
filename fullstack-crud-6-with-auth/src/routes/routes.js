import {createRouter, createWebHistory} from "vue-router";
import AppLogin from "@/components/AppLogin"
import AppLayout from "@/components/AppLayout"
import AboutPage from "@/components/AboutPage"
import ContactList from "@/components/ContactList"
import EditContact from "@/components/EditContact"
import CreateContact from "@/components/CreateContact"
import UserProfile from "@/components/UserProfile"
import {authMiddleware, loginMiddleware} from "@/middleware/authMid";

const routes = [

    {path: '/Login', component: AppLogin, beforeEnter: loginMiddleware},
    {
        path: '/',
        component: AppLayout,
        beforeEnter: authMiddleware,
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
                path: '/EditContact/:id',
                name: 'EditContact',
                component: EditContact
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