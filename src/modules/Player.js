const Player = (name, fleet) => {
  const hitPosition = { x: undefined, y: undefined };
  let targetArea = [];

  const useTargetArea = (target) => {
    if (target.length === 0) {
      hitPosition.x = undefined;
      hitPosition.y = undefined;
      return;
    }
    hitPosition.x = target[0].x;
    hitPosition.y = target[0].y;
    targetArea.splice(0, 1);
  };

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
          useTargetArea(targetArea);

          const x = (() => {
            if (hitPosition.x === undefined) {
              return Math.floor(Math.random() * 10);
            }
            return hitPosition.x;
          })();
          const y = (() => {
            if (hitPosition.y === undefined) {
              return Math.floor(Math.random() * 10);
            }
            return hitPosition.y;
          })();

          enemy.fleet.at(x, y).receiveAttack(x, y);

          if (enemy.fleet.latestAttackStatus === "illegal") {
            return this.auto();
          }

          if (enemy.fleet.latestAttackStatus === "success/hit") {
            targetArea = [];
            if (y + 1 <= 9) {
              targetArea.push({ x, y: y + 1 });
            }
            if (y - 1 >= 0) {
              targetArea.push({ x, y: y - 1 });
            }
            if (x + 1 <= 9) {
              targetArea.push({ x: x + 1, y });
            }
            if (x - 1 >= 0) {
              targetArea.push({ x: x - 1, y });
            }
          }

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
