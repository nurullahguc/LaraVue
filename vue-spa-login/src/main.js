import {createApp} from 'vue'
import App from './App.vue'
import router from "@/routes/routes";
import axios from "axios";


axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;
axios.defaults.baseURL = "http://localhost:8000"


createApp(App)
    .use(router)
    .mount('#app')
