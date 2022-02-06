import {BY_PHONE} from '../type'


export const byphone = totalPhone => {

    return {
        type:BY_PHONE,
        payload:totalPhone
    }
}