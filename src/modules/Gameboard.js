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
    board[x].fill(ship.name, y, y + ship.length);
  };
  const attackShip = (x, y) => {
    // const shipName = board[x][y].name;
    // let left = 0;
    // for (let i = 0; i < 5; i++) {
    //   if (board[x][y + i] === shipName) left++;
    // }
    //  shipName.hit(left + 1)
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
