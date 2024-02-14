import Vue from "vue";
import Vuex from "vuex"
import axios from "axios";
import {router} from "./router";

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        token: "",
        fbApiKey: "AIzaSyAGIag4KGMR7GMinQnpX3qrDY8w-k43izQ",
    },
    mutations: {
        setToken(state, token) {
            state.token = token
        },
        clearToken(state) {
            state.token = ""
        }
    },
    actions: {
        initAuth({commit, dispatch}) {
            let token = localStorage.getItem("token")
            if (token) {
                let expirationDate = localStorage.getItem("expirationDate")
                let time = new Date().getTime()
                console.log("time => " + time)
                console.log("expirationDate => " + expirationDate)
                if (time >= +expirationDate) {
                    console.log("token süresi geçmiş")
                    dispatch("logout")
                } else {
                    commit("setToken", token)
                    let timerSecond = +expirationDate - time
                    console.log(timerSecond)
                    dispatch("setTimeoutTimer", timerSecond)
                    router.push("/")
                }
                commit("setToken", token)
                router.replace("/")
            } else {
                router.push("/auth")
                return false
            }
        },

        login({commit, dispatch, state}, authData) {

            let authLink = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="
            if (authData.isUser) {
                authLink = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="
            }

            return axios.post(
                authLink + "AIzaSyAGIag4KGMR7GMinQnpX3qrDY8w-k43izQ",
                {email: authData.email, password: authData.password, returnSecureToken: true}
            ).then(response => {
                console.log(response)
                commit("setToken", response.data.idToken)
                localStorage.setItem("token", response.data.idToken)

                localStorage.setItem("expirationDate", new Date().getTime() + response.data.expiresIn * 1000)
                // localStorage.setItem("expirationDate", new Date().getTime() + 5000)

                dispatch("setTimeoutTimer", +response.data.expiresIn * 1000)
                // dispatch("setTimeoutTimer", 4000)

            }).catch(err => {
                alert(err.message)
            })

        },
        logout({commit, dispatch, state}) {
            commit('clearToken')
            localStorage.removeItem("token")
            localStorage.removeItem("expirationDate")
            router.replace("/auth")
        },
        setTimeoutTimer({dispatch}, expiresIn) {
            setTimeout(() => {
                dispatch("logout")
            }, expiresIn)
        }
    },
    getters: {
        isAuthenticated(state) {
            return state.token !== ""
        }
    },
})

export default store