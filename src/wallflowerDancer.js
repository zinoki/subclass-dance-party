var wallflowerDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this);
  this.$node = $('<span class="wallflower dancer"><img src="src/squidward.gif" width="100" height="100"></span>');
  this.setPosition(top, left);
  this.step = function() {};
  this.setPosition(this.top, this.left);
  this.step();
};

wallflowerDancer.prototype = Object.create(makeDancer.prototype);
wallflowerDancer.prototype.constructor = wallflowerDancer;
