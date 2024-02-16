import {defineStore} from "pinia";
import axios from "axios";
import {token} from "../axios"
import router from "@/routes/routes";
import {ToastMessage} from "@/service/general.service";


export const useAuthStore = defineStore("auth", {
    state: () => ({
        authUser: {}
    }),
    getters: {},
    actions: {
        async handleLogin(creadentials) {
            await axios.post("/login", {
                email: creadentials.email,
                password: creadentials.password,
            }).then(response => {
                this.authUser = {user: response.data.user, token: response.data.token}
                localStorage.setItem('token', response.data.token.token)
                localStorage.setItem('authUser', JSON.stringify({user: response.data.user, token: response.data.token}))
                token.value = response.data.token.token
                ToastMessage('success', 'Giriş başarılı! Hoş geldiniz ' + this.authUser.user.name);
                router.push("/")
            }).catch(err => {
                console.log(err)
            }).finally(() => {
                console.log('request done!')
            })
        },
        async handleCheckLogin() {
            await axios.get("http://larapi.com/api/login_control")
                .then(response => {
                    console.log(response.data)
                })
                .catch(err => {
                    console.log(err)
                })
                .finally(() => {
                    console.log('request done!')
                })
        },
        logout() {
            this.authUser = {};
            localStorage.removeItem('token')
            localStorage.removeItem('authUser')
            ToastMessage('info', 'Çıkış yapıldı!');
            router.push('/login')
        },
        initAuth() {
            const storedUser = localStorage.getItem('authUser')
            if (storedUser) {
                this.authUser = JSON.parse(storedUser)
            }
        }
    },
})