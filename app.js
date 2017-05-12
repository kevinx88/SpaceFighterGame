$(document).ready(function() {


  var ship = document.querySelector('#ship');
  var laser = document.querySelector('#laser');
  var shipCol = document.querySelectorAll('.ship-col');
  var spaceCol = document.querySelectorAll('.space-col');
  var rock = document.querySelector('#rock');

  laser.setAttribute('data-column', '1');
  ship.setAttribute('data-column', '1');

  var turnNo = 0;

  var interval = setInterval(function() {
    turnNo += 1;

    if (turnNo === 5) {          //the code style here learned
      clearInterval(interval);   //from stackoverflow
    }                            //

    var randomNo = Math.floor(Math.random() * 5);
    spaceCol[randomNo].appendChild(rock);
  }, 500);

  document.addEventListener('keydown', function(event) {
    var leftKey = event.which === 37;
    var rightKey = event.which === 39;
    var laserDataCol = laser.getAttribute('data-column');

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
