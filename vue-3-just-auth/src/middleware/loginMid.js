import {useAuthStore} from "@/stores/authStore";
import {ToastMessage} from "@/service/general.service";

export function loginMiddleware(to, from, next) {
    const authStore = useAuthStore()

    if (authStore.authUser.user && authStore.authUser.token) {
        next('/')
        ToastMessage('error', 'You are already logged in!')
    } else {
        next()
    }
}