const Player = (name, fleet) => {
  const hitPosition = { x: undefined, y: undefined };
  const recordLatestAttackStatus = [];
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
          const x = hitPosition.x || Math.floor(Math.random() * 10);
          const y = hitPosition.y || Math.floor(Math.random() * 10);

          enemy.fleet.at(x, y).receiveAttack(x, y);

          if (enemy.fleet.latestAttackStatus === "illegal") {
            return this.auto();
          }

          recordLatestAttackStatus.push(enemy.fleet.latestAttackStatus);

          if (enemy.fleet.latestAttackStatus === "success/miss") {
            hitPosition.x = undefined;
            hitPosition.y = undefined;
          } else if (
            recordLatestAttackStatus[recordLatestAttackStatus.length - 1] ===
            "success/hit"
          ) {
            hitPosition.x = x;
            hitPosition.y = y + 1;
          } else if (
            recordLatestAttackStatus[recordLatestAttackStatus.length - 2] ===
            "success/hit"
          ) {
            hitPosition.x = x;
            hitPosition.y = y - 1;
          } else if (
            recordLatestAttackStatus[recordLatestAttackStatus.length - 3] ===
            "success/hit"
          ) {
            hitPosition.x = x + 1;
            hitPosition.y = y;
          } else if (
            recordLatestAttackStatus[recordLatestAttackStatus.length - 4] ===
            "success/hit"
          ) {
            hitPosition.x = x - 1;
            hitPosition.y = y;
          }

          if (recordLatestAttackStatus.length > 4) {
            recordLatestAttackStatus.splice(0);
            hitPosition.x = undefined;
            hitPosition.y = undefined;
          }

          console.log(recordLatestAttackStatus);
          console.log(hitPosition);
          console.log(x, y);
          return [x, y];
        },
      };
    },
    autoAdd(ship) {
      const x = Math.floor(Math.random() * 10);
      const y = Math.floor(Math.random() * 10);
      const orientations = ["horizontal", "vertical"];
      const orientation = orientations[Math.floor(Math.random() * 2)];

      fleet.at(x, y).add(ship, orientation);

      if (!fleet.shipsArray.includes(ship)) {
        this.autoAdd(ship);
      }
    },
  };
};

export default Player;
