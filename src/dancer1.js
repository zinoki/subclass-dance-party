var makeDancer = function(top, left, timeBetweenSteps) {
};

makeDancer.prototype.$node = $('<span class="dancer"></span>');
makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
makeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step, this.timeBetweenSteps);
  console.log('hi');
};


// need to set dancer default position 


var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  this.setPosition(top, left);
  this.step();
  this.oldStep = this.step;
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

var blinky = new makeBlinkyDancer(10, 10, 1000);
console.log(blinky.$node);
