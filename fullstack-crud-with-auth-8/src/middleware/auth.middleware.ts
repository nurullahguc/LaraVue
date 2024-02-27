import {useAuthStore} from "@/stores/auth.store";
import {ToastMessage} from "@/services/general.service";


export const authMiddleware = (to: any, from: any, next: any) => {
    const authStore = useAuthStore()

    if (!authStore.isLoggedIn) {
        ToastMessage('error', 'Please login first!', 'Error')
        return next('/login')
    }

    return next();
}

export const guestMiddleware = (to: any, from: any, next: any) => {
    const authStore = useAuthStore()

    if (authStore.isLoggedIn) {
        ToastMessage('error', 'You are already logged in!', 'Error')
        return next('/ContactList')
    }

    return next();
}