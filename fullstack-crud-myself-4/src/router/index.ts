import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListContacts from "@/components/ListContacts.vue";
import CreateContact from "@/components/CreateContact.vue";
import UpdateContact from "@/components/UpdatedContact.vue";
import AgGrid from "@/components/AgGrid.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: ListContacts
    },
    {
        path: '/CreateContact',
        name: 'CreateContact',
        component: CreateContact
    },
    {
        path: '/UpdateContact/:id',
        name: 'UpdateContact',
        component: UpdateContact
    },
    {
        path: '/AgGrid',
        name: 'AgGrid',
        component: AgGrid
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
