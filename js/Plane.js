var Plane = function() {
  this.flying = true;
};

Plane.prototype.land = function() {
  if (this.flying === true) {
    this.flying = false;
  }
  else {
    throw new Error ('That plane has already landed!');
  };
};

Plane.prototype.takeoff = function() {
  if (this.flying === false) {
    this.flying = true;
  }
  else {
    throw new Error ('That plane is already flying!');
  };
};
