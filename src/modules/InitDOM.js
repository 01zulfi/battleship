import DOMFactory from "./DOMFactory";
import { player, computer } from "./Game";

const computerAttack = () => {
  const [x, y] = computer.attack(player).auto();
  const playerBoard = document.querySelector(".player-one-gameboard");
  const row = playerBoard.querySelector(`[data-rows="${x}"]`);
  const column = row.querySelector(`[data-columns="${y}"]`);
  column.classList.add("hit");
};

const sendAttackSignal = (event) => {
  if (
    !event.target.parentNode.parentNode.classList.contains(
      "player-two-gameboard",
    )
  ) {
    return;
  }
  event.target.classList.add("hit");
  const x = event.target.parentNode.getAttribute("data-rows");
  const y = event.target.getAttribute("data-columns");
  player.attack(computer).at(x, y);
  computerAttack();
  setTimeout(() => {
    if (player.fleet.areAllShipsSunk()) alert("computer won");
    if (computer.fleet.areAllShipsSunk()) alert("player won");
  }, 0);
};

const createGameboard = (name, p) => {
  const { board } = p.fleet;
  const grid = DOMFactory("div", { className: name });
  for (let i = 0; i < 10; i += 1) {
    const row = DOMFactory("div", { className: "rows", "data-rows": i });
    for (let j = 0; j < 10; j += 1) {
      const column = DOMFactory("div", {
        className: "columns",
        "data-columns": j,
      });
      if (typeof board[i][j] === "object") {
        column.classList.add("ship");
      }
      column.addEventListener("click", sendAttackSignal);
      row.append(column);
    }
    grid.append(row);
  }
  return grid;
};

const appendGameboards = () => {
  const gameboards = document.querySelector(".gameboards");
  gameboards.append(createGameboard("player-one-gameboard", player));
  gameboards.append(createGameboard("player-two-gameboard", computer));
};

export default appendGameboards;
