import DOMFactory from "./DOMFactory";

const createGameboard = (name) => {
  const grid = DOMFactory("div", { className: name });
  for (let i = 0; i < 10; i += 1) {
    const row = DOMFactory("div", { className: "rows" });
    for (let j = 0; j < 10; j += 1) {
      const column = DOMFactory("div", { className: "columns" });
      row.append(column);
    }
    grid.append(row);
  }
  return grid;
};

const appendGameboards = () => {
  const gameboards = document.querySelector(".gameboards");
  gameboards.append(createGameboard("player-one-gameboard"));
  gameboards.append(createGameboard("player-two-gameboard"));
};

export default appendGameboards;
