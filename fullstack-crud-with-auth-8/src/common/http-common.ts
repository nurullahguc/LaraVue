import axios, {AxiosInstance} from "axios";
import {ToastMessage} from "@/services/general.service";

export const apiClient: AxiosInstance = axios.create({
    baseURL: 'https://sanctum.cskyone.com',
    headers: {
        'Content-type': 'application/json; charset=utf-8',
        'Accept-Language': 'tr',
    },
    timeout: 500000,
    withCredentials: true,
    withXSRFToken: true
})

apiClient.interceptors.response.use(
    response => response,
    error => {
        console.log(error)
        const errorMessage = error.response && error.response.data ? error.response.data.message : error.message;
        ToastMessage('error', errorMessage, 'Hata!');
        const statusCode = error.response.status
        console.log("my status code => " + statusCode)
        return Promise.reject(error)
    }
)