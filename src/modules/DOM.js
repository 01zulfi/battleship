import DOMFactory from "./DOMFactory";
import pubsub from "./Pubsub";

const receiveComputerAttack = ([x, y]) => {
  const playerBoard = document.querySelector(".player-one-gameboard");
  const row = playerBoard.querySelector(`[data-rows="${x}"]`);
  const column = row.querySelector(`[data-columns="${y}"]`);
  column.classList.add("hit");
};

const sendPlayerAttack = (event) => {
  if (!event.target.classList.contains("columns")) return;
  event.target.classList.add("hit");
  const x = event.target.parentNode.getAttribute("data-rows");
  const y = event.target.getAttribute("data-columns");
  pubsub.publish("player-attack-ship", [x, y]);
};

const createGameboard = (name, board) => {
  const grid = DOMFactory("div", { className: name });
  for (let i = 0; i < 10; i += 1) {
    const row = DOMFactory("div", { className: "rows", "data-rows": i });
    for (let j = 0; j < 10; j += 1) {
      const column = DOMFactory("div", {
        className: "columns",
        "data-columns": j,
      });
      if (board.length !== 0 && typeof board[i][j] === "object") {
        column.classList.add("ship");
      }
      row.append(column);
    }
    grid.append(row);
  }
  if (name === "player-two-gameboard") {
    grid.addEventListener("click", sendPlayerAttack);
  }
  return grid;
};

const appendGameboards = ([playerBoard, computerBoard]) => {
  const gameboards = document.querySelector(".gameboards");
  gameboards.append(createGameboard("player-one-gameboard", playerBoard));
  gameboards.append(createGameboard("player-two-gameboard", computerBoard));
};

const showAlert = (victor) => {
  document
    .querySelector(".player-two-gameboard")
    .removeEventListener("click", sendPlayerAttack);
  alert(victor);
};

const renderInputModal = () => {
  const inputModalDiv = document.querySelector(".input-modal");
  const inputGrid = createGameboard("inputs-gameboard", []);
  inputModalDiv.append(inputGrid);
};

const inputShips = () => {
  const inputGrid = document.querySelector(".inputs-gameboard");
  const columns = [...inputGrid.querySelectorAll(".columns")];

  const mouseenterCallback = (event, length) => {
    const column = Number(event.target.getAttribute("data-columns"));
    const cells = [];
    for (let i = 0; i < length; i += 1) {
      const col = event.target.parentNode.querySelector(
        `[data-columns="${column + i}"]`,
      );
      cells.push(col);
    }
    if (cells.some((item) => item === null)) {
      event.target.classList.add("red");
      return;
    }
    if (cells.some((item) => item.classList.contains("clicked"))) {
      event.target.classList.add("red");
      return;
    }
    cells.forEach((item) => item.classList.add("hover"));
  };

  const mouseleaveCallback = (event, length) => {
    const column = Number(event.target.getAttribute("data-columns"));
    const cells = [];
    for (let i = 0; i < length; i += 1) {
      const col = event.target.parentNode.querySelector(
        `[data-columns="${column + i}"]`,
      );
      cells.push(col);
    }
    if (cells.some((item) => item === null)) {
      event.target.classList.remove("red");
      return;
    }
    if (cells.some((item) => item.classList.contains("clicked"))) {
      event.target.classList.remove("red");
    }
    cells.forEach((item) => item.classList.remove("hover"));
  };

  const clickCallback = (event, name) => {
    if (!event.target.classList.contains("columns")) return;
    if (!event.target.classList.contains("hover")) return;
    if (event.target.classList.contains("clicked")) return;
    const required = inputGrid.querySelectorAll(".columns.hover");
    required.forEach((item) => item.classList.add(name));
  };

  // const ships = [
  //   { name: "carrier", length: 5 },
  //   { name: "destroyer", length: 4 },
  //   { name: "cruiser", length: 3 },
  //   { name: "submarine", length: 3 },
  //   { name: "patrol", length: 2 },
  // ];

  columns.forEach((cell) =>
    cell.addEventListener("mouseenter", (event) => {
      mouseenterCallback(event, 5);
    }),
  );

  columns.forEach((cell) =>
    cell.addEventListener("mouseleave", (event) => {
      mouseleaveCallback(event, 5);
    }),
  );

  inputGrid.addEventListener("click", (event) => {
    clickCallback(event, "clicked");
  });
};

const DOMModuleObject = {
  execute() {
    renderInputModal();
    inputShips();
    pubsub.subscribe("fleets-initialized", appendGameboards);
    pubsub.subscribe("computer-attack-ship", receiveComputerAttack);
    pubsub.subscribe("game-end", showAlert);
  },
};

export default DOMModuleObject;
