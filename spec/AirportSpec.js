describe('Airport', function() {

  var airport;

  beforeEach(function() {
    airport = new Airport;
    plane = jasmine.createSpyObj('plane', ['land']);
  });

  it('should have a plane count of zero by default', function() {
    expect(airport.planeCount.length).toEqual(0);
  });

  it('should have a capacity of 3 planes', function() {
    expect(airport.capacity).toEqual(3);
  });

  it('should be able to park a plane', function() {
    airport.parkPlane(plane);
    expect(airport.planeCount.length).toEqual(1);
  });

  it('should not park a plane if it is full', function() {
    airport.parkPlane();
    airport.parkPlane();
    airport.parkPlane();
    expect(function() { airport.parkPlane() }).toThrow(new Error ('All the parking spaces are taken!'));
  });

});