import {createApp} from 'vue';
import App from './App.vue';
import router from "@/routes/routes";
import "./axios";
import {createPinia} from "pinia";
import {useAuthStore} from "@/sotres/authStore";
import {LoadingPlugin} from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

const app = createApp(App);

app.use(createPinia())
app.use(router);
app.use(LoadingPlugin);

const authStore = useAuthStore()
authStore.initAuth()

app.mount('#app');
