import {useAuthStore} from "@/sotres/authStore";
import {ToastMessage} from "@/services/general.service";


export const authMiddleware = (to, from, next) => {
    const authStore = useAuthStore()

    if (!authStore.user) {
        ToastMessage('error', 'Lütfen giriş yapın!', 'error')
        return next('login')
    }

    return next()
}

export const loginMiddleware = (to, from, next) => {
    const authStore = useAuthStore()
    if (authStore.user) {
        ToastMessage("error", "Logout first!", "Error!")
        return next('ContactList')
    } else
        return next()
}
