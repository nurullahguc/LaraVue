import {defineStore} from "pinia";
import {ToastMessage} from "@/services/general.service";
import {computed, ref} from "vue"
import {apiClient} from "@/common/http-common";
import {Credentials, User} from "@/models/auth.model";
import router from "@/router";
import {authService} from "@/api/auth.api";

export const useAuthStore = defineStore('auth', () => {

    const user = ref<User | null>(null)

    const isLoggedIn = computed(() => !!user.value)

    const login = async (credentials: Credentials) => {
        await authService.getToken()
        try {
            await authService.login(credentials)
                .then(res => {
                    ToastMessage('success', 'login successfully!', 'Successfully')
                })
            await getUser()

            router.push('/ContactList')
        } catch (err) {
            console.log(err)
        }
    }


    const getUser = async () => {
        await authService.getUser()
            .then(res => {
                user.value = res.data
            })
    }

    const logout = async () => {
        if (!isLoggedIn.value) {
            ToastMessage('error', 'You need to login first!', 'Error')
            return;
        }
        try {
            await authService.logout()
            user.value = null
            ToastMessage('info', 'You are logout successfully!', 'Successfully!')
            router.push('/login')
        } catch (e) {
            console.log(e)
        }

    }

    const initAuth = async () => {
        try {
            await getUser()
        } catch (err) {
            console.log(err)
        }
    }

    return {user, isLoggedIn, login, logout, initAuth}
})