import Gameboard from "../modules/Gameboard";

describe("test Gameboard", () => {
  const gameboard = Gameboard();

  test("place ships on the board", () => {
    gameboard.at(0, 0).add({ name: "anotherShip", length: 5 });
    expect(gameboard.shipsArray).toContainEqual({
      name: "anotherShip",
      length: 5,
    });
    expect(gameboard.board).toEqual([
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
    gameboard.at(3, 5).add({ name: "someOtherShip", length: 2 });
    expect(gameboard.board).toEqual([
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
    gameboard.at(0, 3).add({ name: "clashShip", length: 2 });
    expect(gameboard.shipsArray).not.toContainEqual({
      name: "clashShip",
      length: 2,
    });
    expect(gameboard.board).toEqual([
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

  test("adds marker for missed attack", () => {
    gameboard.at(0, 9).receiveAttack();
    gameboard.at(3, 0).receiveAttack();
    gameboard.at(3, 4).receiveAttack();
    expect(gameboard.board).toEqual([
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
        "X",
      ],
      Array(10).fill(""),
      Array(10).fill(""),
      ["X", "", "", "", "X", "someOtherShip", "someOtherShip", "", "", ""],
      Array(10).fill(""),
      Array(10).fill(""),
      Array(10).fill(""),
      Array(10).fill(""),
      Array(10).fill(""),
      Array(10).fill(""),
    ]);
  });

  test("returns if attack is on a ship", () => {
    gameboard.at(3, 6).receiveAttack();
    expect(gameboard.board).toEqual([
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
        "X",
      ],
      Array(10).fill(""),
      Array(10).fill(""),
      ["X", "", "", "", "X", "someOtherShip", "someOtherShip", "", "", ""],
      Array(10).fill(""),
      Array(10).fill(""),
      Array(10).fill(""),
      Array(10).fill(""),
      Array(10).fill(""),
      Array(10).fill(""),
    ]);
  });
});
