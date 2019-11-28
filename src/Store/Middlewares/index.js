import { spawn } from 'redux-saga/effects';

import { authWatcher } from "./authSaga";
import { loadAddressWatcher } from "./addressSaga";
import { getCoordsWatcher } from "./coordsSaga";
import { handleLocalStorageSaga } from './localStorageSaga';

export default function * rootSaga() {
    yield spawn(authWatcher);
    yield spawn(loadAddressWatcher);
    yield spawn(getCoordsWatcher);
    yield spawn(handleLocalStorageSaga);
}