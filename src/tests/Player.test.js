import Player from "../modules/Player";

describe("test player", () => {
  const player = Player("player");
  const computer = Player("computer");

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
    length: 5,
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
    length: 5,
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

  player.fleet.at(0, 0).add(ship1);
  player.fleet.at(3, 2).add(ship2);
  computer.fleet.at(0, 0).add(ship3);

  test("returns correct player name", () => {
    expect(player.name).toMatch(/player/);
    expect(computer.name).toMatch(/computer/);
  });

  test("creates gameboards", () => {
    expect(player).toHaveProperty("fleet");
    expect(computer).toHaveProperty("fleet");
  });

  test("can attack each other", () => {
    player.attack(computer).at(0, 3);
    expect(computer.fleet.shipsArray[0].isHitAt(3)).toBe(true);

    computer.attack(player).at(3, 2);
    computer.attack(player).at(3, 3);
    computer.attack(player).at(3, 4);
    computer.attack(player).at(3, 5);
    computer.attack(player).at(3, 6);
    expect(player.fleet.shipsArray[1].isHitAt(2)).toBe(true);
    expect(player.fleet.shipsArray[1].isHitAt(4)).toBe(true);
    expect(player.fleet.shipsArray[1].isSunk()).toBe(true);

    computer.attack(player).at(0, 1);
    expect(player.fleet.shipsArray[0].shipArray[1]).toMatch(/hit/);
  });
});

test.only("computer can autoplay correctly", () => {
  const player = Player("player");
  const computer = Player("computer");

  computer.attack(player).auto();
  computer.attack(player).auto();

  const hits = [];

  for (let i = 0; i < 10; i += 1) {
    hits.push(...player.fleet.board[i].filter((element) => element === "X"));
  }

  expect(hits.length).toBe(2);
});
