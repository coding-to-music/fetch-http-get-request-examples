(async () => {
    // GET request using fetch with async/await
    const element = document.querySelector('#get-request-async-await .total');
    const response = await fetch('https://reqres.in/api/users');
    const data = await response.json();
    element.innerHTML = data.total;
})();
