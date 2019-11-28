import { http } from './instance';

export const checkAuth = ({ username, password }) => {
    return http(`/auth?username=${username.trim()}&password=${password.trim()}`, {
        method: 'GET',
        mode: 'cors'
    })
    .then(res => res)
};

export const loadAddressList = () => {
    return http('/addressList', {
        method: 'GET',
        mode: 'cors'
    })
    .then(res => res)
};

export const loadCoords = ({ address1, address2 }) => {
    return http(`/route?address1=${address1}&address2=${address2}`, {
        method: 'GET',
        mode: 'cors'
    })
    .then(res => res)
};