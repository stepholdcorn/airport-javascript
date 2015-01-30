describe('Airport', function() {

  var airport;

  beforeEach(function() {
    airport = new Airport;
  });

  it('should have a plane count of zero by default', function() {
    expect(airport.planeCount.length).toEqual(0);
  });

});