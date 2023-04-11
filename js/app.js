// Get the button element
let button = document.querySelector('#button');

// Add an event listener to the button
button.addEventListener('click', request);



  function success(response) {
    let imageUrl = response.data.message;
    let imageElement = document.createElement('img');
    imageElement.src = imageUrl;
    document.body.appendChild(imageElement);
  };

  function failure(response) {
    console.log('Please close the tab and come back 1 hour later');

  }

  // Make an Axios request to an API
  function request(details){
    axios.get('https://dog.ceo/api/breeds/image/random')
    .then(success)
    .catch(failure);

  };


