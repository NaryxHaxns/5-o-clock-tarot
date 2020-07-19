const BASE_URL = '/api/readings/';

export default {
    saveReading,
    pastReadingIndex,
    addReflection
}

function saveReading(newReading) {
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

function pastReadingIndex(userId) {
    return fetch(BASE_URL + 'pastReadingIndex/' + userId).then(res => res.json());
}

function addReflection(newReflection) {
    return fetch(BASE_URL + 'addReflection', {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(newReflection)
    })
    .then(res => {
        if (res.ok) return res.json();
        throw new Error('Please try again');
    })
    .then((data) => console.log(data));
}