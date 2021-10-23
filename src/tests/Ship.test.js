import Ship from "../modules/Ship";

describe("test Ship Factory", () => {
  const someShip = Ship("someShip", 5);

  test("returns ship of correct length", () => {
    expect(someShip).toHaveProperty("length", 5);
  });

  test("returns correct shipArray", () => {
    expect(someShip).toHaveProperty("shipArray", Array(5).fill(""));
  });

  test("ship gets hit at correct position", () => {
    someShip.hit(4);
    expect(someShip).toHaveProperty("shipArray", [...Array(4).fill(""), "hit"]);
    someShip.hit(0);
    expect(someShip).toHaveProperty("shipArray", ["hit", "", "", "", "hit"]);
  });

  test("returns correct boolean for isHitAt", () => {
    expect(someShip.isHitAt(0)).toEqual(true);
    expect(someShip.isHitAt(3)).toBe(false);
  });

  test("isSunk method returns correct value", () => {
    expect(someShip.isSunk()).toBe(false);
    someShip.hit(1);
    someShip.hit(2);
    someShip.hit(3);
    expect(someShip.isSunk()).toBe(true);
  });
});
