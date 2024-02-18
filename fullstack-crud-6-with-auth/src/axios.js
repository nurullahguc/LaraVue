import axios from "axios";
import {ToastMessage} from "@/services/general.service";
import {ref, watchEffect} from "vue";
import {useAuthStore} from "@/sotres/authStore";

export const token = ref('');

axios.defaults.baseURL = "https://examplebackend.cskyone.com/api";

watchEffect(() => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token.value?.token}`;
});

axios.interceptors.response.use(
    response => {
        return response
    },
    error => {
        const errorMessage = error.response && error.response.data ? error.response.data.message : error.message;
        ToastMessage('error', errorMessage, 'Hata!');
        let statusCode = error.response.status
        if (statusCode === 401) {
            const authStore = useAuthStore()
            authStore.logout(true)
        }
        error.isHandled = true;
        return Promise.reject(error)
    }
)

