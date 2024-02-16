import {createApp} from 'vue'
import App from './App.vue'
import router from "@/routes/routes";
import {createPinia} from "pinia";
import "./axios"
import ToastPlugin from 'vue-toast-notification';
// Import one of the available themes
import 'vue-toast-notification/dist/theme-bootstrap.css';
import {useAuthStore} from "@/stores/authStore";

const pinia = createPinia()

const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(ToastPlugin)

const authStore = useAuthStore()
authStore.initAuth()



app.mount('#app')
