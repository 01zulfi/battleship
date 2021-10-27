import Ship from "./Ship";
import Gameboard from "./Gameboard";
import Player from "./Player";
import pubsub from "./Pubsub";

const player = Player("player", Gameboard());
const computer = Player("computer", Gameboard());

(() => {
  computer.autoAdd(Ship("carrier", 5));
  computer.autoAdd(Ship("destroyer", 4));
  computer.autoAdd(Ship("cruiser", 3));
  computer.autoAdd(Ship("submarine", 3));
  computer.autoAdd(Ship("patrol", 2));
})();

const addPlayerShips = (ships) => {
  for (const ship of ships) {
    player.fleet.at(ship.x, ship.y).add(Ship(ship.name, ship.length));
  }
  pubsub.publish("fleets-initialized", [
    player.fleet.board,
    computer.fleet.board,
  ]);
};

const computerAttackShip = () => {
  const [x1, y1] = computer.attack(player).auto();
  pubsub.publish("computer-attack-ship", [x1, y1]);
  if (player.fleet.areAllShipsSunk()) {
    pubsub.publish("game-end", "computer won");
  }
};

const playerAttackShip = ([x, y]) => {
  player.attack(computer).at(x, y);
  if (computer.fleet.areAllShipsSunk()) {
    pubsub.publish("game-end", "player won");
  }
  computerAttackShip();
};

const gameModuleObject = {
  execute() {
    pubsub.subscribe("input-ships", addPlayerShips);
    pubsub.subscribe("player-attack-ship", playerAttackShip);
  },
};

export default gameModuleObject;
