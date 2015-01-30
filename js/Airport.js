var Airport = function() {
  this.capacity = 3;
  this.planeCount = [];
};

Airport.prototype.parkPlane = function(plane) {
  if (this.planeCount.length < 3) {
    this.planeCount.push(plane);
  }
  else {
    throw new Error ('All the parking spaces are taken!');
  };
};