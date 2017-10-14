import waypoints from '../vendor/noframework.waypoints.js';

var StickyHeader = new Waypoint({
  element: document.querySelector('.hero'),
  handler: function(direction) {
    if (direction === 'down') {
      document.querySelector('.nav-scroll').classList.add('nav-scroll--is-visible');
    } else {
      document.querySelector('.nav-scroll').classList.remove('nav-scroll--is-visible');
    }
  }
})

export default StickyHeader;