import ListContacts from "@/components/ListContact"
import CreateContact from "@/components/CreateContact"
import EditContact from "@/components/EditContact"

import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        name: 'ContactList',
        path: '/',
        component: ListContacts
    },
    {
        name: 'CreateContact',
        path: '/CreateContact',
        component: CreateContact,
    },
    {
        name: 'EditContact',
        path: '/EditContact/:id?',
        component: EditContact,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;