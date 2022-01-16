


const BUY_PHONE = 'BUY_PHONE'
const BUY_TABLETTE = 'BUY_TABLETTE'

//ACTION 
function buyphone(){

    return {
        type:BUY_PHONE,
        
    }
}


function buytab(){
    
    
    return{
        type:BUY_TABLETTE,
    
    
    }
}

//STATE INITIAL

const initialState = {

    phones:5,
    tablette:10
}

//REDUCER
const reducer = (state = initialState,action)=>{

    switch (action.type) {
        case BUY_PHONE:
            return {
                ...state,
                phones: state.phones -1
            }
        
    
        break


        case BUY_TABLETTE:
            return {
                ...state,
                tablette: state.tablette -1
            }
        
    
        default: return state
            
    }
}

//AFFICHER LE STATE(getState)
const store = Redux.createStore(reducer);

const availablePhon = document.getElementById('count');
const availableTab= document.getElementById('count1');

availablePhon.innerHTML = store.getState().phones;
availableTab.innerHTML = store.getState().tablette;

//dispatcher

document.getElementById('by-phone').addEventListener('click',function(){

    store.dispatch(buyphone());
})


document.getElementById('by-tab').addEventListener('click',function(){

    store.dispatch(buytab());
})

store.subscribe(()=>{
    availablePhon.innerHTML = store.getState().phones;
    availableTab.innerHTML = store.getState().tablette;


})