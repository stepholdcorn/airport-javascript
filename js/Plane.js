var Plane = function() {
  this.takeoff();
};

Plane.prototype.land = function() {
  this.flying = false;
};

Plane.prototype.takeoff = function() {
  this.flying = true;
};
