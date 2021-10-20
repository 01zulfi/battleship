import Gameboard from "../modules/Gameboard";

describe("test Gameboard", () => {
  const gameboard = Gameboard();

  test("adds a ship", () => {
    gameboard.add({ name: "ship", length: 3 });
    expect(gameboard).toHaveProperty("shipsOnTheBoard", [
      { name: "ship", length: 3 },
    ]);
  });

  test("place ships on the board", () => {
    gameboard.add({ name: "anotherShip", length: 5 }).at(0, 0);
    expect(gameboard.shipsOnTheBoard).toContainEqual({
      name: "anotherShip",
      length: 5,
    });
    expect(gameboard.gameboardArray).toEqual([
      [
        "anotherShip",
        "anotherShip",
        "anotherShip",
        "anotherShip",
        "anotherShip",
        "",
        "",
        "",
        "",
        "",
      ],
      Array(10).fill(""),
      Array(10).fill(""),
      Array(10).fill(""),
      Array(10).fill(""),
      Array(10).fill(""),
      Array(10).fill(""),
      Array(10).fill(""),
      Array(10).fill(""),
      Array(10).fill(""),
    ]);
    gameboard.add({ name: "someOtherShip", length: 2 }).at(3, 5);
    expect(gameboard.gameboardArray).toEqual([
      [
        "anotherShip",
        "anotherShip",
        "anotherShip",
        "anotherShip",
        "anotherShip",
        "",
        "",
        "",
        "",
        "",
      ],
      Array(10).fill(""),
      Array(10).fill(""),
      ["", "", "", "", "", "someOtherShip", "someOtherShip", "", "", ""],
      Array(10).fill(""),
      Array(10).fill(""),
      Array(10).fill(""),
      Array(10).fill(""),
      Array(10).fill(""),
      Array(10).fill(""),
    ]);
  });

  test("does not place ships if overlaps", () => {
    gameboard.add({ name: "clashShip", length: 2 }).at(0, 3);
    expect(gameboard.shipsOnTheBoard).not.toContainEqual({
      name: "clashShip",
      length: 2,
    });
    expect(gameboard.gameboardArray).toEqual([
      [
        "anotherShip",
        "anotherShip",
        "anotherShip",
        "anotherShip",
        "anotherShip",
        "",
        "",
        "",
        "",
        "",
      ],
      Array(10).fill(""),
      Array(10).fill(""),
      ["", "", "", "", "", "someOtherShip", "someOtherShip", "", "", ""],
      Array(10).fill(""),
      Array(10).fill(""),
      Array(10).fill(""),
      Array(10).fill(""),
      Array(10).fill(""),
      Array(10).fill(""),
    ]);
  });
});
