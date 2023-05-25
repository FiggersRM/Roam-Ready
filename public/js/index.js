var airportName = prompt('Please enter the airport name:');





const url = `https://api.api-ninjas.com/v1/airports?name=${airportName}`;
const apiKey = 'VT9HqL9lI8jssWnFpkZmzg==9RCLPnNkULlRghIa';

fetch(url, {
  headers: {
    'X-Api-Key': apiKey,
    'Content-Type': 'application/json'
  }
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error('Error:', error);
  });


