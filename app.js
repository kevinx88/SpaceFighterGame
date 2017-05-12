$(document).ready(function() {


  var ship = document.querySelector('#ship');
  var laser = document.querySelector('#laser');
  var shipCol = document.querySelectorAll('.ship-col');
  var spaceCol = document.querySelectorAll('.space-col');
  var rock = document.querySelector('#rock');

  /*----- Main Game Section -----*/
  laser.setAttribute('data-column', '1');
  ship.setAttribute('data-column', '1');

  var turnNo = 0;

  var interval = setInterval(function() {
    turnNo += 1;

    if (turnNo === 2) {          //code style here learned
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
  /*----- End of Main Game Section -----*/



  var start = document.querySelector('.start-game');
  var player = document.querySelector('.player');
  var turn = document.querySelector('.turn');
  var score = document.querySelector('.score');

  var timer = document.querySelector('.timer');
  var time = 100;
  var intervalId = null;

  var timeToStr = function(timeVal) {
    var tempTime = timeVal;

      var min = Math.floor(tempTime / 600);
      tempTime = tempTime - (min * 600);

      var sec = Math.floor(tempTime / 10);
      tempTime = tempTime - (sec * 10);

      var dec = tempTime;

    return `0${min}:0${sec}.${dec}0`;
  }


  start.addEventListener("click", function() {

      if (!intervalId) {
        intervalId = window.setInterval(function() {
          if (time === 1) {
            clearInterval(intervalId);
          }

          time -= 1;
          timer.textContent = timeToStr(time);
        }, 10);
      }

  });



  $(document).on('keydown', function(event) {

      setInterval(function() {

        if (event.which === 32) {

          var laserLimit = $('#laser').css('top');
          while (parseInt(laserLimit) > 0) {

            $('#laser').animate({
              'top': '-=50px'
            });

            laserLimit = parseInt(laserLimit) + parseInt(laserLimit) + '';
          }

        }
      }, 50);

  });



});
