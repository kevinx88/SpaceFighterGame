$(document).ready(function() {

  var ship = document.querySelector('#ship');
  var laser = document.querySelector('#laser');
  var shipCol = document.querySelectorAll('.ship-col');
  var spaceCol = document.querySelectorAll('.space-col');


  /* End of aliases */
  document.addEventListener('keydown', function(event) {
    var leftKey = event.which === 37;
    var rightKey = event.which === 39;

    var laserDataCol = laser.getAttribute('data-column');
    // var laserDataCol2 = laser.getAttribute('data-column') === 2;
    // var laserDataCol3 = laser.getAttribute('data-column') === 3;
    // var laserDataCol4 = laser.getAttribute('data-column') === 4;
    // var laserDataCol5 = laser.getAttribute('data-column') === 5;

    // if (laserDataCol === '1' && leftKey) {
    //   laser.setAttribute('data-column', '2');
    //   ship.setAttribute('data-column', '2');
    // } else if (laserDataCol === '5' && rightKey) {
    //   laser.setAttribute('data-column', '4');
    //   ship.setAttribute('data-column', '4');
    // } else if (leftKey) {
    //   var col = parseInt(laserDataCol) + 1 + '';
    //   laser.setAttribute('data-column', col);
    //   ship.setAttribute('data-column', col);
    // } else if (rightKey) {
    //   var col = parseInt(laserDataCol) - 1 + '';
    //   laser.setAttribute('data-column', col);
    //   ship.setAttribute('data-column', col);
    // }
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
