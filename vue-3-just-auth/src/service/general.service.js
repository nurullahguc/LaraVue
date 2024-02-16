import {useToast} from 'vue-toast-notification';

const $toast = useToast();

export const ToastMessage = (type, message) => {
    $toast.open({
        message: message,
        type: type,
    });
}
