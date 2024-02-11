import { createRouter, createWebHistory } from 'vue-router'
// import App from '@/App'
import ContactList from "@/components/ContactList"
import AddContact from "@/components/AddContact"

const routes = [
  {
    path: '/',
    name: 'ContactList',
    component: ContactList
  },
  {
    path: '/AddContact',
    name: 'AddContact',
    component: AddContact,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
