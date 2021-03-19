import {ADD,SUBSTRACT} from "../constants/constant";

const initialState = {
    counter : 0
}

export const countReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD: 
        return{
            ...state,
            counter: state.counter + 1
        };
        case SUBSTRACT: 
        return{
            ...state,
            counter: state.counter - 1
        };
        default: return state;
    }
}

