//Grab a reference to the header tag in the HTML file
const header = document.querySelector('header');

//Grab a reference to the section tag in the HTML file
const section = document.querySelector('section');

//Where the Json file is

let requestURL = 'https://tekimanvi.github.io/Heroes/superheroes.json';

//Generating a XHR Request 
let request = new XMLHttpRequest();

// Opens the json - two parameters - type of request and the URL to make the request to
request.open('GET', requestURL);

//  here we are setting the responseType to JSON, so that XHR knows that the server will be returning JSON
request.responseType = 'json';

//Sending Request 
request.send();

// The last bit of this section involves waiting for the request load event to be returned from the server.


request.onload = function() {            // After the page is loaded
  const superHeroes = request.response; 
  populateHeader(superHeroes);
  showHeroes(superHeroes);
}

