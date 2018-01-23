var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  this.oldStep = this.step;
  this.step = function() {
    this.oldStep();
    this.$node.toggle();
  };
  this.setPosition(top, left);
  this.step();
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;