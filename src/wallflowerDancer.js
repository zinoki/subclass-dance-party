var wallflowerDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this);
  this.$node = $('<span class="dancer"></span>');
  this.setPosition(top, left);
  this.step = function() {};
  this.setPosition(this.top, this.left);
  this.step();
};

wallflowerDancer.prototype = Object.create(makeDancer.prototype);
wallflowerDancer.prototype.constructor = wallflowerDancer;
