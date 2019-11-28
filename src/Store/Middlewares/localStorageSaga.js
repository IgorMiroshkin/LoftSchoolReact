import { spawn, takeLeading, takeEvery } from 'redux-saga/effects';
import { handleProfileSubmit, handleProfileClear, login, logOut } from "../Actions";

function saveProfileWorker(action) {
    const { isLoggedIn, profile } = action.payload;
    localStorage.state = JSON.stringify({isLoggedIn, profile});
}

function clearProfileWorker() {
    const { isLoggedIn } = localStorage.state ? JSON.parse(localStorage.state) : false;
    localStorage.state = JSON.stringify({ isLoggedIn: isLoggedIn });
}

function logOutWorker(action) {
    const isLoggedIn = false;
    const { profile } = localStorage.state ? JSON.parse(localStorage.state) : {};
    localStorage.state = JSON.stringify({ isLoggedIn: isLoggedIn, profile })
}

function loginWorker(action) {
    const isLoggedIn = true;
    const { profile } = localStorage.state ? JSON.parse(localStorage.state) : {};
    localStorage.state = JSON.stringify({isLoggedIn: isLoggedIn, profile});
}

function * saveProfileWatcher() {
    yield takeLeading(handleProfileSubmit.toString(), saveProfileWorker);
}

function * clearProfileWatcher() {
    yield takeLeading(handleProfileClear.toString(), clearProfileWorker)
}

function * logOutWatcher() {
    yield takeEvery(logOut.toString(), logOutWorker)
}

function * loginWatcher() {
    yield takeEvery(login.toString(), loginWorker)
}

export function * handleLocalStorageSaga() {
    yield spawn(saveProfileWatcher);
    yield spawn(clearProfileWatcher);
    yield spawn(logOutWatcher);
    yield spawn(loginWatcher);
}