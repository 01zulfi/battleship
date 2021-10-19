import Ship from "../modules/Ship";

test("returns ship of correct length", () => {
  expect(Ship(1)).toHaveProperty("length", 1);
});

test("returns correct shipArray", () => {
  expect(Ship(5)).toHaveProperty("shipArray", Array(5).fill("live"));
});

test("ship gets hit at correct position", () => {
  const someShip = Ship(5);
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
