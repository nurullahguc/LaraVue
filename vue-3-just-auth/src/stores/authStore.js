import {defineStore} from "pinia";
import axios from "axios";
import {token} from "../axios"
import router from "@/routes/routes";


export const useAuthStore = defineStore("auth", {
    state: () => ({
        authUser: null
    }),
    getters: {},
    actions: {
        async handleLogin(creadentials) {
            await axios.post("/login", {
                email: creadentials.email,
                password: creadentials.password,
            }).then(response => {
                this.authUser = {user: response.data.user, token: response.data.token}
                console.log(response.data)
                console.log("token => " + response.data.token.token)
                token.value = response.data.token.token
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
        }
    },
})