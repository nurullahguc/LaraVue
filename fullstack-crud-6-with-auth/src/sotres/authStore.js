import {defineStore} from "pinia";
import router from "@/routes/routes";
import {ToastMessage} from "@/services/general.service";
import {isLoading} from "@/services/general.service";
import {token} from "@/axios";

export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: null,
        user: null,
    }),
    actions: {
        login(data) {
            localStorage.setItem('token', JSON.stringify(data.token))
            localStorage.setItem('user', JSON.stringify(data.user))
            this.token = data.token
            this.user = data.user
            token.value = data.token
        },
        logout(hardly = false) {
            isLoading.value = true
            this.token = null
            this.user = null
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            router.push('/Login')
            isLoading.value = false
            if (hardly === false)
                ToastMessage('success', 'Logout successfully!', 'Successfully!')
        },
        initAuth() {
            this.token = JSON.parse(localStorage.getItem('token'))
            this.user = JSON.parse(localStorage.getItem('user'))
            token.value = this.token
        }
    }
})