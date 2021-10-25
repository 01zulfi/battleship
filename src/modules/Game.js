import Ship from "./Ship";
import Gameboard from "./Gameboard";
import Player from "./Player";
import pubsub from "./Pubsub";

const player = Player("player", Gameboard());
const computer = Player("computer", Gameboard());

const addPlayerShips = () => {
  player.fleet.at(0, 0).add(Ship("carrier", 5));
  player.fleet.at(2, 5).add(Ship("destroyer", 4));
  player.fleet.at(6, 2).add(Ship("cruiser", 3));
  player.fleet.at(4, 4).add(Ship("submarine", 3));
  player.fleet.at(9, 7).add(Ship("patrol", 2));
};

const addComputerShips = () => {
  computer.autoAdd(Ship("carrier", 5));
  computer.autoAdd(Ship("destroyer", 4));
  computer.autoAdd(Ship("cruiser", 3));
  computer.autoAdd(Ship("submarine", 3));
  computer.autoAdd(Ship("patrol", 2));
};

const addAllShips = () => {
  addPlayerShips();
  addComputerShips();
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
    addAllShips();
    pubsub.publish("fleets-initialized", [
      player.fleet.board,
      computer.fleet.board,
    ]);
    pubsub.subscribe("player-attack-ship", playerAttackShip);
  },
};

export default gameModuleObject;
