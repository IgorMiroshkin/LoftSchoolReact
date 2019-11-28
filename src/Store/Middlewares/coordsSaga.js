import { put, call, takeEvery } from 'redux-saga/effects';
import { fetchCoordsRequest, fetchCoordsSuccess, fetchCoordsFailure } from "../Actions";
import { loadCoords } from "../../Services/helpers_api";

export function * getCoordsWorker(action) {
    try {
        const { error, data } = yield call(loadCoords, action.payload);
        if (!error) yield put(fetchCoordsSuccess(data));
        if (error) yield put(fetchCoordsFailure(error));
    } catch (err) {
        yield put(fetchCoordsFailure(err))
    }
}

export function * getCoordsWatcher() {
    yield takeEvery(fetchCoordsRequest.toString(), getCoordsWorker);
}