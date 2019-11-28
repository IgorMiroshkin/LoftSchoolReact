import { createAction } from 'redux-actions';

export const login = createAction('LOGIN');
export const logOut = createAction('LOGOUT');
export const auth = createAction('AUTH');

export const handleProfileSubmit = createAction('HANDLE_PROFILE_SUBMIT');
export const handleProfileClear = createAction('HANDLE_PROFILE_CLEAR');

export const fetchAddressRequest = createAction('FETCH_ADDRESS_REQUEST');
export const fetchAddressSuccess = createAction('FETCH_ADDRESS_SUCCESS');
export const fetchAddressFailure = createAction('FETCH_ADDRESS_FAILURE');

export const fetchCoordsRequest = createAction('FETCH_COORDS_REQUEST');
export const fetchCoordsSuccess = createAction('FETCH_COORDS_SUCCESS');
export const fetchCoordsFailure = createAction('FETCH_COORDS_FAILURE');

export const setIsOrderMade = createAction('SET_IS_ORDER_MADE');