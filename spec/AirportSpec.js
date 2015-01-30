describe('Airport', function() {

  var airport;

  beforeEach(function() {
    airport = new Airport;
    plane = jasmine.createSpyObj('plane', ['land', 'takeoff']);
  });

  describe('by default', function() {
    it('should have a plane count of zero', function() {
      expect(airport.planeCount.length).toEqual(0);
    });

    it('should have a capacity of 3 planes', function() {
      expect(airport.capacity).toEqual(3);
    });
  });

  describe('traffic control', function() {
    it('should be able to park a plane', function() {
      airport.parkPlane(plane);
      expect(airport.planeCount.length).toEqual(1);
    });

    it('should not park a plane if it is full', function() {
      airport.parkPlane(plane);
      airport.parkPlane(plane);
      airport.parkPlane(plane);
      expect(function() { airport.parkPlane(plane) }).toThrow(new Error ('All the parking spaces are taken!'));
    });

    it('should be able to dispatch a plane', function() {
      airport.parkPlane(plane);
      airport.dispatchPlane(plane);
      expect(airport.planeCount.length).toEqual(0);
    });

    it('should not dispatch a plane if it is empty', function() {
      expect(function() { airport.dispatchPlane(plane) }).toThrow(new Error ('There are no planes to dispatch'));
    });

  });

  describe('weather system', function() {
    it('should usually not be stormy', function() {
      expect(airport.isStormy).toBe(false);
    });
  });

});