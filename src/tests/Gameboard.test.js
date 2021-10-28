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
    hit: jest.fn((position) => {
      ship3.shipArray[position] = "hit";
      return "Hit";
    }),
    shipArray: ["", ""],
    isHitAt: jest.fn((position) => {
      return [...ship3.shipArray][position] === "hit";
    }),
    isSunk: jest.fn(() =>
      [...ship3.shipArray].every((element) => element === "hit"),
    ),
  };

  test("place ships on the board", () => {
    gameboard.at(0, 0).add(ship1, "horizontal");
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

    gameboard.at(3, 5).add(ship2, "horizontal");
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

  test("place ships on board vertically", () => {
    const newBoard = Gameboard();
    newBoard.at(0, 0).add(ship1, "vertical");
    expect(newBoard.board).toEqual([
      [ship1, "", "", "", "", "", "", "", "", ""],
      [ship1, "", "", "", "", "", "", "", "", ""],
      [ship1, "", "", "", "", "", "", "", "", ""],
      [ship1, "", "", "", "", "", "", "", "", ""],
      [ship1, "", "", "", "", "", "", "", "", ""],
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
    gameboard.at(0, 3).add(ship3, "horizontal");
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

    gameboard.at(0, 3).add(ship3, "vertical");
    expect(gameboard.shipsArray).not.toContainEqual(ship3);
    expect(gameboard.board).toEqual([
      [ship1, ship1, ship1, ship1, ship1, "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
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
      ["", "", "", "", "", "", "", "", "", ""],
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
    gameboard.at(0, 5).receiveAttack();
    gameboard.at(1, 5).receiveAttack();
    expect(gameboard.areAllShipsSunk()).toBe(true);
  });
});

describe("test vertical", () => {
  test("check", () => {
    const ship = {
      name: "ship",
      length: 5,
      hit: jest.fn((position) => {
        ship.shipArray[position] = "hit";
      }),
      shipArray: ["", "", "", "", ""],
      isHitAt: jest.fn((position) => {
        return [...ship.shipArray][position] === "hit";
      }),
      isSunk: jest.fn(() =>
        [...ship.shipArray].every((element) => element === "hit"),
      ),
    };
    const gameboard = Gameboard();
    gameboard.at(9, 4).add(ship, "vertical");
    expect(gameboard.shipsArray.length).toBe(0);
    gameboard.at(3, 9).add(ship, "vertical");
    expect(gameboard.shipsArray).toContainEqual(ship);
    expect(gameboard.board).toEqual([
      Array(10).fill(""),
      Array(10).fill(""),
      Array(10).fill(""),
      ["", "", "", "", "", "", "", "", "", ship],
      ["", "", "", "", "", "", "", "", "", ship],
      ["", "", "", "", "", "", "", "", "", ship],
      ["", "", "", "", "", "", "", "", "", ship],
      ["", "", "", "", "", "", "", "", "", ship],
      Array(10).fill(""),
      Array(10).fill(""),
    ]);
    gameboard.at(4, 9).receiveAttack();
    expect(gameboard.latestAttackStatus).toMatch(/success/);
    expect(ship.hit.mock.calls.length).toBe(1);
    expect(ship.hit.mock.calls[0][0]).toBe(1);
    expect(gameboard.shipsArray[0].isHitAt(1)).toBe(true);
    gameboard.at(3, 9).receiveAttack();
    gameboard.at(5, 9).receiveAttack();
    gameboard.at(6, 9).receiveAttack();
    gameboard.at(7, 9).receiveAttack();
    expect(ship.hit.mock.calls.length).toBe(5);
    expect(ship.isSunk()).toBe(true);
    expect(gameboard.areAllShipsSunk());
  });
});
