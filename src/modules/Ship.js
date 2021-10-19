const Ship = (length) => {
  let shipArray = Array(length).fill("");
  const hit = (position) => {
    shipArray = [...shipArray].map((element, index) => {
      return index === position ? "hit" : element;
    });
  };
  const isSunk = () => {
    return [...shipArray].every((element) => element === "hit");
  };
  return {
    get length() {
      return length;
    },
    get shipArray() {
      return [...shipArray];
    },
    hit,
    isSunk,
  };
};

export default Ship;
