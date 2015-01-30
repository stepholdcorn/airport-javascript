describe ('Plane', function() {

  var plane;

  beforeEach(function() {
    plane = new Plane;
  });

  it('should be flying by default', function() {
    expect(plane.flying).toBe(true);
  });

  it('should not be flying when it has landed', function() {
    plane.land();
    expect(plane.flying).toBe(false);
  });

  it('should not be able to be landed when not flying', function() {
    plane.land();
    expect(function() { plane.land() }).toThrow(new Error ('That plane has already landed!'));
  });

  it('should be flying when it has taken off', function() {
    plane.land();
    plane.takeoff();
    expect(plane.flying).toBe(true);
  });

  it('should not be able to take off when it is already flying', function() {
    expect(function() { plane.takeoff() }).toThrow(new Error ('That plane is already flying!'));
  });

});