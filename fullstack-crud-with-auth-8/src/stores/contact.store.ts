import {defineStore} from "pinia";

export const contactStore = defineStore('contact', () => {
    const getContact = () => {
        console.log("this method will fetch the all contacts from api")
    }

    return {getContact}
})