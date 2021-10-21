import Gameboard from "../modules/Gameboard";
import Ship from "../modules/Ship";

describe("test Gameboard", () => {
  const gameboard = Gameboard();
  const ship1 = Ship(5);
  const ship2 = Ship(2);
  ship1.name = "firstShip";
  ship2.name = "secondShip";
  const ship3 = { name: "thirdShip", length: 2, hit: jest.fn() };

  test("place ships on the board", () => {
    gameboard.at(0, 0).add(ship1);
    expect(gameboard.shipsArray).toContainEqual(ship1);
    expect(gameboard.board).toEqual([
      [ship1, ship1, ship1, ship1, ship1, "", "", "", "", ""],
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
    gameboard.at(3, 5).add(ship2);
    expect(gameboard.board).toEqual([
      [ship1, ship1, ship1, ship1, ship1, "", "", "", "", ""],
      Array(10).fill(""),
      Array(10).fill(""),
      ["", "", "", "", "", ship2, ship2, "", "", ""],
      Array(10).fill(""),
      Array(10).fill(""),
      Array(10).fill(""),
      Array(10).fill(""),
      Array(10).fill(""),
      Array(10).fill(""),
    ]);
  });

  test("does not place ships if overlaps", () => {
    gameboard.at(0, 3).add(ship3);
    expect(gameboard.shipsArray).not.toContainEqual(ship3);
    expect(gameboard.board).toEqual([
      [ship1, ship1, ship1, ship1, ship1, "", "", "", "", ""],
      Array(10).fill(""),
      Array(10).fill(""),
      ["", "", "", "", "", ship2, ship2, "", "", ""],
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
      [ship1, ship1, ship1, ship1, ship1, "", "", "", "", "X"],
      Array(10).fill(""),
      Array(10).fill(""),
      ["X", "", "", "", "X", ship2, ship2, "", "", ""],
      Array(10).fill(""),
      Array(10).fill(""),
      Array(10).fill(""),
      Array(10).fill(""),
      Array(10).fill(""),
      Array(10).fill(""),
    ]);
  });

  test("calls hit method correctly if attack is on a ship", () => {
    gameboard.at(3, 6).receiveAttack();
    // expect(ship1.hit.mock.calls.length).toBe(0);
    // expect(ship2.hit.mock.calls.length).toBe(1);
    expect(ship3.hit.mock.calls.length).toBe(0);
    expect(ship2.shipArray).toEqual(["", "hit"]);
    expect(gameboard.board).toEqual([
      [ship1, ship1, ship1, ship1, ship1, "", "", "", "", "X"],
      Array(10).fill(""),
      Array(10).fill(""),
      ["X", "", "", "", "X", ship2, ship2, "", "", ""],
      Array(10).fill(""),
      Array(10).fill(""),
      Array(10).fill(""),
      Array(10).fill(""),
      Array(10).fill(""),
      Array(10).fill(""),
    ]);
    gameboard.at(0, 0).receiveAttack();
    // expect(ship1.name).toMatch(/firstShip/);
    expect(ship1.shipArray).toEqual(["hit", "", "", "", ""]);
  });
});
