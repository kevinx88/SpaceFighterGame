
// Function definitions go up here!

const getData = () => {
  $.ajax({
    type: "GET",
    url: "http://ShakeItSpeare.com/api/sentence"
  })
  .then(function(sents) {
    var shakeSent = sents.sentence;
    console.log(shakeSent);
  })
  .catch(function(err) {
    console.log(err, "Error");
  });

  $.ajax({
    type: "GET",
    url: "http://ShakeItSpeare.com/api/poem"
  })
  .then(function(poems) {
    var shakePoem = poems.poem;
    console.log(shakePoem);
  })
  .catch(function(err) {
    console.log(err, "Error");
  });
};
getData();


const toggleModal = () => {


};

const handleResponse = (data) =>{


};


// Anything dependent on DOM elements goes below
$(document).ready(function(){
  console.log('shakeitspeare.js linked');


});
