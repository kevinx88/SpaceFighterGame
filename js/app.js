'use strict';

document.addEventListener('DOMContentLoaded', function() {


  var ship = document.querySelector('#ship');
  var laser = document.querySelector('#laser');
  var shipCol = document.querySelectorAll('.ship-col');
  var spaceCol = document.querySelectorAll('.space-col');
  var rock = document.querySelector('#rock');
  var start = document.querySelector('.start-game');
  var pressStart = document.querySelector('#press-start');


  /*---------- Main Game Section ----------*/
  laser.setAttribute('data-column', '1');
  ship.setAttribute('data-column', '1');
  rock.setAttribute('data-column', '6');

  start.addEventListener('click', function() {

    pressStart.remove();

    var turnNo = 0;

    var interval = setInterval(function() {
      turnNo += 1;

      if (turnNo === 100) {          //code style here learned
        clearInterval(interval);     //from stackoverflow
      }                              //

      var randomNo = Math.floor(Math.random() * 5);
      spaceCol[randomNo].appendChild(rock);

      var laserPosition = document.querySelector('#laser').getAttribute('data-column');
      var n = document.querySelector('#rock').parentNode.id[6];
      rock.setAttribute('data-column', n);
  }, 1000);

  });


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
  /*---------- End of Main Game Section ----------*/



  // var player = document.querySelector('.player');
  // var turn = document.querySelector('.turn');
  // var score = document.querySelector('.score');

  var timer = document.querySelector('.timer');
  var time = 0;
  var intervalId = null;

  var timeToStr = function(timeVal) {
    var tempTime = timeVal;

      var min = Math.floor(tempTime / 600);
      tempTime = tempTime - (min * 600);

      var sec = Math.floor(tempTime / 10);
      tempTime = tempTime - (sec * 10);

      var dec = tempTime;

    return sec < 10? `0${min}:0${sec}.${dec}0` : `${min}:${sec}.${dec}0`;
  }


  start.addEventListener("click", function() {

      if (!intervalId) {
        intervalId = window.setInterval(function() {
          if (time === 100000) {
            clearInterval(intervalId);
          }

          time += 1;
          timer.textContent = timeToStr(time);
        }, 100);
      }

  });


  var pixel = 75;

  document.addEventListener('keydown', function(event) {

      if (event.which === 32) {
        var laserTop = document.querySelector('#laser').style.top;

        document.querySelector('#laser').setAttribute('style', `top:${pixel}px`);

        (function onImpact() {
          if (6 - parseInt(document.querySelector('#laser').getAttribute('data-column')) === parseInt(document.querySelector('#rock').getAttribute('data-column'))) {
            laser.setAttribute('data-column', '6');
            rock.style.opacity = '0';

            var expl = document.createElement('div');
            expl.setAttribute('id', 'expl');
            rock.parentNode.replaceChild(expl , rock);

            setTimeout(function() {
              alert(`\nAlien invader destroyed! \nYour time is ${timer.textContent}`);
            }, 1500);
          } else {
            setTimeout(function() {
              alert("You Missed! Try again");
            }, 1500);
          }
        })();
      }
  });

});
