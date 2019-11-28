import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';

import authReducer from "./authReducer";
import loadAddressReducer from "./loadAddressReducer";
import coordsReducer from "./coordsReducer";

const rootReducer = combineReducers({
    authReducer,
    loadAddressReducer,
    coordsReducer,
    form: formReducer
});

export default rootReducer;