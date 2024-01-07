const initialState = 0;
const amountReducer = (state= initialState, action)=>{
    console.log(state)
    switch(action.type)
    {
        case 'deposit':{
            return state + action.payload;
        }

        case 'withdraw':{
            return state - action.payload;
        }
        default:
            return state;
    }
}

export default amountReducer;