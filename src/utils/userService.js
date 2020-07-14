import tokenService from './tokenService';

const BASE_URL = '/api/users/';

export default {
    signup,
    getUser,
    login,
    logout,
};

function signup(user){
    return fetch(BASE_URL + 'signup', {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(user)
    })
    .then(res => {
        if (res.ok) return res.json();
        throw new Error('Please try again');
    })
    .then(({ token }) => tokenService.setToken(token));
}

function getUser(){
    return tokenService.getUserFromToken();
}

function login(creds){
    return fetch(BASE_URL + 'login', {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(creds)
    })
    .then(res => {
        if (res.ok) return res.json();
        throw new Error('Please try again');
    })
    .then(({ token }) => tokenService.setToken(token));
  }

function logout(){
    tokenService.removeToken();
}
