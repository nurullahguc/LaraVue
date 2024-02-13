// import {ref} from 'vue'
import {useToast} from "vue-toast-notification";
import {exportTypedArrayStaticMethod} from "core-js/internals/array-buffer-view-core";
import {useLoading} from "vue-loading-overlay";
import {ref} from "vue";

export const base_url = 'http://larapi.com/api'

export const $loading = useLoading({width: 30, height: 30});
const loader = ref(null)

export function ToastMessage(type, message, position = 'top-right') {
    const $toast = useToast()
    $toast.open({
        message: message,
        type: type,
        position: position,
    })
}

export const blockAllPage = () => {
    loader.value = $loading.show();
}

export const unBlockAllPage = () => {
    loader.value.hide()
}

