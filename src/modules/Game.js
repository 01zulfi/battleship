import Ship from "./Ship";
import Gameboard from "./Gameboard";
import Player from "./Player";
import pubsub from "./Pubsub";

let player = Player("player", Gameboard());
let computer = Player("computer", Gameboard());

const addShips = (ships) => {
  for (const ship of ships) {
    player.fleet
      .at(ship.x, ship.y)
      .add(Ship(ship.name, ship.length), ship.orientation);
    computer.autoAdd(Ship(ship.name, ship.length));
  }
  pubsub.publish("fleets-initialized", [
    player.fleet.board,
    computer.fleet.board,
  ]);
};

const computerAttackShip = () => {
  const [x, y] = computer.attack(player).auto();
  pubsub.publish("computer-attack-ship", [x, y]);
  if (player.fleet.areAllShipsSunk()) {
    pubsub.publish("game-end", "Computer");
  }
};

const playerAttackShip = ([x, y]) => {
  player.attack(computer).at(x, y);
  if (computer.fleet.areAllShipsSunk()) {
    pubsub.publish("game-end", "You");
  }
  computerAttackShip();
};

const restartGame = () => {
  player = null;
  computer = null;
  player = Player("player", Gameboard());
  computer = Player("computer", Gameboard());
};

const gameModuleObject = {
  execute() {
    pubsub.subscribe("input-ships", addShips);
    pubsub.subscribe("player-attack-ship", playerAttackShip);
    pubsub.subscribe("restart-game", restartGame);
  },
};

export default gameModuleObject;
