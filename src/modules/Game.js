import Ship from "./Ship";
import Gameboard from "./Gameboard";
import Player from "./Player";

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

addAllShips();

export default addAllShips;
export { player, computer };
