# Swiper.js

A javascript library for the swipe detection of touch screen.

## Functions

```
var swipe = new Swiper(dom_element);

// Add event listners.
swipe.start();

// Remove event listners.
swipe.stop();

// Define handling function of 'touchmove' event.
swipe.onswiping = function_for_swiping;

// Define handling function of 'touchend' event.
swipe.onswiped  = function_for_swiped;
```

## Event properties

### .onswiping

* id : the element id.
* dx : delta of X axis.
* dy : delta of Y axis.
* direction: 'right'|'left'|'up'|'down'|'point'
  * swiping to 'right' ... 'down' direction or not ('point').

### .onswiped

* id : the element id.
* dx : delta pixels of X axis.
* dy : delta pixels of Y axis.
* angle : swiped angle.
* length: swiped length.
* direction: 'right'|'left'|'up'|'down'

## Thanks

Swiper.js library is based upon [swiping_detector.js](https://github.com/mozilla-b2g/gaia/blob/master/apps/keyboard/js/views/swiping_detector.js).
