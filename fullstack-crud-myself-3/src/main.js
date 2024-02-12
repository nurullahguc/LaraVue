import {createApp} from 'vue'
import App from './App.vue'
import router from "@/routes/routes";
import ToastPlugin from "vue-toast-notification";
import 'vue-toast-notification/dist/theme-sugar.css'
import {LoadingPlugin} from "vue-loading-overlay";
import 'vue-loading-overlay/dist/css/index.css'


createApp(App)
    .use(router)
    .use(ToastPlugin)
    .use(LoadingPlugin)
    .mount('#app')
