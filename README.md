# Swiper.js

A javascript library for the swipe/flick detection of touch screen.

Current version is 0.3.

## Functions

```
var swipe = new Swiper(dom_element);

// Add event listners.
swipe.start();

// Remove event listners.
swipe.stop();

// Define handling function of 'touchstart' event.
swipe.ontouch = function_for_touch;

// Define handling function of 'touchmove' event.
swipe.onswiping = function_for_swiping;

// Define handling function of 'touchend' event.
swipe.onswiped  = function_for_swiped;
```

## Event properties

### .ontouch

* target : the target element.
* startX : X coordinates of start point.
* startY : Y coordinates of start point.

### .onswiping

* target : the target element.
* dx : delta of X axis.
* dy : delta of Y axis.
* direction: 'right'|'left'|'up'|'down'|'point'
  * swiping to the direction ('right' ... 'down') or not ('point').

### .onswiped

* target : the target element.
* dx : delta pixels of X axis.
* dy : delta pixels of Y axis.
* angle : swiped angle.
* length: distance of start point to end point.
* direction: 'right'|'left'|'up'|'down'

## Thanks

Swiper.js library is based upon [swiping_detector.js](https://github.com/mozilla-b2g/gaia/blob/master/apps/keyboard/js/views/swiping_detector.js).
