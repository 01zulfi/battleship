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
    if (y < ship.length) {
      //  when ship touches the left boundary of board
      ship.hit(y);
    }
    const targetArea = board[x].slice(0, y); // get left side from hit position
    const shipLeftSide = targetArea.filter(
      // filter to get hit position
      (element) => element.name === ship.name,
    );
    ship.hit(shipLeftSide.length);
    // const targetArea = [...board[x]].slice(y - ship.length, y + ship.length);
    // const shipName = ship.name;
    // const shipMaxLength = 6;
    // let shipLengthLeftOfHit = 0;
    // for (let i = 0; i < shipMaxLength; i += 1) {
    //   const column = y - i;
    //   if (column < 0) break;
    //   if (board[x][column].name === shipName) shipLengthLeftOfHit += 1;
    // }
    // // const hitPosition = (() => {
    // //   if (shipLengthLeftOfHit === 0) return 0;
    // //   return shipLengthLeftOfHit + 1;
    // // })();
    // ship.hit(shipLengthLeftOfHit);
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
