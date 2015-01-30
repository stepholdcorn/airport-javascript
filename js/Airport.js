var Airport = function() {
  this.capacity = 3;
  this.planeCount = [];
  this.isStormy = false;
};

Airport.prototype.parkPlane = function(plane) {
  if (this.planeCount.length < 3) {
    this.planeCount.push(plane);
  }
  else {
    throw new Error ('All the parking spaces are taken!');
  };
};

Airport.prototype.dispatchPlane = function(plane) {
  if (this.planeCount.length > 0) {
    var i = this.planeCount.indexOf(plane);
    if (i != -1) {
    this.planeCount.splice(i, 1);
    }
  }
  else {
    throw new Error ('There are no planes to dispatch');
  };
};