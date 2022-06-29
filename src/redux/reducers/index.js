
import {combineReducers} from 'redux';

import infoDisplay from './infoDisplayData-reducer';

const rootReducer = combineReducers({
    infoDisplay,
});

export default rootReducer;