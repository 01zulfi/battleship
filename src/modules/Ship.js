const Ship = (length) => {
  let shipArray = Array(length).fill("live");
  const hit = (position) => {
    shipArray = shipArray.map((element, index) => {
      return index !== position ? element : "dead";
    });
  };
  const isSunk = () => {
    if ([...shipArray].indexOf("live") !== -1) return false;
    return true;
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
