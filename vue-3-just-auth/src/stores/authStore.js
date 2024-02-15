import {defineStore} from "pinia";

export const useAuthStore = defineStore("auth",{
    state: () => ({
       authUser: null
    }),
    getters: {},
    actions: {},
})