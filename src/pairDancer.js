var pairDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this);
  this.$node = $('<div class="dancer"><img src="src/linkDancer.gif" width="158.5" height="115.5"></div>');
  this.setPosition(top, left);
  this.findNearest = function() {
    var friend = Math.floor(Math.random() * (window.dancers.length - 1));
    var friendTop = window.dancers[friend].$node[0].style.top;
    var friendLeft = window.dancers[friend].$node[0].style.left;
    this.$node.animate({top: friendTop, left: friendLeft});
  };
  this.findNearest();
  // this.setPosition(this.top, this.left);
};

pairDancer.prototype = Object.create(makeDancer.prototype);
pairDancer.prototype.constructor = pairDancer;
