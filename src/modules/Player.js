const Player = (name, fleet) => {
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
            return this.auto();
          }
          return [x, y];
        },
      };
    },
    autoAdd(ship) {
      const x = Math.floor(Math.random() * 10);
      const y = Math.floor(Math.random() * 10);
      fleet.at(x, y).add(ship);

      if (!fleet.shipsArray.includes(ship)) {
        this.autoAdd(ship);
      }
    },
  };
};

export default Player;
