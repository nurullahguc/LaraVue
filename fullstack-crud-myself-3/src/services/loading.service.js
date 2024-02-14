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

//#region Status Types
// export function useStatusTypeOfUse() {
//     const items = reactive([
//         { text: 'Firma', key: StatusTypeEnum.COMPANY },
//         { text: 'Malzeme', key: StatusTypeEnum.INVENTORY },
//         { text: 'Planlama', key: StatusTypeEnum.PLANNING },
//         {
//             text: 'Planlama Hareketleri',
//             key: StatusTypeEnum.PLANNINGTRANSACTION,
//         },
//         { text: 'Üretim', key: StatusTypeEnum.PRODUCTION },
//         { text: 'Fiş', key: StatusTypeEnum.FICHE },
//         { text: 'Fiş Hareketleri', key: StatusTypeEnum.FICHETRANSACTION },
//         { text: 'Sipariş', key: StatusTypeEnum.ORDER },
//         { text: 'Sipariş Hareketleri', key: StatusTypeEnum.ORDERTRANSACTION },
//         { text: 'Talep', key: StatusTypeEnum.DEMAND },
//         { text: 'Talep Harektleri', key: StatusTypeEnum.DEMANDTRANSACTION },
//         { text: 'Fiş Entegrasyon', key: StatusTypeEnum.FICHEINTEGRATION },
//     ])
//     return items
// }
//
// export function useFilterStatusTypeBykey(v: number) {
//     const type = useStatusTypeOfUse().filter((x) => x.key === v)
//     if (type.length > 0) return type[0].text
//     else return ''
// }
//#endregion