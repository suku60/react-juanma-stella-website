import {INFOLOG, TECNOLOGYLOG} from '../types';

const initialState = {
    isStackInfoDisplayed: false,
    stackInfo: {}
};

const isStackInfoDisplayedReducer = (state = initialState, action) => {
    switch(action.type){
        case INFOLOG :
            return {...state, isStackInfoDisplayed: action.payload};
        
        case TECNOLOGYLOG :
            return {...state, stackInfo: action.payload};

        default :
            return state
    }
}

export default isStackInfoDisplayedReducer;