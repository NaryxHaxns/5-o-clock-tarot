import tokenService from "./tokenService";

const BASE_URL = '/api/readings/';

export default {
    saveReading,
    pastReadingIndex,
    addReflection,
    deleteReflection
}

function saveReading(newReading) {
    return fetch(BASE_URL + 'create', {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + tokenService.getToken()}),
        body: JSON.stringify(newReading)
    })
        .then(res => {
            if (res.ok) return res.json();
            throw new Error('Please try again');
        })
        .then((data) => console.log(data));
}

function pastReadingIndex(userId) {
    return fetch(BASE_URL + 'pastReadingIndex/' + userId, {
        headers: new Headers({ 'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + tokenService.getToken()}),
    })
    .then(res => res.json());
}

function addReflection(newReflection) {
    return fetch(BASE_URL + 'addReflection', {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + tokenService.getToken()}),
        body: JSON.stringify(newReflection)
    })
    .then(res => {
        if (res.ok) return res.json();
        throw new Error('Please try again');
    })
    .then((data) => console.log(data));
}

function deleteReflection(reflection) {
    return fetch(BASE_URL + 'deleteReflection', {
        method: 'DELETE',
        headers: new Headers({ 'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + tokenService.getToken()}),
        body: JSON.stringify(reflection)
    })
    .then(res => {
        if (res.ok) return res.json();
        throw new Error('Please try again');
    })
    .then((data) => console.log(data));
}
