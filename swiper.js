// Copyright (c) 2015, Masahiko Imanaka. All rights reserved.
// Swiper.js version 0.2
(function(exports) {
'use strict';

function Swiper(elm) {
  this.element = elm;
  this.startX = this.startY = null;
  this.elmId = null;
}

Swiper.prototype.onswiping = null;
Swiper.prototype.onswiped = null;

Swiper.prototype.start = function () {
  this.element.addEventListener('touchstart', this);
  this.element.addEventListener('touchmove', this);
  this.element.addEventListener('touchend', this);
};

Swiper.prototype.stop = function () {
  this.element.removeEventListener('touchstart', this);
  this.element.removeEventListener('touchmove', this);
  this.element.removeEventListener('touchend', this);
};

Swiper.prototype.handleEvent = function (ev) {
  var touch,
      direction;
  switch(ev.type) {
    case 'touchstart':
      touch = ev.touches[0];
      this.startX = touch.pageX;
      this.startY = touch.pageY;
      this.touchID = touch.identifier;
      if (ev.target.id !== 'undefined') {
        this.elmId = ev.target.id;
      }
      break;

    case 'touchmove':
      touch = ev.touches[0];
      if (touch.identifier != this.touchID) {
        return;
      }
      if (typeof this.onswiping === 'function') {
        dx = touch.pageX - this.startX;
        dy = touch.pageY - this.startY;
        direction = _getSimple4Direction(dx, dy);
        this.onswiping({
          id: this.elmId,
          dx: dx,
          dy: dy,
          direction: direction
        });
      } else {
        console.error('swiper: .onswiping function is not defined.');
      }
      //console.log('swiper: (touchmove)', direction, dx, dy);
      break;

    case 'touchend':
      var dx, dy;
      touch = ev.changedTouches[0];
      if (touch.identifier != this.touchID) {
        return;
      }
      if (typeof this.onswiped === 'function') {
        dx = touch.pageX - this.startX;
        dy = touch.pageY - this.startY;
        var length = _getLength(dx, dy);
        var angle = _getAngle(dx, dy);
        direction = _getDirection(angle);
        this.onswiped({
          id: this.elmId,
          dx: dx,
          dy: dy,
          length: length,
          angle: angle,
          direction: direction
        });
      } else {
        console.error('swiper: .onswiped function is not defined.');
      }
      //console.log('swiper: (touchend)', direction, dx, dy);
      break;
    default:
  }
};

function _getLength(dx, dy) {
  var len = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
  //return Math.round(length*100) / 100;
  return Math.round(len);
}

function _getAngle(dx, dy) {
  var angle = Math.atan2(dy, dx) * 180 / Math.PI;
  return (angle < 0) ? angle + 360 : angle;
}

function _getDirection(angle) {
  var dir_array = ['right', 'down', 'left', 'up'],
      angle_range = 360 / dir_array.length;
  angle += angle_range / 2;
  if (angle > 360) {
    angle -= 360;
  }
  return dir_array[Math.floor(angle / angle_range)];
}

function _getSimple4Direction(dx, dy) {
  if (dx === 0 && dy === 0) {
    return 'point';
  }
  return (Math.abs(dx) >= Math.abs(dy)) ?
    ((dx > 0) ? 'right' : 'left') :
    ((dy > 0) ? 'up' : 'down');
}

exports.Swiper = Swiper;

})(window);
