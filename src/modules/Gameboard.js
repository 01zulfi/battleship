const Gameboard = () => {
  const board = Array(10)
    .fill("")
    .map((element) => Array(10).fill(element));

  const shipsArray = [];

  let latestAttackStatus = "";

  const checkIfShipCanBeAdded = (x, y, shipLength) => {
    const requiredSpace = [...board][x].slice(y, y + shipLength);
    return requiredSpace.every((element) => element === "");
  };

  const addShipInArray = (ship) => {
    shipsArray.push(ship);
  };

  const addShipOnBoard = (x, y, ship) => {
    board[x].fill(ship, y, y + ship.length);
  };

  const attackShip = (x, y) => {
    const ship = board[x][y];
    let hitPosition = 0;
    if (y < ship.length) {
      // ship touches left boundary
      hitPosition = y;
    } else {
      // ship has space from left boundary
      const targetArea = board[x].slice(0, y); // get left side from hit position
      // filter to get hit position
      const shipLeftSide = targetArea.filter(
        (element) => element.name === ship.name,
      );
      hitPosition = shipLeftSide.length;
    }
    if (ship.isHitAt(hitPosition)) {
      latestAttackStatus = "illegal";
      return;
    }
    ship.hit(hitPosition);
    latestAttackStatus = "success";
  };

  const at = (x, y) => {
    return {
      add(ship) {
        if (checkIfShipCanBeAdded(x, y, ship.length)) {
          addShipInArray(ship);
          addShipOnBoard(x, y, ship);
        }
      },
      receiveAttack() {
        if (typeof board[x][y] === "object") {
          attackShip(x, y);
          return;
        }
        if (board[x][y] === "X") {
          latestAttackStatus = "illegal";
          return;
        }
        board[x][y] = "X";
        latestAttackStatus = "success";
      },
    };
  };

  return {
    get board() {
      return [...board];
    },
    get shipsArray() {
      return [...shipsArray];
    },
    get latestAttackStatus() {
      return latestAttackStatus;
    },
    at,
  };
};

export default Gameboard;
