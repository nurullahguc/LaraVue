export default defineEventHandler(async (event) => {
    // // handle query params
    // const query = getQuery(event)
    //
    // // handle post data
    // const body = await readBody(event)

    // return {
    //     message: "Hello, " + query.name + "! age: " + body.age
    // }

    // api call with private key
    const {data} = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_w6usLqWGkDDLE3NReeBr46rrBIMlFRN7zFA0Ei9s')

    return data
})