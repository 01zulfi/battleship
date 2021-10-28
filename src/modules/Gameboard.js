const Gameboard = () => {
  const board = Array(10)
    .fill("")
    .map((element) => Array(10).fill(element));

  const shipsArray = [];

  let latestAttackStatus = "";

  const checkIfShipCanBeAdded = (x, y, orientation, shipLength) => {
    if (orientation === "horizontal") {
      const requiredSpace = [...board][x].slice(y, y + shipLength);
      if (requiredSpace.length !== shipLength) return false;
      return requiredSpace.every((element) => element === "");
    }
    if (orientation === "vertical") {
      const requiredSpace = [];
      for (let i = 0; i <= 9 - x; i += 1) {
        requiredSpace.push(board[x + i][y]);
      }
      if (requiredSpace.length < shipLength) return false;
      return requiredSpace.every((element) => element === "");
    }

    return "";
  };

  const addShipInArray = (ship) => {
    shipsArray.push(ship);
  };

  const addShipOnBoard = (x, y, orientation, ship) => {
    if (orientation === "horizontal") {
      board[x].fill(ship, y, y + ship.length);
    }
    if (orientation === "vertical") {
      for (let i = x; i < ship.length + x; i += 1) {
        board[i][y] = ship;
      }
    }
  };

  const attackShip = (x, y) => {
    const ship = board[x][y];
    let hitPosition = 0;
    // get left of gameboard from hit position
    const targetAreaHorizontal = board[x].slice(0, y);
    // filter to get left of ship from hit position
    const shipLeftSide = targetAreaHorizontal.filter(
      (element) => element.name === ship.name,
    );
    const targetAreaVertical = [];
    // get upper of gameboard from hit position
    for (let i = 0; i < x; i += 1) {
      targetAreaVertical.push(board[i][y]);
    }
    // filter to get upper of ship from hit position
    const shipUpperSide = targetAreaVertical.filter(
      (element) => element.name === ship.name,
    );

    hitPosition = (() => {
      if (shipLeftSide.length === 0 && shipUpperSide.length === 0) return 0;
      if (shipLeftSide.length === 0 && shipUpperSide.length !== 0) {
        return shipUpperSide.length;
      }
      return shipLeftSide.length;
    })();

    if (ship.isHitAt(hitPosition)) {
      latestAttackStatus = "illegal";
      return;
    }

    ship.hit(hitPosition);
    latestAttackStatus = "success";
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
    at(x, y) {
      return {
        add(ship, orientation) {
          if (checkIfShipCanBeAdded(x, y, orientation, ship.length)) {
            addShipInArray(ship);
            addShipOnBoard(x, y, orientation, ship);
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
    },
    areAllShipsSunk() {
      return [...shipsArray].every((ship) => ship.isSunk());
    },
  };
};

export default Gameboard;
