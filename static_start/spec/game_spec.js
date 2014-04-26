describe("A game of battleship", function () {
  var game;
  beforeEach(function() {
    var shipSquares = ["A1", "A2"];
    game = new Game(shipSquares);
  });

  it("displays initial status", function () {
    expect(game.status()).toBe("You may fire when ready.");
  });

  it("columnHeaders should be column heaer-ey", function(){
      expect(game.columnHeaders[1]).toBe("2");
  });

  xit("can hit a ship", function () {
    game.fire("A1");
    expect(game.status()).toBe("HIT");
  });

  //TODO: Write this spec.
  xit("can miss a ship", function () {
  });
});
