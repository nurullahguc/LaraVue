import axios from "axios";
import { ref, watchEffect } from "vue";

export const token = ref('');

axios.defaults.baseURL = "http://larapi.com/api";

watchEffect(() => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token.value}`;
});
