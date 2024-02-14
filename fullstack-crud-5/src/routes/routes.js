import {createRouter, createWebHistory} from "vue-router";
import ListContact from "@/components/ListContact"
import CreateContact from "@/components/CreateContact"
import UpdateContact from "@/components/UpdateContact"

const routes = [
    {
        name: 'ListContact',
        path: '/',
        component: ListContact,
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