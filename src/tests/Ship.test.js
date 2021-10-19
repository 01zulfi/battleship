import Ship from "../modules/Ship";

describe("test Ship Factory", () => {
  const someShip = Ship(5);

  test("returns ship of correct length", () => {
    expect(someShip).toHaveProperty("length", 5);
  });

  test("returns correct shipArray", () => {
    expect(someShip).toHaveProperty("shipArray", Array(5).fill("live"));
  });

  test("ship gets hit at correct position", () => {
    someShip.hit(4);
    expect(someShip).toHaveProperty("shipArray", [
      ...Array(4).fill("live"),
      "dead",
    ]);
    someShip.hit(0);
    expect(someShip).toHaveProperty("shipArray", [
      "dead",
      "live",
      "live",
      "live",
      "dead",
    ]);
  });

  test("isSunk method returns correct value", () => {
    expect(someShip.isSunk()).toBe(false);
    someShip.hit(1);
    someShip.hit(2);
    someShip.hit(3);
    expect(someShip.isSunk()).toBe(true);
  });
});
