import { put, call, takeEvery } from 'redux-saga/effects';
import { fetchAddressRequest, fetchAddressSuccess, fetchAddressFailure } from "../Actions";
import { loadAddressList } from '../../Services/helpers_api.js';

export function * loadAddressWorker() {
    try {
        const { error, data } = yield call(loadAddressList);
        if (!error) yield put(fetchAddressSuccess(data.addresses));
        if (error) yield put(fetchAddressFailure(error))
    } catch (err) {
        yield put(fetchAddressFailure(err))
    }
}

export function * loadAddressWatcher() {
    yield takeEvery(fetchAddressRequest.toString(), loadAddressWorker);
};