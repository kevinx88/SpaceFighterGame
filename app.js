$(document).ready(function() {

  // Main Container Aliases
  var ship = document.querySelector('#ship');
  var laser = document.querySelector('#laser');
  var shipCol = document.querySelectorAll('.ship-col');
  var spaceCol = document.querySelectorAll('.space-col');
  var rock = document.querySelector('#rock');
  // End of Main Container Aliases

  /*----- Main Game Section -----*/
  laser.setAttribute('data-column', '1');
  ship.setAttribute('data-column', '1');

  var turnNo = 0;

  var interval = setInterval(function() {
    turnNo += 1;

    if (turnNo === 5) {          //code style here learned
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

  // Timer Section
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


  // $stop.on("click", function() {
  //   // Check stopwatch state to determine if it is running or not
  //   if (intervalId) {
  //     window.clearInterval(intervalId);
  //     intervalId = null;
  //   }
  // }); // End stop event handler





  // End of Timer Section


});
