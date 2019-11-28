import { fetchAddressRequest, fetchAddressSuccess, fetchAddressFailure } from "../Actions";

const initialAddressState = {
    myAddress: [],
    isLoadingAddress: null,
    error: null,
    errorText: null
};

const loadAddressReducer = (state = initialAddressState, action) => {
    switch(action.type) {
        case fetchAddressRequest.toString():
            return {
                ...state,
                isLoadingAddress: true
            };
        case fetchAddressSuccess.toString():
            return {
                ...state,
                myAddress: action.payload,
                isLoadingAddress: false,
                error: null,
                errorText: null
            };
        case fetchAddressFailure.toString():
            return {
                ...state,
                error: action.payload,
                errorText: 'Ошибка загрузки. Проверьте подключение к сети',
                isLoadingAddress: false
            };
        default:
            return state
    }
};

export default loadAddressReducer;