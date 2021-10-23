const Ship = (name, length) => {
  let shipArray = Array(length).fill("");

  const hit = (position) => {
    shipArray = [...shipArray].map((element, index) => {
      return index === position ? "hit" : element;
    });
  };

  const isHitAt = (position) => {
    return [...shipArray][position] === "hit";
  };

  const isSunk = () => {
    return [...shipArray].every((element) => element === "hit");
  };

  return {
    get name() {
      return name;
    },
    get length() {
      return length;
    },
    get shipArray() {
      return [...shipArray];
    },
    hit,
    isHitAt,
    isSunk,
  };
};

export default Ship;
