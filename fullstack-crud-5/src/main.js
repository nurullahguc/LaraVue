import {createApp} from 'vue'
import App from './App.vue'
import router from "@/routes/routes";
import 'vue-loading-overlay/dist/css/index.css';
import {LoadingPlugin} from 'vue-loading-overlay';
import ToastPlugin from 'vue-toast-notification';
//import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-bootstrap.css';


createApp(App)
    .use(router)
    .use(LoadingPlugin)
    .use(ToastPlugin)
    .mount('#app')
