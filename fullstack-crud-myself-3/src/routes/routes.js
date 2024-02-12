import ContactList from "@/components/ContactList"
import CreateContact from "@/components/CreateContact"
import UpdateContact from "@/components/UpdateContact"
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        name: 'ContactList',
        path: '/',
        component: ContactList,
    },
    {
        name: 'CreateContact',
        path: '/CreateContact',
        component: CreateContact
    },
    {
        name: 'UpdateContact',
        path: '/UpdateContact/:id?',
        component: UpdateContact
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;
