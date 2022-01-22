// GET request using fetch with error handling
const element = document.querySelector('#get-request-error-handling .total');
fetch('https://reqres.in/invalid-url')
    .then(async response => {
        const isJson = response.headers.get('content-type')?.includes('application/json');
        const data = isJson && await response.json();

        // check for error response
        if (!response.ok) {
            // get error message from body or default to response status
            const error = (data && data.message) || response.status;
            return Promise.reject(error);
        }

        element.innerHTML = data.total;
    })
    .catch(error => {
        element.parentElement.innerHTML = `Error: ${error}`;
        console.error('There was an error!', error);
    });
