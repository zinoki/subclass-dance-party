var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this);
  var oldStep = this.step;
  this.$node = makeDancer.prototype.$node;
  makeDancer.prototype.setPosition.call(this, top, left);
  this.step();
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;
makeBlinkyDancer.prototype.step = function() {
  oldStep.call(this);
  console.log(this, '2');
  this.$node.toggle();
};

