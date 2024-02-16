import { useAuthStore } from "@/stores/authStore";
import { ToastMessage } from "@/service/general.service";

export function authMiddleware(to, from, next) {
    const authStore = useAuthStore();

    if (authStore.authUser.user && authStore.authUser.token) {
        next();
    } else {
        ToastMessage('error', 'Lütfen giriş yapın!');
        next('/login');
    }
}
