import {ref} from "vue";
import {useToast} from "vue-toast-notification";

export const base_url = "http://larapi.com/api"
export const isLoading = ref(false)

const $toast = useToast()


export const ToastMessage = (type, meesage, position = "top-right") => {
    $toast.open({
        message: meesage,
        type: type,
        position: position,
    });
}
