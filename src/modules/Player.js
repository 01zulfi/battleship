import Gameboard from "./Gameboard";

const Player = (name) => {
  const fleet = Gameboard();

  return {
    get name() {
      return name;
    },
    get fleet() {
      return fleet;
    },
    attack(enemy) {
      return {
        at(x, y) {
          enemy.fleet.at(x, y).receiveAttack(x, y);
        },
      };
    },
  };
};

export default Player;
