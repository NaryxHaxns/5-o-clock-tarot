const BASE_URL = '/api/readings/';

export default {
    saveReading,
    userIndex
}

function saveReading(newReading){
    return fetch(BASE_URL + 'create', {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(newReading)
    })
    .then(res => {
        if (res.ok) return res.json();
        throw new Error('Please try again');
    })
    .then((data) => console.log(data));
}

function userIndex(userId){
    console.log('hitting UserIndex serviceworker', userId)
    return fetch(BASE_URL + 'userIndex/' + userId).then(res => res.json());
}