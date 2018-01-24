var makeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
};

makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.repeater = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.lineUp = function(spacer) {
  this.$node.animate({top: '80%', left: spacer});
};

makeDancer.prototype.moveTo = function(destinationTop, destinationLeft) {
  this.$node.animate({top: destinationTop, left: destinationLeft});
};