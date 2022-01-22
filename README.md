# Fetch HTTP GET Requests Examples

By [Jason Watmore](https://jasonwatmore.com/contact) 

PUBLISHED: SEPTEMBER 06 2021

https://jasonwatmore.com/post/2021/09/06/fetch-http-get-request-examples

https://stackblitz.com/edit/fetch-http-get-request-examples?file=index.js

## Fetch - HTTP GET Request Examples
Below is a quick set of examples to show how to send HTTP GET requests to an API using fetch() which comes bundled with all modern browsers.

## Other HTTP examples available:

Fetch: POST, PUT, DELETE
Axios: GET, POST, PUT, DELETE
React + Fetch: GET, POST, PUT, DELETE
React + Axios: GET, POST, PUT, DELETE
Angular: GET, POST, PUT, DELETE
Vue + Fetch: GET, POST
Vue + Axios: GET, POST
Blazor WebAssembly: GET, POST

## Simple GET request using fetch
This sends an HTTP GET request to the Reqres api which is a fake online REST api used for testing, it includes an /api/users route that supports GET requests and returns an array of users plus the total number of users. This example writes the total from the response to the #get-request .total element so it's displayed on the page.

```java
// Simple GET request using fetch
const element = document.querySelector('#get-request .total');
fetch('https://reqres.in/api/users')
    .then(response => response.json())
    .then(data => element.innerHTML = data.total );
```

Example Fetch GET request at https://stackblitz.com/edit/fetch-http-get-request-examples?file=get-request.js


## GET request using fetch with async/await
This sends the same GET request using fetch, but this version uses an async function and the await javascript expression to wait for the promises to return (instead of using the promise then() method as above).

```java
(async () => {
    // GET request using fetch with async/await
    const element = document.querySelector('#get-request-async-await .total');
    const response = await fetch('https://reqres.in/api/users');
    const data = await response.json();
    element.innerHTML = data.total;
})();
```

Example Fetch GET request at https://stackblitz.com/edit/fetch-http-get-request-examples?file=get-request-async-await.js


## GET request using fetch with error handling
This sends a GET request with fetch to an invalid url on the api then writes the error message to the parent of the #get-request-error-handling .total element and logs the error to the console.

The fetch() function will automatically throw an error for network errors but not for HTTP errors such as 4xx or 5xx responses. For HTTP errors we can check the response.ok property to see if the request failed and reject the promise ourselves by calling return Promise.reject(error);. This approach means that both types of failed requests - network errors and http errors - can be handled by a single catch() block.

```java
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
```

Example Fetch GET request at https://stackblitz.com/edit/fetch-http-get-request-examples?file=get-request-error-handling.js


## GET request using fetch with set HTTP headers
This sends the same GET request again using fetch with a couple of headers set, the HTTP Authorization header and a custom header My-Custom-Header.

```java
// GET request using fetch with set headers
const element = document.querySelector('#get-request-set-headers .total');
const headers = {
    'Authorization': 'Bearer my-token',
    'My-Custom-Header': 'foobar'
};
fetch('https://reqres.in/api/users', { headers })
    .then(response => response.json())
    .then(data => element.innerHTML = data.total);
```

Example Fetch GET request at https://stackblitz.com/edit/fetch-http-get-request-examples?file=get-request-set-headers.js

 


## Subscribe or Follow Me For Updates
Subscribe to my YouTube channel or follow me on Twitter, Facebook or GitHub to be notified when I post new content.

Subscribe on YouTube at https://www.youtube.com/JasonWatmore
Follow me on Twitter at https://twitter.com/jason_watmore
Follow me on Facebook at https://www.facebook.com/JasonWatmoreBlog
Follow me on GitHub at https://github.com/cornflourblue
Feed formats available: RSS, Atom, JSON
## Other than coding...
I'm currently attempting to travel around Australia by motorcycle with my wife Tina on a pair of Royal Enfield Himalayans. You can follow our adventures on YouTube, Instagram and Facebook.

Subscribe on YouTube at https://www.youtube.com/TinaAndJason
Follow us on Instagram at https://www.instagram.com/tinaandjason
Follow us on Facebook at https://www.facebook.com/TinaAndJasonVlog
