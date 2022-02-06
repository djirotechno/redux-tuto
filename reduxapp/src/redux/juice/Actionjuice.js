import { BY_JUICE } from '../type'

const byjuice = totalJuice => {

    return{
        type:BY_JUICE,
        payload:totalJuice
    }
}


export default byjuice