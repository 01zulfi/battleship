import Player from "../modules/Player";

describe("test player", () => {
  const player = Player("player");
  const computer = Player("computer");

  test("returns correct player name", () => {
    expect(player.name).toMatch(/player/);
    expect(computer.name).toMatch(/computer/);
  });
});
