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
        auto() {
          const x = Math.floor(Math.random() * 10);
          const y = Math.floor(Math.random() * 10);

          enemy.fleet.at(x, y).receiveAttack(x, y);

          if (enemy.fleet.latestAttackStatus === "illegal") {
            this.auto();
          }
        },
      };
    },
  };
};

export default Player;
