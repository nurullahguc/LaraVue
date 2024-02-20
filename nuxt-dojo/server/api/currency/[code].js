export default defineEventHandler(async (event) => {
    // get parameter
    const code = event.context.params
    // return code

    const {currencyKey} = useRuntimeConfig()

    const {data} = await $fetch('https://api.currencyapi.com/v3/latest?apikey=' + currencyKey)
    return data


})