var rickDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this);
  this.$node = $('<div class="dancer"><img src="src/rick.gif" width="158.5" height="115.5"></div>');
  this.setPosition(top, left);
  this.setPosition(this.top, this.left);
};

rickDancer.prototype = Object.create(makeDancer.prototype);
rickDancer.prototype.roll = function(){};
rickDancer.prototype.constructor = rickDancer;

