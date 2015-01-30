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

  it('should be flying when it has taken off', function() {
    plane.takeoff();
    expect(plane.flying).toBe(true);
  });

});