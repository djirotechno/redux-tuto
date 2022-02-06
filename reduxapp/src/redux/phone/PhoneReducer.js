import { BY_PHONE } from "../type";

const initialStatephone = {

    phone:5
}

const Reducer = (state = initialStatephone,action)=>{

    switch (action.type) {
        case BY_PHONE:
            return{
            ...state,
                phone:state.phone - action.payload
            }
        default: 
        return state;

            
    }
}


export default Reducer;