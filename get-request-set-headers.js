// GET request using fetch with set headers
const element = document.querySelector('#get-request-set-headers .total');
const headers = {
    'Authorization': 'Bearer my-token',
    'My-Custom-Header': 'foobar'
};
fetch('https://reqres.in/api/users', { headers })
    .then(response => response.json())
    .then(data => element.innerHTML = data.total);
