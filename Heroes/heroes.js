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

function populateHeader(jsonObj) {
  // Create a <h1> HTML element
  const myH1 = document.createElement('h1');
  
  // Set the text value to Super Hero Squad
  // by grabbing the JSON object value that corresponds to squadName
  myH1.textContent = jsonObj['squadName'];
  
  // Update the HTML file
  header.appendChild(myH1);

  // Create a <p> element 
  const myPara = document.createElement('p');
  
  //Set the text value to Hometown: Metro City // Formed: 2016
  myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
  
  // Update the HTML file
  header.appendChild(myPara);
}

function showHeroes(jsonObj) {

  // Grab the array that contains the squads members
  // Once we have the array we can treat this like an ordinary array just like we did on
  // the page Object, Class, and Array Practice
  const heroes = jsonObj['members'];
      
  // Loop through the heores object array 
  // Add information for each hero one at a time
  for (let i = 0; i < heroes.length; i++) {
  
    // We need to create the HTML objects that they will appear in HTML file
    
    // Create article element in the HTML file
    // We use the article element to create a card that will hold all of the hero's information 
    const myArticle = document.createElement('article');
    
    // Create a <H2> heading for the hero's name
    const myH2 = document.createElement('h2');
    
    // Create paragraphs for the hero's secret identity, age, and superpowers
    const myPara1 = document.createElement('p');
    const myPara2 = document.createElement('p');
    const myPara3 = document.createElement('p');
    
    // Create a bulleted list to contain the hero's superpowers    
    const myList = document.createElement('ul');

    // Grab the hero's secret identity, age, and superpowers from the JSON Object and
    // update the HTML elements
    myH2.textContent = heroes[i].name;
    myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
    myPara2.textContent = 'Age: ' + heroes[i].age;
    myPara3.textContent = 'Superpowers:';
    
    // Grab the array that contains the hero's superpowers    
    const superPowers = heroes[i].powers;
    
    // Loop through the array grabbing each individual power and adding it to a bulleted list
    for (let j = 0; j < superPowers.length; j++) {
      const listItem = document.createElement('li');
      listItem.textContent = superPowers[j];
      myList.appendChild(listItem);
    }

    // Add the HTML objects in the order that they will appear in HTML article
    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);
    
    // Add the article to the HTML file
    section.appendChild(myArticle);
  }
}

