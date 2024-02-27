import {createApp} from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import {createPinia} from "pinia";
import {useAuthStore} from "@/stores/auth.store";

const pinia = createPinia()

const app = createApp(App)

app.use(pinia)

const authStore = useAuthStore()
await authStore.initAuth()

app.use(router)
app.mount('#app')
