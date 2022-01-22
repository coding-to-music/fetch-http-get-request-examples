// Simple GET request using fetch
const element = document.querySelector('#get-request .total');
fetch('https://reqres.in/api/users')
    .then(response => response.json())
    .then(data => element.innerHTML = data.total );
