import Gameboard from "../modules/Gameboard";

describe("test Gameboard", () => {
  const gameboard = Gameboard();

  const ship1 = {
    name: "firstShip",
    length: 5,
    hit: jest.fn((position) => {
      ship1.shipArray[position] = "hit";
      return "Hit";
    }),
    shipArray: ["", "", "", "", ""],
    isHitAt: jest.fn((position) => {
      return [...ship1.shipArray][position] === "hit";
    }),
    isSunk: jest.fn(() =>
      [...ship1.shipArray].every((element) => element === "hit"),
    ),
  };

  const ship2 = {
    name: "secondShip",
    length: 2,
    hit: jest.fn((position) => {
      ship2.shipArray[position] = "hit";
      return "Hit";
    }),
    shipArray: ["", ""],
    isHitAt: jest.fn((position) => {
      return [...ship2.shipArray][position] === "hit";
    }),
    isSunk: jest.fn(() =>
      [...ship2.shipArray].every((element) => element === "hit"),
    ),
  };

  const ship3 = {
    name: "thirdShip",
    length: 2,
    hit: jest.fn(),
    shipArray: ["", ""],
    isSunk: jest.fn(() => true),
  };

  test("place ships on the board", () => {
    gameboard.at(0, 0).add(ship1);
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

  test("adds ships to ships array", () => {
    expect(gameboard.shipsArray).toContainEqual(ship1);
    expect(gameboard.shipsArray).toContainEqual(ship2);
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

  test("calls hit method if attack is on a ship", () => {
    gameboard.at(0, 0).receiveAttack();
    gameboard.at(0, 4).receiveAttack();
    gameboard.at(3, 6).receiveAttack();
    expect(ship1.hit.mock.calls.length).toBe(2);
    expect(ship2.hit.mock.calls.length).toBe(1);
    expect(gameboard.latestAttackStatus).toMatch(/success/);
  });

  test("calls hit method with correct argument", () => {
    expect(ship1.hit.mock.calls[0][0]).toBe(0);
    expect(ship1.hit.mock.calls[1][0]).toBe(4);
    expect(ship2.hit.mock.calls[0][0]).toBe(1);
  });

  test("returns 'illegal' for illegal attacks", () => {
    gameboard.at(0, 0).receiveAttack();
    const illegalOne = gameboard.latestAttackStatus;
    gameboard.at(3, 4).receiveAttack();
    const illegalTwo = gameboard.latestAttackStatus;
    expect(ship1.hit.mock.calls.length).toBe(2);
    expect(ship1.isHitAt.mock.calls.length).toBe(3);
    expect(illegalOne).toMatch(/illegal/);
    expect(illegalTwo).toMatch(/illegal/);
  });

  test("returns correct value if all ship sunk", () => {
    expect(gameboard.areAllShipsSunk()).toBe(false);
    gameboard.at(0, 1).receiveAttack();
    gameboard.at(0, 2).receiveAttack();
    gameboard.at(0, 3).receiveAttack();
    gameboard.at(3, 5).receiveAttack();
    expect(gameboard.areAllShipsSunk()).toBe(true);
  });
});
