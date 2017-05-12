$(document).ready(function() {

  var ship = document.querySelector('#ship');
  var laser = document.querySelector('#laser');
  var shipCol = document.querySelectorAll('.ship-col');
  var spaceCol = document.querySelectorAll('.space-col');
  var rock = document.querySelector('#rock');

  /* End of aliases */


  laser.setAttribute('data-column', '1');
  ship.setAttribute('data-column', '1');

  // setInterval(function() {
  //   var randomNo = Math.floor(Math.random() * 5);
  //   spaceCol[randomNo].appendChild(rock);
  // }, 1000);


  document.addEventListener('keydown', function(event) {
    var leftKey = event.which === 37;
    var rightKey = event.which === 39;

    var laserDataCol = laser.getAttribute('data-column');
    // var laserDataCol2 = laser.getAttribute('data-column') === 2;
    // var laserDataCol3 = laser.getAttribute('data-column') === 3;
    // var laserDataCol4 = laser.getAttribute('data-column') === 4;
    // var laserDataCol5 = laser.getAttribute('data-column') === 5;

    if (laserDataCol === '1' && rightKey) {
      return;
    } else if (laserDataCol === '5' && leftKey) {
      return;
    } else if (leftKey) {
      var col = parseInt(laserDataCol) + 1 + '';
      laser.setAttribute('data-column', col);
      ship.setAttribute('data-column', col);
    } else if (rightKey) {
      var col = parseInt(laserDataCol) - 1 + '';
      laser.setAttribute('data-column', col);
      ship.setAttribute('data-column', col);
    }
  });



});
