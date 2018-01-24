var pairDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this);
  this.$node = $('<div class="dancer"><img src="src/linkDancer.gif" width="158.5" height="115.5"></div>');
  this.setPosition(top, left);
  this.findNearest = function() {
    
  };
  // this.setPosition(this.top, this.left);
};

pairDancer.prototype = Object.create(makeDancer.prototype);
pairDancer.prototype.constructor = pairDancer;