import {INFOLOG} from '../types';

const initialState = {
    isStackInfoDisplayed: false
};

const isStackInfoDisplayedReducer = (state = initialState, action) => {
    switch(action.type){
        case INFOLOG :
            return {...state, isStackInfoDisplayed: action.payload};

        default :
            return state
    }
}

export default isStackInfoDisplayedReducer;