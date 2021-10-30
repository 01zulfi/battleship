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
  const playerOneSection = DOMFactory("div", { className: "player-section" });
  const playerOneHeader = DOMFactory("h2", {
    className: "player-header",
    textContent: "You",
  });
  const playerTwoSection = DOMFactory("div", { className: "player-section" });
  const playerTwoHeader = DOMFactory("h2", {
    className: "player-header",
    textContent: "Computer",
  });
  playerOneSection.append(
    playerOneHeader,
    createGameboard("player-one-gameboard", playerBoard),
  );
  playerTwoSection.append(
    playerTwoHeader,
    createGameboard("player-two-gameboard", computerBoard),
  );
  gameboards.append(playerOneSection);
  gameboards.append(playerTwoSection);
};

const renderInputModal = () => {
  const inputModalDiv = document.querySelector(".input-modal");
  const inputGrid = createGameboard("inputs-gameboard", []);
  inputModalDiv.insertBefore(inputGrid, document.querySelector(".ready"));
};

const inputShips = () => {
  const inputGrid = document.querySelector(".inputs-gameboard");
  const columns = [...inputGrid.querySelectorAll(".columns")];
  const rotate = document.querySelector(".rotate");
  let horizontal = true;
  let ships = [
    { name: "carrier", length: 5, added: false },
    { name: "destroyer", length: 4, added: false },
    { name: "cruiser", length: 3, added: false },
    { name: "submarine", length: 3, added: false },
    { name: "patrol", length: 2, added: false },
    { name: "scout", length: 1, added: false },
  ];

  const mouseenterCallbackHorizontal = (event) => {
    const column = Number(event.target.getAttribute("data-columns"));
    const cells = [];
    for (let i = 0; i < event.currentTarget.shipLength; i += 1) {
      const col = event.target.parentNode.querySelector(
        `[data-columns="${column + i}"]`,
      );
      cells.push(col);
    }
    if (cells.some((item) => item === null)) {
      event.target.classList.add("red");
      return;
    }
    if (cells.some((item) => item.classList.contains("ship"))) {
      event.target.classList.add("red");
      return;
    }
    cells.forEach((item) =>
      item.setAttribute("data-orientation", "horizontal"),
    );
    cells.forEach((item) => item.classList.add("hover"));
  };

  const mouseenterCallbackVertical = (event) => {
    const column = Number(event.target.getAttribute("data-columns"));
    const row = Number(event.target.parentNode.getAttribute("data-rows"));
    const grid = event.target.parentNode.parentNode;
    const cells = [];
    for (let i = 0; i < event.currentTarget.shipLength; i += 1) {
      const focusRow = grid.querySelector(`[data-rows="${row + i}"]`);
      if (!focusRow) break;
      cells.push(focusRow.querySelector(`[data-columns="${column}"]`));
    }
    if (cells.length < event.currentTarget.shipLength) {
      event.target.classList.add("red");
      return;
    }
    if (cells.some((item) => item.classList.contains("ship"))) {
      event.target.classList.add("red");
      return;
    }
    cells.forEach((item) => item.setAttribute("data-orientation", "vertical"));
    cells.forEach((item) => item.classList.add("hover"));
  };

  const mouseleaveCallback = (event) => {
    event.target.classList.remove("red");
    document
      .querySelectorAll(".columns")
      .forEach((item) => item.classList.remove("hover"));
  };

  const shipsReset = () => {
    ships = [
      { name: "carrier", length: 5, added: false },
      { name: "destroyer", length: 4, added: false },
      { name: "cruiser", length: 3, added: false },
      { name: "submarine", length: 3, added: false },
      { name: "patrol", length: 2, added: false },
      { name: "scout", length: 1, added: false },
    ];
  };

  const hideInputModal = () => {
    if (ships[0].x === undefined) return; // return when no ships entered
    const inputModal = document.querySelector(".input-modal");
    inputGrid.remove();
    inputModal.style.display = "none";
    pubsub.publish("input-ships", ships);
    shipsReset();
  };

  const activateReadyDiv = () => {
    const readyDiv = document.querySelector(".ready");
    readyDiv.classList.add("active");
    readyDiv.addEventListener("click", hideInputModal);
  };

  const clickCallback = (event) => {
    if (!event.target.classList.contains("columns")) return;
    if (event.target.classList.contains("red")) return;
    if (event.target.classList.contains("ship")) return;
    const shipToAdd = ships.find((ship) => !ship.added);
    if (!shipToAdd) return;
    if (shipToAdd.length === 1) {
      columns.forEach((cell) =>
        cell.removeEventListener("mouseenter", mouseenterCallbackHorizontal),
      );
      columns.forEach((cell) =>
        cell.removeEventListener("mouseenter", mouseenterCallbackVertical),
      );
      activateReadyDiv();
    }
    const shipToAddIndex = ships.indexOf(shipToAdd);
    shipToAdd.added = true;
    shipToAdd.x = Number(event.target.parentNode.getAttribute("data-rows"));
    shipToAdd.y = Number(event.target.getAttribute("data-columns"));
    shipToAdd.orientation = event.target.getAttribute("data-orientation");
    const required = inputGrid.querySelectorAll(".columns.hover");
    required.forEach((item) => item.classList.add("ship"));
    required.forEach((item) => item.classList.add(shipToAdd.name));
    const placeShipMessageDiv = document.querySelector(".place-ship-message");
    if (shipToAdd.length === 1) {
      placeShipMessageDiv.textContent =
        "All ships placed, move to battleground!";
    }
    if (!ships[shipToAddIndex + 1]) return;
    placeShipMessageDiv.textContent = `Place your ${
      ships[shipToAddIndex + 1].name
    }!`;
    columns.forEach(
      (cell) => (cell.shipLength = ships[shipToAddIndex + 1].length),
    );
  };

  columns.forEach((cell) => (cell.shipLength = 5));

  columns.forEach((cell) =>
    cell.addEventListener("mouseenter", mouseenterCallbackHorizontal),
  );

  columns.forEach((cell) =>
    cell.addEventListener("mouseleave", mouseleaveCallback),
  );

  inputGrid.addEventListener("click", clickCallback);

  rotate.addEventListener("click", () => {
    if (horizontal) {
      columns.forEach((cell) =>
        cell.removeEventListener("mouseenter", mouseenterCallbackHorizontal),
      );
      columns.forEach((cell) =>
        cell.addEventListener("mouseenter", mouseenterCallbackVertical),
      );
      horizontal = false;
    } else {
      columns.forEach((cell) =>
        cell.addEventListener("mouseenter", mouseenterCallbackHorizontal),
      );
      columns.forEach((cell) =>
        cell.removeEventListener("mouseenter", mouseenterCallbackVertical),
      );
      horizontal = true;
    }
  });
};

const removePlayerSections = () => {
  const playerSections = document.querySelectorAll(".player-section");
  playerSections.forEach((section) => section.remove());
};

const restartGame = () => {
  removePlayerSections();
  const gameEndModal = document.querySelector(".game-end-modal");
  gameEndModal.style.display = "none";
  const inputModal = document.querySelector(".input-modal");
  inputModal.style.display = "flex";
  renderInputModal();
  inputShips();
  const placeShipMessageDiv = document.querySelector(".place-ship-message");
  placeShipMessageDiv.textContent = "Place your carrier!";
  pubsub.publish("restart-game");
};

const openGameEndModal = (victor) => {
  const gameEndModal = document.querySelector(".game-end-modal");
  gameEndModal.style.display = "block";
  const text = document.querySelector(".game-end-modal .text");
  text.textContent = `${victor} won!`;
  const restart = document.querySelector(".game-end-modal .restart");
  restart.addEventListener("click", restartGame);
  const close = document.querySelector(".game-end-modal .close");
  close.addEventListener("click", () => {
    gameEndModal.style.display = "none";
  });
};

const showAlert = (victor) => {
  document
    .querySelector(".player-two-gameboard")
    .removeEventListener("click", sendPlayerAttack);
  openGameEndModal(victor);
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
