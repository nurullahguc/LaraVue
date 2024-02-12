import {ref} from "vue";
import {NumberTypeEnum} from "@/enums/number.enum";

export let isLoading = ref(false)
export let timeoutValue = ref(NumberTypeEnum.MAX)

export function onUnLoading() {
    setTimeout(() => {
        isLoading.value = false
    }, timeoutValue.value)

    timeoutValue.value = NumberTypeEnum.MAX
}