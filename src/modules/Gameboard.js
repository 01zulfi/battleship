const Gameboard = () => {
  const board = Array(10)
    .fill("")
    .map((element) => Array(10).fill(element));

  const shipsArray = [];

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
    //  when ship touches the left boundary of board
    if (y < ship.length) {
      ship.hit(y);
      return;
    }
    // when ship has space from left boundary of board
    const targetArea = board[x].slice(0, y); // get left side from hit position
    const shipLeftSide = targetArea.filter(
      // filter to get hit position
      (element) => element.name === ship.name,
    );
    const hitPosition = shipLeftSide.length;
    ship.hit(hitPosition);
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
        if (board[x][y] !== "") {
          attackShip(x, y);
          return;
        }
        board[x][y] = "X";
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
    at,
  };
};

export default Gameboard;
