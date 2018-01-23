var makeDancer = function(top, left, timeBetweenSteps) {

};

makeDancer.prototype.$node = $('<span class="dancer"></span>');
makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
makeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step, timeBetweenSteps);
};