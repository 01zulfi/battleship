const Gameboard = () => {
  const gameboardArray = Array(10).fill(Array(10).fill(""));
  let shipsOnTheBoard = [];
  const checkIfShipPresent = (x, y, shipLength) => {
    const requiredArray = [...gameboardArray[x]].slice(y, y + shipLength);
    return [...requiredArray].some((element) => element !== "");
  };
  const removeShipFromBoard = (ship) => {
    shipsOnTheBoard = [...shipsOnTheBoard].filter(
      (element) => element !== ship,
    );
  };
  const add = (ship) => {
    shipsOnTheBoard = [...shipsOnTheBoard, ship];
    return {
      at(x, y) {
        if (checkIfShipPresent(x, y, ship.length)) {
          removeShipFromBoard(ship);
          return;
        }
        const column = [...gameboardArray[x]];
        column.fill(ship.name, y, y + ship.length);
        gameboardArray[x] = [...column];
      },
    };
  };
  return {
    get gameboardArray() {
      return [...gameboardArray];
    },
    get shipsOnTheBoard() {
      return [...shipsOnTheBoard];
    },
    add,
  };
};

export default Gameboard;
