var ajaxRequest = new XMLHttpRequest(); // creates new XMLHTTPRequest object
ajaxRequest.addEventListener('readystatechange', function(r) { // adding an event listener
  if(r.target.status === 200) { // r is the captured event; we want 200
    console.log(r.target.response); // successful response
  }
});
ajaxRequest.open("GET", "https://api.github.com/users/questionmarcus", true);
ajaxRequest.send();

// create XML HTTP Request Object
// add an Eventlistener to it based on readystatechange
// that listens to response of an api call made with ajaxRequest
// ajaxRequest object opens a get call to the github api
// then sends it

// when open and send is run, the state of the object changes and the function fires
// we then get r r.target to get object captured
// we're then printing the response
// returns info in JSON
