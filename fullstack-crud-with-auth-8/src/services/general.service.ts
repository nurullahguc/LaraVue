import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import {ref} from "vue";

type ToastrType = 'success' | 'info' | 'warning' | 'error';

export const ToastMessage = (type: ToastrType, message: string, title?: string): void => {
    toastr[type](message, title);

    toastr.options = {
        closeButton: false,
        debug: false,
        newestOnTop: false,
        progressBar: false,
        positionClass: 'toast-top-right',
        preventDuplicates: false,
        // onclick: null,
        showDuration: 300,
        hideDuration: 1000,
        timeOut: 5000,
        extendedTimeOut: 1000,
        showEasing: 'swing',
        hideEasing: 'linear',
        showMethod: 'fadeIn',
        hideMethod: 'fadeOut'
    };
};


export const isLoading = ref<boolean>(false)
