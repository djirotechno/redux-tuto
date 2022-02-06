import { BY_JUICE } from "../type";

const initialStatejuice = {

    juice:10
}


 const juiceReducer = (state = initialStatejuice,action)=>{

    switch (action.type) {
        case BY_JUICE:
            return{
            ...state,
                juice:state.juice - action.payload
            }
    
        default:
        return state;
    }
}


export default juiceReducer