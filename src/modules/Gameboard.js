const Gameboard = () => {
  const gameboardArray = Array(10).fill(Array(10).fill(""));
  let shipsOnTheBoard = [];
  const add = (ship) => {
    shipsOnTheBoard = [...shipsOnTheBoard, ship];
    return {
      at(x, y) {
        const column = gameboardArray[x].slice();
        column.fill(ship.name, y, y + ship.length);
        gameboardArray[x] = column;
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
