import {createApp} from 'vue'
import App from './App.vue'
import router from "@/routes/routes";
import {createPinia} from "pinia";
import "./axios"

const pinia = createPinia()

const app = createApp(App)
app.use(pinia)
app.use(router)

app.mount('#app')
