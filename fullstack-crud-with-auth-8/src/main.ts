import {createApp} from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import {createPinia} from "pinia";
import {useAuthStore} from "@/stores/auth.store";
import {LoadingPlugin} from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

const pinia = createPinia()

const app = createApp(App)

app.use(pinia)

const authStore = useAuthStore()
await authStore.initAuth()

app.use(router)
app.use(LoadingPlugin)
app.mount('#app')
