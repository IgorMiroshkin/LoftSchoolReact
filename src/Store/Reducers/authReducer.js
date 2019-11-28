import { login, logOut, handleProfileSubmit, handleProfileClear } from "../Actions";

const initialAuthState = {
    isLoggedIn: false,
    profile: {}
};

const authReducer = (state = initialAuthState, action) => {
    switch(action.type) {
        case login.toString():
            return {
                ...state,
                isLoggedIn: true
            };
        case logOut.toString():
            return {
                ...state,
                isLoggedIn: false
            };
        case handleProfileSubmit.toString():
            const { profile } = action.payload;
            return {
                ...state,
                profile: profile
            };
        case handleProfileClear.toString():
            return {
                ...state,
                profile: {}
            };
        default:
            return state
    }
};

export default authReducer;